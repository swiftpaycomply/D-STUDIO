import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RevealSlider from '../components/RevealSlider'
import '../styles/Home.css'

function Home() {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section id="top" className="hero">
        <p className="eyebrow">
          <span className="dot"></span>DRL Techs · est. 2020 · software excellence
        </p>
        
        <h1>
          <span>Enterprise</span>
          <span className="gold">Software Solutions.</span>
          <span className="fade">Quality</span>
          <span>
            assured <small className="fade" style={{ font: "52% 'Space Mono',monospace", letterSpacing: '.12em' }}>— DRL</small>
          </span>
        </h1>
        
        <div className="hero-bottom">
          <p className="intro">
            // Professional software trading and development services. Delivering enterprise solutions with excellence and reliability.
          </p>
          <div className="actions">
            <Link className="button" to="/#work">View Work</Link>
            <Link className="button button--ghost" to="/#dev-kit">Get Dev Kit</Link>
          </div>
        </div>

        <RevealSlider 
          beforeImage="https://img.rocket.new/generatedImages/rocket_gen_img_145467f23-1772147608952.png"
          afterImage="https://img.rocket.new/generatedImages/rocket_gen_img_171eb3e22-1772147609983.png"
          beforeLabel="Before"
          afterLabel="After"
        />
        
        <div className="reveal-footer">
          <span>build_greybox.0.1.0 2024-03-12</span>
          <span>↔ drag to reveal</span>
          <span>build_shipped.1.4.2 2025-11-08</span>
        </div>
      </section>

      <section id="work" className="work">
        <h2>Featured Work</h2>
        <div className="work-grid">
          <div className="work-card">
            <h3>Enterprise Solutions</h3>
            <p>Custom software development for enterprise-scale systems with proven reliability and performance.</p>
            <Link to="/projects" className="link-arrow">View Projects →</Link>
          </div>
          <div className="work-card">
            <h3>Trading Platform</h3>
            <p>Robust trading and e-commerce platforms built with modern technologies and best practices.</p>
            <Link to="/products" className="link-arrow">Explore Products →</Link>
          </div>
          <div className="work-card">
            <h3>Media Generation</h3>
            <p>AI-powered content and image generation services for dynamic digital experiences.</p>
            <a href="#services" className="link-arrow">Learn More →</a>
          </div>
        </div>
      </section>

      <section id="stats" className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat">
            <div className="stat-number">6+ yrs</div>
            <div className="stat-label">Industry Experience</div>
          </div>
        </div>
      </section>

      <section id="dev-kit" className="dev-kit">
        <h2>Developer Kit</h2>
        <p className="intro">Everything you need to build with our platform</p>
        <div className="dev-kit-grid">
          <div className="kit-item">
            <h3>Documentation</h3>
            <p>Comprehensive guides and API documentation for all our services.</p>
          </div>
          <div className="kit-item">
            <h3>SDKs & Libraries</h3>
            <p>Pre-built solutions for Node.js, React, and other popular frameworks.</p>
          </div>
          <div className="kit-item">
            <h3>Code Examples</h3>
            <p>Ready-to-use code samples and boilerplates for quick integration.</p>
          </div>
        </div>
        <Link to="/contact" className="button">Get Started Today</Link>
      </section>
    </>
  )
}

export default Home
