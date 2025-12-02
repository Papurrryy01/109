import "./Catalog.css";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";
import DataService from "../services/dataService.js";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
  }, []);

  return (
    <div className="catalog">
      <h1>Check our amazing products</h1>

      {/* Grid container for 2x2 layout */}
      <div className="grid-2x2">
        {products.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
