import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const ClimateFoodSecurity = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Climate-Smart Production',
      icon: '🌱',
      desc: 'We support farmers to adopt practices that improve resilience to climate variability and extreme weather events.',
      points: ['Drought-resistant crops', 'Conservation agriculture', 'Weather information services']
    },
    {
      title: 'Resource Efficiency',
      icon: '💧',
      desc: 'We promote better management of water, land and agricultural inputs to maximize productivity while minimizing environmental impact.',
      points: ['Water harvesting', 'Soil conservation', 'Integrated nutrient management']
    },
    {
      title: 'Resilient Food Systems',
      icon: '🌾',
      desc: 'We strengthen agricultural value chains that can continue supplying food despite climate and market shocks.',
      points: ['Diversification', 'Storage infrastructure', 'Market information systems']
    }
  ]

  const priorities = [
    { icon: '🌱', title: 'Climate-Smart Production', desc: 'Adopting practices that improve resilience to climate variability and extreme weather events.', color: '#166534' },
    { icon: '💧', title: 'Efficient Use of Resources', desc: 'Better management of water, land and agricultural inputs to maximize productivity.', color: '#f59e0b' },
    { icon: '🐝', title: 'Protecting Pollinators', desc: 'Supporting apiculture and reducing pesticide use to protect bees and biodiversity.', color: '#166534' },
    { icon: '🌾', title: 'Resilient Food Systems', desc: 'Strengthening value chains that continue supplying food despite shocks.', color: '#f59e0b' },
    { icon: '♻️', title: 'Sustainable Value Chains', desc: 'More efficient production, aggregation and market systems that reduce waste.', color: '#166534' },
    { icon: '🌍', title: 'Adaptation & Mitigation', desc: 'Balancing adaptation to climate impacts with mitigation of agriculture’s carbon footprint.', color: '#f59e0b' }
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
              Sustainability
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Climate Action &<br />
              <span style={{ color: '#f59e0b' }}>Food Security</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              Building climate-resilient agricultural systems for sustainable food security across East Africa
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our Commitment"
            title="Integrating Climate and Food Security"
            subtitle="Climate resilience is not separate from agricultural development. It is central to building sustainable livelihoods and food systems."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
            {[
              { label: 'Farmers trained', value: '500+', icon: '🎓' },
              { label: 'Climate-smart practices', value: '12+', icon: '🌱' },
              { label: 'Countries reached', value: '3', icon: '🌍' },
              { label: 'Value chains', value: '3', icon: '🔗' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderRadius: '20px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid #bbf7d0',
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
                <p style={{ fontSize: '28px', fontWeight: '800', color: '#166534', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</p>
                <p style={{ fontSize: '14px', color: '#475569', fontWeight: '600' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="How We Work"
            title="Climate Action Priorities"
            subtitle="Click each priority to explore how we integrate climate resilience into agricultural value chains."
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '16px 28px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeTab === index ? '#166534' : '#e2e8f0',
                  backgroundColor: activeTab === index ? '#166534' : 'white',
                  color: activeTab === index ? 'white' : '#0f172a',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === index ? '0 8px 25px rgba(22, 163, 74, 0.3)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          <div key={activeTab} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              borderTop: '6px solid #166534'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '48px' }}>{tabs[activeTab].icon}</div>
                <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', fontFamily: 'Montserrat, sans-serif' }}>{tabs[activeTab].title}</h3>
              </div>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, marginBottom: '32px' }}>{tabs[activeTab].desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {tabs[activeTab].points.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '12px', color: '#166534', fontWeight: '600' }}>
                    <span style={{ color: '#166534', fontSize: '20px' }}>✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Focus Areas"
            title="Climate Priorities Across Our Work"
            subtitle="Our projects address climate and food security through practical, farmer-centered interventions."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {priorities.map((item, index) => (
              <div key={index} style={{
                background: '#f8fafc',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
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
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.color }}></div>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Join Us in Building Climate-Resilient Food Systems
          </h2>
          <p style={{ fontSize: '18px', color: '#dcfce7', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you are a farmer organization, research institution, or development partner, there are opportunities to collaborate.
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

export default ClimateFoodSecurity