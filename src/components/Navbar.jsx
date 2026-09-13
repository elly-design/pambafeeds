import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const isActive = (path) => {
    const [base, hash] = path.split('#')
    if (hash) {
      return location.pathname === base && location.hash === '#' + hash
    }
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const textColor = scrolled ? '#0f172a' : 'white'
  const hoverBg = scrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'

  const navItems = [
    { path: '/', label: 'Home' },
    {
      label: 'About Us',
      children: [
        { path: '/about#who', label: 'Who We Are' },
        { path: '/about#work', label: 'What We Do' },
        { path: '/about#values', label: 'Our Values' },
        { path: '/about#approach', label: 'Our Approach' },
        { path: '/about#journey', label: 'Our Journey' },
      ]
    },
    {
      label: 'Our Work',
      children: [
        { path: '/climate-food-security', label: 'Climate & Food Security' },
        { path: '/community-empowerment', label: 'Community Empowerment' },
        { path: '/regional-footprint', label: 'Regional Footprint' },
        { path: '/our-partners', label: 'Our Partners' },
        { path: '/impact', label: 'Impact' },
        { path: '/why-pamba-feeds', label: 'Why Pamba Feeds' },
      ]
    },
    { path: '/partner-with-us', label: 'Partner With Us' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleMouseEnter = (label) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease',
      textShadow: scrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: textColor,
          fontSize: '24px',
          fontWeight: '800',
          fontFamily: 'Montserrat, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'all 0.3s ease'
        }}>
          <img src="/images/pf.png" alt="Pamba Feeds" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          <span>Pamba Feeds</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'none',
          gap: '8px',
          alignItems: 'center'
        }} className="desktop-nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children ? (
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: item.children.some(c => isActive(c.path)) ? '#f59e0b' : textColor,
                  fontWeight: item.children.some(c => isActive(c.path)) ? '700' : '600',
                  fontSize: '14px',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '10px 16px 6px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease',
                  borderBottom: `2px solid ${item.children.some(c => isActive(c.path)) ? '#f59e0b' : 'transparent'}`
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBg
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <span style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>▾</span>
                </button>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive(item.path) ? '#f59e0b' : textColor,
                    fontWeight: isActive(item.path) ? '700' : '600',
                    fontSize: '14px',
                    fontFamily: 'Montserrat, sans-serif',
                    padding: '10px 16px 6px',
                    borderRadius: '8px',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    borderBottom: `2px solid ${isActive(item.path) ? '#f59e0b' : 'transparent'}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverBg
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '220px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  animation: 'dropdownIn 0.25s ease',
                  marginTop: '8px',
                  textShadow: 'none'
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: isActive(child.path) ? '#166534' : '#0f172a',
                        fontWeight: isActive(child.path) ? '700' : '600',
                        fontSize: '14px',
                        fontFamily: 'Montserrat, sans-serif',
                        transition: 'all 0.2s ease',
                        backgroundColor: isActive(child.path) ? '#dcfce7' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(child.path)) {
                          e.currentTarget.style.backgroundColor = '#f8fafc'
                          e.currentTarget.style.color = '#166534'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(child.path)) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = '#0f172a'
                        }
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <div style={{
            width: '28px',
            height: '3px',
            backgroundColor: textColor,
            margin: '6px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}></div>
          <div style={{
            width: '28px',
            height: '3px',
            backgroundColor: textColor,
            margin: '6px 0',
            transition: 'all 0.3s ease',
            opacity: isOpen ? 0 : 1
          }}></div>
          <div style={{
            width: '28px',
            height: '3px',
            backgroundColor: textColor,
            margin: '6px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div style={{
        display: isOpen ? 'block' : 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        padding: '24px',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        maxHeight: '80vh',
        overflowY: 'auto',
        textShadow: 'none'
      }} className="mobile-nav">
        {navItems.map((item) => (
          <div key={item.label} style={{ marginBottom: '16px' }}>
            {item.children ? (
              <div>
                <div style={{
                  color: '#166534',
                  fontWeight: '700',
                  fontSize: '16px',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                  {item.label}
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: isActive(child.path) ? '#f59e0b' : '#0f172a',
                        fontWeight: isActive(child.path) ? '700' : '600',
                        fontSize: '15px',
                        fontFamily: 'Montserrat, sans-serif',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={item.path}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: isActive(item.path) ? '#f59e0b' : '#0f172a',
                  fontWeight: isActive(item.path) ? '700' : '600',
                  fontSize: '16px',
                  fontFamily: 'Montserrat, sans-serif',
                  padding: '12px 0',
                  borderBottom: `2px solid ${isActive(item.path) ? '#f59e0b' : 'rgba(0, 0, 0, 0.1)'}`
                }}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar