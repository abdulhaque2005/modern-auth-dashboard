<div align="center">

# ⚡ DashFlow — Modern Next.js Authentication & Dashboard

A modern, production-ready Full-Stack Authentication and Dashboard template built with **Next.js (App Router)**, **NextAuth.js**, **MongoDB / Mongoose**, **React Hook Form + Zod**, and **Tailwind CSS**.

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![NextAuth](https://img.shields.io/badge/NextAuth.js-v4-purple?style=for-the-badge&logo=auth0)](https://next-auth.js.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 🚀 Features

- **🔐 Robust Authentication**:
  - Secure credential-based login powered by **NextAuth.js**.
  - JWT session strategy with protected routes.
  - User verification backed by **MongoDB & Mongoose**.
  - Server-side session verification (`getServerSession`) and client-side auth helpers (`signIn`, `signOut`).

- **📊 Modern Analytics Dashboard**:
  - Responsive layout with collapsible/fixed sidebar and top navigation.
  - Interactive header displaying signed-in user credentials and avatar initials.
  - Real-time stat cards with percentage trend indicators.
  - Recent activity timeline and quick-action shortcuts.

- **🎨 Clean, Modern UI & UX**:
  - Crafted with **Tailwind CSS** and modern linear gradients.
  - Icons powered by **Lucide React**.
  - Interactive toast notifications via **Sonner**.
  - Password visibility toggle & "Remember me" option.

- **🛡️ Robust Form Validation**:
  - Form handling via **React Hook Form**.
  - Type-safe schema validation powered by **Zod**.
  - Immediate user feedback and error state handling.

- **⚡ Performance & Developer Experience**:
  - Full **TypeScript** support with strict type definitions.
  - Cached Mongoose database connection to prevent redundant connections during serverless/hot reloads.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Full-stack React framework & routing |
| **React 19** | Frontend user interface library |
| **NextAuth.js** | Authentication & session management |
| **MongoDB & Mongoose** | Database & ODM modeling |
| **Tailwind CSS v4** | Modern utility-first styling |
| **React Hook Form + Zod** | Form management & schema validation |
| **Lucide React** | Modern iconography |
| **Sonner** | Clean toast notifications |

---

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/route.ts  # NextAuth API route handler
│   │   ├── dashboard/
│   │   │   ├── layout.tsx                   # Dashboard layout wrapper
│   │   │   └── page.tsx                     # Analytics dashboard page
│   │   ├── login/
│   │   │   └── page.tsx                     # Split-screen sign-in page
│   │   ├── globals.css                      # Global styles & Tailwind
│   │   ├── layout.tsx                       # Root layout & providers
│   │   └── page.tsx                         # Landing/Home page
│   ├── components/
│   │   ├── header.tsx                       # Dashboard header with user profile & logout
│   │   └── sidebar.tsx                      # Navigation sidebar
│   ├── lib/
│   │   ├── auth/
│   │   │   └── verify-credentials.ts        # Database user verification logic
│   │   ├── db.ts                            # Cached Mongoose connection helper
│   │   └── mongodb.ts                       # MongoDB utility
│   ├── models/
│   │   └── user.ts                          # Mongoose User model & schema
│   ├── schema/
│   │   └── user.ts                          # Validation schema
│   └── auth.ts                              # NextAuth configuration & auth helpers
├── public/                                  # Static assets & icons
├── .env.example                             # Environment variable template
├── package.json                             # Dependencies & scripts
└── tsconfig.json                            # TypeScript configuration
```

---

## ⚙️ Getting Started

### 1. Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18.18+ or v20+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Package manager (`npm`, `pnpm`, or `yarn`)

### 2. Clone the Repository

```bash
git clone https://github.com/abdulhaque2005/modern-auth-dashboard.git
cd modern-auth-dashboard
```

### 3. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env.local
```

Fill in your secrets in `.env.local`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/userDetails
NEXTAUTH_SECRET=your_generated_secret_key_here
JWT_SECRET=your_generated_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```

> **Tip:** You can generate a secure random secret using:
> ```bash
> openssl rand -base64 32
> ```

### 5. Run the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
To access the login interface, navigate to [http://localhost:3000/login](http://localhost:3000/login).
Upon signing in, you will be redirected to the dashboard at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts Next.js in production mode |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.
