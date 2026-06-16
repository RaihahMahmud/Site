# Raihan Mahmud — Portfolio

A high-performance personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Quick Start

### 1. Bootstrap the project

```bash
# Clone or download the project, then:
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom inverted cursor with lerp
│   │   ├── Navbar.jsx       # Sticky nav with scroll glassmorphism
│   │   ├── Hero.jsx         # Typewriter, parallax BG text, CTAs
│   │   ├── About.jsx        # Bio, terminal card, stat grid
│   │   ├── Skills.jsx       # Bento grid layout
│   │   ├── Projects.jsx     # 2-col project cards
│   │   ├── Timeline.jsx     # Alternating timeline
│   │   ├── Contact.jsx      # Big CTA + link list
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css      # CSS variables, noise, cursor, marquee, glass
│   ├── App.jsx              # Root layout + page-load screen wipe
│   └── main.jsx
├── index.html               # Google Fonts loaded here
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 🎨 Design System

| Token       | Value       | Usage                        |
|-------------|-------------|------------------------------|
| `--ink`     | `#0a0a0a`   | Background                   |
| `--paper`   | `#f2ede6`   | Primary text                 |
| `--acid`    | `#c8f135`   | Accent (green-yellow)        |
| `--rust`    | `#e84c1e`   | Secondary accent (orange-red)|
| `--dim`     | `#8a8a8a`   | Muted text                   |
| `--slate`   | `#1a1a1a`   | Card backgrounds             |

### Typography
- **Display** — Bricolage Grotesque (800 weight for headlines)
- **Mono** — JetBrains Mono (labels, tags, code)
- **Body** — Source Sans 3 (prose, descriptions)

---

## ✏️ Customization

### Update your personal data
Edit the relevant component files:
- `src/components/Hero.jsx` — name, bio, social links
- `src/components/About.jsx` — bio text, stats
- `src/components/Projects.jsx` — project array at top of file
- `src/components/Timeline.jsx` — timeline array
- `src/components/Contact.jsx` — contact links

### Change accent color
In `src/styles/globals.css`, change `--acid` to any hex. Then update `tailwind.config.js` accordingly.

### Add a real profile photo
In `About.jsx`, replace the terminal card `<div>` block with:
```jsx
<img src="/photo.jpg" alt="Raihan" className="w-full aspect-[4/3] object-cover rounded-sm" />
```
And place your photo in `public/photo.jpg`.

---

## 🚀 Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel login
vercel --prod
```
Done. Vercel auto-detects Vite. Your site will be live at `yourname.vercel.app`.




{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["className=\"([^\"]*)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 📦 Scripts

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```
