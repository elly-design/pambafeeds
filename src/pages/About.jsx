import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('who')
  const [focusIndex, setFocusIndex] = useState(0)
  const [focusPaused, setFocusPaused] = useState(false)

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && tabs.some(t => t.id === hash)) {
      setActiveTab(hash)
    }
  }, [location.hash])

  const tabs = [
    { id: 'who', label: 'Who We Are' },
    { id: 'work', label: 'What We Do' },
    { id: 'values', label: 'Our Values' },
    { id: 'journey', label: 'Our Journey' }
  ]

  const focusAreas = [
    { icon: '🐝', title: 'Apiculture', desc: 'Beekeeping and honey production value chains', color: '#166534' },
    { icon: '🥜', title: 'Groundnuts', desc: 'Groundnut farming and processing', color: '#f59e0b' },
    { icon: '🌱', title: 'Beans', desc: 'Bean production and market linkages', color: '#166534' },
    { icon: '🚜', title: 'Agricultural Inputs', desc: 'Quality inputs and services for farmers', color: '#f59e0b' },
    { icon: '🤝', title: 'Farmer Organizations', desc: 'Cooperatives and farmer groups', color: '#166534' },
    { icon: '📦', title: 'Market Aggregation', desc: 'Collecting and connecting to markets', color: '#f59e0b' }
  ]

  const values = [
    { icon: '🌱', title: 'Sustainability', desc: 'Building systems that last beyond project cycles and protect natural resources for future generations.', color: '#166534' },
    { icon: '🤝', title: 'Partnership', desc: 'Collaborating with farmers, buyers, governments, and development partners to create shared value.', color: '#f59e0b' },
    { icon: '👨‍🌾', title: 'Farmer-Centered', desc: 'Designing every intervention around the realities, needs, and aspirations of smallholder farmers.', color: '#166534' },
    { icon: '🌍', title: 'Climate Conscious', desc: 'Integrating resilience and environmental stewardship in everything we do.', color: '#f59e0b' }
  ]

  const projects = [
    {
      image: '/images/pur.jpg',
      title: 'Apiculture Project',
      location: 'Baringo & Western Kenya',
      desc: 'We organize beekeepers into farmer groups, build technical capacity, improve honey quality, and create reliable market linkages for premium honey.',
      link: '/projects/apiculture'
    },
    {
      image: '/images/bol.jpg',
      title: 'Groundnut Project',
      location: 'Eastern Uganda → Kenya',
      desc: 'Supporting farmer-led cooperatives with aggregation, grading, and direct access to regional buyers for better prices and food security.',
      link: '/projects/groundnuts'
    },
    {
      image: '/images/yel.jpg',
      title: 'Beans Project',
      location: 'Burundi → East Africa',
      desc: 'Connecting Burundi farmers to regional buyers by strengthening organization, identifying market demand, and improving aggregation.',
      link: '/projects/beans'
    }
  ]

  const milestones = [
    { year: '2018', title: 'Foundation', desc: 'Pamba Feeds was founded to address the gap between smallholder farmers and profitable markets.' },
    { year: '2020', title: 'First Value Chains', desc: 'Launched apiculture and groundnut work in Kenya and Uganda with community partners.' },
    { year: '2023', title: 'Regional Growth', desc: 'Expanded into Burundi and scaled aggregation, reaching over 500 farmers.' },
    { year: '2025', title: 'Market Systems', desc: 'Deepening partnerships across three countries to build sustainable, market-driven systems.' }
  ]

  const team = [
    { name: 'Team Member', role: 'Executive Director', bio: 'Drives Pamba Feeds’ strategy and partnerships across East Africa.' },
    { name: 'Team Member', role: 'Programs Lead', bio: 'Oversees value chain implementation and farmer group development.' },
    { name: 'Team Member', role: 'Market Linkages', bio: 'Connects farmers to buyers and ensures quality and delivery standards.' },
    { name: 'Team Member', role: 'Monitoring & Learning', bio: 'Tracks impact and supports adaptive, farmer-centered programming.' }
  ]

  useEffect(() => {
    if (focusPaused) return
    const timer = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % focusAreas.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [focusIndex, focusPaused])

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
        backgroundImage: 'url(/images/about.jpg)',
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
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', margin: '0 auto', padding: '120px 24px 100px', width: '100%' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Building Inclusive &amp; Sustainable<br />
              <span style={{ color: '#f59e0b' }}>Agricultural Markets</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7,
              fontFamily: 'Open Sans, sans-serif'
            }}>
              Creating opportunities for smallholder farmers across East Africa through market systems development
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed About Section */}
      <section style={{ padding: '80px 0 120px', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '800',
              color: '#0f172a',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '16px'
            }}>
              Learn More About Pamba Feeds
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Explore the sections below to understand who we are, what we do, and the values that guide our work.
            </p>
          </div>

          {/* Tab Content */}
          <div key={activeTab} style={{ animation: 'slideIn 0.5s ease-out' }}>
            {activeTab === 'who' && (
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '48px',
                  alignItems: 'center',
                  marginBottom: '64px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(26px, 3vw, 36px)',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '24px',
                      fontFamily: 'Montserrat, sans-serif'
                    }}>
                      A Social Agribusiness with Purpose
                    </h3>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
                      Pamba Feeds is a social agribusiness based in Kenya working to create inclusive and sustainable agricultural markets across East Africa. We work across selected agricultural value chains, connecting smallholder producers with markets while improving access to agricultural inputs, knowledge, and services.
                    </p>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8 }}>
                      Our approach is market-driven, partnership-focused, and sustainability-minded. We do not simply connect farmers to buyers — we help build the systems, relationships, and capabilities that make those connections thrive long-term.
                    </p>
                  </div>
                  <div style={{
                    position: 'relative',
                    height: '400px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img
                      src="/images/frech.jpg"
                      alt="Fresh produce from the field"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  animation: 'slideIn 0.6s ease-out'
                }}>
                  <div style={{
                    background: 'transparent',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>👁️</div>
                    <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: '#166534', fontFamily: 'Montserrat, sans-serif' }}>Our Vision</h4>
                    <p style={{ color: '#475569', lineHeight: 1.7 }}>
                      A more inclusive and sustainable agricultural sector where smallholder farmers have the opportunity, resources, and market access to grow their businesses and livelihoods.
                    </p>
                  </div>
                  <div style={{
                    background: 'transparent',
                    borderRadius: '24px',
                    padding: '40px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
                    <h4 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', color: '#f59e0b', fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h4>
                    <p style={{ color: '#475569', lineHeight: 1.7 }}>
                      To strengthen agricultural market systems by connecting smallholder farmers to profitable markets and improving their access to quality inputs, knowledge, and services.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'work' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <h3 style={{
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '16px',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    Our Work Currently Focuses On
                  </h3>
                  <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                    We strengthen value chains and market systems through focused, practical interventions.
                  </p>
                </div>

                <div
                  style={{
                    maxWidth: '600px',
                    margin: '0 auto 64px',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={() => setFocusPaused(true)}
                  onMouseLeave={() => setFocusPaused(false)}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: `${focusAreas.length * 100}%`,
                      transform: `translateX(-${focusIndex * (100 / focusAreas.length)}%)`,
                      transition: 'transform 0.6s ease-in-out'
                    }}
                  >
                    {focusAreas.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          width: `${100 / focusAreas.length}%`,
                          padding: '48px',
                          textAlign: 'center',
                          background: 'white',
                          border: '1px solid #e2e8f0'
                        }}
                      >
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
                        <h4 style={{
                          fontSize: '26px',
                          fontWeight: '700',
                          color: '#0f172a',
                          marginBottom: '16px',
                          fontFamily: 'Montserrat, sans-serif'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.7 }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Focus Area Dots */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '24px'
                  }}>
                    {focusAreas.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setFocusIndex(index)}
                        aria-label={`Go to focus area ${index + 1}`}
                        style={{
                          width: index === focusIndex ? '32px' : '12px',
                          height: '12px',
                          borderRadius: '6px',
                          border: 'none',
                          backgroundColor: index === focusIndex ? '#166534' : '#e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h3 style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: '800',
                  color: '#0f172a',
                  marginBottom: '32px',
                  textAlign: 'center',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  Our Value Chain Projects
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  marginBottom: '40px'
                }}>
                  {projects.map((project, index) => (
                    <div key={index} style={{
                      background: 'white',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '32px' }}>
                        <div style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          backgroundColor: '#dcfce7',
                          borderRadius: '50px',
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#166534',
                          marginBottom: '12px'
                        }}>
                          {project.location}
                        </div>
                        <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>
                          {project.title}
                        </h4>
                        <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                          {project.desc}
                        </p>
                        <Link to={project.link} style={{
                          color: '#166534',
                          fontWeight: '700',
                          textDecoration: 'none',
                          fontFamily: 'Montserrat, sans-serif'
                        }}>
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <h3 style={{
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '16px',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    Core Values That Guide Us
                  </h3>
                  <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                    These principles shape how we work with farmers, partners, and communities.
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '32px'
                }}>
                  {values.map((item, index) => (
                    <div key={index} style={{
                      background: 'white',
                      borderRadius: '20px',
                      padding: '40px',
                      textAlign: 'center',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
                      e.currentTarget.style.borderColor = item.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        backgroundColor: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        margin: '0 auto 24px'
                      }}>
                        {item.icon}
                      </div>
                      <h4 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h4>
                      <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'journey' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <h3 style={{
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '16px',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    Our Story
                  </h3>
                  <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                    A brief look at the journey that shaped Pamba Feeds.
                  </p>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '48px',
                  marginBottom: '64px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.8, fontSize: '18px', color: '#475569' }}>
                    <p>
                      Pamba Feeds was founded with a clear understanding of the challenges facing smallholder farmers across East Africa. While farmers work hard to produce quality agricultural products, they often struggle to access profitable markets, quality inputs, and the knowledge needed to improve their productivity.
                    </p>
                    <p>
                      We recognized that the solution wasn't to work with farmers in isolation, but to strengthen the entire market system — connecting farmers to buyers, input suppliers, processors, and other actors that make agricultural markets function effectively.
                    </p>
                    <p>
                      Today, we work across Kenya, Uganda, and Burundi, focusing on value chains where we can make the greatest impact — from apiculture in Western Kenya to groundnuts in Eastern Uganda and beans in Burundi.
                    </p>
                    <p>
                      Our approach is market-driven, partnership-focused, and sustainability-minded. We do not just connect farmers to buyers — we help build the systems, relationships, and capabilities that make those connections sustainable long-term.
                    </p>
                  </div>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    width: '4px',
                    background: 'linear-gradient(to bottom, #166534, #f59e0b)',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px'
                  }}></div>

                  {milestones.map((m, index) => (
                    <div
                      key={index}
                      style={{
                        position: 'relative',
                        marginBottom: index === milestones.length - 1 ? '0' : '48px',
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '28px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: index % 2 === 0 ? '#166534' : '#f59e0b',
                        border: '4px solid white',
                        zIndex: 1,
                        boxShadow: '0 0 0 4px rgba(22, 101, 52, 0.1)'
                      }}></div>
                      <div style={{
                        width: 'calc(50% - 40px)',
                        background: 'white',
                        borderRadius: '20px',
                        padding: '28px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                        textAlign: index % 2 === 0 ? 'right' : 'left',
                        borderTop: `4px solid ${index % 2 === 0 ? '#166534' : '#f59e0b'}`
                      }}>
                        <div style={{
                          display: 'inline-block',
                          padding: '6px 16px',
                          backgroundColor: `${index % 2 === 0 ? '#166534' : '#f59e0b'}15`,
                          color: index % 2 === 0 ? '#166534' : '#f59e0b',
                          borderRadius: '50px',
                          fontSize: '14px',
                          fontWeight: '800',
                          marginBottom: '12px',
                          fontFamily: 'Montserrat, sans-serif'
                        }}>
                          {m.year}
                        </div>
                        <h4 style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#0f172a',
                          marginBottom: '10px',
                          fontFamily: 'Montserrat, sans-serif'
                        }}>
                          {m.title}
                        </h4>
                        <p style={{ color: '#64748b', lineHeight: 1.7 }}>{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


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

export default About