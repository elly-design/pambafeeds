import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const RegionalFootprint = () => {
  const [activeCountry, setActiveCountry] = useState(0)

  const countries = [
    {
      name: 'Kenya',
      role: 'Headquarters & Market Hub',
      locations: ['Baringo', 'Western Kenya', 'Coastal Kenya'],
      activities: 'Apiculture and regional market coordination.',
      color: '#166534'
    },
    {
      name: 'Uganda',
      role: 'Groundnut Production',
      locations: ['Eastern Uganda'],
      activities: 'Groundnut value chain with smallholder farmers and cooperatives.',
      color: '#f59e0b'
    },
    {
      name: 'Burundi',
      role: 'Bean Production',
      locations: ['Smallholder bean farming regions'],
      activities: 'Bean value chain and market linkages to Kenya and South Sudan.',
      color: '#1e40af'
    },
    {
      name: 'South Sudan',
      role: 'Emerging Market',
      locations: ['Regional market connections'],
      activities: 'Exploring market opportunities for regional commodities and trade connections.',
      color: '#166534'
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
        backgroundImage: 'url(/images/vart.jpg)',
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
              Regional Reach
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Regional Footprint
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#bfdbfe',
              lineHeight: 1.7
            }}>
              Building agricultural connections across East Africa.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our Regional Reach"
            title="East African Market Connections"
            subtitle="Pamba Feeds operates across East Africa, building agricultural market linkages that connect farmers, buyers, and partners across national borders."
          />

          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            marginBottom: '48px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
          }}>
            <img
              src="/images/com.png"
              alt="East African market connections map showing trade routes across Kenya, Uganda, Burundi and South Sudan"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setActiveCountry(index)}
                style={{
                  padding: '14px 24px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeCountry === index ? country.color : '#e2e8f0',
                  backgroundColor: activeCountry === index ? country.color : 'white',
                  color: activeCountry === index ? 'white' : '#0f172a',
                  fontSize: '15px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCountry === index ? '0 8px 25px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                {country.name}
              </button>
            ))}
          </div>

          <div key={activeCountry} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              borderTop: `6px solid ${countries[activeCountry].color}`
            }}>
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
                {countries[activeCountry].name}
              </h3>
              <p style={{ color: countries[activeCountry].color, fontWeight: '600', fontSize: '18px', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
                {countries[activeCountry].role}
              </p>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                {countries[activeCountry].activities}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {countries[activeCountry].locations.map((loc, i) => (
                  <span key={i} style={{
                    backgroundColor: `${countries[activeCountry].color}15`,
                    color: countries[activeCountry].color,
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Trade Connections"
            title="Cross-Border Value Chains"
            subtitle="Our regional network enables farmers to access larger, more reliable markets beyond national borders."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { image: '/images/ug.jpg', title: 'Uganda → Kenya', desc: 'Groundnuts from Eastern Uganda to Kenyan coastal markets.', color: '#f59e0b' },
              { image: '/images/bur.jpg', title: 'Burundi → Kenya', desc: 'Beans from Burundi to buyers in Kenya.', color: '#1e40af' },
              { image: '/images/su.jpg', title: 'Burundi → South Sudan', desc: 'Regional bean trade expanding northward.', color: '#166534' }
            ].map((route, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                borderTop: `4px solid ${route.color}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                {route.image ? (
                  <img
                    src={route.image}
                    alt={route.title}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
                  />
                ) : (
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{route.icon}</div>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{route.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Expand Your Market Reach With Us
          </h2>
          <p style={{ fontSize: '18px', color: '#dcfce7', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you are a buyer, producer, or development partner, join our growing East African network.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/partner" style={{
              padding: '16px 32px',
              backgroundColor: '#f59e0b',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(245, 158, 11, 0.5)'
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
              e.currentTarget.style.color = '#166534'
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

export default RegionalFootprint