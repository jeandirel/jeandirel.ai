// ─────────────────────────────────────────────────────────────────────────────
//  AI Governance — centralized, data-driven content for the /governance page.
//
//  ARCHITECTURE NOTE
//  Every section of the Governance page renders purely from the arrays below.
//  To add a publication, thought, resource or compliance domain:
//    1. Drop the PDF in /public/documents/  (see DOCS_BASE)
//    2. Add an entry here.
//  No component code needs to change.
//
//  Bilingual fields use the shape { en: "…", fr: "…" } — consistent with
//  src/data/profile.js. The `icon` field stores a lucide-react icon *name*
//  (string) so this file stays serialisable; components resolve it via a map.
// ─────────────────────────────────────────────────────────────────────────────

export const DOCS_BASE = "/documents";

// ── Part 1 · AI Compliance domains ───────────────────────────────────────────
// `icon` → lucide-react name (resolved in ComplianceCards.jsx)
// `accent` → "cyan" | "violet" (alternated for visual rhythm)
// `guide` → downloadable PDF (replaceable by overwriting the file)
export const COMPLIANCE = [
  {
    id: "ai-act",
    icon: "Landmark",
    accent: "cyan",
    tag: "EU · 2024/1689",
    title: { en: "EU AI Act", fr: "AI Act (UE)" },
    description: {
      en: "Risk-based classification of AI systems, prohibited practices and obligations for high-risk and general-purpose models.",
      fr: "Classification des systèmes d'IA par le risque, pratiques interdites et obligations pour les modèles à haut risque et à usage général.",
    },
    guide: `${DOCS_BASE}/AI_Act_Guide.pdf`,
  },
  {
    id: "gdpr",
    icon: "ShieldCheck",
    accent: "violet",
    tag: "EU · 2016/679",
    title: { en: "GDPR / RGPD", fr: "RGPD / GDPR" },
    description: {
      en: "Lawful basis, data minimisation, DPIAs and data-subject rights applied to AI and machine-learning pipelines.",
      fr: "Base légale, minimisation des données, AIPD et droits des personnes appliqués aux pipelines d'IA et de machine learning.",
    },
    guide: `${DOCS_BASE}/GDPR_RGPD_Guide.pdf`,
  },
  {
    id: "ai-governance",
    icon: "Network",
    accent: "cyan",
    tag: "Operating model",
    title: { en: "AI Governance", fr: "Gouvernance de l'IA" },
    description: {
      en: "Policies, roles and control points that keep AI accountable, documented and aligned with business and legal duties.",
      fr: "Politiques, rôles et points de contrôle qui rendent l'IA responsable, documentée et alignée avec les obligations métier et légales.",
    },
    guide: `${DOCS_BASE}/AI_Governance_Guide.pdf`,
  },
  {
    id: "responsible-ai",
    icon: "HeartHandshake",
    accent: "violet",
    tag: "Ethics",
    title: { en: "Responsible AI", fr: "IA responsable" },
    description: {
      en: "Fairness, accountability and transparency built into the model lifecycle — not bolted on after deployment.",
      fr: "Équité, responsabilité et transparence intégrées au cycle de vie du modèle — pas ajoutées après le déploiement.",
    },
    guide: `${DOCS_BASE}/Responsible_AI_Guide.pdf`,
  },
  {
    id: "xai",
    icon: "Eye",
    accent: "cyan",
    tag: "Interpretability",
    title: { en: "Explainable AI (XAI)", fr: "IA explicable (XAI)" },
    description: {
      en: "SHAP, LIME and attention analysis to make model decisions auditable, contestable and trusted by users.",
      fr: "SHAP, LIME et analyse d'attention pour rendre les décisions des modèles auditables, contestables et fiables.",
    },
    guide: `${DOCS_BASE}/Explainable_AI_Guide.pdf`,
  },
  {
    id: "ai-risk",
    icon: "ShieldAlert",
    accent: "violet",
    tag: "Risk",
    title: { en: "AI Risk Management", fr: "Gestion des risques IA" },
    description: {
      en: "Identify, assess, mitigate and monitor AI-specific risks: bias, drift, hallucination, security and misuse.",
      fr: "Identifier, évaluer, atténuer et surveiller les risques propres à l'IA : biais, dérive, hallucination, sécurité et usage abusif.",
    },
    guide: `${DOCS_BASE}/AI_Risk_Management_Guide.pdf`,
  },
  {
    id: "data-governance",
    icon: "Database",
    accent: "cyan",
    tag: "Data",
    title: { en: "Data Governance", fr: "Gouvernance des données" },
    description: {
      en: "Lineage, quality, classification and stewardship so models train on trustworthy, well-described data.",
      fr: "Traçabilité, qualité, classification et intendance pour que les modèles s'entraînent sur des données fiables et décrites.",
    },
    guide: `${DOCS_BASE}/Data_Governance_Guide.pdf`,
  },
  {
    id: "privacy-by-design",
    icon: "Lock",
    accent: "violet",
    tag: "Privacy",
    title: { en: "Privacy by Design", fr: "Privacy by Design" },
    description: {
      en: "Anonymisation, pseudonymisation and purpose limitation embedded into architecture from the first sprint.",
      fr: "Anonymisation, pseudonymisation et limitation de finalité intégrées à l'architecture dès le premier sprint.",
    },
    guide: `${DOCS_BASE}/Privacy_by_Design_Guide.pdf`,
  },
  {
    id: "security-by-design",
    icon: "Shield",
    accent: "cyan",
    tag: "Security",
    title: { en: "Security by Design", fr: "Security by Design" },
    description: {
      en: "Threat modelling for ML — prompt injection, data poisoning, model theft — with controls across the lifecycle.",
      fr: "Modélisation des menaces ML — injection de prompt, empoisonnement de données, vol de modèle — avec contrôles sur tout le cycle.",
    },
    guide: `${DOCS_BASE}/Security_by_Design_Guide.pdf`,
  },
  {
    id: "human-in-the-loop",
    icon: "UserCheck",
    accent: "violet",
    tag: "Oversight",
    title: { en: "Human-in-the-Loop", fr: "Human-in-the-loop" },
    description: {
      en: "Meaningful human oversight and escalation paths for high-stakes decisions and autonomous agents.",
      fr: "Supervision humaine effective et chemins d'escalade pour les décisions critiques et les agents autonomes.",
    },
    guide: `${DOCS_BASE}/Human_in_the_Loop_Guide.pdf`,
  },
  {
    id: "ai-auditing",
    icon: "FileSearch",
    accent: "cyan",
    tag: "Assurance",
    title: { en: "AI Auditing", fr: "Audit IA" },
    description: {
      en: "Traceability, evidence and reproducibility that let internal or external auditors verify how a system behaves.",
      fr: "Traçabilité, preuves et reproductibilité permettant à des auditeurs internes ou externes de vérifier un système.",
    },
    guide: `${DOCS_BASE}/AI_Auditing_Guide.pdf`,
  },
  {
    id: "ai-trustworthiness",
    icon: "BadgeCheck",
    accent: "violet",
    tag: "Trust",
    title: { en: "AI Trustworthiness", fr: "Fiabilité de l'IA" },
    description: {
      en: "Robustness, reliability and ethical alignment — the properties that turn a working model into a dependable system.",
      fr: "Robustesse, fiabilité et alignement éthique — les propriétés qui transforment un modèle fonctionnel en système fiable.",
    },
    guide: `${DOCS_BASE}/AI_Trustworthiness_Guide.pdf`,
  },
  {
    id: "iso-42001",
    icon: "Award",
    accent: "cyan",
    tag: "ISO/IEC 42001",
    title: { en: "ISO/IEC 42001", fr: "ISO/IEC 42001" },
    description: {
      en: "The AI Management System (AIMS) standard: a certifiable framework for governing AI across an organisation.",
      fr: "La norme de Système de Management de l'IA (AIMS) : un cadre certifiable pour gouverner l'IA dans l'organisation.",
    },
    guide: `${DOCS_BASE}/ISO_IEC_42001_Guide.pdf`,
  },
  {
    id: "iso-27001",
    icon: "KeyRound",
    accent: "violet",
    tag: "ISO/IEC 27001",
    title: { en: "ISO/IEC 27001", fr: "ISO/IEC 27001" },
    description: {
      en: "Information-security management aligned with AI assets, data stores and deployment infrastructure.",
      fr: "Management de la sécurité de l'information aligné avec les actifs IA, les données et l'infrastructure de déploiement.",
    },
    guide: `${DOCS_BASE}/ISO_27001_Guide.pdf`,
  },
  {
    id: "nist-ai-rmf",
    icon: "Compass",
    accent: "cyan",
    tag: "NIST AI RMF",
    title: { en: "NIST AI RMF", fr: "NIST AI RMF" },
    description: {
      en: "The Govern–Map–Measure–Manage framework for trustworthy AI from the US National Institute of Standards.",
      fr: "Le cadre Govern–Map–Measure–Manage pour une IA digne de confiance, publié par le NIST américain.",
    },
    guide: `${DOCS_BASE}/NIST_AI_RMF_Guide.pdf`,
  },
  {
    id: "ai-safety",
    icon: "Sparkles",
    accent: "violet",
    tag: "Safety",
    title: { en: "AI Safety", fr: "AI Safety" },
    description: {
      en: "Alignment, guardrails, red-teaming and evaluation to keep capable systems controllable and benign.",
      fr: "Alignement, garde-fous, red-teaming et évaluation pour garder des systèmes puissants contrôlables et sûrs.",
    },
    guide: `${DOCS_BASE}/AI_Safety_Guide.pdf`,
  },
  {
    id: "mlops-governance",
    icon: "GitBranch",
    accent: "cyan",
    tag: "MLOps",
    title: { en: "MLOps Governance", fr: "Gouvernance MLOps" },
    description: {
      en: "Versioning, CI/CD, monitoring and model registries that make governance operational, not just documented.",
      fr: "Versioning, CI/CD, monitoring et registres de modèles qui rendent la gouvernance opérationnelle, pas seulement documentée.",
    },
    guide: `${DOCS_BASE}/MLOps_Governance_Guide.pdf`,
  },
];

// ── Part 2 · Publications ─────────────────────────────────────────────────────
// `cover` → image key from PROFILE.images OR a full URL.
// `read` → external link (optional). `pdf` → downloadable PDF.
export const PUBLICATIONS = [
  {
    id: "bounded-autonomy",
    cover: "ragAbstract",
    featured: true,
    category: { en: "Peer Preprint", fr: "Preprint" },
    date: "2026-05-01",
    readingTime: 14,
    title: { en: "Bounded-Autonomy LLM Agents", fr: "Bounded-Autonomy LLM Agents" },
    summary: {
      en: "A structural safety architecture for LLM agents, validated with a live algorithmic-trading case study. Accepted on Research Square.",
      fr: "Une architecture de sécurité structurelle pour agents LLM, validée par une étude de cas en trading algorithmique. Acceptée sur Research Square.",
    },
    keywords: ["AI Safety", "LLM Agents", "Bounded Autonomy", "Governance"],
    read: "https://doi.org/10.21203/rs.3.rs-9829773/v1",
    pdf: `${DOCS_BASE}/Bounded_Autonomy_LLM_Agents.pdf`,
  },
  {
    id: "enterprise-rag",
    cover: "neural",
    category: { en: "Technical", fr: "Technique" },
    date: "2026-03-12",
    readingTime: 11,
    title: { en: "Enterprise RAG Architecture", fr: "Architecture RAG d'entreprise" },
    summary: {
      en: "Production patterns for retrieval-augmented generation over sensitive corporate data: ingestion, governance, evaluation and observability.",
      fr: "Patterns de production pour le RAG sur des données d'entreprise sensibles : ingestion, gouvernance, évaluation et observabilité.",
    },
    keywords: ["RAG", "Architecture", "Data Governance", "Observability"],
    pdf: `${DOCS_BASE}/Enterprise_RAG_Architecture.pdf`,
  },
  {
    id: "ai-act-readiness",
    cover: "cloud",
    category: { en: "Whitepaper", fr: "Livre blanc" },
    date: "2026-02-20",
    readingTime: 9,
    title: { en: "AI Act Readiness for Enterprises", fr: "Préparation à l'AI Act en entreprise" },
    summary: {
      en: "A pragmatic roadmap to classify AI systems, close documentation gaps and prepare for high-risk obligations under the EU AI Act.",
      fr: "Une feuille de route pragmatique pour classer les systèmes d'IA, combler les lacunes documentaires et anticiper les obligations à haut risque de l'AI Act.",
    },
    keywords: ["AI Act", "Compliance", "Risk", "EU"],
    pdf: `${DOCS_BASE}/AI_Act_Readiness_Whitepaper.pdf`,
  },
  {
    id: "llm-governance",
    cover: "ragAbstract",
    category: { en: "Framework", fr: "Framework" },
    date: "2026-01-15",
    readingTime: 8,
    title: { en: "An LLM Governance Framework", fr: "Un framework de gouvernance LLM" },
    summary: {
      en: "Controls for generative systems: prompt and output policies, evaluation harnesses, red-teaming and human oversight gates.",
      fr: "Contrôles pour systèmes génératifs : politiques de prompt et de sortie, harnais d'évaluation, red-teaming et points de supervision humaine.",
    },
    keywords: ["LLM", "Governance", "Evaluation", "Red-teaming"],
    pdf: `${DOCS_BASE}/LLM_Governance_Framework.pdf`,
  },
];

// ── Part 3 · My Thoughts (reflections / articles) ────────────────────────────
// `body` → array of paragraphs ({en,fr}) shown in the in-page reader modal.
export const THOUGHTS = [
  {
    id: "ai-agents-software",
    cover: "neural",
    category: { en: "Agents", fr: "Agents" },
    date: "2026-06-02",
    readingTime: 6,
    title: {
      en: "Why AI Agents Will Replace Some Software",
      fr: "Pourquoi les agents IA remplaceront certains logiciels",
    },
    summary: {
      en: "When intent can be expressed in language and executed reliably, rigid UIs become optional. Agents collapse workflows into conversations.",
      fr: "Quand l'intention s'exprime en langage et s'exécute de façon fiable, les interfaces rigides deviennent optionnelles. Les agents condensent les workflows en conversations.",
    },
    body: [
      {
        en: "Most business software exists to translate human intent into structured actions: forms, buttons and menus are scaffolding around a database. Agents that understand goals and call tools reliably can absorb that scaffolding entirely.",
        fr: "La plupart des logiciels métier existent pour traduire l'intention humaine en actions structurées : formulaires, boutons et menus sont un échafaudage autour d'une base de données. Des agents qui comprennent des objectifs et appellent des outils de façon fiable peuvent absorber cet échafaudage.",
      },
      {
        en: "The shift is not 'no software' but 'less interface'. The durable parts — data models, permissions, audit trails, governance — become more important, not less. The agent is only trustworthy if the system around it is.",
        fr: "Le changement n'est pas « zéro logiciel » mais « moins d'interface ». Les parties durables — modèles de données, permissions, traçabilité, gouvernance — deviennent plus importantes, pas moins. L'agent n'est fiable que si le système autour de lui l'est.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_AI_Agents_Replace_Software.pdf`,
  },
  {
    id: "future-rag",
    cover: "ragAbstract",
    category: { en: "RAG", fr: "RAG" },
    date: "2026-05-20",
    readingTime: 5,
    title: { en: "The Future of RAG Architectures", fr: "L'avenir des architectures RAG" },
    summary: {
      en: "Retrieval is moving from a single vector lookup to agentic, multi-hop reasoning over hybrid stores — with evaluation as a first-class citizen.",
      fr: "La recherche passe d'un simple lookup vectoriel à un raisonnement agentique multi-saut sur des stores hybrides — avec l'évaluation comme citoyen de première classe.",
    },
    body: [
      {
        en: "Naive RAG — embed, retrieve top-k, stuff the prompt — is a baseline, not a destination. The next generation blends keyword and vector search, re-ranking, query decomposition and tool use into retrieval that actually reasons.",
        fr: "Le RAG naïf — embedder, récupérer le top-k, remplir le prompt — est une base, pas une destination. La génération suivante combine recherche par mots-clés et vectorielle, re-ranking, décomposition de requête et usage d'outils en une recherche qui raisonne vraiment.",
      },
      {
        en: "What separates a demo from production is evaluation: groundedness, citation accuracy and refusal behaviour measured continuously. Without it, RAG quietly degrades as documents change.",
        fr: "Ce qui sépare une démo de la production, c'est l'évaluation : ancrage, exactitude des citations et comportement de refus mesurés en continu. Sans cela, le RAG se dégrade silencieusement à mesure que les documents changent.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Future_of_RAG.pdf`,
  },
  {
    id: "llm-limits",
    cover: "neural",
    category: { en: "LLMs", fr: "LLMs" },
    date: "2026-05-04",
    readingTime: 5,
    title: { en: "The Limits of LLMs", fr: "Les limites des LLM" },
    summary: {
      en: "Fluency is not understanding. Knowing where models fail — and designing for it — is what makes deployments responsible.",
      fr: "La fluidité n'est pas la compréhension. Savoir où les modèles échouent — et concevoir en conséquence — rend les déploiements responsables.",
    },
    body: [
      {
        en: "Large language models are extraordinary pattern completers, but they have no inherent notion of truth, time or consequence. Hallucination, brittleness to phrasing and silent confidence are structural, not bugs to be fully patched.",
        fr: "Les grands modèles de langage sont d'extraordinaires compléteurs de motifs, mais sans notion intrinsèque de vérité, de temps ou de conséquence. Hallucination, fragilité à la formulation et confiance silencieuse sont structurelles, pas des bugs à corriger totalement.",
      },
      {
        en: "Responsible engineering accepts these limits and builds around them: retrieval for facts, verification for actions, and human oversight where the cost of error is high.",
        fr: "L'ingénierie responsable accepte ces limites et construit autour : recherche pour les faits, vérification pour les actions, et supervision humaine là où le coût de l'erreur est élevé.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Limits_of_LLMs.pdf`,
  },
  {
    id: "governance-over-models",
    cover: "cloud",
    category: { en: "Governance", fr: "Gouvernance" },
    date: "2026-04-18",
    readingTime: 6,
    title: {
      en: "Why Governance Will Matter More Than Models",
      fr: "Pourquoi la gouvernance comptera plus que les modèles",
    },
    summary: {
      en: "Frontier models are becoming commodities. The durable advantage is how responsibly, safely and verifiably you operate them.",
      fr: "Les modèles de pointe deviennent des commodités. L'avantage durable, c'est la manière responsable, sûre et vérifiable de les exploiter.",
    },
    body: [
      {
        en: "When everyone can call the same capable model, the model stops being the differentiator. What remains is the system: data quality, evaluation, monitoring, access control and the ability to prove the system behaves as claimed.",
        fr: "Quand chacun peut appeler le même modèle performant, le modèle cesse d'être le différenciateur. Reste le système : qualité des données, évaluation, monitoring, contrôle d'accès et capacité à prouver que le système se comporte comme annoncé.",
      },
      {
        en: "Governance is not bureaucracy — it is the engineering that makes AI trustworthy enough to deploy in critical, regulated environments.",
        fr: "La gouvernance n'est pas de la bureaucratie — c'est l'ingénierie qui rend l'IA assez fiable pour être déployée dans des environnements critiques et régulés.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Governance_Over_Models.pdf`,
  },
  {
    id: "human-supervision",
    cover: "ragAbstract",
    category: { en: "Safety", fr: "Sécurité" },
    date: "2026-03-30",
    readingTime: 4,
    title: {
      en: "AI Must Stay Under Human Supervision",
      fr: "L'IA doit rester sous supervision humaine",
    },
    summary: {
      en: "Autonomy is a dial, not a switch. The art is granting just enough, with reversible actions and clear escalation.",
      fr: "L'autonomie est un curseur, pas un interrupteur. L'art est d'en accorder juste assez, avec des actions réversibles et une escalade claire.",
    },
    body: [
      {
        en: "Full autonomy is rarely the goal. In high-stakes settings, the right design grants bounded autonomy: the agent acts within explicit limits, dangerous actions require confirmation, and a human can always intervene.",
        fr: "L'autonomie totale est rarement l'objectif. Dans les contextes critiques, le bon design accorde une autonomie bornée : l'agent agit dans des limites explicites, les actions dangereuses requièrent confirmation, et un humain peut toujours intervenir.",
      },
      {
        en: "Meaningful oversight means humans can understand, predict and override — not merely click 'approve' on decisions they cannot evaluate.",
        fr: "Une supervision effective signifie que les humains peuvent comprendre, prédire et reprendre la main — pas seulement cliquer « approuver » sur des décisions qu'ils ne peuvent évaluer.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Human_Supervision.pdf`,
  },
  {
    id: "responsible-ai",
    cover: "neural",
    category: { en: "Responsible AI", fr: "IA responsable" },
    date: "2026-03-08",
    readingTime: 5,
    title: { en: "Building Responsible AI", fr: "Construire une IA responsable" },
    summary: {
      en: "Responsibility is a property of the whole pipeline — from data collection to monitoring — not a checkbox at the end.",
      fr: "La responsabilité est une propriété de tout le pipeline — de la collecte des données au monitoring — pas une case à cocher à la fin.",
    },
    body: [
      {
        en: "Responsible AI starts before the first line of model code: who is represented in the data, what consent was given, what harm could a wrong prediction cause. These questions shape architecture more than any hyperparameter.",
        fr: "L'IA responsable commence avant la première ligne de code du modèle : qui est représenté dans les données, quel consentement a été donné, quel préjudice une mauvaise prédiction pourrait causer. Ces questions façonnent l'architecture plus que tout hyperparamètre.",
      },
      {
        en: "It ends only when the system is retired: fairness, explainability and drift must be monitored for the model's entire operational life.",
        fr: "Elle ne se termine qu'au retrait du système : équité, explicabilité et dérive doivent être surveillées toute la vie opérationnelle du modèle.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Building_Responsible_AI.pdf`,
  },
  {
    id: "autonomous-agents",
    cover: "cloud",
    category: { en: "Agents", fr: "Agents" },
    date: "2026-02-14",
    readingTime: 6,
    title: { en: "The Future of Autonomous Agents", fr: "Le futur des agents autonomes" },
    summary: {
      en: "Multi-agent systems will coordinate like teams — which means they need org charts, permissions and accountability, like teams.",
      fr: "Les systèmes multi-agents se coordonneront comme des équipes — ils ont donc besoin d'organigrammes, de permissions et de responsabilité, comme des équipes.",
    },
    body: [
      {
        en: "As agents specialise and collaborate, the hard problems become organisational: who is allowed to do what, how conflicts resolve, how to trace which agent caused which outcome.",
        fr: "À mesure que les agents se spécialisent et collaborent, les problèmes difficiles deviennent organisationnels : qui a le droit de faire quoi, comment résoudre les conflits, comment tracer quel agent a causé quel résultat.",
      },
      {
        en: "The winning architectures will borrow from distributed systems and from human organisations: clear interfaces, least privilege, and audit by default.",
        fr: "Les architectures gagnantes emprunteront aux systèmes distribués et aux organisations humaines : interfaces claires, moindre privilège et audit par défaut.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Future_Autonomous_Agents.pdf`,
  },
  {
    id: "mlops-essential",
    cover: "ragAbstract",
    category: { en: "MLOps", fr: "MLOps" },
    date: "2026-01-22",
    readingTime: 5,
    title: { en: "Why MLOps Is Indispensable", fr: "Pourquoi le MLOps est indispensable" },
    summary: {
      en: "A model that cannot be reproduced, monitored and rolled back is a liability — however good its offline metrics.",
      fr: "Un modèle qui ne peut être reproduit, surveillé et restauré est un risque — aussi bonnes soient ses métriques hors-ligne.",
    },
    body: [
      {
        en: "MLOps is what turns a notebook into a system you can trust in production: versioned data and models, automated evaluation, continuous monitoring and safe rollback.",
        fr: "Le MLOps transforme un notebook en système fiable en production : données et modèles versionnés, évaluation automatisée, monitoring continu et rollback sûr.",
      },
      {
        en: "Without it, governance is theatre — you cannot enforce policies on a system you cannot observe or reproduce.",
        fr: "Sans lui, la gouvernance est un théâtre — on ne peut pas appliquer de politiques à un système qu'on ne peut ni observer ni reproduire.",
      },
    ],
    pdf: `${DOCS_BASE}/Thought_Why_MLOps_Matters.pdf`,
  },
];

// ── Part 4 · Resources library ───────────────────────────────────────────────
// `kind` → "guide" | "checklist" | "whitepaper" | "framework" | "template" | "standard"
export const RESOURCES = [
  {
    id: "ai-act-checklist",
    kind: "checklist",
    icon: "ListChecks",
    title: { en: "AI Act Compliance Checklist", fr: "Checklist conformité AI Act" },
    description: {
      en: "Step-by-step controls to classify a system and evidence high-risk obligations.",
      fr: "Contrôles pas-à-pas pour classer un système et prouver les obligations à haut risque.",
    },
    pdf: `${DOCS_BASE}/AI_Act_Compliance_Checklist.pdf`,
  },
  {
    id: "rag-security-checklist",
    kind: "checklist",
    icon: "ShieldAlert",
    title: { en: "RAG Security Checklist", fr: "Checklist sécurité RAG" },
    description: {
      en: "Mitigations for prompt injection, data leakage and retrieval poisoning.",
      fr: "Mitigations pour l'injection de prompt, la fuite de données et l'empoisonnement.",
    },
    pdf: `${DOCS_BASE}/RAG_Security_Checklist.pdf`,
  },
  {
    id: "responsible-ai-whitepaper",
    kind: "whitepaper",
    icon: "FileText",
    title: { en: "Responsible AI Whitepaper", fr: "Livre blanc IA responsable" },
    description: {
      en: "Principles and concrete practices for fair, transparent and accountable AI.",
      fr: "Principes et pratiques concrètes pour une IA équitable, transparente et responsable.",
    },
    pdf: `${DOCS_BASE}/Responsible_AI_Whitepaper.pdf`,
  },
  {
    id: "ai-governance-framework",
    kind: "framework",
    icon: "Network",
    title: { en: "AI Governance Framework", fr: "Framework de gouvernance IA" },
    description: {
      en: "Roles, policies and control points mapped to ISO 42001 and the NIST AI RMF.",
      fr: "Rôles, politiques et points de contrôle alignés sur ISO 42001 et le NIST AI RMF.",
    },
    pdf: `${DOCS_BASE}/AI_Governance_Framework.pdf`,
  },
  {
    id: "model-card-template",
    kind: "template",
    icon: "LayoutTemplate",
    title: { en: "Model Card Template", fr: "Template de Model Card" },
    description: {
      en: "A reusable template to document intended use, data, metrics and limitations.",
      fr: "Un template réutilisable pour documenter usage prévu, données, métriques et limites.",
    },
    pdf: `${DOCS_BASE}/Model_Card_Template.pdf`,
  },
  {
    id: "iso-42001-overview",
    kind: "standard",
    icon: "Award",
    title: { en: "ISO/IEC 42001 Overview", fr: "Aperçu ISO/IEC 42001" },
    description: {
      en: "A concise overview of the AI Management System standard and its clauses.",
      fr: "Un aperçu concis de la norme de Système de Management de l'IA et de ses clauses.",
    },
    pdf: `${DOCS_BASE}/ISO_42001_Standard_Overview.pdf`,
  },
];

// ── Part 5 · Timeline of AI governance & model evolution ─────────────────────
export const TIMELINE = [
  {
    year: "2018",
    accent: "violet",
    title: { en: "GDPR enters into force", fr: "Entrée en vigueur du RGPD" },
    description: {
      en: "Europe sets the global benchmark for data protection and automated-decision rights.",
      fr: "L'Europe fixe la référence mondiale en protection des données et droits face aux décisions automatisées.",
    },
  },
  {
    year: "2020",
    accent: "cyan",
    title: { en: "GPT-3 & the scale era", fr: "GPT-3 & l'ère de l'échelle" },
    description: {
      en: "Large language models cross into general usefulness, reframing the AI agenda.",
      fr: "Les grands modèles de langage deviennent généralistes et utiles, redéfinissant l'agenda de l'IA.",
    },
  },
  {
    year: "2021",
    accent: "violet",
    title: { en: "EU AI Act proposed", fr: "Proposition de l'AI Act" },
    description: {
      en: "The European Commission proposes the first comprehensive, risk-based AI regulation.",
      fr: "La Commission européenne propose la première réglementation de l'IA complète, fondée sur le risque.",
    },
  },
  {
    year: "2022",
    accent: "cyan",
    title: { en: "ChatGPT & mainstream GenAI", fr: "ChatGPT & GenAI grand public" },
    description: {
      en: "Conversational AI reaches the public, accelerating both adoption and governance debate.",
      fr: "L'IA conversationnelle atteint le grand public, accélérant adoption et débat sur la gouvernance.",
    },
  },
  {
    year: "2023",
    accent: "violet",
    title: { en: "NIST AI RMF & ISO/IEC 42001", fr: "NIST AI RMF & ISO/IEC 42001" },
    description: {
      en: "Trustworthy-AI frameworks and the first certifiable AI management system arrive.",
      fr: "Les cadres pour une IA digne de confiance et le premier système de management de l'IA certifiable arrivent.",
    },
  },
  {
    year: "2024",
    accent: "cyan",
    title: { en: "EU AI Act adopted", fr: "Adoption de l'AI Act" },
    description: {
      en: "The AI Act is adopted, with obligations phasing in for prohibited, high-risk and GPAI systems.",
      fr: "L'AI Act est adopté, avec des obligations échelonnées pour les systèmes interdits, à haut risque et GPAI.",
    },
  },
  {
    year: "2026+",
    accent: "violet",
    title: { en: "Responsible AI by default", fr: "IA responsable par défaut" },
    description: {
      en: "Governance, safety and auditability become standard engineering practice, not an afterthought.",
      fr: "Gouvernance, sécurité et auditabilité deviennent une pratique d'ingénierie standard, pas une option.",
    },
  },
];

// ── Part 6 · FAQ ──────────────────────────────────────────────────────────────
export const FAQ = [
  {
    id: "what-is-ai-governance",
    q: { en: "What does AI governance actually cover?", fr: "Que recouvre concrètement la gouvernance de l'IA ?" },
    a: {
      en: "It is the set of policies, roles, controls and evidence that keep an AI system accountable across its lifecycle — from data and training to deployment, monitoring and decommissioning. In practice it spans risk management, documentation, human oversight, security and regulatory alignment (AI Act, GDPR, ISO 42001, NIST AI RMF).",
      fr: "C'est l'ensemble des politiques, rôles, contrôles et preuves qui rendent un système d'IA responsable sur tout son cycle de vie — des données et de l'entraînement au déploiement, au monitoring et au retrait. En pratique cela couvre la gestion des risques, la documentation, la supervision humaine, la sécurité et l'alignement réglementaire (AI Act, RGPD, ISO 42001, NIST AI RMF).",
    },
  },
  {
    id: "ai-act-concern",
    q: { en: "Does the EU AI Act apply to my project?", fr: "L'AI Act s'applique-t-il à mon projet ?" },
    a: {
      en: "If you build, deploy or distribute AI systems in the EU — or affecting EU users — it likely does. The first step is classifying each system (prohibited, high-risk, limited or minimal risk). I help teams run that classification and close the documentation and oversight gaps it reveals.",
      fr: "Si vous concevez, déployez ou distribuez des systèmes d'IA dans l'UE — ou touchant des utilisateurs de l'UE — c'est probable. La première étape est de classer chaque système (interdit, haut risque, risque limité ou minimal). J'aide les équipes à réaliser cette classification et à combler les lacunes de documentation et de supervision révélées.",
    },
  },
  {
    id: "governance-vs-speed",
    q: { en: "Will governance slow my team down?", fr: "La gouvernance va-t-elle ralentir mon équipe ?" },
    a: {
      en: "Done well, it does the opposite. Versioning, evaluation and monitoring catch failures early and make releases repeatable. The goal is governance that is operational — wired into MLOps — rather than paperwork bolted on at the end.",
      fr: "Bien menée, elle fait l'inverse. Versioning, évaluation et monitoring détectent les défaillances tôt et rendent les livraisons reproductibles. L'objectif est une gouvernance opérationnelle — intégrée au MLOps — plutôt qu'une paperasse ajoutée à la fin.",
    },
  },
  {
    id: "engagement",
    q: { en: "How can we work together?", fr: "Comment pouvons-nous travailler ensemble ?" },
    a: {
      en: "Typical engagements include AI audits, governance setup, architecture reviews and hands-on delivery of GenAI, RAG, LLM and MLOps systems — as a freelance mission, advisory or research collaboration. Use the contact section below to start a conversation.",
      fr: "Les missions types incluent audits IA, mise en place de gouvernance, revues d'architecture et delivery hands-on de systèmes GenAI, RAG, LLM et MLOps — en freelance, en conseil ou en collaboration de recherche. Utilisez la section contact ci-dessous pour démarrer un échange.",
    },
  },
  {
    id: "documents",
    q: { en: "Are the downloadable guides production advice?", fr: "Les guides téléchargeables sont-ils des conseils de production ?" },
    a: {
      en: "The documents here are concise, practical primers meant to orient teams — not legal advice. For binding decisions, pair them with qualified legal counsel and a tailored assessment of your systems.",
      fr: "Les documents proposés sont des introductions concises et pratiques destinées à orienter les équipes — pas des conseils juridiques. Pour des décisions engageantes, associez-les à un conseil juridique qualifié et à une évaluation sur mesure de vos systèmes.",
    },
  },
];

// Lightweight stats strip (animated counters)
export const GOV_STATS = [
  { value: 17, suffix: "", label: { en: "Compliance domains", fr: "Domaines de conformité" } },
  { value: 4, suffix: "", label: { en: "Publications", fr: "Publications" } },
  { value: 8, suffix: "", label: { en: "Reflections", fr: "Réflexions" } },
  { value: 6, suffix: "", label: { en: "Resources", fr: "Ressources" } },
];
