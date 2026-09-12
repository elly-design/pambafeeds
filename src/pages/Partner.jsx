import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const Partner = () => {
  const [activeTab, setActiveTab] = useState('partner')
  const [donation, setDonation] = useState({
    name: '',
    email: '',
    amount: '',
    frequency: 'one-time',
    project: 'general',
    message: ''
  })

  const handleDonationChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value })
  }

  const handleDonationSubmit = (e) => {
    e.preventDefault()
    console.log('Donation submitted:', donation)
    alert('Thank you for your generous support! We will be in touch with next steps.')
    setDonation({
      name: '',
      email: '',
      amount: '',
      frequency: 'one-time',
      project: 'general',
      message: ''
    })
  }

  const partnerTypes = [
    { icon: '🤝', title: 'Farmer Organizations', desc: 'Cooperatives, farmer groups and producer organizations seeking market access and capacity building.', color: '#166534' },
    { icon: '🏭', title: 'Food Processors', desc: 'Agriprocessors seeking reliable, quality-sourced agricultural products.', color: '#f59e0b' },
    { icon: '🚜', title: 'Input Suppliers', desc: 'Companies providing seeds, fertilizers, equipment and technical support.', color: '#166534' },
    { icon: '🏪', title: 'Buyers & Traders', desc: 'Wholesalers, retailers and export buyers seeking reliable product sources.', color: '#f59e0b' },
    { icon: '🌍', title: 'Development Organizations', desc: 'NGOs, agencies and implementing partners working on agricultural development.', color: '#166534' },
    { icon: '💼', title: 'Investors', desc: 'Impact investors and funders supporting agricultural market systems development.', color: '#f59e0b' },
    { icon: '🏛️', title: 'Government Institutions', desc: 'Agencies working on agriculture, trade and food security.', color: '#166534' },
    { icon: '💻', title: 'AgriTech Companies', desc: 'Tech companies providing digital solutions for agriculture and market information.', color: '#f59e0b' }
  ]

  const benefits = [
    { icon: '🎯', title: 'Market-Driven Approach', desc: 'Interventions based on real market demand for sustainable commercial relationships.', color: '#166534' },
    { icon: '👨‍🌾', title: 'Farmer-Centered', desc: 'Designed around the realities and needs of smallholder farmers.', color: '#f59e0b' },
    { icon: '🌍', title: 'Regional Focus', desc: 'Work across East Africa connecting production areas to regional markets.', color: '#166534' },
    { icon: '🤝', title: 'Partnership-Driven', desc: 'Build on existing relationships rather than creating parallel systems.', color: '#f59e0b' },
    { icon: '♻️', title: 'Sustainability-Focused', desc: 'Commercially viable relationships that continue beyond project support.', color: '#166534' },
    { icon: '🌱', title: 'Climate-Conscious', desc: 'Integrate climate resilience and sustainable agriculture into our approach.', color: '#f59e0b' }
  ]

  const donationTiers = [
    { amount: '$50', impact: 'Provides training materials for 5 farmers on climate-smart practices.', icon: '🌱' },
    { amount: '$100', impact: 'Supports beekeeping equipment for 2 smallholder beekeepers.', icon: '🐝' },
    { amount: '$250', impact: 'Funds a cooperative aggregation training session for 25 farmers.', icon: '🤝' },
    { amount: '$500', impact: 'Enables a regional market linkage mission connecting farmers to buyers.', icon: '🌍' }
  ]

  const presetAmounts = ['25', '50', '100', '250', '500', '1000']

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
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
              Partnership & Support
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Build Stronger Markets<br />
              <span style={{ color: '#f59e0b' }}>Together</span>
            </h1>
            <p style={{
              fontSize: 'clamp(18px, 2vw, 22px)',
              color: '#dcfce7',
              lineHeight: 1.7
            }}>
              Partner with Pamba Feeds or support our work through a donation. Every contribution strengthens agricultural communities across East Africa.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px'
          }}>
            {[
              { id: 'partner', label: 'Partner With Us', icon: '🤝' },
              { id: 'donate', label: 'Donate', icon: '❤️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: activeTab === tab.id ? '#166534' : '#e2e8f0',
                  backgroundColor: activeTab === tab.id ? '#166534' : 'white',
                  color: activeTab === tab.id ? 'white' : '#0f172a',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab.id ? '0 8px 25px rgba(22, 163, 74, 0.3)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span style={{ fontSize: '22px' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'partner' && (
            <div style={{ animation: 'slideIn 0.5s ease-out' }}>
              <SectionHeading
                label="Who We Partner With"
                title="Potential Partners"
                subtitle="We work with a diverse range of partners across agricultural value chains to create systemic change."
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '80px' }}>
                {partnerTypes.map((item, index) => (
                  <div key={index} style={{
                    background: '#f8fafc',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid #e2e8f0',
                    borderTop: `4px solid ${item.color}`,
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
                    <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <SectionHeading
                label="Why Partner"
                title="Benefits of Working With Us"
                subtitle="Discover what makes Pamba Feeds a valuable partner for your organization."
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {benefits.map((item, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid #e2e8f0',
                    borderTop: `4px solid ${item.color}`,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '15px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'donate' && (
            <div style={{ animation: 'slideIn 0.5s ease-out' }}>
              <SectionHeading
                label="Support Our Work"
                title="Make a Difference"
                subtitle="Your donation helps farmers, cooperatives and communities build resilient agricultural livelihoods across East Africa."
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
                {donationTiers.map((tier, index) => (
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
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                    <div style={{ fontSize: '40px', marginBottom: '12px' }}>{tier.icon}</div>
                    <p style={{ fontSize: '28px', fontWeight: '800', color: '#d97706', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>{tier.amount}</p>
                    <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '15px' }}>{tier.impact}</p>
                  </div>
                ))}
              </div>

              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '48px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  borderTop: '6px solid #f59e0b'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
                    Donation Form
                  </h3>
                  <p style={{ color: '#64748b', marginBottom: '32px', lineHeight: 1.6 }}>
                    Select an amount and frequency. You can also choose a specific project to support.
                  </p>

                  <form onSubmit={handleDonationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '12px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>
                        Select Amount (USD)
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                        {presetAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setDonation({ ...donation, amount: amt })}
                            style={{
                              padding: '12px 24px',
                              borderRadius: '10px',
                              border: '2px solid',
                              borderColor: donation.amount === amt ? '#f59e0b' : '#e2e8f0',
                              backgroundColor: donation.amount === amt ? '#f59e0b' : 'white',
                              color: donation.amount === amt ? 'white' : '#0f172a',
                              fontWeight: '700',
                              fontFamily: 'Montserrat, sans-serif',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        name="amount"
                        value={donation.amount}
                        onChange={handleDonationChange}
                        placeholder="Or enter custom amount"
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Open Sans, sans-serif'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Frequency</label>
                        <select
                          name="frequency"
                          value={donation.frequency}
                          onChange={handleDonationChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                        >
                          <option value="one-time">One-time</option>
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="annually">Annually</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Project to Support</label>
                        <select
                          name="project"
                          value={donation.project}
                          onChange={handleDonationChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                        >
                          <option value="general">Where Needed Most</option>
                          <option value="apiculture">Apiculture</option>
                          <option value="groundnuts">Groundnuts</option>
                          <option value="beans">Beans</option>
                          <option value="climate">Climate & Food Security</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={donation.name}
                          onChange={handleDonationChange}
                          required
                          placeholder="Your full name"
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={donation.email}
                          onChange={handleDonationChange}
                          required
                          placeholder="your@email.com"
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            borderRadius: '12px',
                            border: '2px solid #e2e8f0',
                            backgroundColor: '#f8fafc',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', color: '#0f172a', marginBottom: '8px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif' }}>Message</label>
                      <textarea
                        name="message"
                        value={donation.message}
                        onChange={handleDonationChange}
                        placeholder="Optional message or dedication..."
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          resize: 'vertical'
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.backgroundColor = 'white' }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#f8fafc' }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        padding: '18px 40px',
                        fontSize: '18px',
                        fontWeight: '700',
                        fontFamily: 'Montserrat, sans-serif',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
                        alignSelf: 'flex-start'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(245, 158, 11, 0.5)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.3)' }}
                    >
                      Proceed With Donation
                    </button>
                  </form>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                  borderRadius: '20px',
                  padding: '32px',
                  marginTop: '32px',
                  borderLeft: '4px solid #166534',
                  textAlign: 'center'
                }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#166534', marginBottom: '12px', fontFamily: 'Montserrat, sans-serif' }}>
                    Prefer Bank Transfer?
                  </h4>
                  <p style={{ color: '#166534', lineHeight: 1.7, marginBottom: '12px' }}>
                    Contact us at <a href="mailto:info@pambafeeds.org" style={{ color: '#166534', fontWeight: '700' }}>info@pambafeeds.org</a> for bank details and official receipts.
                  </p>
                  <p style={{ color: '#166534', fontSize: '14px' }}>
                    All donations go directly to supporting farmers and strengthening agricultural value chains.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontSize: '18px', color: '#475569', marginBottom: '24px' }}>
              Have questions or want to discuss a partnership?
            </p>
            <Link to="/contact" style={{
              padding: '16px 32px',
              backgroundColor: '#166534',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
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

export default Partner