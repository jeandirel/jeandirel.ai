from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Jean Direl - Personal Website API")
api_router = APIRouter(prefix="/api")


# ============ Models ============
class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=160)
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)
    inquiry_type: Optional[str] = Field(None, max_length=80)  # freelance | consulting | recruiting | research | other


class ContactMessage(ContactMessageCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BookingRequestCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=160)
    purpose: str = Field(..., min_length=3, max_length=200)
    preferred_date: Optional[str] = Field(None, max_length=80)
    notes: Optional[str] = Field(None, max_length=2000)


class BookingRequest(BookingRequestCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"


class NewsletterSubscribeCreate(BaseModel):
    email: EmailStr
    locale: Optional[str] = "en"


class NewsletterSubscribe(NewsletterSubscribeCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"message": "Jean Direl - Personal Website API", "status": "online"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "jean-direl-api"}


@api_router.post("/contact", response_model=ContactMessage, status_code=201)
async def create_contact_message(payload: ContactMessageCreate):
    obj = ContactMessage(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    logger.info(f"New contact message from {obj.email} | type={obj.inquiry_type}")
    return obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    items = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except ValueError:
                pass
    return items


@api_router.post("/booking", response_model=BookingRequest, status_code=201)
async def create_booking_request(payload: BookingRequestCreate):
    obj = BookingRequest(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.booking_requests.insert_one(doc)
    logger.info(f"New booking request from {obj.email} for {obj.purpose}")
    return obj


@api_router.get("/booking", response_model=List[BookingRequest])
async def list_booking_requests():
    items = await db.booking_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except ValueError:
                pass
    return items


@api_router.post("/newsletter", response_model=NewsletterSubscribe, status_code=201)
async def newsletter_subscribe(payload: NewsletterSubscribeCreate):
    existing = await db.newsletter_subs.find_one({"email": payload.email})
    if existing:
        raise HTTPException(status_code=409, detail="Email already subscribed")
    obj = NewsletterSubscribe(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter_subs.insert_one(doc)
    return obj


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
