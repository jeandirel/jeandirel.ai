// Centralized profile data — Jean Direl NZE
// Used across all sections of the website.

export const PROFILE = {
  name: "Jean Direl NZE",
  shortName: "Jean Direl",
  title: {
    en: "AI Engineer · ML · GenAI · MLOps",
    fr: "Ingénieur IA · ML · GenAI · MLOps",
  },
  location: "Rouen, Normandy · France",
  email: "jeandirel@ogooueia.com",
  emailPersonal: "jedirkab70@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jean-direl/",
    github: "https://github.com/",
    researchSquare:
      "https://doi.org/10.21203/rs.3.rs-9829773/v1",
    calendly: "https://calendly.com/jeandirel-nze/30min", // placeholder — replace with real Calendly
    cvEn: "/cv/Jean_Direl_AI_Engineer_Resume_EN.pdf",
    cvFr: "/cv/Jean_Direl_CV_IA_FR.pdf",
  },
  images: {
    portrait:
      "https://customer-assets.emergentagent.com/job_jean-mlops-labs/artifacts/medft84m_JeanDirelPhotoGoogle.PNG",
    ragAbstract:
      "https://images.pexels.com/photos/25626448/pexels-photo-25626448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cloud:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHxzZXJ2ZXIlMjByYWNrJTIwY2xvdWQlMjBjb21wdXRpbmclMjBtaW5pbWFsJTIwZGFya3xlbnwwfHx8fDE3ODA3NDUxMjJ8MA&ixlib=rb-4.1.0&q=85",
    neural:
      "https://images.unsplash.com/photo-1534156039819-c89418369a4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwbWluaW1hbCUyMGRhcmt8ZW58MHx8fHwxNzgwNzQ1MTIyfDA&ixlib=rb-4.1.0&q=85",
  },
};

export const PROJECTS = [
  {
    id: "rag-oxypharm",
    image: "ragAbstract",
    tags: ["RAG", "Mistral", "ChromaDB", "FastAPI", "OCR", "K8s"],
    year: "2024 — Present",
    company: "CERP · ASTERA Group",
    title: {
      en: "Oxypharm RAG Assistant",
      fr: "Assistant RAG Oxypharm",
    },
    summary: {
      en: "Enterprise RAG chatbot that lets internal teams query Oxypharm's operational documents in natural French — OCR ingestion, multilingual-e5 embeddings, ChromaDB, Mistral LLM, deployed via FastAPI on Kubernetes.",
      fr: "Chatbot RAG d'entreprise permettant d'interroger les documents opérationnels d'Oxypharm en langage naturel — OCR, embeddings multilingual-e5, ChromaDB, LLM Mistral, déployé via FastAPI sur Kubernetes.",
    },
    impact: {
      en: "First internal RAG system at ASTERA Group — drastic reduction in documentation search time.",
      fr: "Premier système RAG interne au Groupe ASTERA — réduction drastique du temps de recherche documentaire.",
    },
  },
  {
    id: "email-classifier",
    image: "neural",
    tags: ["CamemBERT", "NLP", "Hierarchical", "Freshservice", "FastAPI"],
    year: "2024 — Present",
    company: "CERP · ASTERA Group",
    title: {
      en: "Intelligent IT Incident Email Classifier",
      fr: "Tri intelligent d'e-mails d'incidents IT",
    },
    summary: {
      en: "Fine-tuned CamemBERT model performing 3-level hierarchical classification of French IT support emails — auto-creates Freshservice tickets with correct metadata via REST integration.",
      fr: "Modèle CamemBERT fine-tuné effectuant une classification hiérarchique à 3 niveaux des e-mails de support IT — création automatique de tickets Freshservice avec les bonnes métadonnées via REST.",
    },
    impact: {
      en: "Eliminates manual triage. Three architectures compared (flat / conditional / multi-head).",
      fr: "Élimine le tri manuel. Trois architectures comparées (plate / conditionnelle / multi-head).",
    },
  },
  {
    id: "kijani",
    image: "neural",
    tags: ["Computer Vision", "Mobile", "Offline", "Multilingual"],
    year: "2026 — Present",
    company: "Founder · Kijani",
    title: {
      en: "Kijani — AI Waste Intelligence Platform",
      fr: "Kijani — Plateforme IA de tri intelligent",
    },
    summary: {
      en: "Mobile-first AI platform for waste sorting in African cities — visual recognition, recyclability scoring, collaborative mapping, voice assistance in local languages, fully offline-capable.",
      fr: "Plateforme mobile IA pour le tri des déchets dans les villes africaines — reconnaissance visuelle, score de recyclabilité, cartographie collaborative, assistance vocale en langues locales, mode offline complet.",
    },
    impact: {
      en: "B2G / B2B model. MVP in active development.",
      fr: "Modèle B2G / B2B. MVP en développement actif.",
    },
  },
  {
    id: "ogooue-ai",
    image: "cloud",
    tags: ["RAG", "Consulting", "Africa", "Strategy"],
    year: "2025 — Present",
    company: "Founder · Ogooué AI",
    title: {
      en: "Ogooué AI — AI Solutions for African Enterprises",
      fr: "Ogooué AI — Solutions IA pour entreprises africaines",
    },
    summary: {
      en: "Initiative building tailored AI products — RAG chatbots, web/mobile apps, process automation, predictive analytics — for African SMEs and enterprises, with consulting on AI strategy.",
      fr: "Initiative construisant des produits IA sur mesure — chatbots RAG, applications web/mobile, automatisation, analytics prédictives — pour PME et entreprises africaines, avec conseil en stratégie IA.",
    },
    impact: {
      en: "First structured AI player dedicated to digital transformation of African enterprises.",
      fr: "Premier acteur IA structuré dédié à la transformation digitale des entreprises africaines.",
    },
  },
  {
    id: "ca-llm",
    image: "ragAbstract",
    tags: ["LLM", "Fine-tuning", "Mistral 7B", "Llama 2", "Flask"],
    year: "2023 — 2024",
    company: "Academic · Crédit Agricole",
    title: {
      en: "Insurance LLM Benchmarking — Crédit Agricole",
      fr: "Benchmark LLMs Assurance — Crédit Agricole",
    },
    summary: {
      en: "Benchmarking & fine-tuning of open-source LLMs (GPT-3, Mistral 7B, Llama 2) to improve customer guidance across home, auto, health and life insurance — deployed via Flask interface.",
      fr: "Benchmark et fine-tuning de LLMs open-source (GPT-3, Mistral 7B, Llama 2) pour améliorer l'orientation clients assurance (habitation, auto, santé, prévoyance) — interface Flask dédiée.",
    },
    impact: {
      en: "Faster and more accurate responses to insurance queries.",
      fr: "Réponses plus rapides et précises aux questions d'assurance.",
    },
  },
  {
    id: "substrate-iot",
    image: "cloud",
    tags: ["IoT", "ML", "Grafana", "Predictive"],
    year: "2023 — 2024",
    company: "Substrate AI",
    title: {
      en: "Smart Dairy Farming — IoT + ML",
      fr: "Élevage laitier intelligent — IoT + ML",
    },
    summary: {
      en: "Designed IoT + ML systems for dairy production at Substrate AI (listed Spanish AI company) — sensor pipelines, animal health predictive models, real-time Grafana dashboards.",
      fr: "Conception de systèmes IoT + ML pour la production laitière chez Substrate AI (société espagnole d'IA cotée) — pipelines capteurs, modèles prédictifs de santé animale, dashboards Grafana temps réel.",
    },
    impact: {
      en: "Contributed to animal health improvement and farmer competitiveness.",
      fr: "Contribution à la santé animale et à la compétitivité des éleveurs.",
    },
  },
];

export const EXPERIENCES = [
  {
    company: "CERP — ASTERA Group",
    role: { en: "AI Engineer (Full-Stack) · ML, GenAI & MLOps", fr: "Ingénieur IA Full-Stack · ML, GenAI & MLOps" },
    period: "Oct 2024 — Present",
    location: "Rouen, France",
    type: "Apprenticeship",
    description: {
      en: "Embedded in CERP's newly established AI & Data Center of Excellence. Designed and shipped two production-grade AI systems: a RAG chatbot over Oxypharm documentation, and a CamemBERT-based hierarchical email classifier integrated with Freshservice. Full lifecycle ownership — from data ingestion to FastAPI deployment via Docker/Kubernetes.",
      fr: "Intégré au Centre d'Excellence IA & Data de CERP. Conception et déploiement de deux systèmes IA en production : chatbot RAG sur la documentation Oxypharm, et classifieur hiérarchique d'e-mails CamemBERT intégré à Freshservice. Maîtrise complète du cycle — de l'ingestion au déploiement FastAPI via Docker/Kubernetes.",
    },
    stack: ["Python", "CamemBERT", "Mistral", "ChromaDB", "FastAPI", "Docker", "Kubernetes", "Azure ML", "MLflow"],
  },
  {
    company: "COMPETITIVIA",
    role: { en: "Data-Driven Marketing AI Lead", fr: "Chef de Projet Data Driven Marketing IA" },
    period: "Aug — Sep 2024",
    location: "Ordino, Andorra · Hybrid",
    type: "Internship",
    description: {
      en: "Built customer segmentation models and AI-driven funnels (code + no-code), real-time campaign optimization and A/B experimentation with full GDPR compliance.",
      fr: "Modèles de segmentation client et funnels IA (code + no-code), optimisation de campagnes en temps réel, A/B testing, conformité RGPD complète.",
    },
    stack: ["Python", "ML segmentation", "A/B testing", "No-Code AI"],
  },
  {
    company: "PicturifyAI",
    role: { en: "Data-Driven Marketing AI Lead", fr: "Chef de Projet Data Driven Marketing IA" },
    period: "Jun — Aug 2024",
    location: "France · Hybrid",
    type: "Internship",
    description: {
      en: "Led Data-Driven Marketing strategy at PicturifyAI (image-processing AI startup) — segmentation, campaign optimization, reporting and CRM analytics.",
      fr: "Pilotage de la stratégie Data Driven Marketing chez PicturifyAI (startup IA traitement d'image) — segmentation, optimisation de campagnes, reporting et analytics CRM.",
    },
    stack: ["Python", "SQL", "ML", "A/B testing"],
  },
  {
    company: "Substrate AI",
    role: { en: "Assistant Data Scientist", fr: "Assistant Data Scientist" },
    period: "Jul 2023 — Jun 2024",
    location: "Cachan, France · Hybrid",
    type: "Internship",
    description: {
      en: "Built IoT + AI systems for smart dairy farming at Substrate AI (Spanish listed AI company) — sensor data pipelines, predictive animal health models, Grafana dashboards. End-to-end industrial data science.",
      fr: "Systèmes IoT + IA pour élevage laitier intelligent chez Substrate AI (société espagnole cotée) — pipelines capteurs, modèles prédictifs de santé animale, dashboards Grafana. Data science industrielle end-to-end.",
    },
    stack: ["Python", "IoT", "ML", "Deep Learning", "Grafana", "Pandas", "Scikit-learn"],
  },
  {
    company: "Airtel Gabon",
    role: { en: "Network Engineer IMS", fr: "Ingénieur Réseau IMS" },
    period: "Jun — Sep 2022",
    location: "Libreville, Gabon",
    type: "Contract",
    description: {
      en: "Delivered mobile network integrations, acceptance testing, service migrations and API integrations on the Developer Portal — including Airtel Money USSD partner integrations.",
      fr: "Livraison d'intégrations réseau mobile, tests d'acceptation, migrations, intégration d'API sur le Developer Portal — dont intégration de partenaires sur USSD Airtel Money.",
    },
    stack: ["IMS", "REST APIs", "USSD", "Monitoring"],
  },
];

export const SKILL_GROUPS = [
  {
    group: { en: "AI · ML · Deep Learning", fr: "IA · ML · Deep Learning" },
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "Predictive Modeling", "Scikit-learn", "Pandas / NumPy"],
  },
  {
    group: { en: "GenAI · LLMs · RAG", fr: "GenAI · LLMs · RAG" },
    items: ["Mistral", "GPT-4 / GPT-3", "Llama 2", "Claude", "RAG", "Embeddings", "Prompt Engineering", "Fine-tuning (IBM)"],
  },
  {
    group: { en: "NLP", fr: "NLP" },
    items: ["CamemBERT", "BERT", "Hugging Face", "spaCy", "NLTK", "OCR", "Multilingual"],
  },
  {
    group: { en: "AI Agents", fr: "Agents IA" },
    items: ["Bounded autonomy", "Multi-agent orchestration", "Tool use", "Observability", "Human-in-the-loop"],
  },
  {
    group: { en: "MLOps · Cloud", fr: "MLOps · Cloud" },
    items: ["Docker", "Kubernetes", "Azure ML", "MLflow", "DVC", "Airflow", "KServe", "CI/CD", "Prometheus", "Grafana"],
  },
  {
    group: { en: "Backend · APIs", fr: "Backend · APIs" },
    items: ["FastAPI", "Flask", "REST", "Freshservice API", "Outlook API"],
  },
  {
    group: { en: "Data · Databases", fr: "Data · Bases de données" },
    items: ["SQL", "ChromaDB", "Firestore", "Power BI", "Big Data"],
  },
  {
    group: { en: "Frontend · Product", fr: "Frontend · Produit" },
    items: ["React", "Firebase", "Product Thinking", "AI Product Engineering (Berkeley)"],
  },
];

export const SERVICES = [
  {
    id: "rag-build",
    title: { en: "Enterprise RAG Systems", fr: "Systèmes RAG entreprise" },
    description: {
      en: "Production-ready RAG chatbots over your internal documentation. OCR, embeddings, vector DB, LLM, FastAPI, observability — designed for real corporate constraints.",
      fr: "Chatbots RAG en production sur votre documentation interne. OCR, embeddings, base vectorielle, LLM, FastAPI, observabilité — conçus pour les vraies contraintes corporate.",
    },
    bullets: ["RAG architecture", "Mistral / GPT / Claude", "ChromaDB / Pinecone", "FastAPI deployment"],
  },
  {
    id: "ai-agents",
    title: { en: "Autonomous AI Agents", fr: "Agents IA autonomes" },
    description: {
      en: "Bounded-autonomy agents that plan, act and coordinate workflows — with the right level of supervision, observability and safety guardrails.",
      fr: "Agents à autonomie bornée qui planifient, agissent et coordonnent des workflows — avec le bon niveau de supervision, d'observabilité et de garde-fous.",
    },
    bullets: ["Bounded autonomy", "Tool orchestration", "Safety architecture", "Monitoring & logs"],
  },
  {
    id: "nlp-classifier",
    title: { en: "NLP Classification & Automation", fr: "Classification NLP & automatisation" },
    description: {
      en: "Automate triage of emails, tickets and documents with fine-tuned NLP models integrated into your existing tooling (Freshservice, Jira, ServiceNow, Outlook).",
      fr: "Automatisez le tri d'e-mails, tickets et documents avec des modèles NLP fine-tunés intégrés à vos outils existants (Freshservice, Jira, ServiceNow, Outlook).",
    },
    bullets: ["CamemBERT / BERT", "Hierarchical classification", "REST integration", "Performance dashboards"],
  },
  {
    id: "mlops",
    title: { en: "MLOps & Deployment", fr: "MLOps & déploiement" },
    description: {
      en: "From notebook to production. CI/CD for ML, model versioning, monitoring, and reproducible pipelines on Azure ML, Kubernetes and Docker.",
      fr: "Du notebook à la production. CI/CD pour ML, versioning, monitoring et pipelines reproductibles sur Azure ML, Kubernetes et Docker.",
    },
    bullets: ["MLflow / DVC", "Docker / K8s", "Azure ML", "Prometheus + Grafana"],
  },
  {
    id: "consulting",
    title: { en: "AI Strategy & Audit", fr: "Stratégie IA & audit" },
    description: {
      en: "Hands-on advisory for CTOs and AI leaders — opportunity mapping, architecture review, ethical & GDPR compliance, roadmap and team enablement.",
      fr: "Conseil hands-on pour CTO et responsables IA — cartographie des opportunités, revue d'architecture, conformité éthique & RGPD, roadmap et montée en compétence des équipes.",
    },
    bullets: ["AI audit", "Architecture review", "GDPR & ethics", "Team training"],
  },
  {
    id: "research",
    title: { en: "Applied AI Research", fr: "Recherche IA appliquée" },
    description: {
      en: "Collaborations on CIFRE PhD, joint research projects, and publication-grade prototypes — at the intersection of LLMs, RAG, neuro-symbolic AI and legacy modernization.",
      fr: "Collaborations CIFRE, projets de recherche conjoints, prototypes publiables — à l'intersection LLMs, RAG, IA neuro-symbolique et modernisation legacy.",
    },
    bullets: ["CIFRE PhD-ready", "Neuro-symbolic AI", "Legacy modernization", "Joint publications"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Myriana Laurent",
    role: { en: "Head of Support & Systems, IT Infrastructure", fr: "Responsable Support & Systèmes — Infrastructure IT" },
    company: "CERP · ASTERA Group",
    date: "Feb 2026",
    quote: {
      en: "Only good things to say about Jean-Direl. He brings deep knowledge, is extremely rigorous at school and at work, and you can always count on him. A real pleasure to work with.",
      fr: "Que de bonnes choses à dire sur Jean-Direl, c'est une personne qui a beaucoup de connaissances, qui est extrêmement sérieux dans son travail, aussi bien à l'école qu'en entreprise. On peut toujours compter sur Jean-Direl. C'est un vrai plaisir de travailler avec lui !",
    },
  },
  {
    name: "Tayane Lesty Oyouwe Djinkou",
    role: { en: "IT Operations Manager", fr: "Responsable Opérations IT" },
    company: "Airtel Gabon",
    date: "Aug 2024",
    quote: {
      en: "Solid technical skills, strong project management, excellent interpersonal qualities, and calm under pressure. His contribution to our team and company has been invaluable.",
      fr: "Compétences techniques solides, capacité à gérer des projets complexes, excellentes qualités interpersonnelles, calme sous pression. Sa contribution à notre équipe et à l'entreprise a été inestimable.",
    },
  },
];

export const RESEARCH_INTERESTS = [
  { en: "Agentic AI", fr: "IA agentique" },
  { en: "LLMs & Foundation Models", fr: "LLMs & modèles de fondation" },
  { en: "Retrieval-Augmented Generation", fr: "Retrieval-Augmented Generation" },
  { en: "Neuro-Symbolic AI", fr: "IA neuro-symbolique" },
  { en: "Explainable AI", fr: "IA explicable" },
  { en: "MLOps at scale", fr: "MLOps à l'échelle" },
  { en: "Legacy System Modernization", fr: "Modernisation systèmes legacy" },
  { en: "Knowledge Graphs", fr: "Graphes de connaissances" },
  { en: "Enterprise AI Architecture", fr: "Architecture IA entreprise" },
];

export const CERTIFICATIONS = [
  { name: "AI Product Engineering: From Concept to Market", issuer: "UC Berkeley", date: "Jun 2025" },
  { name: "Expert LLM Fine-tuning", issuer: "IBM", date: "Jan 2025" },
  { name: "Digital Transformation in Supply Chains", issuer: "LinkedIn", date: "Jan 2025" },
  { name: "Cloud Computing Fundamentals", issuer: "LinkedIn", date: "Sep 2023" },
  { name: "Big Data Fundamentals", issuer: "LinkedIn", date: "Sep 2023" },
  { name: "SQL Essentials", issuer: "LinkedIn", date: "Aug 2023" },
  { name: "Machine Learning Foundations", issuer: "LinkedIn", date: "Nov 2022" },
];
