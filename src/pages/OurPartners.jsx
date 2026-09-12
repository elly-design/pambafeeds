import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const OurPartners = () => {
  const partners = [
    { icon: '👨‍🌾', title: 'Smallholder Farmers', desc: 'The foundation of agricultural production and the primary beneficiaries of our work.', color: '#166534' },
    { icon: '🤝', title: 'Farmer Groups & Cooperatives', desc: 'Enabling collective action, aggregation and stronger bargaining power.', color: '#f59e0b' },
    { icon: '🚜', title: 'Agricultural Input Suppliers', desc: 'Providing quality seeds, fertilizers, tools and extension services.', color: '#166534' },
    { icon: '🏭', title: 'Agriprocessors', desc: 'Adding value through sorting, grading, packaging and processing.', color: '#f59e0b' },
    { icon: '📦', title: 'Traders & Aggregators', desc: 'Connecting production to markets and ensuring consistent supply.', color: '#166534' },
    { icon: '🏪', title: 'Buyers & Markets', desc: 'Retailers, exporters and consumers who create demand for quality produce.', color: '#f59e0b' },
    { icon: '🌍', title: 'Development Organizations', desc: 'Supporting systemic change through partnerships and funding.', color: '#166534' },
    { icon: '🤲', title: 'Other Agricultural Stakeholders', desc: 'Researchers, extension agents and service providers strengthening the ecosystem.', color: '#f59e0b' }
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
        backgroundImage: 'url(/images/nut.jpg)',
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
              Collaboration
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Partners
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              Working across the agricultural ecosystem to build stronger markets.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Working Across the Agricultural Ecosystem"
            title="Who We Work With"
            subtitle="Pamba Feeds operates within a wider agricultural ecosystem, collaborating with different market actors to strengthen agricultural systems."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            {partners.map((partner, index) => (
              <div key={index} style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                borderTop: `4px solid ${partner.color}`,
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
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{partner.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{partner.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '15px' }}>{partner.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>🤝</div>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
              Partnership Message
            </h3>
            <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8 }}>
              We believe sustainable agricultural markets are built through collaboration. Pamba Feeds works with different market actors to create commercially viable relationships that benefit farmers and businesses.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>
            Become a Partner
          </h2>
          <p style={{ fontSize: '18px', color: '#dcfce7', lineHeight: 1.7, marginBottom: '32px' }}>
            Join our ecosystem and help build stronger agricultural markets across East Africa.
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

export default OurPartners