import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-bg">
      <header className="hero">
        <img src="/glowpaws-hero.jpg" alt="GlowPaws LED Collar" className="hero-img" />
        <div className="hero-content">
          <h1>GlowPaws™ LED Dog Collar</h1>
          <p>
            Keep your best friend safe and visible on every walk.<br />
            USB-rechargeable, waterproof, and ultra-bright for night adventures.
          </p>
          <a
            href="https://buy.stripe.com/test_1234567890"
            className="buy-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now – $29.99
          </a>
        </div>
      </header>

      <section className="features">
        <h2>Why Choose GlowPaws?</h2>
        <div className="features-list">
          <div>
            <span role="img" aria-label="light">💡</span>
            <h3>Ultra-Bright LEDs</h3>
            <p>Visible up to 350 meters for maximum safety.</p>
          </div>
          <div>
            <span role="img" aria-label="waterproof">💧</span>
            <h3>Waterproof & Durable</h3>
            <p>Perfect for rain, snow, and playtime.</p>
          </div>
          <div>
            <span role="img" aria-label="battery">🔋</span>
            <h3>USB Rechargeable</h3>
            <p>Lasts up to 10 hours on a single charge.</p>
          </div>
          <div>
            <span role="img" aria-label="adjustable">📏</span>
            <h3>Adjustable Fit</h3>
            <p>Comfortable for all dog sizes and breeds.</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What Customers Say</h2>
        <div className="review-list">
          <div>
            <p>“My dog is finally visible at night! The battery lasts forever. 10/10.”</p>
            <span>– Sarah L.</span>
          </div>
          <div>
            <p>“Super easy to charge and put on. I feel so much safer on evening walks.”</p>
            <span>– Mike D.</span>
          </div>
          <div>
            <p>“Bright, stylish, and my dog loves it. Highly recommend!”</p>
            <span>– Priya S.</span>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <div>
          <strong>How long does shipping take?</strong>
          <p>US orders: 5-8 days. International: 10-15 days.</p>
        </div>
        <div>
          <strong>Is it waterproof?</strong>
          <p>Yes! GlowPaws is fully waterproof and ready for any weather.</p>
        </div>
        <div>
          <strong>How do I charge it?</strong>
          <p>Each collar comes with a USB cable. Plug it into any USB port to recharge.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 GlowPaws™. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
