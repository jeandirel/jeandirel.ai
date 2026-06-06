# jeandirel.ai — Portfolio & Website

Ce dépôt contient le code source du site personnel et portfolio de `jeandirel`.

Structure principale
- `backend/` : API légère en Python (tests inclus).
- `frontend/` : application React (Tailwind, plugins, composants).

Installation rapide

Backend (Python)

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python server.py
```

Frontend (Node.js)

```bash
cd frontend
npm install
npm start
# ou `npm run build` pour produire les fichiers de production
```

Tests

```bash
# backend tests
cd backend
pytest
```

Déploiement

1. Assurez-vous que les variables d'environnement et secrets sont configurés.
2. Construisez le frontend (`npm run build`) et servez-le derrière un serveur web.
3. Lancez le backend (gunicorn/uvicorn) selon votre infra.

Contribuer

- Ouvrez une issue pour discuter des changements.
- Faites une branche, ajoutez vos commits, puis créez une pull request.

Contact

- Auteur: `jeandirel`
- Email: jedirkab70@gmail.com

Licence

MIT — voir fichier `LICENSE` si présent.

-----
Fichier généré automatiquement par l'agent pour faciliter la mise en route.
