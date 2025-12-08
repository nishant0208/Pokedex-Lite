# 🧿 Pokédex Lite

A **modern, fast, and visually polished Pokédex web application** built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, and PokéAPI**.

This project focuses on **excellent UI/UX**, **glassmorphism design**, **smooth animations**, and **production-ready architecture**.

---

## 🚀 Live Demo
👉 [https://pokedex-lite.vercel.app ](https://pokedex-lite-pink.vercel.app/) 

---

## 🎬 Demo

![Pokédex Lite Demo](screenshots/Demo.gif)


---
## 🖼️ Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Pokédex Listing
![Pokédex](screenshots/pokedex.png)

### Favorites
![Favorites](screenshots/favorites.png)

### Pokémon Detail Modal
![Pokemon Modal](screenshots/pokemon-modal.png)

---

## ✨ Features

### 🧬 Core Functionality
- 🔍 Browse Pokémon with pagination
- ❤️ Add & remove Pokémon from favorites
- 🧾 Pokémon detail modal with stats
- ⚡ Fast SSR rendering with Next.js App Router

---

### 🎨 UI / UX Highlights
- 🧊 **Glassmorphism Pokémon Cards**
  - Frosted glass effect using backdrop blur
  - Translucent layers with soft borders
  - Optimized for light & dark mode
- 🌈 Deterministic gradient card backgrounds (SSR safe)
- 💫 Smooth hover and tap animations
- 🎴 Pokéball transition animation when entering Pokédex
- 🔊 Pokéball sound effect on CTA interaction
- 🟣 Page-to-page swipe transitions
- 🌙 Dark / Light mode support
- 📱 Fully responsive (mobile-first design)

---

### 🔐 Authentication
- 🔑 OAuth authentication using **Clerk**
- 👤 User profile menu
- 🔒 Favorites scoped to logged-in users

---

## 🛠 Tech Stack

| Category | Technology |
|--------|------------|
| Framework | **Next.js (App Router)** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Animations | **Framer Motion** |
| Authentication | **Clerk** |
| API | **PokéAPI** |
| Hosting | **Vercel** |

---

## 🧊 Glassmorphism Design

Glass cards are implemented using:
- `backdrop-blur-xl`
- Semi-transparent backgrounds
- Gradient aura overlays
- Soft inner highlights
- Dark-mode aware contrast

This creates a **premium frosted-glass UI** without harming performance.

---

## 🧠 Architecture Highlights

- ✅ Clear separation of server and client components
- ✅ Hydration-safe animations
- ✅ Deterministic UI (no `Math.random` in SSR)
- ✅ Lazy-loaded modals
- ✅ Performance-focused rendering strategy
- ✅ Clean, scalable folder structure

---

## 📂 Project Structure
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── pokedex/
│ ├── favorites/
│ ├── sign-in/
│ └── sign-up/
│
├── components/
│ ├── pokedex/
│ │ ├── PokemonCard.tsx # Glassmorphism cards
│ │ └── PokemonDetailModal.tsx
│ ├── common/
│ ├── ui/
│ └── layout/
│
├── hooks/
├── lib/
└── middleware.ts


---

## 🎞 Animations Used

- ✅ Glass card hover lift & glow
- ✅ Page slide transitions
- ✅ Modal entrance / exit
- ✅ Floating Pokéballs (landing page)
- ✅ Pokéball CTA transition
- ✅ Motion-value powered counters

All animations are:
- GPU-friendly
- Lightweight
- Non-blocking
- Accessibility-conscious

---

## 🔧 Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=///
CLERK_SECRET_KEY=///
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/pokedex
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/pokedex

▶️ Running Locally
git clone https://github.com/nishant0208/Pokedex-Lite.git
cd pokedex-lite
npm install
npm run dev

http://localhost:3000

🔄 Development Workflow

Agile, sprint-based development

Feature-wise commits

UI polish after core stability

Performance & UX focused improvements

Production-ready mindset throughout

🧑‍💻 Author

Nishant Tiwary
Final Year Engineering Student
Frontend-focused | UI/UX-driven | Next.js Enthusiast

GitHub: https://github.com/nishant0208

⭐ Future Enhancements

🧬 Pokémon evolution chains

📊 Animated stat bars

🧊 Glassmorphism modal upgrade

🧠 Smart Pokémon filtering & ranking

📦 Offline / PWA support