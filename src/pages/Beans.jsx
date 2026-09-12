import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const Beans = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Identify Demand',
      icon: '🎯',
      desc: 'We analyze buyer requirements in Kenya and South Sudan and align Burundi bean production with real market demand.',
      points: ['Market research', 'Buyer requirement mapping', 'Regional price analysis']
    },
    {
      title: 'Organize Farmers',
      icon: '🤝',
      desc: 'We support bean farmers in Burundi to organize into groups and cooperatives that can engage markets more effectively.',
      points: ['Farmer group formation', 'Governance support', 'Collective planning']
    },
    {
      title: 'Enable Regional Trade',
      icon: '🌍',
      desc: 'We strengthen aggregation, improve market readiness and develop cross-border value chains that connect Burundi to regional buyers.',
      points: ['Aggregation and bulking', 'Quality and grading support', 'Cross-border market linkages']
    }
  ]

  const activities = [
    { icon: '🌐', title: 'Regional Market Connections', desc: 'Connecting Burundi bean farmers to buyers in Kenya and South Sudan.' },
    { icon: '🤝', title: 'Farmer Organization', desc: 'Supporting farmers to organize and engage with markets more effectively.' },
    { icon: '🎯', title: 'Identifying Market Demand', desc: 'Understanding buyer requirements and aligning production with market needs.' },
    { icon: '📦', title: 'Strengthening Aggregation', desc: 'Helping farmers pool production to meet larger and more reliable orders.' },
    { icon: '✅', title: 'Improving Market Readiness', desc: 'Supporting quality, grading and post-harvest practices that meet buyer standards.' },
    { icon: '🌍', title: 'Cross-Border Value Chains', desc: 'Developing regional trade connections that expand market opportunities.' }
  ]

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '55vh',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/yel.jpg)',
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
              Our Projects
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: '800',
              marginBottom: '24px',
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: 1.1
            }}>
              Beans Project
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#fef3c7',
              lineHeight: 1.7
            }}>
              Connecting Burundi farmers to regional markets
            </p>
          </div>
        </div>
      </section>

      {/* Project Snapshot */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Project Snapshot"
            title="Connecting Burundi Farmers to Regional Markets"
            subtitle="Pamba Feeds is working with smallholder bean farmers in Burundi to develop market linkages with buyers in Kenya and South Sudan."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}>
            {[
              { label: 'Location', value: 'Burundi', icon: '📍' },
              { label: 'Markets', value: 'Kenya & South Sudan', icon: '🌐' },
              { label: 'Focus', value: 'Bean value chain', icon: '🌱' },
              { label: 'Impact', value: '150+ farmers', icon: '👩‍🌾' }
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
                <p style={{ fontSize: '14px', color: '#92400e', fontWeight: '600', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</p>
                <p style={{ fontSize: '18px', color: '#0f172a', fontWeight: '700' }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Tabs */}
      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="How It Works"
            title="From Burundi to Regional Buyers"
            subtitle="Our three-phase approach develops regional bean value chains that expand market access for smallholder farmers."
          />

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '16px 28px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeTab === index ? '#f59e0b' : '#e2e8f0',
                  backgroundColor: activeTab === index ? '#f59e0b' : 'white',
                  color: activeTab === index ? 'white' : '#0f172a',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === index ? '0 8px 25px rgba(245, 158, 11, 0.3)' : 'none',
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
              borderTop: '6px solid #f59e0b'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '48px' }}>{tabs[activeTab].icon}</div>
                <h3 style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: '800',
                  color: '#0f172a',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {tabs[activeTab].title}
                </h3>
              </div>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, marginBottom: '32px' }}>
                {tabs[activeTab].desc}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {tabs[activeTab].points.map((point, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    backgroundColor: '#fffbeb',
                    borderRadius: '12px',
                    color: '#92400e',
                    fontWeight: '600'
                  }}>
                    <span style={{ color: '#f59e0b', fontSize: '20px' }}>✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Activities */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Key Activities"
            title="What We Do"
            subtitle="Our work helps bean farmers access regional markets and participate more effectively in cross-border value chains."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {activities.map((item, index) => (
              <div key={index} style={{
                background: '#f8fafc',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = '#f59e0b'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Regional Value Chain
          </h2>
          <p style={{ fontSize: '22px', color: '#fffbeb', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 24px', fontWeight: '700' }}>
            Burundi → Kenya & South Sudan
          </p>
          <p style={{ fontSize: '18px', color: '#fffbeb', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto' }}>
            We see regional agricultural trade as an opportunity to expand markets for smallholder farmers while strengthening food systems across East Africa.
          </p>
        </div>
      </section>

      {/* Explore Other Projects */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '32px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Explore Other Projects
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects/apiculture" style={{
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
              Apiculture
            </Link>
            <Link to="/projects/groundnuts" style={{
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
              Groundnuts
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
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Beans