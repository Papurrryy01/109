import './About.css';
import { useState } from 'react';

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  function toggleEmailVisibility() {
    setIsEmailVisible((prev) => !prev);
  }

  return (
    <div className="about-page">
      <div className="about-card">
        <p className="eyebrow">Our Story</p>
        <h1>About Us</h1>
        <p className="lede">
          We are a small team passionate about curating quality products and delivering a smooth shopping experience.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h2>What We Do</h2>
            <p>We hand-pick every item, focusing on durability, design, and value so you can shop with confidence.</p>
          </div>
          <div className="about-block">
            <h2>Why It Matters</h2>
            <p>Great products make everyday life better. We’re here to help you find the right fit without the hassle.</p>
          </div>
        </div>

        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            {
              isEmailVisible === true
              ? <p className="contact-email">CARLOSvera@gmail.com</p> 
              : <p className="muted">Click the button to see my email address</p>
            }
          </div>

          <button className="toggle-btn" onClick={toggleEmailVisibility}>
            {
              isEmailVisible === true 
              ? "Hide Email"
              : "Show Email"
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
