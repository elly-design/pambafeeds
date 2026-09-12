const SectionHeading = ({ label, title, subtitle, centered = true, light = false }) => {
  return (
    <div style={{
      textAlign: centered ? 'center' : 'left',
      marginBottom: '64px'
    }}>
      {label && (
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: light ? 'rgba(245, 158, 11, 0.2)' : '#dcfce7',
          borderRadius: '8px',
          marginBottom: '24px',
          fontSize: '14px',
          fontWeight: '600',
          color: light ? '#f59e0b' : '#166534',
          fontFamily: 'Montserrat, sans-serif',
          border: light ? '1px solid rgba(245, 158, 11, 0.3)' : 'none'
        }}>
          {label}
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: '800',
        color: light ? 'white' : '#0f172a',
        marginBottom: '24px',
        lineHeight: 1.2,
        fontFamily: 'Montserrat, sans-serif'
      }}>
        {title}
      </h2>
      <div style={{
        width: '80px',
        height: '4px',
        backgroundColor: '#f59e0b',
        margin: '0 auto 32px',
        borderRadius: '2px',
        marginLeft: centered ? 'auto' : '0',
        marginRight: centered ? 'auto' : '0'
      }}></div>
      {subtitle && (
        <p style={{
          fontSize: '18px',
          color: light ? '#cbd5e1' : '#64748b',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading