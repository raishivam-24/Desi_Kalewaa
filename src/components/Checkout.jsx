import { useState } from "react";
import "../css/Checkout.css";

export default function Checkout({ cart, total, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", email: "" });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const isValid = form.name && form.phone && form.address;

  const handlePayment = async () => {
    if (!isValid) return;
    setLoading(true);

    /*
      ── RAZORPAY INTEGRATION ──
      1. Create an order on your backend (Node/Express, Firebase Function, etc.)
         that calls Razorpay's Orders API with your KEY_SECRET (never expose
         the secret in frontend code).
      2. That backend returns an order_id.
      3. Use Razorpay Checkout.js here with your PUBLIC key_id + order_id.

      Example (after backend returns { order_id, amount }):

      const options = {
        key: "rzp_test_XXXXXXXXXXXX", // your Razorpay PUBLIC key
        amount: amount, // in paise
        currency: "INR",
        name: "Desi Kalewaa",
        description: "Food Order",
        order_id: order_id,
        handler: function (response) {
          // response.razorpay_payment_id, razorpay_order_id, razorpay_signature
          // verify on backend, then:
          onSuccess(response);
        },
        prefill: {
          name: form.name,
          contact: form.phone,
          email: form.email,
        },
        theme: { color: "#C56B3F" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    */

    // Placeholder flow until backend order-creation endpoint is wired up:
    setTimeout(() => {
      setLoading(false);
      onSuccess({ placeholder: true });
    }, 1200);
  };

  return (
    <div className="dk-checkout-overlay" onClick={onClose}>
      <div className="dk-checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="dk-checkout-header">
          <h3>Checkout</h3>
          <button className="dk-checkout-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="dk-checkout-summary">
          {cart.map((item) => (
            <div key={item.id} className="dk-checkout-line">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{parseInt(item.price.replace("₹", "")) * item.qty}</span>
            </div>
          ))}
          <div className="dk-checkout-total-line">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <div className="dk-checkout-form">
          <input
            className="dk-form-input dk-checkout-input"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          <input
            className="dk-form-input dk-checkout-input"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          <input
            className="dk-form-input dk-checkout-input"
            placeholder="Email (for receipt)"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <textarea
            className="dk-form-input dk-checkout-input dk-checkout-textarea"
            placeholder="Delivery Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: 8 }}
          onClick={handlePayment}
          disabled={!isValid || loading}
        >
          {loading ? "Processing..." : `Pay ₹${total} with Razorpay →`}
        </button>
      </div>
    </div>
  );
}
