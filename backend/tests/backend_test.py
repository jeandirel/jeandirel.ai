"""Backend API tests for Jean Direl personal website.

Covers:
- /api/health
- /api/contact (POST validation + GET list)
- /api/booking (POST validation + GET list)
- /api/newsletter (POST + duplicate 409)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # fall back to reading frontend/.env directly so tests can run in CI
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break

BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_Contact User",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "message": "Hello, this is a test contact message with enough length.",
            "inquiry_type": "consulting",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["email"] == payload["email"]
        assert data["name"] == payload["name"]
        assert data["inquiry_type"] == "consulting"

    def test_create_contact_invalid_email(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "Long enough message text here.",
            "inquiry_type": "other",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_short_message(self, client):
        payload = {
            "name": "TEST_Short",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "message": "short",
            "inquiry_type": "other",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_list_contacts(self, client):
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # at least the one we created should exist
        assert len(data) >= 1


# ---------- Booking ----------
class TestBooking:
    def test_create_booking_valid(self, client):
        payload = {
            "name": "TEST_Booking User",
            "email": f"book_{uuid.uuid4().hex[:8]}@example.com",
            "purpose": "Discuss a RAG project",
        }
        r = client.post(f"{API}/booking", json=payload, timeout=15)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data
        assert data["purpose"] == payload["purpose"]
        assert data.get("status") == "pending"

    def test_create_booking_missing_required(self, client):
        # missing 'purpose'
        payload = {
            "name": "TEST_Missing",
            "email": f"book_{uuid.uuid4().hex[:8]}@example.com",
        }
        r = client.post(f"{API}/booking", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_list_bookings(self, client):
        r = client.get(f"{API}/booking", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 1


# ---------- Newsletter ----------
class TestNewsletter:
    def test_subscribe_and_duplicate(self, client):
        email = f"news_{uuid.uuid4().hex[:8]}@example.com"
        r1 = client.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r1.status_code == 201, r1.text
        data = r1.json()
        assert data["email"] == email
        assert "id" in data

        # duplicate -> 409
        r2 = client.post(f"{API}/newsletter", json={"email": email}, timeout=15)
        assert r2.status_code == 409, r2.text
