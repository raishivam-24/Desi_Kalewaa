import { useState } from "react";
import "../css/Order.css";
import { DISHES } from "../data/siteData";
import { Tag, GoldDividerCenter } from "./UI";
import Checkout from "./Checkout";

export default function Order({ cart, addToCart, updateQty, isCartOpen, setIsCartOpen }) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace("₹", "")) * item.qty, 0);

  const handleSuccess = () => {
    setShowCheckout(false);
    setIsCartOpen(false);
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 4000);
  };

  return (
    <section id="order" className="section section--alt">
      <div className="container">
        <div className="section-header-center">
          <Tag>घर बैठे ऑर्डर करें</Tag>
          <GoldDividerCenter />
          <h2 className="heading-display dk-order-title">Order Online</h2>
          <p className="body-text" style={{ maxWidth: 520, margin: "14px auto 0" }}>
            Authentic Chhattisgarhi flavors, delivered fresh to your door.
          </p>
        </div>

        {orderSuccess && (
          <div className="dk-order-success-banner">
            ✓ Order placed successfully! We'll confirm shortly via phone.
          </div>
        )}

        <div className="dk-order-grid">
          {DISHES.map((d) => (
            <div key={d.id} className="dk-order-card">
              <img src={d.img} alt={d.name} className="dk-order-img" />
              <div className="dk-order-info">
                <h4 className="dk-order-name">{d.name}</h4>
                <span className="dk-order-price">{d.price}</span>
              </div>
              <button className="dk-order-add-btn" onClick={() => addToCart(d)}>
                Add +
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="dk-order-cta-row">
            <button className="btn-primary" onClick={() => setShowCheckout(true)}>
              Checkout ({cart.length} items · ₹{total}) →
            </button>
          </div>
        )}
      </div>

      {showCheckout && (
        <Checkout cart={cart} total={total} onClose={() => setShowCheckout(false)} onSuccess={handleSuccess} />
      )}
    </section>
  );
}
