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
    <div className="catalog-page" id="top">
      <section className="catalog-hero">
        <div className="hero-copy">
          <p className="eyebrow">Fresh selection</p>
          <h1>Find your next favorite flavor</h1>
          <p className="lede">
            Seasonal produce, artisan pantry staples, and ready-to-heat meals—handpicked to keep your kitchen inspired.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#products">Browse all</a>
            <a className="ghost-btn" href="#filters">Filter options</a>
          </div>

          <div className="hero-meta">
            <div>
              <p className="meta-value">Cold-packed</p>
              <p className="muted">Insulated for freshness</p>
            </div>
            <div>
              <p className="meta-value">Same-day</p>
              <p className="muted">Local delivery windows</p>
            </div>
            <div>
              <p className="meta-value">Trusted picks</p>
              <p className="muted">Tasted & quality checked</p>
            </div>
          </div>
        </div>

        <div className="hero-pane">
          <div className="pane-header">
            <p className="muted">This week&apos;s highlight</p>
            <span className="badge">Staff pick</span>
          </div>
          <h3>Chef&apos;s Pantry Crate</h3>
          <p className="muted">
            Farmer&apos;s market produce, small-batch sauces, and fresh bakery sides for effortless dinners.
          </p>
          <ul>
            <li>Organic greens & seasonal veggies</li>
            <li>Fresh sourdough & house-made spreads</li>
            <li>Ships cold-packed for peak flavor</li>
          </ul>
          <a className="text-link" href="#products">See similar items →</a>
        </div>
      </section>

      <section className="catalog-controls" id="filters">
        <div className="chip-row">
          <button className="chip active" type="button">All</button>
          <button className="chip" type="button">New harvest</button>
          <button className="chip" type="button">Produce</button>
          <button className="chip" type="button">Bakery</button>
          <button className="chip" type="button">Pantry</button>
          <button className="chip" type="button">Snacks</button>
        </div>
        <div className="control-note">
          <p className="muted">Filters are informational for now—browse freely and reach out for pairing or cooking tips.</p>
        </div>
      </section>

      <section className="catalog-grid-section" id="products">
        <div className="grid-head">
          <div>
            <p className="eyebrow">Catalog</p>
            <h2>Featured products</h2>
            <p className="muted">Curated picks refreshed weekly.</p>
          </div>
          <a className="text-link" href="#top">Back to top ↑</a>
        </div>

        <div className="catalog-grid">
          {products.map((prod) => (
            <Product key={prod._id} data={prod} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalog;
