import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const Apiculture = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Organize Beekeepers',
      icon: '🤝',
      desc: 'We bring small-scale beekeepers together into farmer groups, assess their capacity and identify market demand from buyers along the Kenyan coast.',
      points: ['Group formation and governance', 'Baseline capacity assessment', 'Coastal buyer mapping']
    },
    {
      title: 'Build Capacity',
      icon: '🎓',
      desc: 'We train beekeepers on modern hive management, quality honey production and post-harvest handling so products meet market standards.',
      points: ['Modern hive management', 'Quality and hygiene training', 'Post-harvest handling']
    },
    {
      title: 'Aggregate & Market',
      icon: '🚚',
      desc: 'We support access to productive equipment, aggregate honey from organized groups and connect producers to reliable coastal markets.',
      points: ['Equipment access and financing', 'Honey aggregation', 'Coastal market linkages']
    }
  ]

  const activities = [
    { icon: '🐝', title: 'Organizing Beekeepers', desc: 'Bringing small-scale beekeepers together into farmer groups for collective action and market access.' },
    { icon: '🎓', title: 'Building Farmer Capacity', desc: 'Training beekeepers on modern hive management, quality honey production and post-harvest handling.' },
    { icon: '✅', title: 'Quality Improvement', desc: 'Supporting beekeepers to meet market standards and produce honey that buyers can rely on.' },
    { icon: '📦', title: 'Improving Equipment Access', desc: 'Improving access to appropriate beekeeping equipment and productive hives.' },
    { icon: '🚚', title: 'Aggregating Production', desc: 'Collecting honey from organized producers to supply larger, more reliable market orders.' },
    { icon: '🌊', title: 'Coastal Market Linkages', desc: 'Connecting Baringo and Western Kenya beekeepers to buyers and markets along the coast.' }
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
        backgroundImage: 'url(/images/pur.jpg)',
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
              Apiculture Project
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#fef3c7',
              lineHeight: 1.7
            }}>
              Connecting Kenyan beekeepers to new markets
            </p>
          </div>
        </div>
      </section>

      {/* Project Snapshot */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Project Snapshot"
            title="Connecting Kenyan Beekeepers to New Markets"
            subtitle="Pamba Feeds works with small-scale beekeepers in Baringo and Western Kenya, supporting them to access markets in the coastal region of Kenya."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}>
            {[
              { label: 'Location', value: 'Baringo & Western Kenya', icon: '📍' },
              { label: 'Market', value: 'Coastal Kenya', icon: '🌊' },
              { label: 'Focus', value: 'Honey production', icon: '🍯' },
              { label: 'Impact', value: '150+ beekeepers', icon: '🐝' }
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
            title="From Hive to Market"
            subtitle="Our three-phase approach helps beekeepers move from fragmented production to organized, market-oriented value chains."
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
            subtitle="Our day-to-day work strengthens beekeeping as a reliable source of income for smallholder farmers."
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
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Impact Statement
          </h2>
          <p style={{ fontSize: '20px', color: '#dcfce7', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            Helping small-scale beekeepers move from fragmented production toward organized, market-oriented value chains — improving incomes, quality and market access across Baringo and Western Kenya.
          </p>
        </div>
      </section>

      {/* Explore Other Projects */}
      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', textAlign: 'center' }}>
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
              e.currentTarget.style.color = '#d97706'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'white'
            }}>
              Groundnuts
            </Link>
            <Link to="/projects/beans" style={{
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
              Beans
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

export default Apiculture