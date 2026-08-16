import { useState, useEffect } from 'react'
import '../styles/Admin.css'

function Admin() {
  const [stats, setStats] = useState(null)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    fetchAdminData()
  }, [])

  const fetchAdminData = async () => {
    try {
      const [statsRes, ordersRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/admin/orders')
      ])

      if (statsRes.ok) setStats(await statsRes.json())
      if (ordersRes.ok) setOrders(await ordersRes.json())
    } catch (error) {
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <section className="admin-loading"><h1>Loading...</h1></section>
  }

  return (
    <>
      <section className="admin-hero">
        <h1>Admin Dashboard</h1>
      </section>

      <section className="admin-content">
        <div className="admin-tabs">
          <button 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button 
            className={`tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div className="admin-dashboard">
            <h2>Dashboard Overview</h2>
            
            {stats && (
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Revenue</h3>
                  <div className="stat-value">${stats.totalRevenue?.toLocaleString()}</div>
                </div>
                <div className="stat-card">
                  <h3>Total Orders</h3>
                  <div className="stat-value">{stats.totalOrders}</div>
                </div>
                <div className="stat-card">
                  <h3>Active Users</h3>
                  <div className="stat-value">{stats.activeUsers}</div>
                </div>
                <div className="stat-card">
                  <h3>Conversion Rate</h3>
                  <div className="stat-value">{stats.conversionRate}%</div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="admin-orders">
            <h2>Recent Orders</h2>
            
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>${order.total?.toLocaleString()}</td>
                    <td>
                      <span className="status-badge">{order.status}</span>
                    </td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>
                      <button className="button button--small">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="admin-users">
            <h2>User Management</h2>
            <p>User management features coming soon...</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Admin
