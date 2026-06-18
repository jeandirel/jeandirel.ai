// AI Systems Engineering — architecture library data.
// Each entry describes a production-minded AI architecture Jean Direl can design.
// Bilingual ({ en, fr }) to match the rest of the site. `tech`, `tags` and
// `skills` stay as plain arrays since they are technical / language-neutral.

// Filter categories. `accent` drives the (sparing) cyan / violet / white theming.
export const ARCH_CATEGORIES = [
  { id: "all", label: { en: "All", fr: "Tous" }, accent: "white" },
  { id: "ml", label: { en: "Machine Learning", fr: "Machine Learning" }, accent: "cyan" },
  { id: "dl", label: { en: "Deep Learning", fr: "Deep Learning" }, accent: "cyan" },
  { id: "genai", label: { en: "Generative AI", fr: "IA Générative" }, accent: "cyan" },
  { id: "cv", label: { en: "Computer Vision", fr: "Vision par ordi." }, accent: "cyan" },
  { id: "nlp", label: { en: "NLP", fr: "NLP" }, accent: "cyan" },
  { id: "llms", label: { en: "LLMs", fr: "LLMs" }, accent: "cyan" },
  { id: "rag", label: { en: "RAG", fr: "RAG" }, accent: "cyan" },
  { id: "agents", label: { en: "Agents", fr: "Agents" }, accent: "violet" },
  { id: "mlops", label: { en: "MLOps", fr: "MLOps" }, accent: "violet" },
  { id: "cloud", label: { en: "Cloud", fr: "Cloud" }, accent: "violet" },
  { id: "data", label: { en: "Data Engineering", fr: "Data Engineering" }, accent: "violet" },
  { id: "research", label: { en: "Research", fr: "Recherche" }, accent: "violet" },
];

// Maturity badge -> accent. Mirrors the levelLabel philosophy used in Skills.
export const ARCH_LEVELS = {
  "Production Ready": { accent: "cyan", fr: "Production Ready" },
  "Industrial Experience": { accent: "cyan", fr: "Expérience industrielle" },
  Enterprise: { accent: "violet", fr: "Entreprise" },
  Research: { accent: "violet", fr: "Recherche" },
  "Academic Knowledge": { accent: "white", fr: "Connaissance académique" },
};

export const AI_ARCHITECTURES = [
  {
    id: "ml-pipeline",
    title: { en: "Machine Learning Pipeline", fr: "Pipeline Machine Learning" },
    categories: ["ml", "mlops"],
    level: "Industrial Experience",
    description: {
      en: "End-to-end ML workflow from raw data to a versioned, monitored model serving predictions in production.",
      fr: "Workflow ML complet, de la donnée brute au modèle versionné et monitoré servant des prédictions en production.",
    },
    useCase: {
      en: "Churn prediction, scoring, demand forecasting and any tabular decisioning at scale.",
      fr: "Prédiction de churn, scoring, prévision de demande et toute décision tabulaire à l'échelle.",
    },
    tech: ["Python", "Scikit-Learn", "Pandas", "MLflow", "Airflow", "Docker", "FastAPI"],
    tags: ["Python", "ML", "MLOps", "Production"],
    detail: {
      overview: {
        en: "A reproducible pipeline that turns a business question into a deployed model. It standardises ingestion, validation, training, evaluation and serving so models stay reproducible, auditable and easy to retrain.",
        fr: "Un pipeline reproductible qui transforme une question métier en modèle déployé. Il standardise l'ingestion, la validation, l'entraînement, l'évaluation et le service pour que les modèles restent reproductibles, auditables et faciles à réentraîner.",
      },
      stages: {
        en: [
          "Ingest & validate raw data with schema and quality checks",
          "Feature engineering and train / validation / test splits",
          "Model training with cross-validation and hyper-parameter search",
          "Evaluation against business metrics and a baseline",
          "Package, version (MLflow) and deploy behind a FastAPI endpoint",
          "Monitor drift and trigger scheduled retraining",
        ],
        fr: [
          "Ingestion & validation des données (schéma et contrôles qualité)",
          "Feature engineering et découpage train / validation / test",
          "Entraînement avec validation croisée et recherche d'hyper-paramètres",
          "Évaluation sur les métriques métier et un baseline",
          "Packaging, versioning (MLflow) et déploiement via une API FastAPI",
          "Monitoring du drift et réentraînement planifié",
        ],
      },
      bestPractices: {
        en: [
          "Version data, code and models together for reproducibility",
          "Separate training and serving feature logic to avoid skew",
          "Track every experiment with metrics and artefacts",
          "Automate retraining triggers on data drift",
        ],
        fr: [
          "Versionner données, code et modèles ensemble pour la reproductibilité",
          "Séparer la logique de features train / serving pour éviter le skew",
          "Tracer chaque expérience (métriques et artefacts)",
          "Automatiser le réentraînement sur détection de drift",
        ],
      },
      realUseCases: {
        en: [
          "Predictive maintenance on IoT sensor data (Substrate AI)",
          "Customer segmentation and marketing funnels",
          "Risk and propensity scoring",
        ],
        fr: [
          "Maintenance prédictive sur données capteurs IoT (Substrate AI)",
          "Segmentation client et funnels marketing",
          "Scoring de risque et de propension",
        ],
      },
      advantages: {
        en: ["Reproducible and auditable", "Fast iteration to production", "Clear ownership of each stage"],
        fr: ["Reproductible et auditable", "Itération rapide vers la production", "Responsabilité claire par étape"],
      },
      limits: {
        en: ["Needs clean labelled data", "Drift requires ongoing monitoring", "Tabular focus — not for unstructured media"],
        fr: ["Nécessite des données labellisées propres", "Le drift impose un suivi continu", "Orienté tabulaire — pas pour le non-structuré"],
      },
      skills: ["Feature engineering", "Model evaluation", "MLflow", "Pipeline design", "FastAPI"],
    },
  },
  {
    id: "dl-pipeline",
    title: { en: "Deep Learning Pipeline", fr: "Pipeline Deep Learning" },
    categories: ["dl", "ml"],
    level: "Industrial Experience",
    description: {
      en: "Training and serving of deep neural networks with GPU acceleration, checkpointing and experiment tracking.",
      fr: "Entraînement et service de réseaux de neurones profonds avec accélération GPU, checkpointing et suivi d'expériences.",
    },
    useCase: {
      en: "Vision, speech and complex pattern problems where classical ML plateaus.",
      fr: "Vision, parole et problèmes complexes où le ML classique plafonne.",
    },
    tech: ["Python", "PyTorch", "TensorFlow", "MLflow", "Docker", "Kubernetes"],
    tags: ["Python", "PyTorch", "DeepLearning", "GPU"],
    detail: {
      overview: {
        en: "A pipeline built for neural networks: efficient data loading, GPU training with mixed precision, checkpointing and reproducible experiments, then export to an optimised serving format.",
        fr: "Un pipeline pensé pour les réseaux de neurones : chargement de données efficace, entraînement GPU en précision mixte, checkpointing et expériences reproductibles, puis export vers un format de service optimisé.",
      },
      stages: {
        en: [
          "Build performant data loaders and augmentation",
          "Define architecture and loss / optimisation strategy",
          "Train on GPU with mixed precision and checkpointing",
          "Track curves, early-stopping and best checkpoints",
          "Export (ONNX / TorchScript) and benchmark latency",
          "Serve with batching and autoscaling",
        ],
        fr: [
          "Construire des data loaders performants et l'augmentation",
          "Définir l'architecture et la stratégie loss / optimisation",
          "Entraîner sur GPU en précision mixte avec checkpointing",
          "Suivre les courbes, l'early-stopping et les meilleurs checkpoints",
          "Exporter (ONNX / TorchScript) et benchmarker la latence",
          "Servir avec batching et autoscaling",
        ],
      },
      bestPractices: {
        en: [
          "Use mixed precision to cut memory and time",
          "Checkpoint often and resume safely",
          "Profile data loading — it is the usual bottleneck",
          "Validate on a held-out set, not training loss",
        ],
        fr: [
          "Utiliser la précision mixte pour réduire mémoire et temps",
          "Checkpointer souvent et reprendre proprement",
          "Profiler le chargement — c'est le goulot habituel",
          "Valider sur un set dédié, pas sur la loss d'entraînement",
        ],
      },
      realUseCases: {
        en: ["Image and document classification", "Sensor time-series modelling", "Transfer learning on small datasets"],
        fr: ["Classification d'images et de documents", "Modélisation de séries temporelles capteurs", "Transfer learning sur petits jeux de données"],
      },
      advantages: {
        en: ["State-of-the-art accuracy on unstructured data", "Reusable via transfer learning", "Scales with compute"],
        fr: ["Précision état de l'art sur le non-structuré", "Réutilisable via transfer learning", "Passe à l'échelle avec le compute"],
      },
      limits: {
        en: ["Compute and GPU cost", "Data-hungry", "Harder to interpret"],
        fr: ["Coût compute et GPU", "Gourmand en données", "Plus difficile à interpréter"],
      },
      skills: ["PyTorch", "GPU training", "Transfer learning", "Model export", "Latency tuning"],
    },
  },
  {
    id: "supervised-learning",
    title: { en: "Supervised Learning", fr: "Apprentissage supervisé" },
    categories: ["ml"],
    level: "Industrial Experience",
    description: {
      en: "Learning a mapping from labelled examples to predict classes or continuous targets reliably.",
      fr: "Apprentissage d'une correspondance à partir d'exemples labellisés pour prédire des classes ou cibles continues.",
    },
    useCase: {
      en: "Classification and regression on well-labelled business data.",
      fr: "Classification et régression sur des données métier bien labellisées.",
    },
    tech: ["Python", "Scikit-Learn", "PyTorch", "Pandas"],
    tags: ["ML", "Classification", "Regression", "Python"],
    detail: {
      overview: {
        en: "The workhorse of applied ML. Given labelled examples, the model learns to generalise to unseen data. Success depends on label quality, leakage control and honest evaluation.",
        fr: "Le cheval de bataille du ML appliqué. À partir d'exemples labellisés, le modèle apprend à généraliser à des données inédites. Le succès dépend de la qualité des labels, du contrôle des fuites et d'une évaluation honnête.",
      },
      stages: {
        en: [
          "Define the target and curate labels",
          "Split data while preventing leakage",
          "Train candidate models and tune",
          "Evaluate with task-appropriate metrics",
          "Calibrate and threshold for the business",
          "Ship and monitor performance",
        ],
        fr: [
          "Définir la cible et curer les labels",
          "Découper les données en évitant les fuites",
          "Entraîner des modèles candidats et tuner",
          "Évaluer avec des métriques adaptées",
          "Calibrer et seuiller pour le métier",
          "Déployer et monitorer la performance",
        ],
      },
      bestPractices: {
        en: [
          "Guard against data leakage rigorously",
          "Pick metrics that match the business cost",
          "Calibrate probabilities before thresholding",
          "Keep a frozen test set untouched",
        ],
        fr: [
          "Se prémunir rigoureusement des fuites de données",
          "Choisir des métriques alignées sur le coût métier",
          "Calibrer les probabilités avant le seuillage",
          "Garder un test set figé et intouché",
        ],
      },
      realUseCases: {
        en: ["IT incident email classification (CamemBERT)", "Credit / risk scoring", "Quality control"],
        fr: ["Classification d'e-mails d'incidents IT (CamemBERT)", "Scoring crédit / risque", "Contrôle qualité"],
      },
      advantages: {
        en: ["Well-understood and reliable", "Clear evaluation", "Broad tooling support"],
        fr: ["Bien maîtrisé et fiable", "Évaluation claire", "Outillage large"],
      },
      limits: {
        en: ["Labelling is costly", "Sensitive to label noise", "Struggles with shifting distributions"],
        fr: ["Le labelling coûte cher", "Sensible au bruit des labels", "Souffre des distributions changeantes"],
      },
      skills: ["Labelling strategy", "Cross-validation", "Metric selection", "Calibration"],
    },
  },
  {
    id: "unsupervised-learning",
    title: { en: "Unsupervised Learning", fr: "Apprentissage non supervisé" },
    categories: ["ml"],
    level: "Industrial Experience",
    description: {
      en: "Discovering structure — clusters, segments and anomalies — in data without labels.",
      fr: "Découverte de structure — clusters, segments et anomalies — dans des données sans labels.",
    },
    useCase: {
      en: "Customer segmentation, anomaly detection and exploratory analysis.",
      fr: "Segmentation client, détection d'anomalies et analyse exploratoire.",
    },
    tech: ["Python", "Scikit-Learn", "Pandas", "Spark"],
    tags: ["ML", "Clustering", "Anomaly", "Python"],
    detail: {
      overview: {
        en: "When labels are absent, unsupervised methods reveal the latent structure of data: groups of similar customers, recurring patterns, or outliers that signal fraud or failure.",
        fr: "En l'absence de labels, les méthodes non supervisées révèlent la structure latente des données : groupes de clients similaires, motifs récurrents, ou outliers signalant fraude ou panne.",
      },
      stages: {
        en: [
          "Clean and scale features",
          "Reduce dimensionality (PCA / UMAP)",
          "Cluster or score for anomalies",
          "Interpret and label the segments",
          "Validate stability across samples",
          "Operationalise the segments",
        ],
        fr: [
          "Nettoyer et normaliser les features",
          "Réduire la dimensionnalité (PCA / UMAP)",
          "Clusteriser ou scorer les anomalies",
          "Interpréter et nommer les segments",
          "Valider la stabilité sur plusieurs échantillons",
          "Opérationnaliser les segments",
        ],
      },
      bestPractices: {
        en: [
          "Scale features before distance-based methods",
          "Validate cluster stability, not just silhouette",
          "Translate clusters into business language",
          "Re-evaluate as data evolves",
        ],
        fr: [
          "Normaliser avant les méthodes à base de distance",
          "Valider la stabilité des clusters, pas que la silhouette",
          "Traduire les clusters en langage métier",
          "Réévaluer à mesure que la donnée évolue",
        ],
      },
      realUseCases: {
        en: ["Marketing segmentation (Competitivia)", "Fraud / anomaly detection", "Topic discovery in documents"],
        fr: ["Segmentation marketing (Competitivia)", "Détection de fraude / anomalies", "Découverte de thèmes dans des documents"],
      },
      advantages: {
        en: ["No labels required", "Reveals hidden structure", "Great for exploration"],
        fr: ["Pas de labels requis", "Révèle la structure cachée", "Idéal pour l'exploration"],
      },
      limits: {
        en: ["Hard to evaluate objectively", "Sensitive to scaling", "Results need interpretation"],
        fr: ["Difficile à évaluer objectivement", "Sensible à la normalisation", "Résultats à interpréter"],
      },
      skills: ["Clustering", "Dimensionality reduction", "Anomaly detection", "Interpretation"],
    },
  },
  {
    id: "semi-supervised-learning",
    title: { en: "Semi-Supervised Learning", fr: "Apprentissage semi-supervisé" },
    categories: ["ml", "dl"],
    level: "Academic Knowledge",
    description: {
      en: "Combining a small labelled set with abundant unlabelled data to boost performance cheaply.",
      fr: "Combiner un petit set labellisé avec beaucoup de données non labellisées pour gagner en performance à moindre coût.",
    },
    useCase: {
      en: "When labelling is expensive but raw data is plentiful.",
      fr: "Quand le labelling coûte cher mais que la donnée brute abonde.",
    },
    tech: ["Python", "PyTorch", "Scikit-Learn"],
    tags: ["ML", "DeepLearning", "Research", "Python"],
    detail: {
      overview: {
        en: "Semi-supervised learning leverages the geometry of unlabelled data — via pseudo-labelling or consistency regularisation — to extend a small labelled set, often closing much of the gap to fully supervised models.",
        fr: "L'apprentissage semi-supervisé exploite la géométrie des données non labellisées — pseudo-labelling ou régularisation par cohérence — pour étendre un petit set labellisé, comblant souvent une bonne part de l'écart avec le supervisé complet.",
      },
      stages: {
        en: [
          "Train an initial model on the labelled subset",
          "Generate pseudo-labels on unlabelled data",
          "Filter by confidence",
          "Retrain on the combined set",
          "Apply consistency regularisation",
          "Evaluate against a supervised baseline",
        ],
        fr: [
          "Entraîner un modèle initial sur le sous-ensemble labellisé",
          "Générer des pseudo-labels sur le non labellisé",
          "Filtrer par confiance",
          "Réentraîner sur le set combiné",
          "Appliquer la régularisation par cohérence",
          "Évaluer face à un baseline supervisé",
        ],
      },
      bestPractices: {
        en: [
          "Only keep high-confidence pseudo-labels",
          "Avoid confirmation bias loops",
          "Always compare to a supervised baseline",
          "Use augmentation for consistency training",
        ],
        fr: [
          "Ne garder que les pseudo-labels très confiants",
          "Éviter les boucles de biais de confirmation",
          "Toujours comparer à un baseline supervisé",
          "Utiliser l'augmentation pour la cohérence",
        ],
      },
      realUseCases: {
        en: ["Document classification with few labels", "Medical imaging triage", "Speech tagging"],
        fr: ["Classification documentaire avec peu de labels", "Triage d'imagerie médicale", "Étiquetage de la parole"],
      },
      advantages: {
        en: ["Cuts labelling cost", "Exploits free unlabelled data", "Often near-supervised accuracy"],
        fr: ["Réduit le coût de labelling", "Exploite la donnée non labellisée gratuite", "Souvent proche du supervisé"],
      },
      limits: {
        en: ["Risk of error amplification", "Sensitive to confidence thresholds", "Harder to debug"],
        fr: ["Risque d'amplification d'erreurs", "Sensible aux seuils de confiance", "Plus dur à déboguer"],
      },
      skills: ["Pseudo-labelling", "Consistency training", "Confidence calibration"],
    },
  },
  {
    id: "self-supervised-learning",
    title: { en: "Self-Supervised Learning", fr: "Apprentissage auto-supervisé" },
    categories: ["dl", "research"],
    level: "Research",
    description: {
      en: "Learning rich representations from raw data by solving pretext tasks — no human labels needed.",
      fr: "Apprendre des représentations riches depuis la donnée brute via des tâches prétextes — sans labels humains.",
    },
    useCase: {
      en: "Foundation pre-training, embeddings and label-scarce domains.",
      fr: "Pré-entraînement de modèles de fondation, embeddings et domaines pauvres en labels.",
    },
    tech: ["Python", "PyTorch", "Hugging Face"],
    tags: ["DeepLearning", "Research", "Embeddings", "Python"],
    detail: {
      overview: {
        en: "Self-supervision is the engine behind modern foundation models. By masking, contrasting or predicting parts of the input, models learn general representations that transfer to many downstream tasks with little labelled data.",
        fr: "L'auto-supervision est le moteur des modèles de fondation modernes. Par masquage, contraste ou prédiction de parties de l'entrée, les modèles apprennent des représentations générales qui se transfèrent à de nombreuses tâches avec peu de labels.",
      },
      stages: {
        en: [
          "Design a pretext task (masking / contrastive)",
          "Pre-train on large unlabelled corpora",
          "Learn transferable embeddings",
          "Fine-tune on a small labelled task",
          "Evaluate transfer quality",
          "Reuse representations across tasks",
        ],
        fr: [
          "Concevoir une tâche prétexte (masquage / contrastif)",
          "Pré-entraîner sur de grands corpus non labellisés",
          "Apprendre des embeddings transférables",
          "Fine-tuner sur une petite tâche labellisée",
          "Évaluer la qualité du transfert",
          "Réutiliser les représentations sur plusieurs tâches",
        ],
      },
      bestPractices: {
        en: [
          "Match the pretext task to the domain",
          "Evaluate representations on downstream tasks",
          "Reuse pre-trained backbones when possible",
          "Watch for representation collapse",
        ],
        fr: [
          "Adapter la tâche prétexte au domaine",
          "Évaluer les représentations sur les tâches aval",
          "Réutiliser des backbones pré-entraînés quand possible",
          "Surveiller le collapse de représentation",
        ],
      },
      realUseCases: {
        en: ["Domain-adapted text embeddings", "Pre-training on unlabelled imagery", "Audio representation learning"],
        fr: ["Embeddings texte adaptés au domaine", "Pré-entraînement sur images non labellisées", "Apprentissage de représentations audio"],
      },
      advantages: {
        en: ["Uses cheap unlabelled data", "Strong transfer", "Backbone for many tasks"],
        fr: ["Exploite la donnée non labellisée", "Fort transfert", "Backbone pour de nombreuses tâches"],
      },
      limits: {
        en: ["Heavy pre-training compute", "Pretext design matters", "Hard to interpret"],
        fr: ["Compute de pré-entraînement lourd", "Design du prétexte critique", "Difficile à interpréter"],
      },
      skills: ["Representation learning", "Contrastive methods", "Transfer learning"],
    },
  },
  {
    id: "reinforcement-learning",
    title: { en: "Reinforcement Learning", fr: "Apprentissage par renforcement" },
    categories: ["ml", "research"],
    level: "Academic Knowledge",
    description: {
      en: "Agents learning optimal policies by interacting with an environment and maximising reward.",
      fr: "Des agents apprenant des politiques optimales en interagissant avec un environnement pour maximiser une récompense.",
    },
    useCase: {
      en: "Sequential decision-making, control and optimisation under feedback.",
      fr: "Décision séquentielle, contrôle et optimisation sous feedback.",
    },
    tech: ["Python", "PyTorch", "TensorFlow"],
    tags: ["ML", "Research", "RL", "Python"],
    detail: {
      overview: {
        en: "Reinforcement learning frames a problem as states, actions and rewards. The agent learns by trial and error which behaviour maximises long-term return — powerful for control, and the basis of RLHF for aligning LLMs.",
        fr: "Le renforcement modélise un problème en états, actions et récompenses. L'agent apprend par essai-erreur quel comportement maximise le gain long terme — puissant pour le contrôle, et base du RLHF pour aligner les LLMs.",
      },
      stages: {
        en: [
          "Define states, actions and the reward function",
          "Build or simulate the environment",
          "Choose an algorithm (DQN / PPO)",
          "Train with exploration vs exploitation",
          "Evaluate policy robustness",
          "Deploy with safety bounds",
        ],
        fr: [
          "Définir états, actions et fonction de récompense",
          "Construire ou simuler l'environnement",
          "Choisir un algorithme (DQN / PPO)",
          "Entraîner avec exploration vs exploitation",
          "Évaluer la robustesse de la politique",
          "Déployer avec des bornes de sécurité",
        ],
      },
      bestPractices: {
        en: [
          "Design the reward to avoid gaming",
          "Use simulation before the real world",
          "Bound exploration for safety",
          "Track sample efficiency",
        ],
        fr: [
          "Concevoir la récompense pour éviter le gaming",
          "Simuler avant le monde réel",
          "Borner l'exploration pour la sécurité",
          "Suivre l'efficacité en échantillons",
        ],
      },
      realUseCases: {
        en: ["RLHF for LLM alignment", "Process and energy optimisation", "Dynamic pricing"],
        fr: ["RLHF pour l'alignement des LLMs", "Optimisation de process et d'énergie", "Pricing dynamique"],
      },
      advantages: {
        en: ["Handles sequential decisions", "Learns from feedback", "Optimises long-term goals"],
        fr: ["Gère les décisions séquentielles", "Apprend du feedback", "Optimise des objectifs long terme"],
      },
      limits: {
        en: ["Sample-inefficient", "Reward design is hard", "Risky without guardrails"],
        fr: ["Peu efficace en échantillons", "Conception de récompense ardue", "Risqué sans garde-fous"],
      },
      skills: ["Reward design", "Policy optimisation", "Simulation", "Safety bounds"],
    },
  },
  {
    id: "feature-engineering",
    title: { en: "Feature Engineering Pipeline", fr: "Pipeline de Feature Engineering" },
    categories: ["ml", "data"],
    level: "Industrial Experience",
    description: {
      en: "Systematic transformation of raw data into informative, leak-free features that lift model quality.",
      fr: "Transformation systématique de la donnée brute en features informatives et sans fuite qui améliorent les modèles.",
    },
    useCase: {
      en: "The single biggest lever on tabular model performance.",
      fr: "Le plus gros levier de performance sur les modèles tabulaires.",
    },
    tech: ["Python", "Pandas", "Scikit-Learn", "Spark", "Feast"],
    tags: ["ML", "Data", "Features", "Python"],
    detail: {
      overview: {
        en: "Good features beat fancy models. This pipeline encodes domain knowledge into reproducible transformations — encodings, aggregations, time windows — with strict separation between training and serving to prevent leakage and skew.",
        fr: "De bonnes features battent les modèles sophistiqués. Ce pipeline encode la connaissance métier en transformations reproductibles — encodages, agrégations, fenêtres temporelles — avec séparation stricte train / serving pour éviter fuites et skew.",
      },
      stages: {
        en: [
          "Profile and understand the raw data",
          "Encode categoricals and handle missing values",
          "Build aggregations and time-window features",
          "Select and validate features",
          "Define transformations once for train and serving",
          "Version and document the feature set",
        ],
        fr: [
          "Profiler et comprendre la donnée brute",
          "Encoder les catégorielles et gérer les manquants",
          "Construire agrégations et features temporelles",
          "Sélectionner et valider les features",
          "Définir les transformations une fois pour train et serving",
          "Versionner et documenter le jeu de features",
        ],
      },
      bestPractices: {
        en: [
          "Compute features identically in train and serving",
          "Never use future information",
          "Document each feature's meaning",
          "Test for leakage explicitly",
        ],
        fr: [
          "Calculer les features à l'identique train / serving",
          "Ne jamais utiliser d'information future",
          "Documenter le sens de chaque feature",
          "Tester explicitement les fuites",
        ],
      },
      realUseCases: {
        en: ["IoT sensor aggregations", "Behavioural marketing features", "Risk indicators"],
        fr: ["Agrégations de capteurs IoT", "Features comportementales marketing", "Indicateurs de risque"],
      },
      advantages: {
        en: ["Largest accuracy lever", "Encodes domain knowledge", "Improves any model"],
        fr: ["Plus gros levier de précision", "Encode la connaissance métier", "Améliore tout modèle"],
      },
      limits: {
        en: ["Time-consuming", "Leakage is easy to introduce", "Needs domain expertise"],
        fr: ["Chronophage", "Fuites faciles à introduire", "Nécessite l'expertise métier"],
      },
      skills: ["Feature design", "Encoding", "Leakage prevention", "Train/serving parity"],
    },
  },
  {
    id: "feature-store",
    title: { en: "Feature Store", fr: "Feature Store" },
    categories: ["mlops", "data"],
    level: "Enterprise",
    description: {
      en: "Central repository serving consistent features to training and real-time inference across teams.",
      fr: "Référentiel central servant des features cohérentes à l'entraînement et à l'inférence temps réel, partagé entre équipes.",
    },
    useCase: {
      en: "Reusing features across many models without training/serving skew.",
      fr: "Réutiliser des features sur de nombreux modèles sans skew train/serving.",
    },
    tech: ["Feast", "Spark", "Kafka", "Python", "Kubernetes"],
    tags: ["MLOps", "Data", "Feast", "Enterprise"],
    detail: {
      overview: {
        en: "A feature store decouples feature creation from consumption. Features are computed once, stored in offline (training) and online (serving) layers, and reused — guaranteeing consistency and accelerating new models.",
        fr: "Un feature store découple la création des features de leur consommation. Calculées une fois, elles sont stockées en couches offline (entraînement) et online (serving) et réutilisées — garantissant la cohérence et accélérant les nouveaux modèles.",
      },
      stages: {
        en: [
          "Define feature definitions and entities",
          "Materialise features to offline store",
          "Sync to a low-latency online store",
          "Serve point-in-time correct training sets",
          "Serve online features at inference",
          "Monitor freshness and usage",
        ],
        fr: [
          "Définir les features et entités",
          "Matérialiser les features dans le store offline",
          "Synchroniser vers un store online faible latence",
          "Servir des training sets point-in-time corrects",
          "Servir les features online à l'inférence",
          "Monitorer la fraîcheur et l'usage",
        ],
      },
      bestPractices: {
        en: [
          "Guarantee point-in-time correctness",
          "Share definitions across teams",
          "Monitor feature freshness",
          "Govern access and lineage",
        ],
        fr: [
          "Garantir la correction point-in-time",
          "Partager les définitions entre équipes",
          "Monitorer la fraîcheur des features",
          "Gouverner accès et lineage",
        ],
      },
      realUseCases: {
        en: ["Shared features across model teams", "Real-time scoring", "Regulated feature lineage"],
        fr: ["Features partagées entre équipes ML", "Scoring temps réel", "Lineage de features régulé"],
      },
      advantages: {
        en: ["Eliminates train/serving skew", "Feature reuse", "Faster model delivery"],
        fr: ["Élimine le skew train/serving", "Réutilisation des features", "Livraison de modèles accélérée"],
      },
      limits: {
        en: ["Infrastructure overhead", "Overkill for small teams", "Operational complexity"],
        fr: ["Surcoût d'infrastructure", "Excessif pour petites équipes", "Complexité opérationnelle"],
      },
      skills: ["Feast", "Online/offline stores", "Data freshness", "Governance"],
    },
  },
  {
    id: "data-engineering",
    title: { en: "Data Engineering Pipeline", fr: "Pipeline Data Engineering" },
    categories: ["data"],
    level: "Industrial Experience",
    description: {
      en: "Reliable batch and streaming pipelines that ingest, clean and serve data for analytics and AI.",
      fr: "Pipelines batch et streaming fiables qui ingèrent, nettoient et servent la donnée pour l'analytics et l'IA.",
    },
    useCase: {
      en: "The foundation every model and dashboard depends on.",
      fr: "La fondation dont dépendent tous les modèles et dashboards.",
    },
    tech: ["Python", "Airflow", "Spark", "Kafka", "DVC"],
    tags: ["Data", "ETL", "Streaming", "Python"],
    detail: {
      overview: {
        en: "Without trustworthy data, AI fails silently. This pipeline orchestrates ingestion from many sources, validation, transformation and delivery to warehouses, lakes and feature stores — batch and real-time.",
        fr: "Sans données fiables, l'IA échoue silencieusement. Ce pipeline orchestre l'ingestion multi-sources, la validation, la transformation et la livraison vers entrepôts, lacs et feature stores — en batch et temps réel.",
      },
      stages: {
        en: [
          "Ingest from APIs, files and streams",
          "Validate schema and data quality",
          "Transform and standardise (ELT/ETL)",
          "Load to warehouse / lake",
          "Orchestrate and schedule (Airflow)",
          "Monitor SLAs and data quality",
        ],
        fr: [
          "Ingérer depuis APIs, fichiers et flux",
          "Valider schéma et qualité des données",
          "Transformer et standardiser (ELT/ETL)",
          "Charger vers entrepôt / lac",
          "Orchestrer et planifier (Airflow)",
          "Monitorer SLAs et qualité",
        ],
      },
      bestPractices: {
        en: [
          "Make pipelines idempotent",
          "Validate data quality at the gate",
          "Build for replay and backfill",
          "Alert on broken SLAs",
        ],
        fr: [
          "Rendre les pipelines idempotents",
          "Valider la qualité dès l'entrée",
          "Prévoir le replay et le backfill",
          "Alerter sur les SLAs cassés",
        ],
      },
      realUseCases: {
        en: ["SharePoint / Freshservice ingestion for RAG", "IoT streaming pipelines", "Analytics warehousing"],
        fr: ["Ingestion SharePoint / Freshservice pour RAG", "Pipelines streaming IoT", "Entreposage analytics"],
      },
      advantages: {
        en: ["Trustworthy data foundation", "Scales batch and streaming", "Enables all downstream AI"],
        fr: ["Fondation de données fiable", "Passe à l'échelle batch et streaming", "Active toute l'IA en aval"],
      },
      limits: {
        en: ["Operationally heavy", "Source changes break flows", "Requires monitoring discipline"],
        fr: ["Lourd en exploitation", "Les changements de sources cassent les flux", "Exige une discipline de monitoring"],
      },
      skills: ["Airflow", "Spark", "Streaming", "Data quality", "Orchestration"],
    },
  },
  {
    id: "end-to-end-ai",
    title: { en: "End-to-End AI System", fr: "Système IA de bout en bout" },
    categories: ["mlops", "cloud"],
    level: "Industrial Experience",
    description: {
      en: "A complete system from data ingestion to a deployed, monitored product users actually rely on.",
      fr: "Un système complet, de l'ingestion de la donnée au produit déployé et monitoré dont les utilisateurs dépendent.",
    },
    useCase: {
      en: "Shipping AI that survives real corporate constraints.",
      fr: "Livrer une IA qui survit aux vraies contraintes corporate.",
    },
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Azure", "MLflow"],
    tags: ["MLOps", "Cloud", "Production", "FullStack"],
    detail: {
      overview: {
        en: "The discipline of connecting every layer — data, model, API, UI, infra and monitoring — into one coherent product. This is where most AI projects fail, and where engineering rigour makes the difference.",
        fr: "La discipline de connecter chaque couche — données, modèle, API, UI, infra et monitoring — en un produit cohérent. C'est là que la plupart des projets IA échouent, et où la rigueur d'ingénierie fait la différence.",
      },
      stages: {
        en: [
          "Frame the problem and success metrics",
          "Build the data and model pipelines",
          "Wrap models in a robust API",
          "Add UI and integrations",
          "Containerise and deploy to cloud",
          "Monitor, log and iterate",
        ],
        fr: [
          "Cadrer le problème et les métriques de succès",
          "Construire les pipelines data et modèle",
          "Encapsuler les modèles dans une API robuste",
          "Ajouter UI et intégrations",
          "Conteneuriser et déployer dans le cloud",
          "Monitorer, logger et itérer",
        ],
      },
      bestPractices: {
        en: [
          "Design for failure and graceful degradation",
          "Instrument everything from day one",
          "Keep humans in the loop where it matters",
          "Ship thin, then iterate",
        ],
        fr: [
          "Concevoir pour l'échec et la dégradation gracieuse",
          "Instrumenter tout dès le premier jour",
          "Garder l'humain dans la boucle où c'est critique",
          "Livrer minimal, puis itérer",
        ],
      },
      realUseCases: {
        en: ["DNSI RAG assistant at ASTERA Group", "Email classifier integrated to Freshservice", "Smart farming IoT + ML"],
        fr: ["Assistant RAG DNSI au Groupe ASTERA", "Classifieur d'e-mails intégré à Freshservice", "Élevage intelligent IoT + ML"],
      },
      advantages: {
        en: ["Delivers real business value", "Robust and maintainable", "Bridges all disciplines"],
        fr: ["Apporte une vraie valeur métier", "Robuste et maintenable", "Relie toutes les disciplines"],
      },
      limits: {
        en: ["Broad skill set required", "Higher upfront effort", "Cross-team coordination"],
        fr: ["Large palette de compétences requise", "Effort initial plus élevé", "Coordination inter-équipes"],
      },
      skills: ["System design", "MLOps", "API engineering", "Cloud", "Monitoring"],
    },
  },
  {
    id: "computer-vision",
    title: { en: "Computer Vision Pipeline", fr: "Pipeline de Vision par ordinateur" },
    categories: ["cv", "dl"],
    level: "Industrial Experience",
    description: {
      en: "Detecting, classifying and segmenting visual content from images and video streams.",
      fr: "Détecter, classifier et segmenter du contenu visuel depuis images et flux vidéo.",
    },
    useCase: {
      en: "Quality control, recognition, and mobile / offline visual intelligence.",
      fr: "Contrôle qualité, reconnaissance, et intelligence visuelle mobile / offline.",
    },
    tech: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Docker"],
    tags: ["ComputerVision", "DeepLearning", "Python", "Mobile"],
    detail: {
      overview: {
        en: "From raw pixels to decisions. A vision pipeline handles acquisition, pre-processing, model inference (classification, detection, segmentation) and post-processing — optimised for accuracy and, often, on-device latency.",
        fr: "Des pixels bruts à la décision. Un pipeline vision gère l'acquisition, le pré-traitement, l'inférence (classification, détection, segmentation) et le post-traitement — optimisé pour la précision et, souvent, la latence on-device.",
      },
      stages: {
        en: [
          "Acquire and pre-process images",
          "Augment and balance the dataset",
          "Train / fine-tune a vision model",
          "Run detection / segmentation inference",
          "Post-process and threshold results",
          "Optimise and deploy (edge / cloud)",
        ],
        fr: [
          "Acquérir et pré-traiter les images",
          "Augmenter et équilibrer le dataset",
          "Entraîner / fine-tuner un modèle vision",
          "Inférer détection / segmentation",
          "Post-traiter et seuiller les résultats",
          "Optimiser et déployer (edge / cloud)",
        ],
      },
      bestPractices: {
        en: [
          "Use augmentation matched to real conditions",
          "Quantise / prune for on-device use",
          "Validate on representative lighting and angles",
          "Monitor for domain shift in the field",
        ],
        fr: [
          "Augmenter selon les conditions réelles",
          "Quantifier / élaguer pour l'on-device",
          "Valider sur des conditions représentatives",
          "Surveiller le shift de domaine sur le terrain",
        ],
      },
      realUseCases: {
        en: ["Kijani waste recognition (offline mobile)", "Defect / quality inspection", "Document layout analysis"],
        fr: ["Reconnaissance de déchets Kijani (mobile offline)", "Inspection qualité / défauts", "Analyse de mise en page de documents"],
      },
      advantages: {
        en: ["Automates visual tasks", "Runs on-device", "High accuracy with transfer learning"],
        fr: ["Automatise les tâches visuelles", "Fonctionne on-device", "Haute précision via transfer learning"],
      },
      limits: {
        en: ["Sensitive to conditions", "Needs labelled images", "Edge compute constraints"],
        fr: ["Sensible aux conditions", "Nécessite des images labellisées", "Contraintes de compute edge"],
      },
      skills: ["CNNs / transformers", "Augmentation", "Model quantisation", "Edge deployment"],
    },
  },
  {
    id: "ocr-pipeline",
    title: { en: "OCR Pipeline", fr: "Pipeline OCR" },
    categories: ["cv", "nlp"],
    level: "Industrial Experience",
    description: {
      en: "Extracting structured text from scanned documents, PDFs and images for downstream AI.",
      fr: "Extraire du texte structuré depuis documents scannés, PDF et images pour l'IA en aval.",
    },
    useCase: {
      en: "Feeding document-heavy RAG and automation from non-digital sources.",
      fr: "Alimenter des RAG documentaires et de l'automatisation depuis des sources non numériques.",
    },
    tech: ["Python", "OpenCV", "Hugging Face", "FastAPI"],
    tags: ["OCR", "ComputerVision", "NLP", "Python"],
    detail: {
      overview: {
        en: "OCR bridges the physical and digital. The pipeline detects, recognises and structures text from documents — handling layout, tables and multiple languages — so downstream NLP and RAG can consume it cleanly.",
        fr: "L'OCR fait le pont entre le physique et le numérique. Le pipeline détecte, reconnaît et structure le texte des documents — mise en page, tableaux, multilingue — pour que NLP et RAG le consomment proprement.",
      },
      stages: {
        en: [
          "Pre-process and de-skew the page",
          "Detect text regions and layout",
          "Recognise characters (OCR engine)",
          "Reconstruct structure (tables, headings)",
          "Post-correct with language models",
          "Export structured text",
        ],
        fr: [
          "Pré-traiter et redresser la page",
          "Détecter les zones de texte et la mise en page",
          "Reconnaître les caractères (moteur OCR)",
          "Reconstruire la structure (tableaux, titres)",
          "Post-corriger avec des modèles de langue",
          "Exporter du texte structuré",
        ],
      },
      bestPractices: {
        en: [
          "Clean images before recognition",
          "Preserve layout for downstream context",
          "Post-correct domain vocabulary",
          "Measure character and field accuracy",
        ],
        fr: [
          "Nettoyer les images avant reconnaissance",
          "Préserver la mise en page pour le contexte aval",
          "Post-corriger le vocabulaire métier",
          "Mesurer la précision caractères et champs",
        ],
      },
      realUseCases: {
        en: ["Ingesting scanned enterprise docs for RAG", "Invoice / form extraction", "Multilingual archives"],
        fr: ["Ingestion de docs scannés pour RAG", "Extraction de factures / formulaires", "Archives multilingues"],
      },
      advantages: {
        en: ["Unlocks paper data", "Enables document AI", "Handles many languages"],
        fr: ["Débloque les données papier", "Active l'IA documentaire", "Gère de nombreuses langues"],
      },
      limits: {
        en: ["Quality drops on poor scans", "Complex layouts are hard", "Post-correction often needed"],
        fr: ["Qualité dégradée sur scans médiocres", "Mises en page complexes difficiles", "Post-correction souvent nécessaire"],
      },
      skills: ["OCR engines", "Layout analysis", "Text post-correction", "Document parsing"],
    },
  },
  {
    id: "nlp-pipeline",
    title: { en: "NLP Pipeline", fr: "Pipeline NLP" },
    categories: ["nlp"],
    level: "Industrial Experience",
    description: {
      en: "Cleaning, tokenising and modelling text for classification, extraction and understanding.",
      fr: "Nettoyer, tokeniser et modéliser le texte pour la classification, l'extraction et la compréhension.",
    },
    useCase: {
      en: "Any task that turns unstructured text into structured signals.",
      fr: "Toute tâche transformant du texte non structuré en signaux structurés.",
    },
    tech: ["Python", "Hugging Face", "spaCy", "PyTorch"],
    tags: ["NLP", "Transformers", "Python", "Multilingual"],
    detail: {
      overview: {
        en: "A modern NLP pipeline standardises text processing — normalisation, tokenisation, transformer encoding — and routes it to the right head: classification, extraction, similarity or generation, often multilingual.",
        fr: "Un pipeline NLP moderne standardise le traitement du texte — normalisation, tokenisation, encodage transformer — et le route vers la bonne tête : classification, extraction, similarité ou génération, souvent multilingue.",
      },
      stages: {
        en: [
          "Normalise and clean text",
          "Tokenise for the target model",
          "Encode with a transformer",
          "Apply the task head (classify / extract)",
          "Calibrate and post-process",
          "Serve and monitor",
        ],
        fr: [
          "Normaliser et nettoyer le texte",
          "Tokeniser pour le modèle cible",
          "Encoder avec un transformer",
          "Appliquer la tête de tâche (classifier / extraire)",
          "Calibrer et post-traiter",
          "Servir et monitorer",
        ],
      },
      bestPractices: {
        en: [
          "Match the tokenizer to the model",
          "Handle language and domain specifics",
          "Evaluate per-class, not just global accuracy",
          "Monitor for vocabulary drift",
        ],
        fr: [
          "Adapter le tokenizer au modèle",
          "Gérer les spécificités langue et domaine",
          "Évaluer par classe, pas seulement globalement",
          "Surveiller la dérive de vocabulaire",
        ],
      },
      realUseCases: {
        en: ["French IT email classification (CamemBERT)", "Support ticket routing", "Content moderation"],
        fr: ["Classification d'e-mails IT français (CamemBERT)", "Routage de tickets support", "Modération de contenu"],
      },
      advantages: {
        en: ["Reusable across text tasks", "Strong multilingual support", "Mature ecosystem"],
        fr: ["Réutilisable sur les tâches texte", "Fort support multilingue", "Écosystème mature"],
      },
      limits: {
        en: ["Domain language needs adaptation", "Bias in pretrained models", "Compute for large models"],
        fr: ["La langue métier demande de l'adaptation", "Biais des modèles pré-entraînés", "Compute pour les gros modèles"],
      },
      skills: ["Tokenisation", "Transformers", "Hugging Face", "Multilingual NLP"],
    },
  },
  {
    id: "text-classification",
    title: { en: "Text Classification", fr: "Classification de texte" },
    categories: ["nlp", "ml"],
    level: "Industrial Experience",
    description: {
      en: "Assigning labels to text — flat, hierarchical or multi-label — with fine-tuned transformers.",
      fr: "Attribuer des labels au texte — plate, hiérarchique ou multi-label — avec des transformers fine-tunés.",
    },
    useCase: {
      en: "Triage, tagging, routing and intent detection at scale.",
      fr: "Triage, tagging, routage et détection d'intention à l'échelle.",
    },
    tech: ["Python", "Hugging Face", "PyTorch", "FastAPI"],
    tags: ["NLP", "Classification", "Transformers", "Python"],
    detail: {
      overview: {
        en: "Production text classification means more than accuracy: it requires the right architecture (flat vs hierarchical vs multi-head), calibrated confidence and clean integration into existing tools.",
        fr: "La classification de texte en production dépasse la précision : elle exige la bonne architecture (plate vs hiérarchique vs multi-head), une confiance calibrée et une intégration propre aux outils existants.",
      },
      stages: {
        en: [
          "Define the label taxonomy",
          "Choose flat / hierarchical / multi-head design",
          "Fine-tune a transformer encoder",
          "Calibrate confidence thresholds",
          "Integrate via API into workflows",
          "Monitor per-class performance",
        ],
        fr: [
          "Définir la taxonomie de labels",
          "Choisir le design plate / hiérarchique / multi-head",
          "Fine-tuner un encodeur transformer",
          "Calibrer les seuils de confiance",
          "Intégrer via API dans les workflows",
          "Monitorer la performance par classe",
        ],
      },
      bestPractices: {
        en: [
          "Benchmark several architectures",
          "Handle class imbalance",
          "Set confidence thresholds for fallback to humans",
          "Track drift per category",
        ],
        fr: [
          "Benchmarker plusieurs architectures",
          "Gérer le déséquilibre de classes",
          "Fixer des seuils de confiance pour le fallback humain",
          "Suivre le drift par catégorie",
        ],
      },
      realUseCases: {
        en: ["3-level IT incident classification (Freshservice)", "Email and ticket triage", "Document tagging"],
        fr: ["Classification d'incidents IT à 3 niveaux (Freshservice)", "Triage d'e-mails et tickets", "Tagging de documents"],
      },
      advantages: {
        en: ["High automation rate", "Integrates with existing tools", "Scales to millions of items"],
        fr: ["Fort taux d'automatisation", "S'intègre aux outils existants", "Passe à des millions d'items"],
      },
      limits: {
        en: ["Needs quality labels", "New categories require retraining", "Edge cases need human fallback"],
        fr: ["Nécessite des labels de qualité", "Nouvelles catégories = réentraînement", "Cas limites = fallback humain"],
      },
      skills: ["Fine-tuning", "Hierarchical classification", "Calibration", "API integration"],
    },
  },
  {
    id: "ner",
    title: { en: "Named Entity Recognition", fr: "Reconnaissance d'entités nommées" },
    categories: ["nlp"],
    level: "Industrial Experience",
    description: {
      en: "Extracting structured entities — names, dates, amounts, custom types — from free text.",
      fr: "Extraire des entités structurées — noms, dates, montants, types personnalisés — depuis du texte libre.",
    },
    useCase: {
      en: "Turning documents into structured records and knowledge.",
      fr: "Transformer des documents en enregistrements et connaissances structurés.",
    },
    tech: ["Python", "spaCy", "Hugging Face", "PyTorch"],
    tags: ["NLP", "NER", "Extraction", "Python"],
    detail: {
      overview: {
        en: "NER locates and classifies spans of text into entity types. Fine-tuned on domain data, it powers extraction, anonymisation and the construction of knowledge graphs from unstructured documents.",
        fr: "La NER localise et classe des segments de texte en types d'entités. Fine-tunée sur des données métier, elle alimente l'extraction, l'anonymisation et la construction de graphes de connaissances depuis des documents non structurés.",
      },
      stages: {
        en: [
          "Define entity types for the domain",
          "Annotate or bootstrap training data",
          "Fine-tune a token-classification model",
          "Resolve and normalise entities",
          "Link entities to a knowledge base",
          "Evaluate span-level F1",
        ],
        fr: [
          "Définir les types d'entités du domaine",
          "Annoter ou bootstrapper les données",
          "Fine-tuner un modèle de classification de tokens",
          "Résoudre et normaliser les entités",
          "Lier les entités à une base de connaissances",
          "Évaluer le F1 au niveau des spans",
        ],
      },
      bestPractices: {
        en: [
          "Define entity boundaries precisely",
          "Use consistent annotation guidelines",
          "Normalise extracted entities",
          "Evaluate at span level, not token",
        ],
        fr: [
          "Définir précisément les frontières d'entités",
          "Utiliser des guides d'annotation cohérents",
          "Normaliser les entités extraites",
          "Évaluer au niveau des spans, pas des tokens",
        ],
      },
      realUseCases: {
        en: ["Contract and invoice extraction", "PII anonymisation (GDPR)", "Knowledge-graph population"],
        fr: ["Extraction de contrats et factures", "Anonymisation PII (RGPD)", "Peuplement de graphes de connaissances"],
      },
      advantages: {
        en: ["Structures free text", "Enables automation", "Supports GDPR anonymisation"],
        fr: ["Structure le texte libre", "Active l'automatisation", "Supporte l'anonymisation RGPD"],
      },
      limits: {
        en: ["Annotation effort", "Ambiguous entities", "Domain adaptation needed"],
        fr: ["Effort d'annotation", "Entités ambiguës", "Adaptation au domaine nécessaire"],
      },
      skills: ["Token classification", "Annotation", "Entity linking", "Evaluation"],
    },
  },
  {
    id: "semantic-search",
    title: { en: "Semantic Search", fr: "Recherche sémantique" },
    categories: ["nlp", "rag"],
    level: "Production Ready",
    description: {
      en: "Search by meaning, not keywords, using embeddings and approximate nearest-neighbour retrieval.",
      fr: "Rechercher par le sens, pas par mots-clés, via des embeddings et une recherche du plus proche voisin.",
    },
    useCase: {
      en: "Finding the right document among thousands, instantly.",
      fr: "Trouver le bon document parmi des milliers, instantanément.",
    },
    tech: ["Python", "ChromaDB", "FAISS", "Qdrant", "OpenAI", "FastAPI"],
    tags: ["RAG", "Embeddings", "Search", "Python"],
    detail: {
      overview: {
        en: "Semantic search embeds queries and documents into a shared vector space, retrieving by similarity. Hybrid setups combine it with keyword search and re-ranking for precision on enterprise corpora.",
        fr: "La recherche sémantique projette requêtes et documents dans un espace vectoriel commun et récupère par similarité. Les setups hybrides la combinent à la recherche par mots-clés et au re-ranking pour la précision sur des corpus d'entreprise.",
      },
      stages: {
        en: [
          "Chunk and embed the corpus",
          "Index vectors (ANN)",
          "Embed the query at runtime",
          "Retrieve top-k by similarity",
          "Re-rank and apply filters",
          "Return ranked results",
        ],
        fr: [
          "Découper et embedder le corpus",
          "Indexer les vecteurs (ANN)",
          "Embedder la requête à la volée",
          "Récupérer le top-k par similarité",
          "Re-ranker et appliquer des filtres",
          "Retourner les résultats classés",
        ],
      },
      bestPractices: {
        en: [
          "Tune chunk size to content",
          "Combine semantic and keyword (hybrid)",
          "Add a re-ranking stage for precision",
          "Filter by metadata and permissions",
        ],
        fr: [
          "Adapter la taille des chunks au contenu",
          "Combiner sémantique et mots-clés (hybride)",
          "Ajouter une étape de re-ranking",
          "Filtrer par métadonnées et permissions",
        ],
      },
      realUseCases: {
        en: ["Enterprise knowledge search (ASTERA)", "Support deflection", "Legal / research retrieval"],
        fr: ["Recherche de connaissances entreprise (ASTERA)", "Déflection de support", "Recherche juridique / recherche"],
      },
      advantages: {
        en: ["Understands intent", "Handles synonyms and phrasing", "Foundation for RAG"],
        fr: ["Comprend l'intention", "Gère synonymes et formulations", "Fondation du RAG"],
      },
      limits: {
        en: ["Embedding quality dependent", "Needs good chunking", "Index maintenance"],
        fr: ["Dépend de la qualité des embeddings", "Nécessite un bon chunking", "Maintenance de l'index"],
      },
      skills: ["Embeddings", "Vector indexing", "Hybrid search", "Re-ranking"],
    },
  },
  {
    id: "embedding-pipeline",
    title: { en: "Embedding Pipeline", fr: "Pipeline d'Embeddings" },
    categories: ["rag", "nlp"],
    level: "Production Ready",
    description: {
      en: "Transforming text, images or code into dense vectors that capture meaning for search and RAG.",
      fr: "Transformer texte, images ou code en vecteurs denses capturant le sens pour la recherche et le RAG.",
    },
    useCase: {
      en: "The representation layer behind every semantic system.",
      fr: "La couche de représentation derrière tout système sémantique.",
    },
    tech: ["Python", "OpenAI", "Mistral", "Hugging Face", "ChromaDB"],
    tags: ["RAG", "Embeddings", "NLP", "Python"],
    detail: {
      overview: {
        en: "An embedding pipeline standardises how content becomes vectors: chunking, model choice, batching and storage. Consistency here determines the quality of every search and RAG system built on top.",
        fr: "Un pipeline d'embeddings standardise la transformation du contenu en vecteurs : chunking, choix du modèle, batching et stockage. La cohérence ici détermine la qualité de toute recherche et RAG construits dessus.",
      },
      stages: {
        en: [
          "Chunk content with overlap",
          "Choose an embedding model",
          "Batch-embed efficiently",
          "Attach metadata to vectors",
          "Store in a vector database",
          "Refresh on content changes",
        ],
        fr: [
          "Découper le contenu avec recouvrement",
          "Choisir un modèle d'embeddings",
          "Embedder par batch efficacement",
          "Attacher des métadonnées aux vecteurs",
          "Stocker dans une base vectorielle",
          "Rafraîchir aux changements de contenu",
        ],
      },
      bestPractices: {
        en: [
          "Keep the same model for index and query",
          "Choose chunk size deliberately",
          "Store rich metadata for filtering",
          "Version embeddings with the model",
        ],
        fr: [
          "Garder le même modèle index et requête",
          "Choisir délibérément la taille des chunks",
          "Stocker des métadonnées riches pour le filtrage",
          "Versionner les embeddings avec le modèle",
        ],
      },
      realUseCases: {
        en: ["Indexing 30+ GB of enterprise docs", "Code search", "Recommendation"],
        fr: ["Indexation de 30+ Go de docs entreprise", "Recherche de code", "Recommandation"],
      },
      advantages: {
        en: ["Powers semantic systems", "Multimodal", "Reusable representation"],
        fr: ["Alimente les systèmes sémantiques", "Multimodal", "Représentation réutilisable"],
      },
      limits: {
        en: ["Re-embed on model change", "Storage cost at scale", "Chunking trade-offs"],
        fr: ["Réembedder au changement de modèle", "Coût de stockage à l'échelle", "Compromis de chunking"],
      },
      skills: ["Chunking", "Embedding models", "Vector storage", "Metadata design"],
    },
  },
  {
    id: "vector-database",
    title: { en: "Vector Database Architecture", fr: "Architecture de base vectorielle" },
    categories: ["rag", "data"],
    level: "Production Ready",
    description: {
      en: "Storing and querying millions of embeddings with fast, filtered approximate nearest-neighbour search.",
      fr: "Stocker et interroger des millions d'embeddings via une recherche du plus proche voisin rapide et filtrée.",
    },
    useCase: {
      en: "The memory layer of RAG and semantic search at scale.",
      fr: "La couche mémoire du RAG et de la recherche sémantique à l'échelle.",
    },
    tech: ["ChromaDB", "FAISS", "Qdrant", "Python", "Kubernetes"],
    tags: ["RAG", "VectorDB", "Data", "Qdrant"],
    detail: {
      overview: {
        en: "Vector databases index high-dimensional embeddings for sub-second similarity search with metadata filtering. Choosing the right index, distance metric and deployment model is key to latency and recall at scale.",
        fr: "Les bases vectorielles indexent des embeddings haute dimension pour une recherche de similarité sub-seconde avec filtrage par métadonnées. Le choix de l'index, de la métrique de distance et du déploiement est clé pour la latence et le rappel à l'échelle.",
      },
      stages: {
        en: [
          "Pick the store (Chroma / FAISS / Qdrant)",
          "Choose index type and distance metric",
          "Define the metadata schema",
          "Ingest and index vectors",
          "Query with filters and top-k",
          "Scale, shard and back up",
        ],
        fr: [
          "Choisir le store (Chroma / FAISS / Qdrant)",
          "Choisir le type d'index et la métrique",
          "Définir le schéma de métadonnées",
          "Ingérer et indexer les vecteurs",
          "Interroger avec filtres et top-k",
          "Scaler, sharder et sauvegarder",
        ],
      },
      bestPractices: {
        en: [
          "Match index type to recall / latency goals",
          "Filter by metadata and permissions",
          "Plan re-indexing strategy",
          "Monitor recall and latency",
        ],
        fr: [
          "Adapter l'index aux objectifs rappel / latence",
          "Filtrer par métadonnées et permissions",
          "Planifier la stratégie de ré-indexation",
          "Monitorer rappel et latence",
        ],
      },
      realUseCases: {
        en: ["RAG memory for enterprise assistants", "Image / product similarity", "Deduplication"],
        fr: ["Mémoire RAG pour assistants d'entreprise", "Similarité images / produits", "Déduplication"],
      },
      advantages: {
        en: ["Fast similarity at scale", "Metadata filtering", "Horizontally scalable"],
        fr: ["Similarité rapide à l'échelle", "Filtrage par métadonnées", "Scalable horizontalement"],
      },
      limits: {
        en: ["Recall vs latency trade-off", "Re-indexing cost", "Operational tuning"],
        fr: ["Compromis rappel vs latence", "Coût de ré-indexation", "Réglage opérationnel"],
      },
      skills: ["ANN indexing", "Qdrant / Chroma", "Sharding", "Latency tuning"],
    },
  },
  {
    id: "rag",
    title: { en: "Retrieval-Augmented Generation", fr: "Retrieval-Augmented Generation" },
    categories: ["rag", "llms", "genai"],
    level: "Production Ready",
    description: {
      en: "Grounding LLM answers in your own data via retrieval — accurate, sourced and up to date.",
      fr: "Ancrer les réponses des LLMs dans vos données via la récupération — précis, sourcé et à jour.",
    },
    useCase: {
      en: "Enterprise assistants that answer from internal knowledge, with citations.",
      fr: "Assistants d'entreprise répondant depuis la connaissance interne, avec citations.",
    },
    tech: ["Python", "LangChain", "ChromaDB", "Mistral", "OpenAI", "FastAPI", "Docker"],
    tags: ["RAG", "LLM", "GenAI", "Production"],
    detail: {
      overview: {
        en: "RAG combines retrieval with generation: relevant chunks are fetched from a vector store and injected into the LLM prompt. It curbs hallucination, keeps answers current and provides traceable sources — the backbone of enterprise GenAI.",
        fr: "Le RAG combine récupération et génération : des chunks pertinents sont récupérés d'une base vectorielle et injectés dans le prompt du LLM. Il limite l'hallucination, garde les réponses à jour et fournit des sources traçables — l'épine dorsale de la GenAI d'entreprise.",
      },
      stages: {
        en: [
          "Ingest and chunk source documents",
          "Embed and index in a vector store",
          "Retrieve relevant chunks per query",
          "Re-rank and assemble context",
          "Generate a grounded, cited answer",
          "Evaluate faithfulness and add guardrails",
        ],
        fr: [
          "Ingérer et découper les documents sources",
          "Embedder et indexer dans une base vectorielle",
          "Récupérer les chunks pertinents par requête",
          "Re-ranker et assembler le contexte",
          "Générer une réponse ancrée et sourcée",
          "Évaluer la fidélité et ajouter des garde-fous",
        ],
      },
      bestPractices: {
        en: [
          "Cite sources for every answer",
          "Use hybrid retrieval + re-ranking",
          "Add guardrails against off-topic answers",
          "Evaluate faithfulness, not just fluency",
        ],
        fr: [
          "Citer les sources de chaque réponse",
          "Utiliser récupération hybride + re-ranking",
          "Ajouter des garde-fous hors-sujet",
          "Évaluer la fidélité, pas que la fluidité",
        ],
      },
      realUseCases: {
        en: ["DNSI assistant over 30+ GB (ASTERA Group)", "Support knowledge bots", "Policy / compliance Q&A"],
        fr: ["Assistant DNSI sur 30+ Go (Groupe ASTERA)", "Bots de connaissance support", "Q&R conformité / politiques"],
      },
      advantages: {
        en: ["Reduces hallucination", "Always up to date", "Traceable sources"],
        fr: ["Réduit l'hallucination", "Toujours à jour", "Sources traçables"],
      },
      limits: {
        en: ["Quality bound by retrieval", "Chunking sensitive", "Latency of multi-stage"],
        fr: ["Qualité limitée par la récupération", "Sensible au chunking", "Latence du multi-étapes"],
      },
      skills: ["Retrieval", "Prompt assembly", "Re-ranking", "Faithfulness evaluation", "FastAPI"],
    },
  },
  {
    id: "llm-pipeline",
    title: { en: "LLM Pipeline", fr: "Pipeline LLM" },
    categories: ["llms", "genai"],
    level: "Production Ready",
    description: {
      en: "Serving large language models reliably with prompting, caching, streaming and guardrails.",
      fr: "Servir des grands modèles de langage de façon fiable avec prompting, cache, streaming et garde-fous.",
    },
    useCase: {
      en: "Any product feature powered by an LLM in production.",
      fr: "Toute fonctionnalité produit propulsée par un LLM en production.",
    },
    tech: ["Python", "LangChain", "OpenAI", "Mistral", "FastAPI", "Docker"],
    tags: ["LLM", "GenAI", "Production", "Python"],
    detail: {
      overview: {
        en: "Beyond a single API call, a robust LLM pipeline manages prompts, context windows, streaming, caching, fallbacks across providers, cost control and safety filtering — turning a model into a dependable product feature.",
        fr: "Au-delà d'un simple appel API, un pipeline LLM robuste gère prompts, fenêtres de contexte, streaming, cache, fallbacks multi-fournisseurs, contrôle des coûts et filtrage de sécurité — transformant un modèle en fonctionnalité produit fiable.",
      },
      stages: {
        en: [
          "Design and template prompts",
          "Manage context and token budgets",
          "Call the model with streaming",
          "Cache and add provider fallbacks",
          "Filter outputs for safety",
          "Track cost, latency and quality",
        ],
        fr: [
          "Concevoir et templater les prompts",
          "Gérer le contexte et le budget de tokens",
          "Appeler le modèle en streaming",
          "Cacher et ajouter des fallbacks fournisseurs",
          "Filtrer les sorties pour la sécurité",
          "Suivre coût, latence et qualité",
        ],
      },
      bestPractices: {
        en: [
          "Template and version prompts",
          "Cap and monitor token cost",
          "Add fallbacks across providers",
          "Filter and validate outputs",
        ],
        fr: [
          "Templater et versionner les prompts",
          "Plafonner et monitorer le coût en tokens",
          "Ajouter des fallbacks multi-fournisseurs",
          "Filtrer et valider les sorties",
        ],
      },
      realUseCases: {
        en: ["Insurance LLM benchmarking (Crédit Agricole)", "Conversational assistants (Nexa AI)", "Content generation"],
        fr: ["Benchmark LLMs assurance (Crédit Agricole)", "Assistants conversationnels (Nexa AI)", "Génération de contenu"],
      },
      advantages: {
        en: ["Flexible across tasks", "Fast to prototype", "Provider-agnostic"],
        fr: ["Flexible sur les tâches", "Prototypage rapide", "Indépendant du fournisseur"],
      },
      limits: {
        en: ["Token cost", "Hallucination risk", "Latency variability"],
        fr: ["Coût en tokens", "Risque d'hallucination", "Variabilité de latence"],
      },
      skills: ["Prompt design", "Streaming", "Caching", "Cost control", "Safety filtering"],
    },
  },
  {
    id: "prompt-engineering",
    title: { en: "Prompt Engineering Workflow", fr: "Workflow de Prompt Engineering" },
    categories: ["genai", "llms"],
    level: "Production Ready",
    description: {
      en: "Systematic design, testing and versioning of prompts for reliable, measurable LLM behaviour.",
      fr: "Conception, test et versioning systématiques des prompts pour un comportement LLM fiable et mesurable.",
    },
    useCase: {
      en: "Squeezing maximum reliability from a model before fine-tuning.",
      fr: "Maximiser la fiabilité d'un modèle avant tout fine-tuning.",
    },
    tech: ["Python", "LangChain", "OpenAI", "Mistral"],
    tags: ["GenAI", "LLM", "Prompting", "Python"],
    detail: {
      overview: {
        en: "Prompt engineering is engineering, not guesswork: structured templates, few-shot examples, output schemas and an evaluation harness make LLM behaviour reproducible and measurable before reaching for fine-tuning.",
        fr: "Le prompt engineering est de l'ingénierie, pas du hasard : templates structurés, exemples few-shot, schémas de sortie et harnais d'évaluation rendent le comportement LLM reproductible et mesurable avant tout fine-tuning.",
      },
      stages: {
        en: [
          "Define the task and output schema",
          "Draft structured prompt templates",
          "Add few-shot examples",
          "Build an evaluation set",
          "Iterate against metrics",
          "Version the winning prompts",
        ],
        fr: [
          "Définir la tâche et le schéma de sortie",
          "Rédiger des templates de prompts structurés",
          "Ajouter des exemples few-shot",
          "Construire un set d'évaluation",
          "Itérer face aux métriques",
          "Versionner les meilleurs prompts",
        ],
      },
      bestPractices: {
        en: [
          "Constrain outputs with a schema",
          "Test prompts against a fixed eval set",
          "Version prompts like code",
          "Prefer prompting before fine-tuning",
        ],
        fr: [
          "Contraindre les sorties par un schéma",
          "Tester les prompts sur un set d'éval figé",
          "Versionner les prompts comme du code",
          "Privilégier le prompting avant le fine-tuning",
        ],
      },
      realUseCases: {
        en: ["Structured extraction", "Routing and intent prompts", "Agent tool instructions"],
        fr: ["Extraction structurée", "Prompts de routage et d'intention", "Instructions d'outils d'agents"],
      },
      advantages: {
        en: ["No training cost", "Fast iteration", "Model-agnostic"],
        fr: ["Aucun coût d'entraînement", "Itération rapide", "Indépendant du modèle"],
      },
      limits: {
        en: ["Hits a ceiling vs fine-tuning", "Prompt brittleness", "Provider drift across versions"],
        fr: ["Plafonne face au fine-tuning", "Fragilité des prompts", "Dérive entre versions de modèles"],
      },
      skills: ["Prompt design", "Few-shot", "Output schemas", "LLM evaluation"],
    },
  },
  {
    id: "fine-tuning",
    title: { en: "Fine-Tuning Pipeline", fr: "Pipeline de Fine-Tuning" },
    categories: ["llms", "genai"],
    level: "Industrial Experience",
    description: {
      en: "Adapting pretrained models to a domain with full, LoRA or instruction fine-tuning.",
      fr: "Adapter des modèles pré-entraînés à un domaine via fine-tuning complet, LoRA ou instruction.",
    },
    useCase: {
      en: "When prompting plateaus and you need domain mastery.",
      fr: "Quand le prompting plafonne et qu'il faut maîtriser le domaine.",
    },
    tech: ["Python", "PyTorch", "Hugging Face", "Mistral", "MLflow"],
    tags: ["LLM", "FineTuning", "GenAI", "Python"],
    detail: {
      overview: {
        en: "Fine-tuning specialises a model on your data and style. Parameter-efficient methods (LoRA / QLoRA) make it affordable, while careful dataset curation and evaluation prevent overfitting and regressions.",
        fr: "Le fine-tuning spécialise un modèle sur vos données et votre style. Les méthodes efficaces (LoRA / QLoRA) le rendent abordable, tandis qu'une curation soignée du dataset et l'évaluation évitent l'overfitting et les régressions.",
      },
      stages: {
        en: [
          "Curate and format a training dataset",
          "Choose full vs LoRA / QLoRA",
          "Fine-tune with tracked experiments",
          "Evaluate vs the base model",
          "Guard against catastrophic forgetting",
          "Deploy and version the adapter",
        ],
        fr: [
          "Curer et formater un dataset d'entraînement",
          "Choisir fine-tuning complet vs LoRA / QLoRA",
          "Fine-tuner avec expériences tracées",
          "Évaluer face au modèle de base",
          "Se prémunir de l'oubli catastrophique",
          "Déployer et versionner l'adapter",
        ],
      },
      bestPractices: {
        en: [
          "Curate data quality over quantity",
          "Prefer LoRA / QLoRA for cost",
          "Always compare to the base model",
          "Keep an eval suite for regressions",
        ],
        fr: [
          "Privilégier la qualité à la quantité de données",
          "Préférer LoRA / QLoRA pour le coût",
          "Toujours comparer au modèle de base",
          "Garder une suite d'éval anti-régression",
        ],
      },
      realUseCases: {
        en: ["CamemBERT fine-tuning for IT emails", "Open-source LLM tuning (IBM cert)", "Domain assistants"],
        fr: ["Fine-tuning CamemBERT pour e-mails IT", "Tuning de LLMs open-source (cert. IBM)", "Assistants métier"],
      },
      advantages: {
        en: ["Domain mastery", "Lower inference cost", "Consistent style"],
        fr: ["Maîtrise du domaine", "Coût d'inférence réduit", "Style cohérent"],
      },
      limits: {
        en: ["Needs quality data", "Risk of forgetting", "Retrain on data shift"],
        fr: ["Nécessite des données de qualité", "Risque d'oubli", "Réentraîner si la donnée change"],
      },
      skills: ["LoRA / QLoRA", "Dataset curation", "Evaluation", "MLflow"],
    },
  },
  {
    id: "ai-agents",
    title: { en: "AI Agents", fr: "Agents IA" },
    categories: ["agents", "genai"],
    level: "Production Ready",
    description: {
      en: "LLM-driven agents that plan, call tools and act with bounded autonomy and observability.",
      fr: "Agents pilotés par LLM qui planifient, appellent des outils et agissent avec une autonomie bornée et observable.",
    },
    useCase: {
      en: "Automating multi-step tasks that need reasoning and tool use.",
      fr: "Automatiser des tâches multi-étapes nécessitant raisonnement et usage d'outils.",
    },
    tech: ["Python", "LangChain", "CrewAI", "AutoGen", "OpenAI", "FastAPI"],
    tags: ["Agents", "LLM", "GenAI", "Automation"],
    detail: {
      overview: {
        en: "An agent wraps an LLM with planning, tools and memory to accomplish goals. The engineering challenge is bounded autonomy: enough freedom to be useful, enough guardrails, observability and human checkpoints to be safe.",
        fr: "Un agent enrobe un LLM de planification, d'outils et de mémoire pour atteindre des objectifs. Le défi d'ingénierie est l'autonomie bornée : assez de liberté pour être utile, assez de garde-fous, d'observabilité et de points de contrôle humains pour être sûr.",
      },
      stages: {
        en: [
          "Define goals and allowed tools",
          "Design the planning / reasoning loop",
          "Implement tool calls and memory",
          "Set autonomy bounds and guardrails",
          "Add observability and human checkpoints",
          "Evaluate task success and safety",
        ],
        fr: [
          "Définir objectifs et outils autorisés",
          "Concevoir la boucle de planification / raisonnement",
          "Implémenter appels d'outils et mémoire",
          "Fixer les bornes d'autonomie et garde-fous",
          "Ajouter observabilité et points de contrôle humains",
          "Évaluer le succès des tâches et la sécurité",
        ],
      },
      bestPractices: {
        en: [
          "Bound autonomy explicitly",
          "Log every action and decision",
          "Keep humans in the loop for high stakes",
          "Test against adversarial cases",
        ],
        fr: [
          "Borner explicitement l'autonomie",
          "Logger chaque action et décision",
          "Garder l'humain dans la boucle pour les enjeux forts",
          "Tester sur des cas adverses",
        ],
      },
      realUseCases: {
        en: ["Workflow automation agents", "Research and data-gathering assistants", "Bounded trading agents (research)"],
        fr: ["Agents d'automatisation de workflows", "Assistants de recherche et de collecte", "Agents de trading bornés (recherche)"],
      },
      advantages: {
        en: ["Automates complex tasks", "Composes tools", "Adapts at runtime"],
        fr: ["Automatise des tâches complexes", "Compose des outils", "S'adapte à l'exécution"],
      },
      limits: {
        en: ["Unpredictable without bounds", "Compounding errors", "Harder to test"],
        fr: ["Imprévisible sans bornes", "Erreurs qui s'accumulent", "Plus dur à tester"],
      },
      skills: ["Tool use", "Bounded autonomy", "Observability", "Human-in-the-loop"],
    },
  },
  {
    id: "multi-agent",
    title: { en: "Multi-Agent Systems", fr: "Systèmes multi-agents" },
    categories: ["agents", "research"],
    level: "Research",
    description: {
      en: "Multiple specialised agents collaborating, debating and coordinating to solve complex goals.",
      fr: "Plusieurs agents spécialisés collaborant, débattant et se coordonnant pour résoudre des objectifs complexes.",
    },
    useCase: {
      en: "Decomposing hard problems across specialised roles.",
      fr: "Décomposer des problèmes difficiles en rôles spécialisés.",
    },
    tech: ["Python", "CrewAI", "AutoGen", "LangChain", "OpenAI"],
    tags: ["Agents", "MultiAgent", "Research", "Python"],
    detail: {
      overview: {
        en: "Multi-agent systems assign roles — planner, researcher, critic, executor — and let them coordinate. Orchestration patterns, shared memory and conflict resolution determine whether collaboration improves or degrades results.",
        fr: "Les systèmes multi-agents attribuent des rôles — planificateur, chercheur, critique, exécuteur — et les font coordonner. Les patterns d'orchestration, la mémoire partagée et la résolution de conflits déterminent si la collaboration améliore ou dégrade les résultats.",
      },
      stages: {
        en: [
          "Decompose the goal into roles",
          "Define each agent's tools and scope",
          "Choose an orchestration pattern",
          "Implement shared memory / messaging",
          "Add a critic / verifier agent",
          "Evaluate coordination quality",
        ],
        fr: [
          "Décomposer l'objectif en rôles",
          "Définir outils et périmètre de chaque agent",
          "Choisir un pattern d'orchestration",
          "Implémenter mémoire / messagerie partagée",
          "Ajouter un agent critique / vérificateur",
          "Évaluer la qualité de coordination",
        ],
      },
      bestPractices: {
        en: [
          "Give each agent a clear, narrow role",
          "Add a verifier to catch errors",
          "Cap interaction loops to control cost",
          "Log inter-agent communication",
        ],
        fr: [
          "Donner à chaque agent un rôle clair et restreint",
          "Ajouter un vérificateur pour les erreurs",
          "Plafonner les boucles pour maîtriser le coût",
          "Logger la communication inter-agents",
        ],
      },
      realUseCases: {
        en: ["Research pipelines with critic agents", "Complex workflow decomposition", "Simulation of expert teams"],
        fr: ["Pipelines de recherche avec agents critiques", "Décomposition de workflows complexes", "Simulation d'équipes d'experts"],
      },
      advantages: {
        en: ["Specialisation per role", "Tackles complex goals", "Built-in self-critique"],
        fr: ["Spécialisation par rôle", "Aborde des objectifs complexes", "Auto-critique intégrée"],
      },
      limits: {
        en: ["Cost multiplies", "Coordination failures", "Hard to debug emergent behaviour"],
        fr: ["Coût qui se multiplie", "Échecs de coordination", "Comportement émergent dur à déboguer"],
      },
      skills: ["Orchestration", "Role design", "Shared memory", "Verification"],
    },
  },
  {
    id: "mlops-platform",
    title: { en: "MLOps Platform", fr: "Plateforme MLOps" },
    categories: ["mlops", "cloud"],
    level: "Industrial Experience",
    description: {
      en: "CI/CD for ML: automated training, versioning, deployment and rollback of models at scale.",
      fr: "CI/CD pour le ML : entraînement, versioning, déploiement et rollback de modèles automatisés à l'échelle.",
    },
    useCase: {
      en: "Industrialising ML so teams ship models like software.",
      fr: "Industrialiser le ML pour livrer des modèles comme du logiciel.",
    },
    tech: ["MLflow", "DVC", "Docker", "Kubernetes", "Airflow", "Azure"],
    tags: ["MLOps", "CI/CD", "Cloud", "Kubernetes"],
    detail: {
      overview: {
        en: "An MLOps platform brings software discipline to ML: versioned data and models, automated pipelines, reproducible training, gated deployment and safe rollback — closing the gap between notebooks and production.",
        fr: "Une plateforme MLOps apporte la discipline logicielle au ML : données et modèles versionnés, pipelines automatisés, entraînement reproductible, déploiement encadré et rollback sûr — comblant l'écart entre notebooks et production.",
      },
      stages: {
        en: [
          "Version data and code (DVC / Git)",
          "Automate training pipelines",
          "Track experiments and registry (MLflow)",
          "Gate deployment with CI/CD",
          "Deploy with canary / rollback",
          "Monitor and trigger retraining",
        ],
        fr: [
          "Versionner données et code (DVC / Git)",
          "Automatiser les pipelines d'entraînement",
          "Tracer expériences et registry (MLflow)",
          "Encadrer le déploiement par CI/CD",
          "Déployer avec canary / rollback",
          "Monitorer et déclencher le réentraînement",
        ],
      },
      bestPractices: {
        en: [
          "Treat models as versioned artefacts",
          "Automate the full path to production",
          "Gate releases with quality checks",
          "Make rollback trivial",
        ],
        fr: [
          "Traiter les modèles comme des artefacts versionnés",
          "Automatiser tout le chemin vers la production",
          "Encadrer les releases par des contrôles qualité",
          "Rendre le rollback trivial",
        ],
      },
      realUseCases: {
        en: ["Model lifecycle at ASTERA Group", "Reproducible enterprise ML", "Regulated deployment"],
        fr: ["Cycle de vie des modèles au Groupe ASTERA", "ML d'entreprise reproductible", "Déploiement régulé"],
      },
      advantages: {
        en: ["Reproducible and auditable", "Fast, safe releases", "Less production firefighting"],
        fr: ["Reproductible et auditable", "Releases rapides et sûres", "Moins de pompiers en production"],
      },
      limits: {
        en: ["Upfront setup cost", "Tooling complexity", "Culture change needed"],
        fr: ["Coût de mise en place initial", "Complexité d'outillage", "Changement de culture nécessaire"],
      },
      skills: ["CI/CD for ML", "MLflow", "DVC", "Kubernetes", "Pipeline automation"],
    },
  },
  {
    id: "model-monitoring",
    title: { en: "Model Monitoring", fr: "Monitoring de modèles" },
    categories: ["mlops"],
    level: "Production Ready",
    description: {
      en: "Tracking model quality, drift and health in production with alerts and dashboards.",
      fr: "Suivre qualité, drift et santé des modèles en production avec alertes et dashboards.",
    },
    useCase: {
      en: "Catching silent model failures before they hurt the business.",
      fr: "Détecter les échecs silencieux avant qu'ils ne nuisent au métier.",
    },
    tech: ["Prometheus", "Grafana", "MLflow", "Python", "Kubernetes"],
    tags: ["MLOps", "Monitoring", "Grafana", "Production"],
    detail: {
      overview: {
        en: "Models degrade silently as the world shifts. Monitoring tracks data drift, prediction distributions, latency and business KPIs, raising alerts and triggering retraining before quality erodes unnoticed.",
        fr: "Les modèles se dégradent silencieusement quand le monde change. Le monitoring suit le drift des données, les distributions de prédictions, la latence et les KPIs métier, lève des alertes et déclenche le réentraînement avant que la qualité ne s'érode.",
      },
      stages: {
        en: [
          "Define quality and drift metrics",
          "Instrument predictions and inputs",
          "Collect metrics (Prometheus)",
          "Visualise on dashboards (Grafana)",
          "Alert on thresholds",
          "Trigger retraining workflows",
        ],
        fr: [
          "Définir les métriques de qualité et de drift",
          "Instrumenter prédictions et entrées",
          "Collecter les métriques (Prometheus)",
          "Visualiser sur dashboards (Grafana)",
          "Alerter sur les seuils",
          "Déclencher les workflows de réentraînement",
        ],
      },
      bestPractices: {
        en: [
          "Monitor inputs, outputs and business KPIs",
          "Detect drift, not just errors",
          "Set actionable alert thresholds",
          "Close the loop to retraining",
        ],
        fr: [
          "Monitorer entrées, sorties et KPIs métier",
          "Détecter le drift, pas que les erreurs",
          "Fixer des seuils d'alerte actionnables",
          "Boucler vers le réentraînement",
        ],
      },
      realUseCases: {
        en: ["Real-time Grafana dashboards (Substrate AI)", "Drift detection on scoring models", "LLM quality tracking"],
        fr: ["Dashboards Grafana temps réel (Substrate AI)", "Détection de drift sur modèles de scoring", "Suivi qualité LLM"],
      },
      advantages: {
        en: ["Catches silent failures", "Protects business value", "Drives retraining decisions"],
        fr: ["Détecte les échecs silencieux", "Protège la valeur métier", "Guide les décisions de réentraînement"],
      },
      limits: {
        en: ["Labels often delayed", "Alert tuning needed", "Added infrastructure"],
        fr: ["Labels souvent retardés", "Réglage des alertes nécessaire", "Infrastructure additionnelle"],
      },
      skills: ["Drift detection", "Prometheus / Grafana", "Alerting", "Observability"],
    },
  },
  {
    id: "kubernetes-ai",
    title: { en: "Kubernetes AI Deployment", fr: "Déploiement IA sur Kubernetes" },
    categories: ["cloud", "mlops"],
    level: "Industrial Experience",
    description: {
      en: "Containerised, autoscaling deployment of models and AI services on Kubernetes.",
      fr: "Déploiement conteneurisé et autoscalé de modèles et services IA sur Kubernetes.",
    },
    useCase: {
      en: "Running AI services reliably under variable load.",
      fr: "Faire tourner des services IA de façon fiable sous charge variable.",
    },
    tech: ["Docker", "Kubernetes", "FastAPI", "Azure", "Prometheus"],
    tags: ["Cloud", "Kubernetes", "Docker", "MLOps"],
    detail: {
      overview: {
        en: "Kubernetes turns AI services into resilient, scalable workloads: containerised models, autoscaling, rolling updates, health checks and GPU scheduling — the standard for running production AI at scale.",
        fr: "Kubernetes transforme les services IA en workloads résilients et scalables : modèles conteneurisés, autoscaling, rolling updates, health checks et scheduling GPU — le standard pour faire tourner l'IA en production à l'échelle.",
      },
      stages: {
        en: [
          "Containerise the model service",
          "Define deployments and resources",
          "Configure autoscaling (HPA)",
          "Set health checks and rolling updates",
          "Schedule GPUs where needed",
          "Observe with metrics and logs",
        ],
        fr: [
          "Conteneuriser le service modèle",
          "Définir déploiements et ressources",
          "Configurer l'autoscaling (HPA)",
          "Régler health checks et rolling updates",
          "Scheduler les GPU si nécessaire",
          "Observer via métriques et logs",
        ],
      },
      bestPractices: {
        en: [
          "Set resource requests and limits",
          "Use liveness / readiness probes",
          "Roll out with zero downtime",
          "Right-size GPU scheduling",
        ],
        fr: [
          "Définir requests et limits de ressources",
          "Utiliser des probes liveness / readiness",
          "Déployer sans interruption",
          "Dimensionner le scheduling GPU",
        ],
      },
      realUseCases: {
        en: ["Serving RAG and NLP APIs (ASTERA)", "Autoscaling inference services", "Multi-tenant AI platforms"],
        fr: ["Service d'APIs RAG et NLP (ASTERA)", "Services d'inférence autoscalés", "Plateformes IA multi-tenant"],
      },
      advantages: {
        en: ["Scales with demand", "Self-healing", "Cloud-portable"],
        fr: ["Scale avec la demande", "Auto-réparant", "Portable entre clouds"],
      },
      limits: {
        en: ["Operational complexity", "Steep learning curve", "Cost if mis-sized"],
        fr: ["Complexité opérationnelle", "Courbe d'apprentissage raide", "Coût si mal dimensionné"],
      },
      skills: ["Docker", "Kubernetes", "Autoscaling", "GPU scheduling", "Observability"],
    },
  },
  {
    id: "enterprise-ai-platform",
    title: { en: "Enterprise AI Platform", fr: "Plateforme IA d'entreprise" },
    categories: ["cloud", "mlops"],
    level: "Enterprise",
    description: {
      en: "A secure, governed platform hosting many AI services with shared infra, auth and observability.",
      fr: "Une plateforme sécurisée et gouvernée hébergeant de nombreux services IA avec infra, auth et observabilité mutualisées.",
    },
    useCase: {
      en: "Letting an organisation build and operate AI at scale, safely.",
      fr: "Permettre à une organisation de bâtir et opérer l'IA à l'échelle, en sécurité.",
    },
    tech: ["Azure", "Kubernetes", "Docker", "MLflow", "FastAPI"],
    tags: ["Enterprise", "Cloud", "Platform", "Security"],
    detail: {
      overview: {
        en: "An enterprise AI platform standardises how teams ship AI: shared compute, model registry, authentication, secrets, cost controls, security and observability — so every project inherits the same guarantees instead of reinventing them.",
        fr: "Une plateforme IA d'entreprise standardise la façon dont les équipes livrent l'IA : compute mutualisé, registry de modèles, authentification, secrets, contrôle des coûts, sécurité et observabilité — pour que chaque projet hérite des mêmes garanties au lieu de les réinventer.",
      },
      stages: {
        en: [
          "Provision shared, secure infrastructure",
          "Centralise model registry and pipelines",
          "Integrate auth, secrets and RBAC",
          "Add cost controls and quotas",
          "Standardise observability and security",
          "Onboard teams with golden paths",
        ],
        fr: [
          "Provisionner une infra mutualisée et sécurisée",
          "Centraliser registry de modèles et pipelines",
          "Intégrer auth, secrets et RBAC",
          "Ajouter contrôles de coûts et quotas",
          "Standardiser observabilité et sécurité",
          "Onboarder les équipes via des golden paths",
        ],
      },
      bestPractices: {
        en: [
          "Provide secure golden paths",
          "Enforce RBAC and secret management",
          "Track and cap costs per team",
          "Bake in observability and security",
        ],
        fr: [
          "Fournir des golden paths sécurisés",
          "Imposer RBAC et gestion des secrets",
          "Suivre et plafonner les coûts par équipe",
          "Intégrer observabilité et sécurité d'office",
        ],
      },
      realUseCases: {
        en: ["AI & Data Center of Excellence (ASTERA)", "Internal AI service hosting", "Regulated multi-team AI"],
        fr: ["Centre d'Excellence IA & Data (ASTERA)", "Hébergement de services IA internes", "IA multi-équipes régulée"],
      },
      advantages: {
        en: ["Consistent guarantees", "Faster team onboarding", "Centralised governance"],
        fr: ["Garanties homogènes", "Onboarding d'équipes accéléré", "Gouvernance centralisée"],
      },
      limits: {
        en: ["High build investment", "Needs platform ownership", "Risk of over-engineering"],
        fr: ["Investissement de construction élevé", "Nécessite une équipe plateforme", "Risque de sur-ingénierie"],
      },
      skills: ["Platform engineering", "Security / RBAC", "Cloud architecture", "Cost governance"],
    },
  },
  {
    id: "ai-governance",
    title: { en: "AI Governance", fr: "Gouvernance de l'IA" },
    categories: ["research", "mlops"],
    level: "Enterprise",
    description: {
      en: "Frameworks for safe, compliant and explainable AI — GDPR, bias control and auditability.",
      fr: "Cadres pour une IA sûre, conforme et explicable — RGPD, contrôle des biais et auditabilité.",
    },
    useCase: {
      en: "Deploying AI responsibly in regulated, high-stakes contexts.",
      fr: "Déployer l'IA de façon responsable dans des contextes régulés et à fort enjeu.",
    },
    tech: ["Python", "MLflow", "Azure"],
    tags: ["Governance", "GDPR", "Ethics", "Enterprise"],
    detail: {
      overview: {
        en: "Governance makes AI trustworthy: data lineage, consent and GDPR compliance, bias and fairness checks, explainability, human oversight and full auditability — increasingly mandatory under the EU AI Act.",
        fr: "La gouvernance rend l'IA digne de confiance : lineage des données, consentement et conformité RGPD, contrôles de biais et d'équité, explicabilité, supervision humaine et auditabilité complète — de plus en plus obligatoire sous l'AI Act européen.",
      },
      stages: {
        en: [
          "Map data lineage and consent",
          "Assess GDPR and regulatory exposure",
          "Test for bias and fairness",
          "Add explainability for decisions",
          "Define human oversight and approval",
          "Audit, document and report",
        ],
        fr: [
          "Cartographier lineage et consentement des données",
          "Évaluer l'exposition RGPD et réglementaire",
          "Tester biais et équité",
          "Ajouter l'explicabilité des décisions",
          "Définir supervision et validation humaines",
          "Auditer, documenter et reporter",
        ],
      },
      bestPractices: {
        en: [
          "Document data lineage end to end",
          "Test models for bias regularly",
          "Provide explanations for decisions",
          "Keep an auditable decision trail",
        ],
        fr: [
          "Documenter le lineage des données de bout en bout",
          "Tester régulièrement les biais des modèles",
          "Fournir des explications aux décisions",
          "Conserver une trace de décision auditable",
        ],
      },
      realUseCases: {
        en: ["GDPR-compliant marketing AI", "Bias audits on scoring", "EU AI Act readiness"],
        fr: ["IA marketing conforme RGPD", "Audits de biais sur le scoring", "Préparation à l'AI Act"],
      },
      advantages: {
        en: ["Builds trust", "Reduces legal risk", "Enables regulated deployment"],
        fr: ["Renforce la confiance", "Réduit le risque juridique", "Permet le déploiement régulé"],
      },
      limits: {
        en: ["Adds process overhead", "Explainability vs accuracy trade-offs", "Evolving regulation"],
        fr: ["Ajoute du process", "Compromis explicabilité vs précision", "Réglementation mouvante"],
      },
      skills: ["GDPR / AI Act", "Bias testing", "Explainable AI", "Audit & lineage"],
    },
  },
];
