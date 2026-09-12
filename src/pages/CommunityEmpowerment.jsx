import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const CommunityEmpowerment = () => {
  const [activeFocus, setActiveFocus] = useState(0)

  const focusAreas = [
    {
      icon: '💰',
      title: 'Economic Empowerment',
      description: 'We create income opportunities for farmers by connecting them to reliable markets, improving price negotiations, and supporting value addition along agricultural value chains.',
      color: '#166534'
    },
    {
      icon: '🎓',
      title: 'Farmer Skills Development',
      description: 'Through training, mentorship, and knowledge sharing, we equip farmers with practical skills in production, post-harvest handling, quality standards, and market readiness.',
      color: '#f59e0b'
    },
    {
      icon: '🤝',
      title: 'Collective Action',
      description: 'We support the formation and strengthening of farmer groups and cooperatives, enabling smallholders to achieve economies of scale and stronger bargaining power.',
      color: '#1e40af'
    },
    {
      icon: '🌱',
      title: 'Youth Participation',
      description: 'We create meaningful opportunities for young people to participate in agriculture as entrepreneurs, agriprocessors, traders, and service providers.',
      color: '#166534'
    },
    {
      icon: '👩‍🌾',
      title: "Women's Participation",
      description: 'We actively promote women\'s participation in agricultural production, enterprise, and leadership, recognizing their central role in food systems and rural economies.',
      color: '#f59e0b'
    }
  ]

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
      <section style={{
        position: 'relative',
        minHeight: '55vh',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/harvest.png)',
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
              People First
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Community Empowerment
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              Stronger value chains build stronger communities and create lasting economic opportunities.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our People-Centered Approach"
            title="Empowering People Through Agriculture"
            subtitle="Pamba Feeds places people at the center of everything we do. We believe that strong agricultural markets should benefit those who depend on them most."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {[
              { label: 'Farmers reached', value: '500+', icon: '👨‍🌾' },
              { label: 'Women & youth', value: '40%', icon: '👩‍🌾' },
              { label: 'Farmer groups', value: '25+', icon: '🤝' },
              { label: 'Countries', value: '3', icon: '🌍' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid #fde68a',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{stat.icon}</div>
                <p style={{ fontSize: '28px', fontWeight: '800', color: '#d97706', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</p>
                <p style={{ fontSize: '14px', color: '#475569', fontWeight: '600' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Focus Areas"
            title="How We Empower Communities"
            subtitle="Select a focus area to learn how we support farmers, youth, women, and rural communities."
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            {focusAreas.map((focus, index) => (
              <button
                key={index}
                onClick={() => setActiveFocus(index)}
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeFocus === index ? focus.color : '#e2e8f0',
                  backgroundColor: activeFocus === index ? focus.color : 'white',
                  color: activeFocus === index ? 'white' : '#0f172a',
                  fontSize: '15px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFocus === index ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ fontSize: '22px' }}>{focus.icon}</span>
                {focus.title}
              </button>
            ))}
          </div>

          <div key={activeFocus} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              borderTop: `6px solid ${focusAreas[activeFocus].color}`,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>{focusAreas[activeFocus].icon}</div>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                {focusAreas[activeFocus].title}
              </h3>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
                {focusAreas[activeFocus].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our Impact Pathway"
            title="From Training to Thriving Livelihoods"
            subtitle="Our empowerment model connects skills, organization, markets and income in a reinforcing cycle."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎓', title: 'Train', desc: 'Practical skills in production, quality and business.' },
              { icon: '🤝', title: 'Organize', desc: 'Farmer groups and cooperatives for collective action.' },
              { icon: '🔗', title: 'Connect', desc: 'Market linkages and buyer relationships.' },
              { icon: '💰', title: 'Earn', desc: 'Improved incomes and reinvestment in farms.' }
            ].map((item, index) => (
              <div key={index} style={{
                background: '#f8fafc',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = '#166534'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Join Us in Building Stronger Communities
          </h2>
          <p style={{ fontSize: '18px', color: '#fffbeb', lineHeight: 1.7, marginBottom: '32px' }}>
            Partner with Pamba Feeds to create meaningful opportunities for farmers, youth, women, and communities across East Africa.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner" style={{
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#d97706',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255,255,255,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              Partner With Us
            </Link>
            <Link to="/contact" style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white'
              e.currentTarget.style.color = '#d97706'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'white'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default CommunityEmpowerment