import { useState, useEffect } from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // const apiUrl = import.meta.env.VITE_CONTACT_API_URL || 'https://form-forums.vercel.app/api/v1/contact'
    const apiUrl = 'http://127.0.0.1:8000/api/v1/contact'


    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Secure transmission initiated! Message delivered successfully.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setMessage(data.detail || 'Failed to deliver transmission. Please try again.')
      }
    } catch (err) {
      console.error('Contact submit error:', err)
      setStatus('error')
      setMessage('Failed to connect to the secure transmission server. Please check your connection.')
    }
  }

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="contact-modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className="contact-modal-header">
          <span>Secure Channel</span>
          <h3>Initiate Transmission</h3>
        </div>

        <form onSubmit={handleSubmit} className="contact-modal-form">
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="form-control"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="form-control"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              className="form-control"
              placeholder="Mission classification / topic"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              className="form-control"
              placeholder="Write your transmission content..."
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>

          {status === 'success' && (
            <div className="status-card success">
              <span>✓</span>
              <p>{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="status-card error">
              <span>⚠</span>
              <p>{message}</p>
            </div>
          )}

          <button
            type="submit"
            className="contact-modal-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="spinner" />
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
