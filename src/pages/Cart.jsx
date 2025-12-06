import { useContext } from "react";
import GlobalContext from "../state/globalContext.js";

import "./Cart.css";

function Cart() {
  const { cart } = useContext(GlobalContext);
  const totalItems = cart.reduce((sum, product) => sum + (product.quantity ?? 1), 0);
  const finalCost = cart.reduce(
    (sum, product) => sum + Number(product.price ?? 0) * (product.quantity ?? 1),
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <p className="cart-eyebrow">Your cart</p>
        <h1>Ready to complete the purchase?</h1>
        <p className="cart-lede">
          Review the items you picked, confirm quantities, and we&apos;ll keep everything chilled until it arrives.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-title">Your bag is empty</p>
          <p className="empty-copy">Browse the catalog and add a few favorites to see them here.</p>
        </div>
      ) : (
        <div className="cart-card">
          <div className="cart-lines">
            {cart.map((product, idx) => {
              const key = product.id ?? product._id ?? idx;
              const title = product.title ?? product.Title ?? "Untitled";
              const quantity = product.quantity ?? 1;
              const price = Number(product.price ?? 0);
              const total = (price * quantity).toFixed(2);
              const image =
                product.image && product.image.startsWith("http")
                  ? product.image
                  : `/img/${product.image || "placeholder.png"}`;

              return (
                <div key={key} className="cart-line">
                  <div className="cart-line-left">
                    <img src={image} alt={title} className="cart-line-img" />
                    <div>
                      <div className="cart-line-title">{title}</div>
                      <div className="cart-line-sub">Unit price ${price.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="cart-line-right">
                    <span className="cart-pill">Qty {quantity}</span>
                    <div className="cart-line-meta">
                      <span className="cart-muted">Total</span>
                      <span className="cart-line-total">${total}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <div className="summary-row">
              <span>Total items</span>
              <span className="summary-value">{totalItems}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Final cost</span>
              <span className="summary-value">${finalCost.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
