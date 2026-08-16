import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Products.css'

function Products() {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      name: 'Enterprise Platform',
      category: 'Platform',
      price: 4999,
      description: 'Complete enterprise software solution with all features.',
      features: ['API Access', '24/7 Support', 'Custom Integration']
    },
    {
      id: 2,
      name: 'Developer Suite',
      category: 'Developer',
      price: 1999,
      description: 'SDK and tools for developers.',
      features: ['Full Documentation', 'Code Examples', 'Community Support']
    },
    {
      id: 3,
      name: 'Media Generation',
      category: 'Services',
      price: 2999,
      description: 'AI-powered content generation service.',
      features: ['Unlimited Images', 'AI Videos', 'Custom Models']
    },
    {
      id: 4,
      name: 'Trading API',
      category: 'API',
      price: 3999,
      description: 'Real-time trading API with order management.',
      features: ['Real-time Data', 'Order Management', 'Historical Data']
    },
    {
      id: 5,
      name: 'Analytics Pro',
      category: 'Analytics',
      price: 2499,
      description: 'Advanced analytics and reporting platform.',
      features: ['Custom Reports', 'Real-time Dashboards', 'Export Tools']
    },
    {
      id: 6,
      name: 'Support Package',
      category: 'Support',
      price: 1499,
      description: 'Premium support with SLA guarantee.',
      features: ['Priority Support', 'Dedicated Account Manager', 'Training']
    }
  ]

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } })
  }

  return (
    <>
      <section className="products-hero">
        <p className="eyebrow">
          <span className="dot"></span>PRODUCTS & SERVICES
        </p>
        <h1>Our Solutions</h1>
        <p>Choose from our range of products and services designed to meet your business needs.</p>
      </section>

      <section className="products-section">
        <h2>Available Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <h3>{product.name}</h3>
                <span className="product-category">{product.category}</span>
              </div>
              <p className="product-description">{product.description}</p>
              
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="product-footer">
                <span className="product-price">${product.price.toLocaleString()}</span>
                <button 
                  className="button button--small"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <section className="cart-summary">
          <h2>Cart ({cart.length} items)</h2>
          <button className="button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </section>
      )}
    </>
  )
}

export default Products
