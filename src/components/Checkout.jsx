import { useState } from "react";
import "../css/Checkout.css";

export default function Checkout({ cart, total, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const isValid =
    form.name.trim().length > 2 &&
    /^[6-9]\d{9}$/.test(form.phone) &&
    form.address.trim().length > 10;

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

  try {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: grandTotal * 100,

      currency: "INR",

      name: "Desi Kalewaa",

      description: "Food Order",

      image: "/logo.png",

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#C56B3F",
      },
      handler: function (response) {
      setStep(3);
      setLoading(false);
      onSuccess(response);
    },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  } catch (err) {
    console.log(err);
  }

  setLoading(false);
};
  const deliveryFee = total > 200 ? 0 : 30;
  const gst = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + gst;
  return (
    <div className="dk-checkout-overlay" onClick={onClose}>
      <div className="dk-checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="dk-checkout-header">
          <h3>Checkout</h3>
          <button className="dk-checkout-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Progress Steps */}
        <div className="checkout-steps">
          <span className={step >= 1 ? "active" : ""}>Details</span>
          <span className={step >= 2 ? "active" : ""}>Payment</span>
          <span className={step >= 3 ? "active" : ""}>Done</span>
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

        {step === 1 && (<div className="dk-checkout-form">
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
        </div>)}
        {step === 2 && (
        <div className="dk-payment-methods">

          <h4>Select Payment Method</h4>

          <div
            className={`pay-card ${
              paymentMethod === "upi"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("upi")
            }
          >
            UPI
          </div>

          <div
            className={`pay-card ${
              paymentMethod === "card"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("card")
            }
          >
            Credit / Debit Card
          </div>

          <div
            className={`pay-card ${
              paymentMethod === "netbanking"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod(
                "netbanking"
              )
            }
          >
            Net Banking
          </div>

          <div
            className={`pay-card ${
              paymentMethod === "cod"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("cod")
            }
          >
            Cash on Delivery
          </div>

        </div>
        )}

        {step === 3 && (
        <div className="order-success">
          <div className="success-icon">🎉</div>

          <h3>Order Confirmed</h3>

          <p>
            Your order has been placed successfully.
          </p>

          <p>
            Estimated delivery:
            <strong> 30-45 mins</strong>
          </p>

          <p>
            Order ID:
            <strong>
              DK{Math.floor(Math.random() * 100000)}
            </strong>
          </p>
        </div>
        )}

        {step === 1 && (
        <button
          className="btn-primary"
          style={{
            width: "100%",
            marginTop: 8,
          }}
          onClick={() => setStep(2)}
          disabled={!isValid}
        >
          Continue To Payment →
        </button>
        )}
        {step === 2 && (
        <button
          className="btn-primary"
          style={{
            width: "100%",
            marginTop: 8,
          }}
          onClick={handlePayment}
          disabled={loading}
        >
          {
            loading
              ? "Processing..."
              : `Pay ₹${grandTotal}`
          }
        </button>
        )}
      </div>
    </div>
  );
}
