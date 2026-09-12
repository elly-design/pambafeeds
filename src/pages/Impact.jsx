import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '500+', label: 'Smallholder farmers reached', icon: '👨‍🌾', color: '#166534' },
    { number: '25+', label: 'Farmer groups/cooperatives engaged', icon: '🤝', color: '#f59e0b' },
    { number: '100+', label: 'Tonnes aggregated', icon: '📦', color: '#166534' },
    { number: '50+', label: 'Market actors connected', icon: '🔗', color: '#f59e0b' },
    { number: '3', label: 'Countries connected', icon: '🌍', color: '#166534' },
    { number: '40%', label: 'Women/youth participation', icon: '👩‍🌾', color: '#f59e0b' }
  ]

  const impactAreas = [
    { icon: '👨‍🌾', title: 'Smallholder Farmer Empowerment', desc: 'Increasing income, productivity and bargaining power through market access and collective action.', color: '#166534' },
    { icon: '🤝', title: 'Farmer Organization', desc: 'Building capacity of groups and cooperatives to organize, aggregate and engage markets.', color: '#f59e0b' },
    { icon: '🔗', title: 'Market Linkages', desc: 'Creating sustainable connections between farmers and buyers, processors and market actors.', color: '#166534' },
    { icon: '🌍', title: 'Regional Trade', desc: 'Enabling cross-border agricultural trade across East Africa.', color: '#f59e0b' },
    { icon: '🌱', title: 'Climate Resilience', desc: 'Supporting adoption of climate-smart agricultural practices and resilience.', color: '#166534' },
    { icon: '👩‍🌾', title: 'Inclusive Participation', desc: 'Promoting meaningful participation of women and youth in value chains.', color: '#f59e0b' }
  ]

  const stories = [
    { icon: '👨‍🌾', name: 'John, Beekeeper', location: 'Baringo, Kenya', story: 'Through Pamba Feeds, our beekeeping group now has direct access to coastal markets. We used to sell to middlemen at low prices. Now we get better prices and can invest in better equipment.' },
    { icon: '👩‍🌾', name: 'Grace, Groundnut Farmer', location: 'Eastern Uganda', story: 'Our cooperative now aggregates production together, which means we can negotiate better prices. Working with Pamba Feeds has helped us understand what buyers need.' },
    { icon: '🤝', name: 'Cooperative Leader', location: 'Burundi', story: 'Before Pamba Feeds, we struggled to find buyers. Now we have regular buyers in Kenya and South Sudan. Our farmers are more motivated because they know there is a market.' }
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
        backgroundImage: 'url(/images/ben.jpg)',
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
              Our Impact
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Measuring What<br />
              <span style={{ color: '#f59e0b' }}>Matters Most</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              We measure impact not only by the number of farmers reached, but by the strength and sustainability of the market relationships we help create.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="By The Numbers"
            title="Our Impact Across East Africa"
            subtitle="Key indicators of our work with farmers, cooperatives, buyers and regional markets."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {stats.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '48px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                e.currentTarget.style.borderColor = item.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.color }}></div>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: item.color,
                  marginBottom: '16px',
                  fontFamily: 'Montserrat, sans-serif',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.1}s`
                }}>
                  {item.number}
                </div>
                <div style={{ fontSize: '16px', color: '#64748b', fontWeight: '600', lineHeight: 1.5 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Impact Areas"
            title="Where We Make a Difference"
            subtitle="Our work creates impact across multiple dimensions of agricultural market systems."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {impactAreas.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '24px',
                padding: '48px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.4s ease',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = item.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.color }}></div>
                <div style={{ width: '72px', height: '72px', borderRadius: '16px', backgroundColor: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '24px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '16px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Impact Stories"
            title="Real Impact, Real Stories"
            subtitle="Behind every statistic are farmers, cooperatives, and communities whose lives and livelihoods are being transformed."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {stories.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '48px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                e.currentTarget.style.borderColor = '#166534'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = '#e2e8f0'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#166534' }}></div>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', marginBottom: '24px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{item.name}</h3>
                <p style={{ color: '#f59e0b', fontWeight: '600', marginBottom: '20px', fontSize: '15px' }}>{item.location}</p>
                <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '16px', fontStyle: 'italic' }}>"{item.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading
            label="Our Approach"
            title="Why Measuring Impact Matters"
          />

          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.8, fontSize: '18px', color: '#475569' }}>
              <p>
                At Pamba Feeds, we believe that measuring impact is not just about counting numbers. It is about understanding whether our interventions are creating meaningful, sustainable change.
              </p>
              <p>
                We measure impact across multiple dimensions: the number of farmers reached, the strength of market relationships built, the sustainability of these relationships, and the extent to which farmers are empowered to continue engaging in markets beyond project support.
              </p>
              <p>
                Our ultimate goal is not just to create short-term market connections, but to build systems and relationships that can continue delivering value to farmers and markets long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.2 }}>
            Want to Be Part of Our Impact?
          </h2>
          <p style={{ fontSize: '20px', color: '#dcfce7', marginBottom: '48px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 48px' }}>
            Whether you are a farmer organization, buyer, or development partner, there are opportunities to collaborate and create impact together.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/partner" style={{
              padding: '20px 48px',
              fontSize: '20px',
              fontWeight: '700',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              borderRadius: '16px',
              backgroundColor: '#f59e0b',
              color: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: 'none',
              display: 'inline-block',
              boxShadow: '0 12px 35px rgba(245, 158, 11, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 16px 45px rgba(245, 158, 11, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(245, 158, 11, 0.4)'
            }}>
              Partner With Us
            </Link>
            <Link to="/contact" style={{
              padding: '20px 48px',
              fontSize: '20px',
              fontWeight: '700',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              borderRadius: '16px',
              backgroundColor: 'white',
              color: '#166534',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: 'none',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
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
      `}</style>
    </div>
  )
}

export default Impact