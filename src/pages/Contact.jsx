import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: '📍', title: 'Location', detail: 'Kenya, East Africa', color: '#166534' },
    { icon: '📞', title: 'Phone', detail: '+254 XXX XXX XXX', color: '#f59e0b' },
    { icon: '✉️', title: 'Email', detail: 'info@pambafeeds.com', color: '#166534' },
    { icon: '🕐', title: 'Office Hours', detail: 'Mon - Fri: 9:00 AM - 5:00 PM', color: '#f59e0b' }
  ]

  const faqs = [
    { q: 'How can I partner with Pamba Feeds?', a: 'Visit our Partner page and fill out the partnership inquiry or use this contact form to start a conversation.' },
    { q: 'Can I donate to support your work?', a: 'Yes. Our Partner page includes a Donate tab with options for one-time or recurring contributions.' },
    { q: 'Which regions do you work in?', a: 'We operate across Kenya, Uganda, Burundi and South Sudan, with a focus on East African agricultural value chains.' },
    { q: 'How can farmers get involved?', a: 'Farmers and cooperatives can reach out through this form, selecting Farmer Inquiry as the interest area.' }
  ]

  const socialLinks = [
    { label: 'Facebook', color: '#1877f2' },
    { label: 'Instagram', color: '#e4405f' },
    { label: 'YouTube', color: '#ff0000' }
  ]

  const socialIcons = {
    Facebook: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    YouTube: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
      <section style={{
        position: 'relative',
        minHeight: '55vh',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/frech.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', padding: '120px 24px 100px', width: '100%' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              borderRadius: '50px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'Montserrat, sans-serif',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              Get In Touch
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              We Would Love to<br />
              <span style={{ color: '#f59e0b' }}>Hear From You</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              Whether you are a farmer, partner, or interested in our work, we are here to help. Reach out and let us start a conversation.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {contactInfo.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                borderTop: `4px solid ${item.color}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = item.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  backgroundColor: `${item.color}15`,
                  border: `2px solid ${item.color}`,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <SectionHeading
                label="Send a Message"
                title="Get In Touch"
                subtitle="Fill out the form below and we will respond as soon as possible."
              />

              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '48px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization name"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 XXX XXX XXX"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Interest Area *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        backgroundColor: '#f8fafc',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="farmer">Farmer Inquiry</option>
                      <option value="projects">Project Information</option>
                      <option value="media">Media/Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        backgroundColor: '#f8fafc',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#166534'; e.currentTarget.style.backgroundColor = 'white' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '18px 40px',
                      fontSize: '18px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat, sans-serif',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.4)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.3)' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div>
              <SectionHeading
                label="Common Questions"
                title="Frequently Asked Questions"
                subtitle="Quick answers to common questions about reaching out and getting involved."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#0f172a',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      {faq.q}
                      <span style={{ fontSize: '20px', transition: 'transform 0.3s ease', transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                    </button>
                    {openFaq === index && (
                      <div style={{ padding: '0 24px 20px', color: '#64748b', lineHeight: 1.7, animation: 'slideDown 0.3s ease-out' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '48px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                  Connect With Us
                </h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      title={link.label}
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        color: link.color,
                        border: `2px solid ${link.color}`,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.backgroundColor = link.color; e.currentTarget.style.color = 'white' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = link.color }}
                    >
                      {socialIcons[link.label]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Contact