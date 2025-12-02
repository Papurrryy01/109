import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Fresh market picks</p>
          <h1>Elevate every meal with chef-grade groceries</h1>
          <p className="lede">
            Seasonal produce, artisan pantry staples, and ready-to-heat favorites—curated for flavor, quality, and freshness.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/catalog">Shop fresh</Link>
            <Link className="ghost-btn" to="/contact">Ask a food expert</Link>
          </div>

          <div className="hero-meta">
            <div>
              <p className="meta-value">1,200+</p>
              <p className="muted">Orders delivered this month</p>
            </div>
            <div>
              <p className="meta-value">Same-day</p>
              <p className="muted">Cold-packed local delivery</p>
            </div>
            <div>
              <p className="meta-value">4.9/5</p>
              <p className="muted">Avg. rating on fresh goods</p>
            </div>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="showcase-card">
            <div className="badge">New harvest</div>
            <h3>Chef&apos;s Pantry Crate</h3>
            <p>Farm-fresh veggies, slow-fermented bread, and small-batch sauces for effortless weeknight cooking.</p>
            <ul>
              <li>Organic seasonal produce</li>
              <li>Ready-to-serve artisanal bread</li>
              <li>House-made pasta sauces</li>
            </ul>
            <Link className="text-link" to="/catalog">See what&apos;s inside →</Link>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="pillar-card">
          <h4>Peak freshness</h4>
          <p>Direct-from-farm produce and made-today baked goods, cold-packed to arrive crisp.</p>
        </div>
        <div className="pillar-card">
          <h4>Honest sourcing</h4>
          <p>We partner with local makers and growers, paying them fairly and passing savings to you.</p>
        </div>
        <div className="pillar-card">
          <h4>Support that cares</h4>
          <p>Need pairing ideas or cooking tips? Our food team replies quickly with practical guidance.</p>
        </div>
      </section>

      <section className="callout">
        <div>
          <p className="eyebrow">Featured Edit</p>
          <h2>This week&apos;s fresh bestsellers</h2>
          <p className="muted">From bakery favorites to pantry heroes—restocks move fast, so grab yours.</p>
        </div>
        <Link className="primary-btn" to="/catalog">Browse bestsellers</Link>
      </section>
    </div>
  );
}

export default Home;
