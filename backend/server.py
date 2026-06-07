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
import anthropic


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


class ChatMessage(BaseModel):
    message: str = Field(..., max_length=1000)
    history: Optional[list] = None


class ChatResponse(BaseModel):
    reply: str
    error: Optional[str] = None


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


JEAN_SYSTEM_PROMPT = """You are Jean Direl's AI assistant on his personal portfolio website. Answer questions about Jean as if you know him well. Be concise, professional, and helpful. Always respond in the same language as the question (French or English).

About Jean Direl:
- AI Engineer at CERP (ASTERA Group), Rouen, France
- Specializes in: RAG systems, AI Agents, NLP/CamemBERT, MLOps, LLMs
- Currently building: DNSI AI Assistant (RAG over 30GB enterprise data), IT Incident Email Classifier (CamemBERT)
- Founder of Ogooué AI (AI for African enterprises) and co-founder of Kijani (AI waste management)
- Published research: "Bounded-Autonomy LLM Agents" on Research Square (May 2026)
- Education: aivancity Grande École (rank #1), Berkeley AI Product Engineering certificate
- Stack: Python, FastAPI, Docker, Kubernetes, Azure ML, MLflow, ChromaDB, Mistral, GPT-4, Claude
- Available for: international freelance, AI consulting, CIFRE PhD, full-time roles from November 2026
- Services: Enterprise RAG systems, AI Agents, NLP classification, MLOps deployment, AI strategy/audit, Applied AI research
- Contact: jeandirel@ogooueia.com
- Location: Rouen, Normandy, France (open to remote/international)

Keep answers under 3 sentences unless more detail is specifically requested. Don't make up facts beyond what's listed. If asked something you don't know, suggest contacting Jean directly."""


@api_router.post("/chat", response_model=ChatResponse)
async def chat(payload: ChatMessage):
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        return ChatResponse(reply="Service temporarily unavailable. Please contact Jean directly at jeandirel@ogooueia.com.")

    try:
        anthropic_client = anthropic.Anthropic(api_key=api_key)
        response = anthropic_client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=400,
            system=JEAN_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": payload.message}],
        )
        reply_text = response.content[0].text
        return ChatResponse(reply=reply_text)
    except Exception as exc:
        logger.error(f"Chat endpoint error: {exc}")
        return ChatResponse(
            reply="Sorry, I encountered an error. Please try again or contact Jean directly at jeandirel@ogooueia.com.",
            error=str(exc),
        )


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
