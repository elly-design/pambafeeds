import { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/approach', label: 'Our Approach' },
    { path: '/projects', label: 'Our Projects' },
    { path: '/impact', label: 'Impact' },
    { path: '/contact', label: 'Contact' }
  ]

  const workLinks = [
    { path: '/climate-food-security', label: 'Climate & Food Security' },
    { path: '/community-empowerment', label: 'Community Empowerment' },
    { path: '/regional-footprint', label: 'Regional Footprint' },
    { path: '/why-pamba-feeds', label: 'Why Pamba Feeds' },
    { path: '/partner', label: 'Partner With Us' }
  ]

  const socialLinks = [
    {
      label: 'Facebook',
      color: '#1877f2',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      color: '#e4405f',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      color: '#ff0000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <footer style={{ backgroundColor: '#0f172a', color: 'white' }}>
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        padding: '48px 24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '800', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
              Stay Connected
            </h3>
            <p style={{ color: '#bfdbfe', fontSize: '16px' }}>
              Subscribe for updates on our projects, impact stories, and partnership opportunities.
            </p>
          </div>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', flex: '1 1 320px', maxWidth: '500px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: '12px',
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                minWidth: '200px'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 28px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#f59e0b',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div style={{ padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <img src="/images/pf.png" alt="Pamba Feeds" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'Montserrat, sans-serif' }}>
                  Pamba Feeds
                </h3>
              </div>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
                Powering Growth and Sustainable Futures. Strengthening inclusive, sustainable, and climate-resilient agricultural value chains across East Africa.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    title={link.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#1e293b',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = link.color; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#f59e0b', fontFamily: 'Montserrat, sans-serif' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.path} style={{ marginBottom: '12px' }}>
                    <Link
                      to={link.path}
                      style={{ color: '#94a3b8', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f59e0b'; e.currentTarget.style.transform = 'translateX(4px)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)' }}
                    >
                      <span style={{ color: '#166534' }}>›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#f59e0b', fontFamily: 'Montserrat, sans-serif' }}>
                Our Work
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {workLinks.map((link) => (
                  <li key={link.path} style={{ marginBottom: '12px' }}>
                    <Link
                      to={link.path}
                      style={{ color: '#94a3b8', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#f59e0b'; e.currentTarget.style.transform = 'translateX(4px)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)' }}
                    >
                      <span style={{ color: '#166534' }}>›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#f59e0b', fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </h4>
              <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.6 }}>
                For partnerships, inquiries, and collaboration opportunities.
              </p>
              <p style={{ color: '#94a3b8', marginBottom: '12px' }}>
                <span style={{ color: '#f59e0b' }}>Email:</span> info@pambafeeds.org
              </p>
              <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
                <span style={{ color: '#f59e0b' }}>Phone:</span> +254 700 000 000
              </p>
              <Link to="/contact" style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#166534',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f59e0b'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#166534'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              © {new Date().getFullYear()} Pamba Feeds. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>Privacy Policy</Link>
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer