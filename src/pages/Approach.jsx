import { useState } from 'react'
import { Link } from 'react-router-dom'

const Approach = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [activeActor, setActiveActor] = useState(0)

  const steps = [
    {
      number: '01',
      title: 'Identify Market Opportunities',
      desc: 'We identify demand, market gaps and opportunities within agricultural value chains. This involves market research, trend analysis and understanding where smallholder farmers can competitively participate.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Work With Market Actors',
      desc: 'We collaborate with farmers, cooperatives, buyers, agriprocessors, input suppliers and other value-chain actors. Building relationships with all participants ensures systemic change rather than isolated interventions.',
      icon: '🤝'
    },
    {
      number: '03',
      title: 'Organize & Aggregate',
      desc: 'We support farmers to organize into groups and cooperatives that can collectively respond to market demand. Aggregation enables smallholders to achieve economies of scale and meet volume requirements.',
      icon: '📦'
    },
    {
      number: '04',
      title: 'Build Farmer Capacity',
      desc: 'We support farmers with knowledge, training, tools and resources needed to improve production and quality. This includes technical training, business skills, quality standards and appropriate technologies.',
      icon: '🎓'
    },
    {
      number: '05',
      title: 'Connect Farmers to Markets',
      desc: 'We establish market linkages between organized producers and potential buyers. This involves facilitating contracts, building trust and ensuring fair and transparent trading relationships.',
      icon: '🔗'
    },
    {
      number: '06',
      title: 'Build Sustainable Value Chains',
      desc: 'We work to create commercially viable relationships that continue beyond individual projects. Our focus is on building systems and relationships that are self-sustaining and market-driven.',
      icon: '♻️'
    }
  ]

  const actors = [
    { icon: '👨‍🌾', title: 'Smallholder Farmers', desc: 'The foundation of agricultural production and the primary beneficiaries of our work.', color: '#166534' },
    { icon: '🤝', title: 'Farmer Groups', desc: 'Enabling collective action, aggregation and stronger bargaining power.', color: '#f59e0b' },
    { icon: '🏭', title: 'Input Suppliers', desc: 'Providing quality seeds, fertilizers, tools and extension services.', color: '#166534' },
    { icon: '🏢', title: 'Agriprocessors', desc: 'Adding value through sorting, grading, packaging and processing.', color: '#f59e0b' },
    { icon: '🚚', title: 'Traders & Aggregators', desc: 'Connecting production to markets and ensuring consistent supply.', color: '#166534' },
    { icon: '🏪', title: 'Buyers & Markets', desc: 'Retailers, exporters and consumers who create demand for quality produce.', color: '#f59e0b' }
  ]

  const benefits = [
    { icon: '🔄', title: 'Systemic Change', desc: 'We address root causes rather than symptoms, strengthening the whole market system.', color: '#166534' },
    { icon: '📈', title: 'Scalable Impact', desc: 'Models can be replicated across crops, regions and value chains.', color: '#f59e0b' },
    { icon: '🎯', title: 'Market-Driven', desc: 'Solutions are based on real buyer demand and commercial viability.', color: '#166534' },
    { icon: '🤝', title: 'Collaborative', desc: 'We build on existing relationships, trust and local knowledge.', color: '#f59e0b' },
    { icon: '♻️', title: 'Sustainable', desc: 'Lasting commercial relationships continue beyond project cycles.', color: '#166534' },
    { icon: '🎓', title: 'Farmer-Focused', desc: 'Every intervention is designed around smallholder realities and aspirations.', color: '#f59e0b' }
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
        backgroundImage: 'url(/images/agri.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '120px 24px 100px',
          width: '100%'
        }}>
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
              Our Methodology
            </div>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Market Systems<br />
              <span style={{ color: '#f59e0b' }}>Approach</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7,
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Building sustainable agricultural markets by working with all actors in the value chain
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '20px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              How We Work
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', margin: '0 auto 32px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '20px', color: '#475569', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
              Rather than working with farmers in isolation, Pamba Feeds works with the different actors that make agricultural markets function. We believe sustainable change requires engaging the entire market system.
            </p>
            <div style={{
              marginTop: '32px',
              padding: '24px',
              background: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
              borderRadius: '16px',
              borderLeft: '4px solid #166534'
            }}>
              <p style={{ fontSize: '20px', fontWeight: '700', color: '#166534', fontFamily: 'Montserrat, sans-serif' }}>
                We do not just connect farmers to buyers. We help build the systems, relationships and capabilities that make those connections sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Six-Step Process */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#dcfce7',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#166534',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Process
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Six-Step Approach
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Click each step to explore how we transform value chains from market insight to sustainable impact.
            </p>
          </div>

          {/* Stepper */}
          <div style={{ position: 'relative', marginBottom: '48px' }}>
            <div style={{
              position: 'absolute',
              top: '28px',
              left: '0',
              right: '0',
              height: '4px',
              backgroundColor: '#e2e8f0',
              zIndex: 0
            }}></div>
            <div style={{
              position: 'absolute',
              top: '28px',
              left: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #166534, #f59e0b)',
              zIndex: 0,
              transition: 'width 0.4s ease',
              width: `${(activeStep / (steps.length - 1)) * 100}%`
            }}></div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 1
            }}>
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    width: '80px'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: '800',
                    fontFamily: 'Montserrat, sans-serif',
                    transition: 'all 0.3s ease',
                    backgroundColor: activeStep === index ? '#166534' : 'white',
                    color: activeStep === index ? 'white' : '#166534',
                    border: `3px solid ${activeStep === index ? '#166534' : '#e2e8f0'}`,
                    boxShadow: activeStep === index ? '0 8px 25px rgba(22, 163, 74, 0.4)' : 'none',
                    transform: activeStep === index ? 'scale(1.1)' : 'scale(1)'
                  }}>
                    {step.number}
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: activeStep === index ? '#166534' : '#64748b',
                    fontFamily: 'Montserrat, sans-serif',
                    textAlign: 'center',
                    transition: 'color 0.3s ease'
                  }}>
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Card */}
          <div key={activeStep} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: '24px',
              padding: '48px',
              borderLeft: '8px solid #166534',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '80px',
                opacity: 0.08
              }}>
                {steps[activeStep].icon}
              </div>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0
                }}>
                  {steps[activeStep].icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#166534',
                    marginBottom: '4px',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    Step {steps[activeStep].number}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: '800',
                    color: '#0f172a',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8 }}>
                {steps[activeStep].desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '2px solid #166534',
                    backgroundColor: 'white',
                    color: '#166534',
                    fontWeight: '700',
                    fontFamily: 'Montserrat, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#166534'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    e.currentTarget.style.color = '#166534'
                  }}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: '#166534',
                    color: 'white',
                    fontWeight: '700',
                    fontFamily: 'Montserrat, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#14532d'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#166534'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Ecosystem */}
      <section style={{ padding: '100px 0', backgroundColor: '#f0fdfa', color: '#0f172a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#dcfce7',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#166534',
              fontFamily: 'Montserrat, sans-serif',
              border: '1px solid #166534'
            }}>
              Ecosystem
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              marginBottom: '16px',
              color: '#0f172a',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              The Market Ecosystem We Work In
            </h2>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Click an actor to explore how each player contributes to a thriving value chain.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {actors.map((actor, index) => (
              <button
                key={index}
                onClick={() => setActiveActor(index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 16px',
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: activeActor === index ? actor.color : '#e2e8f0',
                  backgroundColor: activeActor === index ? 'white' : 'white',
                  boxShadow: activeActor === index ? '0 8px 25px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.04)',
                  color: '#0f172a',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { if (activeActor !== index) e.currentTarget.style.backgroundColor = '#f8fafc' }}
                onMouseLeave={(e) => { if (activeActor !== index) e.currentTarget.style.backgroundColor = 'white' }}
              >
                <span style={{ fontSize: '32px' }}>{actor.icon}</span>
                <span style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'Montserrat, sans-serif', color: activeActor === index ? actor.color : '#475569' }}>{actor.title}</span>
              </button>
            ))}
          </div>

          <div key={activeActor} style={{ animation: 'slideIn 0.5s ease-out' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '64px 48px',
              textAlign: 'center',
              borderTop: `6px solid ${actors[activeActor].color}`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                backgroundColor: `${actors[activeActor].color}10`,
                filter: 'blur(40px)'
              }}></div>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '24px',
                backgroundColor: `${actors[activeActor].color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '56px',
                margin: '0 auto 24px',
                position: 'relative',
                zIndex: 1
              }}>
                {actors[activeActor].icon}
              </div>
              <h3 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '800', color: actors[activeActor].color, marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', position: 'relative', zIndex: 1 }}>
                {actors[activeActor].title}
              </h3>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto 32px', position: 'relative', zIndex: 1 }}>
                {actors[activeActor].desc}
              </p>
              <Link
                to='/partner'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: actors[activeActor].color,
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '15px',
                  fontFamily: 'Montserrat, sans-serif',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                Connect with {actors[activeActor].title} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section style={{ padding: '100px 0', backgroundColor: '#f0f9ff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#dbeafe',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1e40af',
              fontFamily: 'Montserrat, sans-serif',
              border: '1px solid #1e40af'
            }}>
              Our Approach
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Cross-Cutting Themes Across All Projects
            </h2>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Principles that guide every value chain we support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {benefits.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                borderTop: `6px solid ${item.color}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  backgroundColor: `${item.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  margin: '0 auto 24px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: item.color,
                  marginBottom: '16px',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '16px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: 1.2
          }}>
            Want to Learn More?
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#dcfce7',
            marginBottom: '48px',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            Discover how our market systems approach is creating sustainable change across East African agricultural value chains.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/projects" style={{
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
              See Our Projects
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

export default Approach