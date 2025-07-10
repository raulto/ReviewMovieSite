# 🎬 Tracker Movie Review App

Originally, this app allowed users to select a movie and view its overview.

It’s now evolving into a complete movie review manager and recommendation system.

At the moment, the first version is implemented, where you can browse movies and view their posters and overviews.

---

## ✨ Features

- Search for movies
- Write personal reviews
- Responsive design (mobile-friendly)
- Infinite scroll for loading movie lists
- API integration to fetch movies (e.g., TMDb)

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- CSS
- RESTful API
- React Router DOM

---

## ⚙️ React + TypeScript + Vite

This template provides a minimal setup to get React working with Vite, HMR (Hot Module Replacement), and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): uses [SWC](https://swc.rs/) for Fast Refresh

---

## 🧹 Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
