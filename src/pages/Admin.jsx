import { useState } from 'react';
import './Admin.css';

const initialProduct = { title: '', category: '', image: '', price: '' };
const initialCoupon = { code: '', discount: '' };

function Admin() {
  const [productForm, setProductForm] = useState(initialProduct);
  const [couponForm, setCouponForm] = useState(initialCoupon);
  const [products, setProducts] = useState([]);
  const [coupons, setCoupons] = useState([]);

  function handleProductChange(e) {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCouponChange(e) {
    const { name, value } = e.target;
    setCouponForm((prev) => ({ ...prev, [name]: value }));
  }

  function saveProduct(e) {
    e.preventDefault();
    if (!productForm.title.trim() || !productForm.category.trim() || !productForm.price.trim()) return;

    setProducts((prev) => [...prev, { ...productForm }]);
    setProductForm(initialProduct);
  }

  function saveCoupon(e) {
    e.preventDefault();
    if (!couponForm.code.trim() || !couponForm.discount.trim()) return;

    setCoupons((prev) => [...prev, { ...couponForm }]);
    setCouponForm(initialCoupon);
  }

  return (
    <div className="admin-page">
      <div className="admin-hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Store Administration</h1>
        <p className="muted">Add products, create coupons, and review your catalog in one place.</p>
      </div>

      <div className="admin-grid">
        <form className="admin-card" onSubmit={saveProduct}>
          <h2>Add Products</h2>

          <label className="field">
            <span>Title</span>
            <input
              type="text"
              name="title"
              placeholder="Ex: Cozy Cotton Tee"
              value={productForm.title}
              onChange={handleProductChange}
            />
          </label>

          <label className="field">
            <span>Category</span>
            <input
              type="text"
              name="category"
              placeholder="Ex: Apparel"
              value={productForm.category}
              onChange={handleProductChange}
            />
          </label>

          <label className="field">
            <span>Image (URL)</span>
            <input
              type="url"
              name="image"
              placeholder="https://www.image.com/category/1"
              value={productForm.image}
              onChange={handleProductChange}
            />
          </label>

          <label className="field">
            <span>Price</span>
            <input
              type="number"
              name="price"
              placeholder="Ex: 39.99"
              value={productForm.price}
              onChange={handleProductChange}
            />
          </label>

          <button className="primary-btn" type="submit">Save Product</button>
        </form>

        <form className="admin-card" onSubmit={saveCoupon}>
          <h2>Add Coupons</h2>

          <label className="field">
            <span>Code</span>
            <input
              type="text"
              name="code"
              placeholder="Ex: SPRING20"
              value={couponForm.code}
              onChange={handleCouponChange}
            />
          </label>

          <label className="field">
            <span>Discount</span>
            <input
              type="text"
              name="discount"
              placeholder="Ex: 20%"
              value={couponForm.discount}
              onChange={handleCouponChange}
            />
          </label>

          <button className="primary-btn" type="submit">Save Coupon</button>

          <div className="list-block">
            <h3>Coupons List:</h3>
            {
              coupons.length === 0
                ? <p className="muted">There are no coupons</p>
                : <ul>
                    {coupons.map((cp, idx) => (
                      <li key={idx}>
                        <span className="pill">{cp.code}</span>
                        <span className="muted">{cp.discount}</span>
                      </li>
                    ))}
                  </ul>
            }
          </div>
        </form>
      </div>

      <div className="list-card">
        <h3>Products List:</h3>
        {
          products.length === 0
            ? <p className="muted">There are no products</p>
            : (
              <div className="product-grid">
                {products.map((prod, idx) => {
                  const title = prod.title || prod.Title || "Untitled";
                  const category = prod.category || "Uncategorized";
                  const price = prod.price ?? 0;
                  const imageSrc = prod.image && prod.image.startsWith("http")
                    ? prod.image
                    : prod.image
                      ? `/img/${prod.image}`
                      : "https://via.placeholder.com/400x260?text=No+Image";

                  return (
                    <article key={idx} className="product-card-admin">
                      <div className="product-thumb">
                        <img src={imageSrc} alt={title} />
                      </div>
                      <div className="product-info">
                        <p className="item-title">{title}</p>
                        <p className="muted">{category}</p>
                        <p className="price">${Number(price).toFixed(2)}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Admin;
