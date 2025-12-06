import { useContext, useState } from "react";
import GlobalContext from "../state/globalContext";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product({ data }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(GlobalContext).addProductToCart;
  const title = data.title || data.Title || "Untitled";
  const price = data.price ?? 0;
  const imgPath =
    data.image && data.image.startsWith("http")
      ? data.image
      : `/img/${data.image || "placeholder.png"}`;

  function handleAdd() {
    if (typeof addToCart === "function") {
      addToCart({ ...data, quantity });
    }
  }

  return (
    <div className="product-card">
      <img className="img" src={imgPath} alt={title} />
      <div className="product-details">
        <label className="product-name">{title}</label>
        <label className="product-price">${Number(price).toFixed(2)}</label>
        <label className="Total-Price">Total</label>
      </div>
      <QuantityPicker price={price} onChange={setQuantity} />
      <button className="rounded-btn" type="button" onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
