import { useLocation, Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
  const location = useLocation()
  const [cartItems, setCartItems] = useState(location.state?.cart || [])

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0)

  const handleRemove = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Add items from our products page to get started.</p>
        <Link to="/products" className="button">Continue Shopping</Link>
      </section>
    )
  }

  return (
    <>
      <section className="cart-hero">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</p>
      </section>

      <section className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>
                    <button 
                      className="button button--small"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Tax (10%):</span>
            <span>${(total * 0.1).toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${(total * 1.1).toLocaleString()}</span>
          </div>

          <Link to="/checkout" className="button button-block">
            Proceed to Checkout
          </Link>
          <Link to="/products" className="button button--ghost button-block">
            Continue Shopping
          </Link>
        </div>
      </section>
    </>
  )
}

export default Cart
