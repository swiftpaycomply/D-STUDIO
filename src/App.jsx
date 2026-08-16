import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Products from './pages/Products'
import Contact from './pages/Contact'
import OrderTracking from './pages/OrderTracking'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import TermsPrivacy from './pages/TermsPrivacy'
import './App.css'

function App() {
  return (
    <Router>
      <div className="frame">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/terms" element={<TermsPrivacy type="terms" />} />
            <Route path="/privacy" element={<TermsPrivacy type="privacy" />} />
            <Route path="/ndf-agreement" element={<TermsPrivacy type="ndf" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
