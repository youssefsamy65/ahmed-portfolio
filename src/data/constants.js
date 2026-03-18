// ╔══════════════════════════════════════════════════════════════════╗
// ║                    COLORS — do not change                       ║
// ╚══════════════════════════════════════════════════════════════════╝
export const COLORS = {
  navy: "#0a1628",
  navyMid: "#0f2040",
  navyLight: "#162a52",
  gold: "#c9a84c",
  goldLight: "#e8c96a",
  pearl: "#f5f0e8",
  white: "#ffffff",
  gray: "#8a9ab5",
  grayLight: "#d0d8e8",
};

// ╔══════════════════════════════════════════════════════════════════╗
// ║               NAVIGATION LINKS — top menu items                 ║
// ╚══════════════════════════════════════════════════════════════════╝
export const NAV_LINKS = [
  { label: "Über mich", href: "#about" },
  { label: "Fähigkeiten", href: "#skills" },
  { label: "Erfahrung", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" },
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║           STATISTICS — your numbers (About section)             ║
// ║   👉 Enter your personal numbers here                           ║
// ╚══════════════════════════════════════════════════════════════════╝
export const STATS = [
  { number: "4+", label: "Jahre Erfahrung" },  // 👈 adjust years
  { number: "200+", label: "Projekte" },          // 👈 adjust project count
  { number: "3", label: "Kliniken" },          // 👈 adjust clinic count
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║               SKILLS — progress bars in Skills section          ║
// ║   👉 level = percentage value 0–100                             ║
// ╚══════════════════════════════════════════════════════════════════╝
export const SKILLS = [
  { title: "Prothetisches Design", icon: "🦷", level: 98 },
  { title: "Fräsen", icon: "⚙️", level: 90 },
  { title: "Finishing & Polieren", icon: "✨", level: 92 },
  { title: "Bemalen & Glasieren", icon: "🎨", level: 88 },
  { title: "Exocad", icon: "💻", level: 96 },
  { title: "Digitales Lächeldesign", icon: "😁", level: 85 },
  { title: "Implantatversorgung", icon: "🔩", level: 93 },
  { title: "CBCT-Analyse", icon: "🔬", level: 80 },
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║             WORK EXPERIENCE — timeline / career history         ║
// ║   👉 Keep the most recent entry at the top                      ║
// ╚══════════════════════════════════════════════════════════════════╝
export const EXPERIENCES = [
  {
    period: "2024 – 2026",                    // 👈 time period
    company: "Freiberufliche Tätigkeit",      // 👈 company name
    description:
      "Eigenständige Durchführung aller prothetischen Designs — " +
      "All-on-X-Fälle, Veneers, Kronen und Brücken sowie Inlays & Onlays.",
  },
  {
    period: "2023 – 2024",
    company: "Kobry-Elkobba-Zahnkrankenhaus",
    description:
      "Prothetisches Design, Fräsen, Finishing & Polieren sowie " +
      "Bemalen & Glasieren in einer klinischen Laborumgebung.",
  },
  {
    period: "2021 – 2023",
    company: "BeyondSmiles Zahnklinik",
    description:
      "Vollständige prothetische Designarbeiten mit Fräsen, " +
      "Oberflächenbearbeitung und Glasieren von Restaurationen.",
  },
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║                  CONTACT DETAILS — your info                    ║
// ║   👉 Update your email, phone number and address here           ║
// ╚══════════════════════════════════════════════════════════════════╝
export const CONTACT_INFO = [
  {
    icon: "📧",
    label: "E-Mail",
    value: "ahmed.jahin@web.de",           // 👈 your email
    href: "mailto:ahmed.jahin@web.de",
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "+49 176 68598049",             // 👈 your phone number
    href: "tel:+4917668598049",
  },
  {
    icon: "🌍",
    label: "Anschrift",
    value: "90461 Nürnberg, Deutschland",  // 👈 your address
    href: null,
  },
  {
    icon: "🛂",
    label: "Staatsangehörigkeit",
    value: "Ägyptisch",                    // 👈 your nationality
    href: null,
  },
];

export const AVAILABILITY = [
  "Freiberufliche Projekte",
  "Remote-Zusammenarbeit",
  "Vollzeitstellen",
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║                FILTER BUTTONS — Portfolio section               ║
// ║   👉 If you add a new category in PROJECTS,                     ║
// ║      add it here too                                            ║
// ╚══════════════════════════════════════════════════════════════════╝
export const PORTFOLIO_TAGS = [
  "Alle",
  "All-on-X",
  "Kronen",
  "Veneers",
  "Lächeldesign",
  "Implantat",
  "Brücke",
  "Onlay",
];

// ╔══════════════════════════════════════════════════════════════════╗
// ║                    PROJECTS — Portfolio cards                   ║
// ║                                                                 ║
// ║  HOW TO ADD PHOTOS:                                             ║
// ║  ─────────────────────────────────────────────────────────────  ║
// ║  Each project has an "imgs" array (not "img"!).                 ║
// ║  You can add as many photos per project as you like:            ║
// ║                                                                 ║
// ║    imgs: [                                                      ║
// ║      "/photos/myproject-before.jpg",   ← 1st photo (preview)   ║
// ║      "/photos/myproject-after.jpg",    ← 2nd photo             ║
// ║      "/photos/myproject-detail.jpg",   ← 3rd photo             ║
// ║    ],                                                           ║
// ║                                                                 ║
// ║  The first image appears on the card in the grid.              ║
// ║  In the lightbox you can use the arrows to navigate             ║
// ║  between all photos of the same project.                        ║
// ║                                                                 ║
// ║  USING YOUR OWN PHOTOS:                                         ║
// ║  Put your photos in the /public/photos/ folder (or any          ║
// ║  subfolder you like) and enter the path:                        ║
// ║    imgs: ["/photos/filename.jpg"]                               ║
// ║                                                                 ║
// ║  FIELDS PER PROJECT:                                            ║
// ║    title  → title shown on the card                             ║
// ║    desc   → short description                                   ║
// ║    tag    → must match an entry in PORTFOLIO_TAGS               ║
// ║    imgs   → array of image paths (at least 1 photo)             ║
// ╚══════════════════════════════════════════════════════════════════╝
export const PROJECTS = [
  {
    title: "Vollbogen-Zirkonrestauration",
    desc: "Digitale Vollbogenplanung mit Implantatverankerung — präzise Okklusion und ästhetische Integration.",
    tag: "All-on-X",
    imgs: [
      // 👇 Replace these example URLs with your own photos
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      // Add more photos in new lines above ↑
    ],
  },
  {
    title: "Zirkonkronen auf Naturzähnen",
    desc: "Vollkeramische Zirkonkronen von 6–6 oben und Lächelzone unten — perfekte Farbgebung und Form.",
    tag: "Kronen",
    imgs: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    ],
  },
  {
    title: "Keramik-Veneers",
    desc: "Veneers zur Behandlung generalisierter Lückenbildung — natürliche Transluzenz und minimale Präparation.",
    tag: "Veneers",
    imgs: [
      "https://images.unsplash.com/photo-1588776814546-1ffedac44c62?w=800&q=80",
    ],
  },
  {
    title: "Digitales Lächeldesign",
    desc: "Digitale Lächelplanung mit Vorher-Nachher-Visualisierung zur Patientenkommunikation.",
    tag: "Lächeldesign",
    imgs: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
    ],
  },
  {
    title: "Individuelles Implantat-Abutment",
    desc: "CAD-gefrästes Abutment zur Korrektur der Implantatangulation — präzise Passung und Ästhetik.",
    tag: "Implantat",
    imgs: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    ],
  },
  {
    title: "Implantat-Brücke",
    desc: "Dreigliedrige Implantatbrücke mit Scanbody-basierter Vermessung — maximale Passgenauigkeit.",
    tag: "Brücke",
    imgs: [
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    ],
  },
  {
    title: "Anterior-Brücke 3-gliedrig",
    desc: "Ästhetische Frontzahnbrücke mit natürlicher Zahnform und perfekter Bisskontrolle.",
    tag: "Brücke",
    imgs: [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    ],
  },
  {
    title: "Weitspann-Brücke",
    desc: "Mehrgliedrige Brückenversorgung mit optimierter Verbinderstärke und gleichmäßiger Kraftverteilung.",
    tag: "Brücke",
    imgs: [
      "https://images.unsplash.com/photo-1559757175-7cb5f69e9e5f?w=800&q=80",
    ],
  },
  {
    title: "Onlay",
    desc: "Konservative Onlay-Restauration im Seitenzahnbereich — substanzschonend und funktionell.",
    tag: "Onlay",
    imgs: [
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    ],
  },
];