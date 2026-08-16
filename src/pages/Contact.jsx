import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
    }
  }

  return (
    <>
      <section className="contact-hero">
        <p className="eyebrow">
          <span className="dot"></span>GET IN TOUCH
        </p>
        <h1>Contact Us</h1>
        <p>Have a question or ready to start your next project? Let's talk.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:info@drltechs.com">info@drltechs.com</a>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9AM - 6PM EST<br />Saturday - Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="6"
            />
          </div>

          <button type="submit" className="button">Send Message</button>
          
          {submitted && (
            <div className="success-message">
              Thank you! We'll get back to you soon.
            </div>
          )}
        </form>
      </section>
    </>
  )
}

export default Contact
