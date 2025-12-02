import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product({ data }) {
  const title = data.title || data.Title || "Untitled";
  const price = data.price ?? 0;
  const imgPath =
    data.image && data.image.startsWith("http")
      ? data.image
      : `/img/${data.image || "placeholder.png"}`;

  return (
    <div className="product-card">
      <img className="img" src={imgPath} alt={title} />
      <div className="product-details">
        <label className="product-name">{title}</label>
        <label className="product-price">${Number(price).toFixed(2)}</label>
        <label className="Total-Price">Total</label>
      </div>
      <QuantityPicker />
    </div>
  );
}

export default Product;
