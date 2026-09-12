import { Link } from 'react-router-dom'

const Button = ({ to, onClick, children, variant = 'primary', ...props }) => {
  const baseStyle = {
    display: 'inline-block',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Montserrat, sans-serif',
    textDecoration: 'none',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    textAlign: 'center'
  }

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
      color: 'white',
      boxShadow: '0 8px 25px rgba(22, 163, 74, 0.4)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#f59e0b',
      border: '2px solid #f59e0b'
    },
    accent: {
      backgroundColor: '#f59e0b',
      color: 'white',
      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
    }
  }

  const style = { ...baseStyle, ...variants[variant] }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)'
    if (variant === 'primary') {
      e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.5)'
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#f59e0b'
      e.currentTarget.style.color = 'white'
    } else if (variant === 'accent') {
      e.currentTarget.style.boxShadow = '0 12px 35px rgba(245, 158, 11, 0.5)'
    }
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    if (variant === 'primary') {
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.4)'
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'transparent'
      e.currentTarget.style.color = '#f59e0b'
    } else if (variant === 'accent') {
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)'
    }
  }

  if (to) {
    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button