# 🎲 Random Joke

A tiny **Next.js App Router** project that serves random jokes through an API route and displays them with a clean UI. Built with **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. Deployed on [Vercel](https://vercel.com).

---

## 🚀 Features
- `/api/joke` → returns a random joke as JSON.
- Frontend with a **button** to fetch jokes on demand.
- **Loading state** while fetching.
- **Modern Next.js 13+ App Router** setup.
- Styled using **Tailwind CSS** + **shadcn/ui components**.

---

## 📂 Project Structure
```
src/
app/
page.tsx # main UI (client component with state + button)
layout.tsx # root layout
api/
joke/
route.ts # API route returning a random joke
```

---

## 🛠️ Tech Stack
- [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/random-joke.git
cd random-joke
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run locally
```bash
npm run dev
```
- App will be running at http://localhost:3000.
- UI → http://localhost:3000
- API → http://localhost:3000/api/joke
