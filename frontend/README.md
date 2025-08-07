# 🌱 Le Chantier d'à Côté - Frontend

Application React pour le site web de l'association "Le Chantier d'à Côté".

## 🛠️ Stack technique

- **React 19.1.0** avec TypeScript
- **Vite** pour le build et le développement
- **React Router DOM** pour la navigation
- **EmailJS** pour les formulaires de contact
- **ESLint** pour la qualité du code

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

### Preview de la production

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Structure des dossiers

```
src/
├── api/                      # Données JSON (articles, FAQ, équipe)
├── components/               # Composants réutilisables
│   ├── activityBlock/
│   ├── cardSection/
│   ├── dataMonth/
│   ├── form/
│   └── ...
├── pages/                    # Pages principales
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── Blog/
│   └── ...
├── ui/                       # Composants d'interface
│   ├── header/
│   ├── footer/
│   ├── layout/
│   └── ...
├── App.tsx                   # Composant racine
├── main.tsx                  # Point d'entrée
└── index.css                 # Styles globaux
```

## ⚙️ Configuration

### Variables d'environnement

Créer un fichier `.env.local` avec :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Configuration ESLint

Le projet utilise une configuration ESLint adaptée avec des règles TypeScript et React.

## 🎨 Styles

- CSS personnalisé avec variables CSS
- Design responsive (mobile-first)
- Palette de couleurs verte
- Optimisation des images (WebP)

## 📞 Support

Pour plus d'informations, consultez le README principal du projet dans le dossier racine.
