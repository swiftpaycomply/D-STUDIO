import { useState } from 'react'
import '../styles/OrderTracking.css'

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/orders/${orderNumber}`)
      if (response.ok) {
        const data = await response.json()
        setOrder(data)
      } else {
        setOrder(null)
        alert('Order not found')
      }
    } catch (error) {
      console.error('Error fetching order:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status) => {
    const colors = {
      pending: '#e8c547',
      processing: '#3b82f6',
      shipped: '#10b981',
      delivered: '#10b981',
      cancelled: '#ef4444'
    }
    return colors[status] || '#888c93'
  }

  return (
    <>
      <section className="tracking-hero">
        <h1>Order Tracking</h1>
        <p>Enter your order number to track your shipment</p>
      </section>

      <section className="tracking-content">
        <form className="tracking-form" onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="orderNumber">Order Number *</label>
            <input
              type="text"
              id="orderNumber"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g., ORD-2025-0001"
              required
            />
          </div>
          <button 
            type="submit" 
            className="button"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Track Order'}
          </button>
        </form>

        {order && (
          <div className="order-details">
            <h2>Order #{order.number}</h2>
            
            <div className="order-status">
              <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                {order.status?.toUpperCase()}
              </span>
              <p>Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="timeline">
              {order.events?.map((event, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{event.title}</h4>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                    {event.description && <p className="description">{event.description}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>Total: ${order.total?.toLocaleString()}</p>
              {order.trackingNumber && (
                <p>Tracking Number: <strong>{order.trackingNumber}</strong></p>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default OrderTracking
