# PRD — Jean Direl NZE · Personal Website

**Owner:** Jean Direl NZE
**Created:** 2026-06-06
**Status:** MVP shipped · iteration_1 100% pass

## 1. Original Problem Statement
Premium professional international personal website for Jean Direl NZE, AI Engineer
specialized in ML, GenAI, RAG, AI Agents and MLOps. Goals: attract international freelance
missions, allow appointment booking, valorize AI projects + research, prepare job search
horizon November 2026 and CIFRE PhD opportunities.

## 2. Audience
International recruiters, CTOs, AI Managers, research lab directors, innovation leads,
startups and enterprise clients.

## 3. Design Direction (user choices)
- Modern Tech Executive — Dark mode first
- References: OpenAI, Anthropic, Mistral, Perplexity, Karpathy
- Palette: #0B0F19 / #111827 background · #00D4FF cyan · #7C3AED violet accents
- Fonts: Cabinet Grotesk (display) + Inter (body) + JetBrains Mono (code)
- Bilingual EN (default) / FR
- Avoid: flashy colors, excessive animations, gadget startup style

## 4. Architecture
- Backend: FastAPI + MongoDB (motor)
  - POST/GET `/api/contact` — contact form submissions
  - POST/GET `/api/booking` — booking request submissions
  - POST `/api/newsletter` — newsletter subscriptions (dedup 409)
  - GET `/api/health`
- Frontend: React 19 + Tailwind + Framer Motion + Sonner
  - LanguageContext (EN/FR, localStorage persistence)
  - Single-page scroll with sticky nav
  - All sections instrumented with data-testid

## 5. Sections Built
- Hero (status pill, dual CTA, stats strip, portrait)
- About (3-paragraph bio + availability + CV/contact CTAs)
- Projects (6 bento cards: Oxypharm RAG, Email Classifier, Kijani, Ogooué AI, CA LLM, Substrate IoT)
- Experience (5 entries: CERP/ASTERA, COMPETITIVIA, PicturifyAI, Substrate AI, Airtel)
- Skills (8 groups + 7 certifications)
- Research (Research Square paper card + CIFRE PhD card + 9 interests)
- Services (6 service offerings)
- Testimonials (Myriana Laurent, Tayane Lesty)
- Booking (Calendly iframe + alt request form)
- Contact (inquiry type selector + form storing to MongoDB)
- Footer (social links + sitemap + back-to-top)

## 6. Integrations
- ✅ Calendly iframe embed (placeholder URL — replace in `/app/frontend/src/data/profile.js`)
- ✅ LinkedIn / GitHub external links
- ✅ Contact form → MongoDB
- ✅ Booking form → MongoDB
- ✅ Google Analytics placeholder script (replace GA_MEASUREMENT_ID in index.html)
- ✅ Google Search Console meta tag placeholder
- ⏳ Email notifications (Resend/SendGrid) — DEFERRED for next iteration
- ⏳ Blog section — DEFERRED
- ⏳ Newsletter UI — backend ready, frontend deferred

## 7. What's Working
- Full bilingual EN/FR with persistent toggle
- All 10 sections rendering cleanly on desktop + mobile
- Contact + Booking submissions persist to MongoDB
- All data-testid attributes in place
- SEO meta tags, Open Graph, JetBrains Mono / Inter / Cabinet Grotesk loaded
- 100% pass on backend (9 tests) + frontend (Playwright E2E) — iteration_1

## 8. P1 Backlog (next sprint)
- Replace Calendly placeholder URL with real one
- Upload CV PDFs at `/cv/Jean_Direl_AI_Engineer_Resume_EN.pdf` + FR
- Email notifications on contact/booking via Resend
- Real GA_MEASUREMENT_ID and GSC token
- Real LinkedIn URL + GitHub URL in profile.js

## 9. P2 Backlog
- Blog / Articles section
- Newsletter signup widget in footer
- Admin dashboard to view contact/booking submissions
- Real portrait photo upload
- Project case-study pages (deep dives)
- Schema.org Person + JSON-LD structured data
- Open Graph image generation

## 10. Test Credentials
None required (public site).
