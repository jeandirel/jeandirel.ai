# Documents

Downloadable PDFs surfaced on the **/governance** page (AI Compliance guides,
Publications, Thoughts and Resources).

## How to replace a document
Each PDF here is a placeholder. To swap in a real document, simply **overwrite
the file with the same name** — no code change required. The filename is the
only contract between the file and the data layer.

## How to add a new document
1. Drop the new PDF in this folder.
2. Add an entry in the matching data file under `frontend/src/data/governance.js`
   (`COMPLIANCE`, `PUBLICATIONS`, `THOUGHTS` or `RESOURCES`) pointing `pdf`/`guide`
   to `/documents/<your-file>.pdf`.

The components render purely from the data files, so no component edits are needed.
