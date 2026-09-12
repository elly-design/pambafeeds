import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const WhyPambaFeeds = () => {
  const [activeStrength, setActiveStrength] = useState(0)

  const strengths = [
    { icon: '🎯', title: 'Market-Oriented', description: 'We start with market demand and work backwards to help farmers meet it.', color: '#166534' },
    { icon: '👨‍🌾', title: 'Farmer-Centered', description: 'We design interventions around the realities and needs of smallholder farmers.', color: '#f59e0b' },
    { icon: '🌍', title: 'Regional', description: 'We connect agricultural value chains across East Africa.', color: '#1e40af' },
    { icon: '🤝', title: 'Partnership-Driven', description: 'We work with market actors rather than creating parallel systems.', color: '#166534' },
    { icon: '♻️', title: 'Sustainability-Focused', description: 'We aim to create commercially viable relationships that can continue beyond project support.', color: '#f59e0b' },
    { icon: '🌱', title: 'Climate-Conscious', description: 'We integrate climate resilience and sustainable agriculture into our approach.', color: '#1e40af' }
  ]

  const audiences = [
    'Farmer Organizations',
    'Cooperatives',
    'Food Processors',
    'Input Suppliers',
    'Buyers & Traders',
    'Development Organizations',
    'Investors',
    'Government Institutions',
    'AgTech Companies'
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
        backgroundImage: 'url(/images/sack.jpg)',
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
              Why Us
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Why Pamba Feeds
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#fef3c7',
              lineHeight: 1.7
            }}>
              The value of working with a market-oriented, farmer-centered, and partnership-driven agribusiness.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our Strengths"
            title="What Makes Pamba Feeds Different"
            subtitle="We combine market knowledge, regional experience, and a people-centered approach to deliver lasting agricultural value."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {strengths.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveStrength(index)}
                style={{
                  background: activeStrength === index ? item.color : '#f8fafc',
                  borderRadius: '20px',
                  padding: '32px',
                  border: `2px solid ${activeStrength === index ? item.color : '#e2e8f0'}`,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeStrength === index ? '0 12px 30px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: activeStrength === index ? 'white' : '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p style={{ color: activeStrength === index ? 'rgba(255,255,255,0.9)' : '#64748b', lineHeight: 1.6, fontSize: '15px' }}>
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          <div key={activeStrength} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: '24px',
              padding: '48px',
              borderLeft: `6px solid ${strengths[activeStrength].color}`,
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '48px' }}>{strengths[activeStrength].icon}</div>
                <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', fontFamily: 'Montserrat, sans-serif' }}>
                  {strengths[activeStrength].title}
                </h3>
              </div>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8 }}>
                {strengths[activeStrength].description} This principle guides every project, partnership and intervention we design across East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Who We Work With"
            title="Partners That Benefit From Working With Us"
            subtitle="From producer groups to buyers and development partners, we collaborate with actors across the agricultural ecosystem."
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {audiences.map((audience, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '16px 32px',
                borderRadius: '50px',
                fontWeight: '600',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                fontFamily: 'Montserrat, sans-serif',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#166534'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'
                e.currentTarget.style.color = '#0f172a'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Work With Pamba Feeds?
          </h2>
          <p style={{ fontSize: '18px', color: '#fffbeb', lineHeight: 1.7, marginBottom: '32px' }}>
            Discover how a partnership with Pamba Feeds can strengthen agricultural value chains and create shared value.
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
              Partner With Pamba Feeds
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

export default WhyPambaFeeds