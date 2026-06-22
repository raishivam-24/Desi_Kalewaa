/* ═══════════════════════════════════════════
   ALL CONTENT — Desi Kalewaa
   Replace placeholder branch/dish data with real data when available
═══════════════════════════════════════════ */

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Menu", id: "menu" },
  { label: "Branches", id: "branches" },
  // { label: "Franchise", id: "franchise" },
  { label: "Gallery", id: "gallery" },
  { label: "Blog", id: "blog" },
  { label: "Certificates", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const TAGLINES = [
  "छत्तीसगढ़ के स्वाद की असली पहचान",
  "माटी की खुशबू, परंपरा का स्वाद",
];

export const HERO_DISHES = [
  { name: "चीला", img: "/dishes/chila.jpg" },
  { name: "फरा", img: "/dishes/fara.jpg" },
  { name: "अंगाकर रोटी", img: "/dishes/angakar-roti.jpg" },
  { name: "ठेठरी-खुरमी", img: "/dishes/khurmi.jpg" },
  { name: "बोरे बासी", img: "/dishes/bore-basi.jpg" },
  { name: "देसी चावल", img: "/dishes/dehrori.jpg" },
];

export const ABOUT = {
  story:
    "Desi Kalewaa was born from a simple idea — to bring the authentic taste of Chhattisgarh's villages to every table. What started as a small kitchen rooted in tradition has grown into a movement to preserve and celebrate Chhattisgarhi food culture.",
  purpose:
    "Our purpose is to promote Chhattisgarhi culture through food, keeping traditional recipes alive for the next generation while supporting local farmers and producers.",
  vision: "छत्तीसगढ़ी भोजन को राष्ट्रीय स्तर पर पहचान दिलाना।",
  mission: "हर शहर में पारंपरिक CG स्वाद पहुंचाना।",
};

export const DISHES = [
  {
    id: "fara",
    name: "फरा (Fara)",
    img: "/dishes/fara.jpg",
    ingredients: "Rice flour, urad dal, mustard seeds, curry leaves, ghee",
    history:
      "A steamed rice-flour dumpling traditionally made during festivals, Fara represents the simplicity and purity of Chhattisgarhi home cooking.",
    calories: "180 kcal",
    price: "₹80",
    category: "Snacks",
  },
  {
    id: "chila",
    name: "चीला (Chila)",
    img: "/dishes/chila.jpg",
    ingredients: "Rice batter, urad dal, ginger, green chili, oil",
    history:
      "A savory pancake similar to dosa, Chila is a staple breakfast across Chhattisgarhi households, often paired with chutney.",
    calories: "210 kcal",
    price: "₹70",
    category: "Breakfast",
  },
  {
    id: "angakar-roti",
    name: "अंगाकर रोटी (Angakar Roti)",
    img: "/dishes/angakar-roti.jpg",
    ingredients: "Wheat flour, hot ash/embers (traditional cooking method)",
    history:
      "Cooked directly over hot ash in the traditional method, this roti carries a smoky, rustic flavor unique to rural Chhattisgarh.",
    calories: "150 kcal",
    price: "₹40",
    category: "Main",
  },
  {
    id: "dehrori",
    name: "देहरोरी (Dehrori)",
    img: "/dishes/dehrori.jpg",
    ingredients: "Rice flour, jaggery, ghee",
    history: "A traditional sweet dumpling served during festive occasions and family gatherings.",
    calories: "220 kcal",
    price: "₹60",
    category: "Sweets",
  },
  {
    id: "thethri",
    name: "ठेठरी (Thethri)",
    img: "/dishes/thethri.jpg",
    ingredients: "Rice flour, urad dal, cumin, ajwain, oil",
    history: "A crispy savory snack, often prepared in large batches during festival seasons.",
    calories: "190 kcal",
    price: "₹50",
    category: "Snacks",
  },
  {
    id: "khurmi",
    name: "खुरमी (Khurmi)",
    img: "/dishes/khurmi.jpg",
    ingredients: "Wheat flour, jaggery, ghee, fennel seeds",
    history: "A sweet, deep-fried snack traditionally paired with Thethri during celebrations.",
    calories: "230 kcal",
    price: "₹50",
    category: "Sweets",
  },
  {
    id: "bore-basi",
    name: "बोरे बासी (Bore Basi)",
    img: "/dishes/bore-basi.jpg",
    ingredients: "Fermented rice, curd, onion, green chili, mustard oil",
    history:
      "A fermented rice dish celebrated as part of Chhattisgarh's culinary heritage, known for its cooling properties and probiotic benefits.",
    calories: "160 kcal",
    price: "₹60",
    category: "Main",
  },
  {
    id: "aloo-gonda",
    name: "आलू गोंदा (Aloo Gonda)",
    img: "/dishes/aloo-gonda.jpg",
    ingredients: "Potato, gram flour, spices, oil",
    history: "A comforting spiced potato preparation, a household favorite across the region.",
    calories: "200 kcal",
    price: "₹70",
    category: "Main",
  },
  {
    id: "dal-bada",
    name: "दाल बड़ा (Dal Bada)",
    img: "/dishes/dal-bada.jpg",
    ingredients: "Chana dal, urad dal, ginger, green chili, oil",
    history: "Crispy lentil fritters, a popular evening snack served with chutney across Chhattisgarh.",
    calories: "180 kcal",
    price: "₹60",
    category: "Snacks",
  },
];

/* ── BRANCHES — placeholder structure, replace with real data ── */
export const BRANCHES = Array.from({ length: 1 }, (_, i) => ({
  id: `branch-${i + 1}`,
  name: `Desi Kalewaa - Branch ${i + 1}`,
  city: "Bilaspur",
  address: "Bilaspur, Chhattisgarh - PIN",
  timing: "10:00 AM - 10:00 PM",
  phone: "+91 95751 18022",
  parking: "Available",
  mapLink: "",
}));

export const FRANCHISE_REASONS = [
  {
    icon: "🏆",
    title: "Established Brand",
    desc: "Join a recognized name in authentic Chhattisgarhi cuisine with a proven customer base.",
  },
  {
    icon: "🎓",
    title: "Training Support",
    desc: "Comprehensive training for kitchen staff and management to maintain our standards.",
  },
  {
    icon: "📣",
    title: "Marketing Support",
    desc: "Brand-level marketing campaigns and local launch support for every new outlet.",
  },
  {
    icon: "📋",
    title: "Standardized Menu",
    desc: "A consistent, quality-controlled menu and supply chain across all branches.",
  },
];

export const FRANCHISE_PROCESS = [
  { step: "01", title: "Inquiry", desc: "Submit your interest through our franchise form." },
  { step: "02", title: "Discussion", desc: "Our team connects with you to discuss investment and location." },
  { step: "03", title: "Agreement", desc: "Finalize terms and sign the franchise agreement." },
  { step: "04", title: "Setup", desc: "Outlet setup with training and supply chain onboarding." },
  { step: "05", title: "Launch", desc: "Grand opening with marketing and operational support." },
];

export const GALLERY_CATEGORIES = ["Restaurant", "Food", "Customers", "Events"];

export const GALLERY_IMAGES = [
];

export const BLOG_POSTS = [
  {
    id: "bore-basi-benefits",
    title: "बोरे बासी के फायदे",
    excerpt: "जानिए कैसे यह पारंपरिक फर्मेंटेड चावल का व्यंजन सेहत के लिए फायदेमंद है।",
    date: "2026-05-12",
    img: "/blog/bore-basi-benefits.jpg",
  },
  {
    id: "fara-history",
    title: "फरा का इतिहास",
    excerpt: "छत्तीसगढ़ के पारंपरिक त्योहारों में फरा का क्या महत्व है, जानिए इसकी पूरी कहानी।",
    date: "2026-04-28",
    img: "/blog/fara-history.jpg",
  },
  {
    id: "cg-food-traditions",
    title: "छत्तीसगढ़ी खानपान की परंपरा",
    excerpt: "सदियों पुरानी खानपान की परंपराएं जो आज भी छत्तीसगढ़ के घरों में जीवित हैं।",
    date: "2026-04-10",
    img: "/blog/cg-food-traditions.jpg",
  },
  {
    id: "millet-based-food",
    title: "मिलेट आधारित भोजन",
    excerpt: "मोटे अनाज से बने पारंपरिक व्यंजन और उनके पोषण संबंधी फायदे।",
    date: "2026-03-22",
    img: "/blog/millet-based-food.jpg",
  },
];

export const REVIEWS = [
  // populate with { name, rating, text, source: "Google" | "Video", videoUrl? }
];

export const CONTACT = {
  phone: "+91 9575118022 ",
  whatsapp: "+91 9575118022",
  email: "hello@desikalewaa.in",
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};
