import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="DRL Techs home">
        <span className="brand-mark">
          <picture>
            <img 
              src="/unnamed.webp" 
              alt="DRL TECHS logo" 
              width="24" 
              height="24" 
              loading="lazy"
            />
          </picture>
        </span>
        <span className="brand-copy">
          <strong className="brand-name">DRL TECHS</strong>
        </span>
      </Link>
      
      <nav aria-label="Main navigation" className="nav">
        <Link to="/#work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order-tracking">Orders</Link>
      </nav>
      
      <Link className="button header-cta" to="/#dev-kit">↓ Dev Kit</Link>
    </header>
  )
}

export default Header
