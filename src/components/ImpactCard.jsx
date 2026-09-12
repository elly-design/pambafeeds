const ImpactCard = ({ icon, number, label, color = '#166534' }) => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '32px',
      borderRadius: '16px',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0',
      position: 'relative',
      overflow: 'hidden'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.borderColor = color
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#e2e8f0'
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
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
      <div style={{
        fontSize: '42px',
        fontWeight: '800',
        color: color,
        marginBottom: '8px',
        fontFamily: 'Montserrat, sans-serif'
      }}>
        {number}
      </div>
      <div style={{
        fontSize: '16px',
        color: '#64748b',
        fontWeight: '600'
      }}>
        {label}
      </div>
    </div>
  )
}

export default ImpactCard