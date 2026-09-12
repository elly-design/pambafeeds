import { Link } from 'react-router-dom'

const ProjectCard = ({ icon, title, location, description, color = '#166534', link = '/projects' }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: '24px',
      padding: '48px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px)'
        e.currentTarget.style.borderColor = color
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: color
      }}></div>
      <div style={{ fontSize: '64px', marginBottom: '24px' }}>{icon}</div>
      <h3 style={{
        fontSize: '28px',
        fontWeight: '800',
        marginBottom: '16px',
        color: 'white',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#f59e0b',
        fontWeight: '600',
        marginBottom: '16px',
        fontSize: '14px',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        📍 {location}
      </p>
      <p style={{
        color: '#94a3b8',
        marginBottom: '24px',
        lineHeight: 1.6
      }}>
        {description}
      </p>
      <Link
        to={link}
        style={{
          color: color,
          textDecoration: 'none',
          fontWeight: '700',
          fontFamily: 'Montserrat, sans-serif',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        Learn More →
      </Link>
    </div>
  )
}

export default ProjectCard