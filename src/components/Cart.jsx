import "../css/Cart.css";

export default function Cart({ cart, updateQty, removeItem, checkout, isOpen, setIsOpen }) {
  const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace("₹", "")) * item.qty, 0);

  return (
    <>
      <button className="dk-cart-fab" onClick={() => setIsOpen(true)}>
        🛒 {cart.length > 0 && <span className="dk-cart-badge">{cart.length}</span>}
      </button>

      {isOpen && (
        <div className="dk-cart-overlay" onClick={() => setIsOpen(false)}>
          <div className="dk-cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="dk-cart-header">
              <h3>Your Cart</h3>
              <button className="dk-cart-close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="dk-cart-empty">Your cart is empty. Add some delicious dishes!</p>
            ) : (
              <>
                <div className="dk-cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="dk-cart-item">
                      <img src={item.img} alt={item.name} className="dk-cart-item-img" />
                      <div className="dk-cart-item-info">
                        <div className="dk-cart-item-name">{item.name}</div>
                        <div className="dk-cart-item-price">{item.price}</div>
                        <div className="dk-cart-qty-row">
                          <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                          <button className="dk-cart-remove" onClick={() => removeItem(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="dk-cart-footer">
                  <div className="dk-cart-total">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                  <button className="btn-primary" style={{ width: "100%" }} onClick={checkout}>
                    Proceed to Checkout →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
