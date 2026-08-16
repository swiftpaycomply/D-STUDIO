import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-section">
            <Link to="/" className="brand" aria-label="DRL Techs home">
              <span className="brand-mark">
                <img 
                  src="/unnamed.webp" 
                  alt="DRL TECHS logo" 
                  width="24" 
                  height="24" 
                  loading="lazy"
                />
              </span>
              <strong className="brand-name" style={{ fontSize: '14px' }}>DRL TECHS</strong>
            </Link>
            <p style={{ margin: '6px 0 0', color: '#8c9196', fontSize: '12px' }}>
              © DRL Techs {currentYear}
            </p>
          </div>
          <div className="footer-section" style={{ color: '#7f848b' }}>
            Built with care
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/ndf-agreement">NDF Agreement</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Account</h4>
            <ul>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/order-tracking">Order Tracking</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
