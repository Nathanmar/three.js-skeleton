# Three.js Skeleton Project

Ce projet est un squelette permettant d'afficher des scènes 3D avec Three.js. Il inclut un cube simple, un modèle `.glb` et un modèle `.gltf`, affichés dans des canvas distincts.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (version 16+) : [Télécharger ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)
- **Git** : [Télécharger ici](https://git-scm.com/)

## Installation

### 1. Cloner le dépôt

```bash
git clone <URL_DU_DEPOT>
cd <NOM_DU_PROJET>
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet

```bash
npm run dev
```

### 4. Accéder au projet

Ouvrez [http://localhost:5174](http://localhost:5174) dans votre navigateur.

## Structure du projet

```
/NOM_DU_PROJET
├── public/          # Fichiers statiques
├── src/             # Code source du projet
│   ├── assets/      # Modèles 3D, textures, etc.
│   ├── components/  # Composants Three.js
│   ├── main.js      # Point d'entrée principal
├── index.html       # Fichier HTML principal
├── package.json     # Dépendances et scripts
├── vite.config.js   # Configuration de Vite
└── README.md        # Documentation
```

## Technologies utilisées

- [Three.js](https://threejs.org/) - Moteur 3D JavaScript
- [Vite](https://vitejs.dev/) - Serveur de développement rapide

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

