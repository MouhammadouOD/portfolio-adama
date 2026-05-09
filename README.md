# Portfolio — Adama Ndiaye

Portfolio professionnel React, déployable sur GitHub Pages.

## Structure

```
src/
├── App.jsx              # Composants React (Navbar, Hero, About, Skills, Experience, Certifications, Projects, Contact, Footer)
├── App.css              # Styles complets
├── index.js             # Point d'entrée
├── data/
│   └── profile.js       # ← TOUTES LES DONNÉES ICI (modifier pour mettre à jour)
└── i18n/
    └── translations.js  # Traductions FR / EN
public/
├── index.html
└── assets/
    ├── CV_Adama_Ndiaye.pdf   ← Copier le CV ici
    └── photo.jpg             ← Copier la photo ici (facultatif)
```

## Installation

```bash
npm install
npm start       # Développement local → http://localhost:3000
npm run build   # Build production
```

## Personnalisation

1. **Photo** : Placer `photo.jpg` dans `public/assets/` puis dans `src/data/profile.js` mettre `photo: "/assets/photo.jpg"`
2. **CV** : Placer `CV_Adama_Ndiaye.pdf` dans `public/assets/`
3. **LinkedIn** : Dans `src/data/profile.js`, remplacer le lien `linkedin`
4. **Chiffres** : Remplacer `[X]` dans les bullets de l'expérience
5. **Projets** : Changer `status: "coming"` → `status: "live"` et ajouter le `link`

## Déploiement GitHub Pages

```bash
# 1. Créer un repo GitHub "portfolio"
# 2. Dans package.json, modifier "homepage" avec votre username GitHub
# 3. Lier au repo distant
git init
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git add . && git commit -m "Initial commit"

# 4. Déployer
npm run deploy
```

Le portfolio sera accessible sur `https://VOTRE_USERNAME.github.io/portfolio`
