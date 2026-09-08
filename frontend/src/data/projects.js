// Comprehensive portfolio project catalog — Jean Direl
// Sources: professional work, LinkedIn-listed projects, academic work and 2026 project reports.

export const PROJECTS = [
  {
    id: "pfe-dnsi-rag",
    image: "ragAbstract",
    tags: ["RAG", "GenAI", "MCP", "SharePoint", "Freshservice", "Qdrant", "Mistral", "FastAPI", "Docker", "Azure", "MLOps"],
    year: "2025 / 2026",
    company: "CERP · ASTERA Group · Final Year Project",
    status: "deployed",
    title: {
      en: "Enterprise DNSI RAG Assistant — SharePoint & Freshservice",
      fr: "Assistant RAG DNSI — SharePoint & Freshservice",
    },
    summary: {
      en: "Designed, developed and deployed an enterprise conversational assistant for secure access to internal knowledge. The production stack combines Streamlit, FastAPI, multilingual-e5-large embeddings, Qdrant, Mistral Small 3.1 24B served with vLLM, PostgreSQL and Docker on a Microsoft Azure VM, with Microsoft SSO/OIDC and ACL-aware filtering.",
      fr: "Conception, développement et déploiement d'un assistant conversationnel d'entreprise pour l'accès sécurisé aux connaissances internes. La stack de production combine Streamlit, FastAPI, embeddings multilingual-e5-large, Qdrant, Mistral Small 3.1 24B servi avec vLLM, PostgreSQL et Docker sur VM Microsoft Azure, avec SSO/OIDC Microsoft et filtrage tenant compte des ACL.",
    },
    impact: {
      en: "Technical validation: 175/176 automated tests passed. A 33-question functional pre-evaluation produced 87.9% ACL-aware compliant or compliant-with-reservations responses; backend mean latency was 1.362 s. Monitoring captured 201 interactions from 9 authenticated professional profiles. MCP remained experimental and outside the production path.",
      fr: "Validation technique : 175/176 tests automatisés réussis. Une pré-évaluation fonctionnelle de 33 questions a produit 87,9 % de réponses conformes ou conformes avec réserves selon une lecture ACL-aware ; latence backend moyenne de 1,362 s. Le monitoring a relevé 201 interactions de 9 profils professionnels authentifiés. MCP est resté expérimental et hors du chemin de production.",
    },
    metrics: {
      en: "175/176 tests · 33-question evaluation · 201 interactions · 1.362 s mean backend latency",
      fr: "175/176 tests · évaluation 33 questions · 201 interactions · 1,362 s de latence backend moyenne",
    },
  },
  {
    id: "email-classifier",
    image: "neural",
    tags: ["NLP", "CamemBERT", "ML", "Freshservice", "FastAPI", "MLOps", "Automation"],
    year: "2024 / 2026",
    company: "CERP · ASTERA Group",
    status: "deployed",
    title: {
      en: "Hierarchical IT Incident Email Classification",
      fr: "Classification hiérarchique des e-mails d'incidents IT",
    },
    summary: {
      en: "Built a CamemBERT-based NLP pipeline to classify French IT support emails across three hierarchical levels — Category, Sub-category and Element — then expose predictions through FastAPI for Freshservice integration.",
      fr: "Développement d'un pipeline NLP basé sur CamemBERT pour classer les e-mails de support IT en trois niveaux hiérarchiques — Catégorie, Sous-catégorie et Élément — puis exposer les prédictions via FastAPI pour l'intégration Freshservice.",
    },
    impact: {
      en: "Worked on roughly 70,000 historical emails, compared flat multiclass, conditional hierarchical and multi-head architectures, and integrated secure Outlook extraction, business rules, deployment and performance monitoring.",
      fr: "Travail sur environ 70 000 e-mails historiques, comparaison d'architectures multiclasses plates, hiérarchiques conditionnelles et multi-head, avec extraction Outlook sécurisée, règles métier, déploiement et suivi des performances.",
    },
    metrics: { en: "~70k emails · 3-level hierarchy · 3 architecture families", fr: "~70k e-mails · hiérarchie 3 niveaux · 3 familles d'architectures" },
  },
  {
    id: "diabetes-twin-ai",
    image: "neural",
    tags: ["ML", "Time Series", "Health", "Digital Twin", "FastAPI", "FHIR", "Docker", "MLOps"],
    year: "2026",
    company: "aivancity · AI for Health · Project Lead",
    status: "research",
    title: {
      en: "DiabetesTwin-AI — Predictive Metabolic Digital Twin",
      fr: "DiabetesTwin-AI — Jumeau numérique métabolique prédictif",
    },
    summary: {
      en: "Research and education prototype combining CGM exploration, lifestyle what-if simulation, a synthetic virtual patient and 30-minute-ahead glucose forecasting on the PhysioNet CGMacros dataset. I led the project, consolidated the end-to-end pipeline, data/ML workflow, FastAPI service, deployment and CI.",
      fr: "Prototype de recherche et d'enseignement combinant exploration CGM, simulation de scénarios de vie, patient virtuel synthétique et prévision du glucose à 30 minutes sur le dataset PhysioNet CGMacros. J'ai piloté le projet et consolidé le pipeline end-to-end, la chaîne Data/ML, le service FastAPI, le déploiement et la CI.",
    },
    impact: {
      en: "The real-data pipeline processed 45 participants and 621,069 usable examples. Random Forest reached MAE 13.11 mg/dL and RMSE 18.94 mg/dL versus a 13.39 mg/dL persistence MAE. The project emphasizes leakage-aware validation, provenance, FHIR R5 interoperability and responsible AI rather than overstating clinical performance.",
      fr: "Le pipeline sur données réelles traite 45 participants et 621 069 exemples exploitables. Random Forest atteint une MAE de 13,11 mg/dL et une RMSE de 18,94 mg/dL contre 13,39 mg/dL de MAE pour la persistance. Le projet met l'accent sur la validation anti-fuite, la provenance, l'interopérabilité FHIR R5 et l'IA responsable, sans surévaluer la portée clinique.",
    },
    metrics: { en: "45 participants · 621,069 rows · RF MAE 13.11 mg/dL", fr: "45 participants · 621 069 lignes · RF MAE 13,11 mg/dL" },
    links: [
      { url: "https://diabetes-twin-ai-ecru.vercel.app/", label: { en: "Live app", fr: "Application" } },
      { url: "https://github.com/jeandirel/DiabetesTwin-AI", label: { en: "Source code", fr: "Code source" } },
    ],
  },
  {
    id: "agripredict-ai",
    image: "cloud",
    tags: ["ML", "Time Series", "Agriculture", "Remote Sensing", "Random Forest", "FastAPI", "React", "Docker", "MLOps"],
    year: "2026",
    company: "aivancity AI Clinic · PGE5 · Project Lead",
    status: "research",
    title: {
      en: "AgriPredict AI — Early Wheat Harvest-Date Forecasting",
      fr: "AgriPredict AI — Prévision précoce de la date de récolte du blé",
    },
    summary: {
      en: "Multimodal machine-learning decision-support prototype forecasting parcel-level soft-winter-wheat harvest dates in Centre-Val de Loire. It fuses RPG parcel context, SoilGrids, Sentinel-1/2 and NASA POWER data under strict anti-leakage temporal cutoffs.",
      fr: "Prototype d'aide à la décision en machine learning multimodal pour prévoir la date de récolte du blé tendre d'hiver à l'échelle de la parcelle en Centre-Val de Loire. Fusion de données RPG, SoilGrids, Sentinel-1/2 et NASA POWER avec des cutoffs temporels stricts anti-fuite.",
    },
    impact: {
      en: "Final chronological 2024 test: Random Forest MAE 8.493 days at the May 31 cutoff and 8.294 days at June 15, on the same aligned parcel-years. The project uses GroupKFold, an untouched test year, split-conformal uncertainty, ablations and explicit proxy-target limitations. I led the leakage audit, final validation, FastAPI, React/TypeScript frontend, Docker/CI and deployment consolidation.",
      fr: "Test chronologique final 2024 : Random Forest atteint 8,493 jours de MAE au cutoff du 31 mai et 8,294 jours au 15 juin sur les mêmes parcelles-années alignées. Le projet utilise GroupKFold, une année de test intacte, l'incertitude split-conformal, des ablations et documente explicitement les limites de la cible proxy. J'ai piloté l'audit anti-fuite, la validation finale, FastAPI, le frontend React/TypeScript, Docker/CI et la consolidation du déploiement.",
    },
    metrics: { en: "1,363 parcel-years · 2020–2024 · MAE ≈ 8.3–8.5 days", fr: "1 363 parcelles-années · 2020–2024 · MAE ≈ 8,3–8,5 jours" },
    links: [
      { url: "https://github.com/jeandirel/agripredict-ai-aivancity_2026", label: { en: "Source code", fr: "Code source" } },
    ],
  },
  {
    id: "carepilot-ai-security",
    image: "ragAbstract",
    tags: ["GenAI", "RAG", "AI Safety", "Cybersecurity", "Prompt Injection", "Threat Modeling", "Human-in-the-loop"],
    year: "2026",
    company: "aivancity · Cybersecurity Risk Management",
    status: "research",
    title: {
      en: "CarePilot AI — Cybersecurity Risk Architecture for Hospital AI",
      fr: "CarePilot AI — Architecture de risques cyber pour une IA hospitalière",
    },
    summary: {
      en: "Security architecture and risk-management study for a hospital AI assistant connected to patient information, internal procedures, RAG documents and APIs. The analysis treats the complete system — identity, data, model behavior, knowledge base, tools and infrastructure — as the security boundary.",
      fr: "Étude d'architecture de sécurité et de gestion des risques pour un assistant IA hospitalier connecté aux informations patient, procédures internes, documents RAG et APIs. L'analyse considère l'ensemble du système — identité, données, comportement du modèle, base de connaissances, outils et infrastructure — comme périmètre de sécurité.",
    },
    impact: {
      en: "Modeled high-impact scenarios including stolen credentials, prompt injection, poisoned RAG documents and confident hallucinations, with layered prevent/detect/respond/recover controls such as MFA, least privilege, immutable logs, authorization outside the LLM, provenance checks and human accountability.",
      fr: "Modélisation de scénarios à fort impact : identifiants volés, prompt injection, documents RAG empoisonnés et hallucinations confiantes, avec contrôles en couches prévention/détection/réponse/reprise : MFA, moindre privilège, logs immuables, autorisation hors LLM, vérification de provenance et responsabilité humaine.",
    },
    metrics: { en: "Threat → vulnerability → asset → impact → residual risk", fr: "Menace → vulnérabilité → actif → impact → risque résiduel" },
  },
  {
    id: "openclaw-agent",
    image: "cloud",
    tags: ["GenAI", "Agentic AI", "LLM", "AI Safety", "Python", "Observability", "Human-in-the-loop"],
    year: "2026",
    company: "Applied AI Research",
    status: "research",
    title: {
      en: "OpenClaw-Agent — Bounded-Autonomy LLM Trading Agent",
      fr: "OpenClaw-Agent — Agent LLM de trading à autonomie bornée",
    },
    summary: {
      en: "LLM-assisted crypto paper-trading research architecture built around bounded autonomy: deterministic risk enforcement controls the action space while the LLM acts as a constrained reasoning and veto layer rather than a free-form executor.",
      fr: "Architecture de recherche de paper trading crypto assistée par LLM fondée sur l'autonomie bornée : des contrôles déterministes de risque encadrent l'espace d'action tandis que le LLM intervient comme couche de raisonnement et de veto contrainte plutôt que comme exécuteur libre.",
    },
    impact: {
      en: "Designed for reproducibility, auditability and safety with Python, Alpaca paper trading, structured JSONL logging and a pre-registered evaluation approach. The architecture is documented in the 2026 Research Square preprint on bounded-autonomy LLM agents.",
      fr: "Conçu pour la reproductibilité, l'auditabilité et la sécurité avec Python, Alpaca paper trading, logs JSONL structurés et protocole d'évaluation pré-enregistré. L'architecture est documentée dans le preprint Research Square 2026 sur les agents LLM à autonomie bornée.",
    },
    metrics: { en: "Bounded autonomy · deterministic risk · auditable logs", fr: "Autonomie bornée · risque déterministe · logs auditables" },
    links: [
      { url: "https://github.com/jeandirel/securefinai-openclaw-agent", label: { en: "Source code", fr: "Code source" } },
      { url: "https://doi.org/10.21203/rs.3.rs-9829773/v1", label: { en: "Research preprint", fr: "Preprint de recherche" } },
    ],
  },
  {
    id: "pet-radiology-ai",
    image: "neural",
    tags: ["Computer Vision", "Deep Learning", "U-Net", "PyTorch", "GenAI", "OpenCV", "Streamlit"],
    year: "2025",
    company: "aivancity · AI for Health",
    status: "research",
    title: {
      en: "AI-Based Pet Radiology Analysis Platform",
      fr: "Plateforme IA d'analyse radiologique vétérinaire",
    },
    summary: {
      en: "Veterinary X-ray analysis platform with U-Net segmentation in PyTorch for heart and thoracic vertebrae, automated Vertebral Heart Score computation using OpenCV/NumPy/PCA, and a confidential local Llama 2 reporting layer served through Ollama.",
      fr: "Plateforme d'analyse de radiographies vétérinaires avec segmentation U-Net sous PyTorch du cœur et des vertèbres thoraciques, calcul automatisé du Vertebral Heart Score avec OpenCV/NumPy/PCA et génération locale et confidentielle de comptes rendus avec Llama 2 via Ollama.",
    },
    impact: {
      en: "End-to-end prototype covering data preparation and augmentation, COCO export with Roboflow, deep-learning inference, explainable measurements, Streamlit UI and automated PDF reporting.",
      fr: "Prototype end-to-end couvrant préparation et augmentation des données, export COCO avec Roboflow, inférence deep learning, mesures explicables, interface Streamlit et génération automatisée de PDF.",
    },
    metrics: { en: "U-Net segmentation · automated VHS · local LLM reporting", fr: "Segmentation U-Net · VHS automatisé · reporting LLM local" },
  },
  {
    id: "ai-iot-tinyml-har",
    image: "cloud",
    tags: ["ML", "Time Series", "IoT", "TinyML", "TensorFlow Lite", "Edge AI", "MLOps"],
    year: "2025 / 2026",
    company: "aivancity · AI for IoT",
    status: "research",
    title: {
      en: "TinyML vs Classical ML for Human Activity Recognition",
      fr: "TinyML vs ML classique pour la reconnaissance d'activité humaine",
    },
    summary: {
      en: "Human-activity-recognition project from inertial sensor data, covering preprocessing, feature engineering and comparison between classical machine-learning models and lightweight edge approaches deployable with TensorFlow Lite.",
      fr: "Projet de reconnaissance d'activité humaine à partir de capteurs inertiels : prétraitement, feature engineering et comparaison de modèles de machine learning classiques avec des approches edge légères déployables avec TensorFlow Lite.",
    },
    impact: {
      en: "Evaluated accuracy-versus-compute trade-offs for Random Forest, Decision Tree and lightweight neural approaches, with a practical focus on constrained-device deployment.",
      fr: "Évaluation des compromis précision/coût de calcul pour Random Forest, Decision Tree et approches neuronales légères, avec un objectif concret de déploiement sur appareils contraints.",
    },
    metrics: { en: "Sensors · feature engineering · TensorFlow Lite", fr: "Capteurs · feature engineering · TensorFlow Lite" },
  },
  {
    id: "insurance-llm-ca",
    image: "ragAbstract",
    tags: ["GenAI", "NLP", "LLM", "Fine-tuning", "Mistral 7B", "Llama 2", "Flask"],
    year: "2023 / 2024",
    company: "Academic project · Crédit Agricole / Zerlos",
    status: "research",
    title: {
      en: "LLM Optimization for Insurance Guidance",
      fr: "Optimisation de LLMs pour l'orientation en assurance",
    },
    summary: {
      en: "Collected and analyzed customer data, benchmarked GPT-3, Mistral 7B and Llama 2, and built a Flask conversational interface to improve guidance across insurance products.",
      fr: "Collecte et analyse de données clients, benchmark de GPT-3, Mistral 7B et Llama 2, puis développement d'une interface conversationnelle Flask pour améliorer l'orientation sur les produits d'assurance.",
    },
    impact: {
      en: "Combined LLM experimentation with data analysis and decision support across multiple insurance verticals, with an emphasis on practical user guidance.",
      fr: "Combinaison d'expérimentations LLM, d'analyse de données et d'aide à la décision sur plusieurs verticales assurance, avec un focus sur l'orientation utilisateur.",
    },
    metrics: { en: "3 LLM families · Flask conversational UI", fr: "3 familles de LLM · interface conversationnelle Flask" },
  },
  {
    id: "automotive-trend-detection",
    image: "cloud",
    tags: ["ML", "NLP", "Data Modeling", "SQL", "Power BI", "Decision Support"],
    year: "2024",
    company: "aivancity · Data Science / NLP",
    status: "research",
    title: {
      en: "Automotive Trend Detection & Decision Support",
      fr: "Détection de tendances automobiles & aide à la décision",
    },
    summary: {
      en: "Created standardized reference-data models and analyzed automotive market trends and opportunities using NLP, UML, Python, SQL and Power BI.",
      fr: "Création de modèles de données de référence standardisés et analyse des tendances et opportunités du marché automobile avec NLP, UML, Python, SQL et Power BI.",
    },
    impact: {
      en: "Improved data quality and completeness while turning heterogeneous market information into structured decision-oriented reporting.",
      fr: "Amélioration de la qualité et de la complétude des données, avec transformation d'informations de marché hétérogènes en reporting structuré orienté décision.",
    },
    metrics: { en: "NLP · data models · BI decision support", fr: "NLP · modèles de données · BI décisionnelle" },
  },
  {
    id: "elevate-ai-emotion",
    image: "neural",
    tags: ["Computer Vision", "ML", "Responsible AI", "Emotion Detection", "Ethics"],
    year: "2023",
    company: "aivancity · AI Ethics",
    status: "research",
    title: {
      en: "Elevate.AI — Real-Time Emotion Detection Pilot",
      fr: "Elevate.AI — Pilote de détection d'émotions en temps réel",
    },
    summary: {
      en: "Pilot study evaluating the accuracy and practical behavior of a real-time emotion-detection system, paired with an analysis of ethical issues arising when AI interprets human affect.",
      fr: "Étude pilote évaluant la précision et le comportement pratique d'un système de détection d'émotions en temps réel, complétée par une analyse des enjeux éthiques liés à l'interprétation des affects humains par l'IA.",
    },
    impact: {
      en: "Combined model evaluation with responsible-AI analysis, highlighting the limits, context sensitivity and human implications of automated emotion inference.",
      fr: "Combinaison de l'évaluation modèle et de l'analyse Responsible AI, en mettant en évidence les limites, la sensibilité au contexte et les implications humaines de l'inférence automatique d'émotions.",
    },
    metrics: { en: "Real-time ML evaluation · AI ethics", fr: "Évaluation ML temps réel · éthique IA" },
  },
  {
    id: "autism-behavior-ai",
    image: "neural",
    tags: ["Computer Vision", "ML", "MediaPipe", "Behavioral Data", "Health"],
    year: "2022",
    company: "aivancity · AI Project",
    status: "research",
    title: {
      en: "Behavior & Emotion Analysis for Autism Research",
      fr: "Analyse comportementale et émotionnelle pour la recherche sur l'autisme",
    },
    summary: {
      en: "Built a behavioral-data production pipeline using MediaPipe Pose, then analyzed and augmented pose-derived signals for an exploratory emotion-prediction project involving children with autism.",
      fr: "Mise en place d'un pipeline de production de données comportementales avec MediaPipe Pose, puis analyse et augmentation des signaux de posture dans un projet exploratoire de prédiction d'émotions chez des enfants avec autisme.",
    },
    impact: {
      en: "Applied computer-vision keypoints, preprocessing, exploratory ML and visualization to a sensitive human-centered use case requiring cautious interpretation.",
      fr: "Application de points clés de vision par ordinateur, prétraitement, ML exploratoire et visualisation à un cas d'usage humain sensible nécessitant une interprétation prudente.",
    },
    metrics: { en: "MediaPipe Pose · behavioral ML · data augmentation", fr: "MediaPipe Pose · ML comportemental · augmentation de données" },
  },
  {
    id: "substrate-iot",
    image: "cloud",
    tags: ["ML", "Time Series", "IoT", "Predictive", "Grafana", "MLOps"],
    year: "2023 / 2024",
    company: "Substrate AI",
    status: "deployed",
    title: {
      en: "Smart Dairy Farming — Industrial IoT + Machine Learning",
      fr: "Élevage laitier intelligent — IoT industriel + Machine Learning",
    },
    summary: {
      en: "Worked on sensor and time-series pipelines for animal health, production quality and operational efficiency, building predictive ML workflows and Grafana monitoring dashboards in an industrial AI context.",
      fr: "Travail sur des pipelines capteurs et séries temporelles pour la santé animale, la qualité de production et l'efficacité opérationnelle, avec workflows ML prédictifs et dashboards Grafana dans un contexte d'IA industrielle.",
    },
    impact: {
      en: "Connected data preprocessing, predictive modeling and operational dashboards while exploring reinforcement-learning approaches for industrial optimization.",
      fr: "Connexion du prétraitement des données, de la modélisation prédictive et des dashboards opérationnels, avec exploration d'approches de reinforcement learning pour l'optimisation industrielle.",
    },
    metrics: { en: "IoT time series · predictive ML · Grafana", fr: "Séries temporelles IoT · ML prédictif · Grafana" },
  },
  {
    id: "marketing-ai",
    image: "cloud",
    tags: ["ML", "Marketing", "Segmentation", "A/B Testing", "Analytics", "GDPR"],
    year: "2024",
    company: "PicturifyAI / COMPETITIVIA",
    status: "active",
    title: {
      en: "Data-Driven Marketing AI",
      fr: "Data-Driven Marketing IA",
    },
    summary: {
      en: "Led data-driven marketing work spanning multi-source data, customer segmentation, A/B experimentation, campaign optimization, decision reporting and GDPR-aware analytics.",
      fr: "Pilotage de travaux de marketing data-driven couvrant données multi-sources, segmentation client, A/B testing, optimisation de campagnes, reporting décisionnel et analytics conformes au RGPD.",
    },
    impact: {
      en: "Connected data science with product and growth decisions, translating customer and campaign signals into actionable experiments and reporting.",
      fr: "Connexion de la data science aux décisions produit et growth, en transformant les signaux clients et campagnes en expérimentations et reporting actionnables.",
    },
    metrics: { en: "Segmentation · A/B tests · decision analytics", fr: "Segmentation · A/B tests · analytics décisionnelle" },
  },
  {
    id: "kijani",
    image: "neural",
    tags: ["Computer Vision", "Mobile", "Offline", "Multilingual", "Impact AI", "Product"],
    year: "2026 / Present",
    company: "Co-founder · Kijani",
    status: "building",
    title: {
      en: "Kijani — AI Waste Intelligence Platform",
      fr: "Kijani — Plateforme IA de tri intelligent des déchets",
    },
    summary: {
      en: "Mobile-first AI platform for waste sorting in African cities, combining visual recognition, recyclability scoring, collaborative mapping and voice assistance in local languages with offline-first product design.",
      fr: "Plateforme IA mobile-first pour le tri des déchets dans les villes africaines, combinant reconnaissance visuelle, score de recyclabilité, cartographie collaborative et assistance vocale en langues locales avec une conception offline-first.",
    },
    impact: {
      en: "Designed as an impact-oriented B2G/B2B product for municipalities and organizations operating under connectivity and localization constraints.",
      fr: "Conçu comme un produit à impact B2G/B2B pour collectivités et organisations confrontées à des contraintes de connectivité et de localisation.",
    },
    metrics: { en: "Offline-first · multilingual · computer vision", fr: "Offline-first · multilingue · vision par ordinateur" },
  },
  {
    id: "linka",
    image: "cloud",
    tags: ["Product", "SaaS", "React", "Fullstack", "Web"],
    year: "2025 / Present",
    company: "Founder & Developer",
    status: "deployed",
    title: { en: "Linka — Digital Identity & Link-in-Bio Platform", fr: "Linka — Plateforme d'identité numérique & link-in-bio" },
    summary: {
      en: "Smart digital-identity and link-in-bio product for creators, freelancers and professionals, bringing social links, portfolio, booking, contact and business features into one customizable page.",
      fr: "Produit d'identité numérique et link-in-bio pour créateurs, freelances et professionnels, réunissant liens sociaux, portfolio, réservation, contact et fonctions business dans une page personnalisable.",
    },
    impact: {
      en: "Founder-built full-stack product shipped from concept to a live web service, with ongoing extensions around payments and service workflows.",
      fr: "Produit full-stack conçu et développé en tant que fondateur, livré du concept au service web en ligne, avec extensions en cours autour des paiements et workflows de services.",
    },
    metrics: { en: "Live SaaS · zero-to-production", fr: "SaaS en ligne · du zéro à la production" },
    links: [
      { url: "https://www.linka.you/", label: { en: "Visit Linka", fr: "Voir Linka" } },
    ],
  },
  {
    id: "nexa-ai",
    image: "ragAbstract",
    tags: ["GenAI", "LLM", "RAG", "SaaS", "B2B", "Product"],
    year: "2025 / Present",
    company: "Founder & Developer",
    status: "building",
    title: { en: "Nexa AI — Business Conversational AI Platform", fr: "Nexa AI — Plateforme conversationnelle IA pour entreprises" },
    summary: {
      en: "Conversational AI platform for businesses to deploy intelligent assistants for customer support, lead qualification and internal knowledge access without requiring in-house ML expertise.",
      fr: "Plateforme conversationnelle IA permettant aux entreprises de déployer des assistants intelligents pour le support client, la qualification de prospects et l'accès aux connaissances internes sans expertise ML interne.",
    },
    impact: {
      en: "Productized Jean's enterprise RAG and conversational-AI experience into a B2B-oriented platform with a direct live product surface.",
      fr: "Industrialisation de l'expérience de Jean en RAG d'entreprise et IA conversationnelle dans une plateforme orientée B2B disposant d'un produit accessible en ligne.",
    },
    metrics: { en: "LLM assistants · B2B SaaS · live product", fr: "Assistants LLM · SaaS B2B · produit en ligne" },
    links: [
      { url: "https://chatnexaa.com/", label: { en: "Visit Nexa AI", fr: "Voir Nexa AI" } },
    ],
  },
  {
    id: "ogooue-ai",
    image: "cloud",
    tags: ["GenAI", "RAG", "Consulting", "Africa", "Product", "Automation"],
    year: "2025 / Present",
    company: "Founder & CTO · Ogooué AI",
    status: "active",
    title: { en: "Ogooué AI — AI Solutions for African Enterprises", fr: "Ogooué AI — Solutions IA pour entreprises africaines" },
    summary: {
      en: "AI product studio focused on African enterprises: tailored RAG assistants, web/mobile products, process automation, predictive analytics and AI strategy designed around local business constraints.",
      fr: "Studio produit IA pour entreprises africaines : assistants RAG sur mesure, produits web/mobile, automatisation de processus, analytics prédictive et stratégie IA adaptées aux contraintes métiers locales.",
    },
    impact: {
      en: "Bridges international AI engineering practices with African digital-transformation needs through hands-on product architecture and delivery.",
      fr: "Fait le lien entre les pratiques internationales d'ingénierie IA et les besoins de transformation numérique en Afrique via l'architecture et la livraison de produits concrets.",
    },
    metrics: { en: "RAG · automation · African enterprise AI", fr: "RAG · automatisation · IA entreprise Afrique" },
    links: [
      { url: "https://ogooueia.com/", label: { en: "Visit Ogooué AI", fr: "Voir Ogooué AI" } },
    ],
  },
  {
    id: "gabon-diaspora",
    image: "cloud",
    tags: ["Product", "Web", "Community", "Fullstack", "Africa"],
    year: "2024 / Present",
    company: "Founder & Developer",
    status: "deployed",
    title: { en: "Gabon Diaspora — Community Platform", fr: "Gabon Diaspora — Plateforme communautaire" },
    summary: {
      en: "Digital hub designed for the Gabonese diaspora, combining events, resources, networking, directories, community content and role-based web features.",
      fr: "Hub numérique conçu pour la diaspora gabonaise, réunissant événements, ressources, networking, annuaires, contenus communautaires et fonctions web avec gestion des rôles.",
    },
    impact: {
      en: "End-to-end web product covering product design, authentication, access rules, CRUD workflows, media handling and community-oriented UX.",
      fr: "Produit web end-to-end couvrant design produit, authentification, règles d'accès, workflows CRUD, gestion des médias et UX orientée communauté.",
    },
    metrics: { en: "Community platform · full-stack product", fr: "Plateforme communautaire · produit full-stack" },
    links: [
      { url: "https://www.gabondiaspora.org/", label: { en: "Visit platform", fr: "Voir la plateforme" } },
    ],
  },
];
