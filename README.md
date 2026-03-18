# Ahmed Jahin — Dental CAD Portfolio

A premium, fully-responsive React portfolio for a dental CAD designer.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## 📁 Project Structure

```
ahmed-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                    # Entry point
    ├── App.jsx                     # Root component
    │
    ├── data/
    │   └── constants.js            # All content data & colors
    │
    ├── hooks/
    │   └── useInView.js            # Intersection Observer hook
    │
    ├── styles/
    │   └── global.css              # Global styles & animations
    │
    └── components/
        ├── Navbar/
        │   └── Navbar.jsx          # Sticky nav with mobile menu
        ├── Hero/
        │   └── Hero.jsx            # Hero section + photo
        ├── About/
        │   └── About.jsx           # About / education
        ├── Skills/
        │   └── Skills.jsx          # Animated skill bars
        ├── Experience/
        │   └── Experience.jsx      # Timeline
        ├── Portfolio/
        │   └── Portfolio.jsx       # Filterable project grid
        ├── Contact/
        │   └── Contact.jsx         # Contact form + info
        ├── Footer/
        │   └── Footer.jsx          # Footer
        └── ScrollToTop/
            └── ScrollToTop.jsx     # Scroll-to-top button
```

---

## 🖼️ Adding Your Photo

1. Copy your photo into `public/assets/` (create the folder if needed)
2. Open `src/components/Hero/Hero.jsx`
3. Find the `<img>` tag and update the `src`:

```jsx
// Before
src="/assets/ahmed-photo.jpg"

// After (example)
src="/assets/ahmed-jahin.jpg"
```

Supported formats: `.jpg`, `.png`, `.webp`

---

## ✏️ Editing Content

All text content and data is centralised in one file:

```
src/data/constants.js
```

Edit there to update:
- Your name, title, contact info
- Skills and proficiency levels
- Work experience entries
- Portfolio projects (title, description, image URL, tag)
- Color palette (COLORS object)

---

## 🎨 Design

- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Palette**: Deep navy `#0a1628` · Gold `#c9a84c` · Pearl `#f5f0e8`
- **Features**: Scroll animations · Hover effects · Mobile responsive · Filterable portfolio

---

## 📦 Build for Production

```bash
npm run build
# Output in /dist — ready to deploy on Vercel, Netlify, GitHub Pages, etc.
```
