import './Contact.css';

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>We&apos;d love to hear from you</h1>
        <p className="muted">Tell us what you&apos;re looking for and we&apos;ll get back within one business day.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card highlight info-card">
          <div className="info-layout">
            <div className="info-copy">
              <h2>Visit or call</h2>
              <p className="lede">Reach our team for product questions, orders, or wholesale inquiries.</p>
            </div>

            <div className="info-list">
              <div className="contact-method">
                <span className="pill">Phone</span>
                <div>
                  <p className="contact-label">Customer Care</p>
                  <p className="contact-value">(555) 123-4567</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="pill">Email</span>
                <div>
                  <p className="contact-label">Support</p>
                  <p className="contact-value">support@mystore.com</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="pill">Hours</span>
                <div>
                  <p className="contact-label">Mon - Fri</p>
                  <p className="contact-value">9:00 AM — 6:00 PM (EST)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-note">
            <p className="muted">Prefer a direct email? Drop us a line at <strong>hello@mystore.com</strong> and we&apos;ll reply quickly.</p>
          </div>
        </div>

        <div className="contact-card form-card">
          <h2 className="form-title">Send a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Full name</span>
              <input type="text" name="name" placeholder="Alex Doe" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label className="field">
              <span>How can we help?</span>
              <textarea name="message" rows="4" placeholder="Tell us a little about what you need" required />
            </label>

            <button className="primary-btn" type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
