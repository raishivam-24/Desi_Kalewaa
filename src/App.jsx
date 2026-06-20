import { useState, useEffect } from "react";
import "./css/Common.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Branches from "./components/Branches";
import Franchise from "./components/Franchise";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy — detect which section is in view
      const sections = ["home", "about", "menu", "branches", "franchise", "gallery", "blog", "reviews", "order", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveNav(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === dish.id);
      if (existing) {
        return prev.map((i) => (i.id === dish.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
      return;
    }
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const checkout = () => {
    setIsCartOpen(false);
    scrollTo("order");
  };

  return (
    <div>
      <Navbar
        activeNav={activeNav}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />

      <About />

      <Menu addToCart={addToCart} />

      <Branches />

      {/* <Franchise /> */}

      <Gallery />

      <Blog />

      <Reviews />

      {/* <Order cart={cart} addToCart={addToCart} updateQty={updateQty} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}

      <Contact />

      <Footer scrollTo={scrollTo} />

      <Cart
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        checkout={checkout}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </div>
  );
}
