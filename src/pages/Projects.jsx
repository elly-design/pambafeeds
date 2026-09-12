import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projects = [
    {
      id: 'apiculture',
      name: 'Apiculture Project',
      tag: 'Featured Project',
      icon: '🐝',
      image: '/images/pur.jpg',
      color: '#166534',
      location: 'Baringo & Western Kenya',
      market: 'Coastal Kenya',
      focus: 'Honey production',
      impact: '150+ beekeepers',
      desc: 'Pamba Feeds works with small-scale beekeepers in Baringo and Western Kenya, supporting them to access markets in the coastal region of Kenya.',
      approach: [
        'Organizing beekeepers into farmer groups',
        'Building farmer capacity',
        'Supporting quality improvement',
        'Improving access to beekeeping equipment',
        'Aggregating production',
        'Connecting producers to coastal markets'
      ],
      highlight: {
        label: 'Impact Statement',
        text: 'Helping small-scale beekeepers move from fragmented production toward organized, market-oriented value chains.'
      }
    },
    {
      id: 'groundnut',
      name: 'Groundnut Project',
      tag: 'Cross-Border Trade',
      icon: '🥜',
      image: '/images/bol.jpg',
      color: '#f59e0b',
      location: 'Eastern Uganda',
      market: 'Coastal Region of Kenya',
      focus: 'Groundnut value chain',
      impact: '200+ farmers',
      desc: 'Pamba Feeds works with smallholder groundnut farmers in Eastern Uganda, partnering with farmer-led cooperatives to connect producers with markets in Kenya.',
      approach: [
        'Working with farmer-led cooperatives',
        'Supporting aggregation',
        'Improving access to markets',
        'Connecting Ugandan producers with Kenyan buyers',
        'Strengthening cross-border agricultural trade'
      ],
      highlight: {
        label: 'Value Proposition',
        text: 'By strengthening farmer-led aggregation, we help smallholder farmers participate more effectively in larger markets.'
      }
    },
    {
      id: 'beans',
      name: 'Beans Project',
      tag: 'Regional Trade',
      icon: '🌱',
      image: '/images/yel.jpg',
      color: '#166534',
      location: 'Burundi',
      market: 'Kenya & South Sudan',
      focus: 'Bean value chain',
      impact: '150+ farmers',
      desc: 'Pamba Feeds is working with smallholder bean farmers in Burundi to develop market linkages with buyers in Kenya and South Sudan.',
      approach: [
        'Connecting farmers to regional markets',
        'Supporting farmer organization',
        'Identifying market demand',
        'Strengthening aggregation',
        'Improving market readiness',
        'Supporting cross-border value-chain development'
      ],
      highlight: {
        label: 'Regional Value Chain',
        text: 'We see regional agricultural trade as an opportunity to expand markets for smallholder farmers while strengthening food systems across East Africa.'
      }
    }
  ]

  const themes = [
    { icon: '🤝', title: 'Partnership', desc: 'Working with cooperatives and local organizations', color: '#166534' },
    { icon: '📊', title: 'Data-Driven', desc: 'Using market intelligence to guide decisions', color: '#f59e0b' },
    { icon: '🌱', title: 'Climate-Smart', desc: 'Promoting sustainable agricultural practices', color: '#166534' },
    { icon: '👩‍🌾', title: 'Inclusive', desc: 'Ensuring women and youth participation', color: '#f59e0b' }
  ]

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeProject, isPaused])

  const project = projects[activeProject]

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
        backgroundImage: 'url(/images/harvest.png)',
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
              Our Work
            </div>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Creating Sustainable<br />
              <span style={{ color: '#f59e0b' }}>Value Chains</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7,
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Building resilient agricultural value chains across East Africa through market systems development
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '20px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Building Value Chains That Work
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', margin: '0 auto 32px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
            Pamba Feeds works across selected agricultural value chains where we can make the greatest impact. Each project focuses on connecting smallholder farmers to markets while improving their access to inputs, knowledge, and services.
          </p>
        </div>
      </section>

      {/* Interactive Project Showcase */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
              Our Projects
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Explore Our Value Chain Projects
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Select a project to learn how we are transforming agricultural markets across East Africa.
            </p>
          </div>

          {/* Project Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px'
          }}>
            {projects.map((p, index) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(index)}
                style={{
                  padding: '16px 28px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeProject === index ? p.color : '#e2e8f0',
                  backgroundColor: activeProject === index ? p.color : 'white',
                  color: activeProject === index ? 'white' : '#0f172a',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeProject === index ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>

          {/* Project Card */}
          <div
            key={activeProject}
            style={{ animation: 'slideIn 0.5s ease-out' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '0',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ padding: '48px', background: 'white' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  backgroundColor: `${project.color}15`,
                  color: project.color,
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  marginBottom: '20px'
                }}>
                  {project.tag}
                </div>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>{project.icon}</div>
                <h3 style={{
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  fontWeight: '800',
                  color: '#0f172a',
                  marginBottom: '12px',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {project.name}
                </h3>
                <h4 style={{
                  fontSize: '20px',
                  color: project.color,
                  marginBottom: '24px',
                  fontWeight: '600',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  {project.location} → {project.market}
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '32px', fontSize: '18px' }}>
                  {project.desc}
                </p>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '24px'
                }}>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                    Our Approach Includes:
                  </h5>
                  <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.approach.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#475569', fontSize: '15px' }}>
                        <span style={{ color: project.color, fontSize: '18px', flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  background: `${project.color}15`,
                  borderRadius: '16px',
                  padding: '24px',
                  borderLeft: `4px solid ${project.color}`
                }}>
                  <p style={{ color: project.color, fontWeight: '700', fontSize: '16px', fontFamily: 'Montserrat, sans-serif', marginBottom: '8px' }}>
                    {project.highlight.label}
                  </p>
                  <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.6 }}>
                    {project.highlight.text}
                  </p>
                </div>
              </div>

              <div style={{
                position: 'relative',
                minHeight: '500px',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '32px',
                  right: '32px',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '16px',
                  padding: '24px'
                }}>
                  <h5 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                    Project Details
                  </h5>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '15px' }}>
                    <div>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>Location:</span>
                      <p style={{ color: '#0f172a', fontWeight: '500' }}>{project.location}</p>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>Market:</span>
                      <p style={{ color: '#0f172a', fontWeight: '500' }}>{project.market}</p>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>Focus:</span>
                      <p style={{ color: '#0f172a', fontWeight: '500' }}>{project.focus}</p>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>Impact:</span>
                      <p style={{ color: '#0f172a', fontWeight: '500' }}>{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Themes */}
      <section style={{ padding: '100px 0', backgroundColor: '#0f172a', color: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#f59e0b',
              fontFamily: 'Montserrat, sans-serif',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              Our Approach
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              marginBottom: '16px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Cross-Cutting Themes Across All Projects
            </h2>
            <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Principles that guide every value chain we support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {themes.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                e.currentTarget.style.borderColor = item.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  backgroundColor: `${item.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  margin: '0 auto 20px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
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
            Want to Partner With Us?
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#dcfce7',
            marginBottom: '48px',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            Whether you are a farmer organization, buyer, or development partner, there are opportunities to collaborate.
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

export default Projects