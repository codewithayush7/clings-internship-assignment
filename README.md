# Cling InfoTech — Homepage Redesign

A production-grade, modern redesign of the **Cling InfoTech / Cling Multi Solutions** homepage (`https://clinginfotech.com/`), engineered as part of a Full Stack Development internship assignment.

---

## 🚀 Live Demo & Quick Start

### 1. Prerequisites
- Node.js (v18.17+ or v20+)
- npm / pnpm / yarn

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Optimization
```bash
npm run build
npm run start
```

---

## 🎨 Design Direction & Brand Identity

- **Primary Brand Accent**: `#EF1B23` (Cling Red)
- **Backgrounds**: `#0A0A0B` (Primary Dark), `#151518` (Secondary Card Dark)
- **Neutral Accents**: `#F7F7F5`, `#27272A` (Borders)
- **Typography**: [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) loaded via `next/font/google`
- **Visual Philosophy**: Modern SaaS / engineering product aesthetic inspired by industry benchmarks (Stripe, Linear, Vercel), featuring subtle ambient glow, microservices telemetry visuals, restrained color application, and smooth micro-interactions.

---

## 📐 Page Structure & Architecture

The homepage is structured in exact alignment with project specifications across 15 modular, reusable components:

1. **Sticky Glassmorphic Navbar** (`src/components/Navbar.tsx`)
   - Scroll-reactive backdrop blur transition (`bg-[#0A0A0B]/90`)
   - Desktop navigation dropdowns for *About*, *Services*, *Work*, *Solutions*, *Clients*
   - Accessible mobile drawer menu with smooth backdrop blur
   - Primary action: `"Let's Talk"` with animated hover state

2. **Hero Section** (`src/components/Hero.tsx`)
   - Bold headline: *"We build digital products that move businesses forward."* with selective Cling Red gradient accent
   - Dual CTAs: Primary `"Start a Project"` and Secondary `"Explore Our Work"`
   - Interactive technology & microservices architecture console visual showcasing live engineering telemetry (99.98% SLA, 42ms inference, ERP pipeline)

3. **Trust & Verified Statistics** (`src/components/Stats.tsx`)
   - Subtle count-up animation triggered via `IntersectionObserver`
   - Verified data: **32M+ lines of code**, **350+ happy clients**, **390+ completed projects**, **1500+ client coffee interactions**
   - High-contrast dark cards with audit indicators

4. **Selected Work Showcase** (`src/components/SelectedWork.tsx`)
   - Real, verified projects: **Task Flow**, **Rusho Platform**, **Speech Ally (PhonoLogix)**, **Omsons ERP**, **ePayLater Infrastructure**, and **AI Computer Vision**
   - Interactive category filtering tabs
   - Large project cards with deliverables, metrics, and inquiry CTAs

5. **Services** (`src/components/Services.tsx`)
   - 6 verified domains: Web & Custom Software, Mobile Apps (iOS/Android), AI/ML & Computer Vision, ERP Solutions, Digital Marketing & SEO, 3D Animation & Visual Media
   - Deliverables checklist, badges, and subtle hover interactions

6. **Why Cling** (`src/components/WhyCling.tsx`)
   - Value propositions: *End-to-End Lifecycle*, *Business-First Engineering*, *Modern Technical Rigor*, *Long-Term Partnership*

7. **Technology Stack** (`src/components/Technology.tsx`)
   - Categorized stacks: Frontend & Mobile (Next.js, React, TypeScript, Tailwind, React Native, Flutter), Backend & API (Node.js, Python, FastAPI, GraphQL), Cloud (AWS, Docker, PostgreSQL, MongoDB, Redis), AI (PyTorch, OpenCV, NLP)

8. **Global Presence** (`src/components/GlobalPresence.tsx`)
   - Interactive SVG world map with connected node network and pulsing location pins
   - 12 verified international markets: India (HQ), United States, United Kingdom, Saudi Arabia, Dubai (UAE), Singapore, Australia, Ireland, Spain, South Africa, Oman, Mauritius

9. **Client Roster & Dual Marquee** (`src/components/Clients.tsx`)
   - Smooth continuous dual-row horizontal marquee featuring 17+ verified client enterprises (VPI, MAT Commercial Vehicles, Omsons India, DPIS, Indian Racing Festival, ePayLater, Ambit Finvest, Speech Ally, Piaah, SSCL, etc.)

10. **Company Story & Dynamic Timeline** (`src/components/Story.tsx`)
    - Dynamic milestone timeline from foundational inception (2019) through service expansion (2020), recognition (2021), mature organization (2022), to global footprint today
    - Refined, high-contrast Vision and Mission presentation cards

11. **Executive Leadership** (`src/components/Leadership.tsx`)
    - Exact verified executive leadership:
      - **Ramesh Singh** — Co-founder & Director
      - **Ashi Gupta** — Managing Director
      - **Akshay Gupta** — CEO
    - Elegant profile cards with authentic roles and LinkedIn connectivity

12. **Testimonials** (`src/components/Testimonials.tsx`)
    - Verified client reviews from company directors and founders (Swatee Agrawal - Piaah, Elizabeth Jean Thomas - Speech Ally, Aurko Bhattacharya - ePayLater, Ashish Kumar - Vibgyorweb, Shams Tabrez - Litmus Ink, Gourav Singh - Webisdom, Praveen Shetty)
    - Interactive testimonial spotlight with star ratings, verified badges, and carousel controls

13. **Contact CTA** (`src/components/Contact.tsx`)
    - Split layout: Direct contacts & Head Office address on left
    - Interactive form with full client-side validation (name, email, message length)
    - Clear demonstration success state upon submission

14. **Footer** (`src/components/Footer.tsx`)
    - Organized into Company, Services, Resources, and Office Locations (Noida Global HQ, Pune Regional Office, Moradabad Development Center)
    - Phone (+91 8264469132), Email (info@clinginfotech.com), and verified social links

15. **Floating WhatsApp Action** (`src/components/FloatingWhatsApp.tsx`)
    - Integrated floating button connecting directly to verified contact (`+91 8264469132`) with pre-filled message

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS Hardware Accelerated Keyframes
- **Font**: Manrope via `next/font/google`

---

## 📁 Repository Structure

```
├── public/
│   └── images/               # Verified local brand assets & leadership photos
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind v4 theme, tokens & keyframe animations
│   │   ├── layout.tsx        # RootLayout with Manrope font & SEO metadata
│   │   └── page.tsx          # Homepage assembling all 15 sections
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky glassmorphic navbar with mobile menu
│   │   ├── Hero.tsx          # Hero section with product telemetry visual
│   │   ├── Stats.tsx         # Verified statistics with count-up animation
│   │   ├── SelectedWork.tsx  # Verified projects with filter tabs
│   │   ├── Services.tsx      # Core services with deliverables
│   │   ├── WhyCling.tsx      # Value proposition principles
│   │   ├── Technology.tsx    # Technology stack categorized showcase
│   │   ├── GlobalPresence.tsx# Interactive SVG network map & countries
│   │   ├── Clients.tsx       # Dual-row continuous client logo marquee
│   │   ├── Story.tsx         # Company story & milestone timeline
│   │   ├── Leadership.tsx    # Executive leadership profile cards
│   │   ├── Testimonials.tsx  # Client reviews & carousel spotlight
│   │   ├── Contact.tsx       # Contact form with validation & success state
│   │   ├── Footer.tsx        # Comprehensive company footer & locations
│   │   ├── FloatingWhatsApp.tsx # Floating WhatsApp direct action
│   │   └── SocialIcons.tsx   # Crisp SVG social media icons
│   └── data/
│       └── siteData.ts       # 100% verified source of truth data layer
├── next.config.ts            # Next.js configuration & image remote patterns
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies & scripts
```

---

## 🔒 Content Integrity Guarantee

All company data — including statistics, client names, projects, office addresses, leadership titles, and testimonials — was directly inspected and verified against Cling InfoTech's production website (`https://clinginfotech.com/`) to ensure complete factual accuracy without fabrication.
