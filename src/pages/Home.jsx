import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const heroSlides = [
  {
    image: '/images/harvest.png',
    title: 'Connecting Beekeepers',
    highlight: 'to New Markets'
  },
  {
    image: '/images/ger.jpg',
    title: 'Quality Beans',
    highlight: 'from Burundi to East Africa'
  },
  {
    image: '/images/nut.jpg',
    title: 'Bountiful Groundnuts',
    highlight: 'from Farm to Market'
  },
  {
    image: '/images/frech.jpg',
    title: 'Fresh from the Field',
    highlight: 'to Regional Markets'
  }
]

const slides = [
  {
    image: '/images/farm.png',
    title: 'Women at the Heart of Agriculture',
    subtitle: 'Farmer Empowerment',
    description: 'Pamba Feeds works directly with women smallholder farmers—providing training, inputs, and market linkages so they can turn their harvests into income.',
    cta: 'Our Approach',
    link: '/approach',
    badge: 'Kenya, Uganda & Burundi'
  },
  {
    image: '/images/harvest.png',
    title: 'Apiculture Project',
    subtitle: 'Honey & Hive Value Chains',
    description: 'Connecting beekeepers in Baringo and Western Kenya to structured markets, improving honey quality and creating sustainable rural livelihoods.',
    cta: 'Explore Apiculture',
    link: '/projects/apiculture',
    badge: 'Baringo, Kenya'
  },
  {
    image: '/images/bol.jpg',
    title: 'Premium Groundnuts',
    subtitle: 'From Field to Bowl',
    description: 'We support groundnut farmers with aggregation, quality control, and direct access to regional buyers for better prices and food security.',
    cta: 'Groundnut Project',
    link: '/projects/groundnuts',
    badge: 'Eastern Uganda'
  },
  {
    image: '/images/nut.jpg',
    title: 'Bountiful Harvests',
    subtitle: 'Market-Ready Produce',
    description: 'Organized farmer groups deliver fresh, graded groundnuts straight from the farm to trucks headed for regional markets.',
    cta: 'Our Impact',
    link: '/impact',
    badge: 'East Africa'
  },
  {
    image: '/images/agri.jpg',
    title: 'Sorting & Aggregation',
    subtitle: 'Strength in Cooperatives',
    description: 'Women-led cooperatives sort and grade produce to meet buyer standards, building trust and long-term trading relationships.',
    cta: 'Our Projects',
    link: '/projects',
    badge: 'Regional Markets'
  }
]

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, isPaused])

  const goTo = (index) => setCurrent(index)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
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
            Our Impact in Action
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            From Farm to Market
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', margin: '0 auto 32px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            See how Pamba Feeds is transforming agricultural value chains across East Africa, one farmer group at a time.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            minHeight: '520px'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image Side */}
          <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden' }}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: index === current ? 1 : 0,
                  transform: index === current ? 'scale(1.05)' : 'scale(1)',
                  transition: 'opacity 0.8s ease-in-out, transform 6s ease',
                  pointerEvents: 'none'
                }}
              />
            ))}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)'
            }}></div>

            <button
              onClick={prev}
              aria-label="Previous slide"
              style={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#166534',
                fontSize: '20px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#166534'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'
                e.currentTarget.style.color = '#166534'
              }}
            >
              &#8249;
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              style={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: 'rgba(255,255,255,0.9)',
                color: '#166534',
                fontSize: '20px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                zIndex: 2
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#166534'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'
                e.currentTarget.style.color = '#166534'
              }}
            >
              &#8250;
            </button>
          </div>

          {/* Content Side */}
          <div style={{ position: 'relative', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #166534 0%, #f59e0b 100%)'
            }}></div>
            <div key={current} style={{ animation: 'slideIn 0.6s ease-out' }}>
              <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor: '#dcfce7',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '700',
                color: '#166534',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {slides[current].badge}
              </div>
              <h3 style={{
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '12px',
                lineHeight: 1.2,
                fontFamily: 'Montserrat, sans-serif'
              }}>
                {slides[current].title}
              </h3>
              <p style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#f59e0b',
                marginBottom: '20px',
                fontFamily: 'Montserrat, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {slides[current].subtitle}
              </p>
              <p style={{
                fontSize: '18px',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '32px'
              }}>
                {slides[current].description}
              </p>
              <Link
                to={slides[current].link}
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Montserrat, sans-serif',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.3)'
                }}
              >
                {slides[current].cta}
              </Link>
            </div>

            {/* Dots */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '40px'
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: index === current ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: index === current ? '#166534' : '#e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: 3, suffix: '', label: 'Countries', icon: '🌍' },
  { value: 500, suffix: '+', label: 'Farmers', icon: '👨‍🌾' },
  { value: 100, suffix: '+', label: 'Tonnes', icon: '📦' },
  { value: 25, suffix: '+', label: 'Partners', icon: '🤝' }
]

const quickReplies = [
  { label: 'Our Projects', value: 'projects' },
  { label: 'Partner With Us', value: 'partnership' },
  { label: 'Contact Us', value: 'contact' },
  { label: 'Our Approach', value: 'approach' },
  { label: 'Why Pamba', value: 'why' }
]

const knowledge = [
  { keywords: ['hello','hi','hey','home','welcome'], text: 'Hello! Welcome to Pamba Feeds. I am your virtual assistant. I can help you explore our work, projects, partnerships, and how to get in touch. What would you like to know?', suggestion: { label: 'Explore Our Work', link: '/approach' } },
  { keywords: ['project','projects','apiculture','honey','bee','bees'], text: 'Our projects focus on high-value agricultural value chains. Apiculture empowers beekeepers with training and market linkages, Groundnuts support cooperatives in Uganda and Kenya, and Beans connect Burundi farmers to East African markets.', suggestion: { label: 'View Projects', link: '/projects' } },
  { keywords: ['groundnut','groundnuts','nuts','peanut'], text: 'Our Groundnut Project supports farmer-led cooperatives in Eastern Uganda and Kenya with aggregation, grading, and direct access to buyers.', suggestion: { label: 'Groundnut Project', link: '/projects/groundnuts' } },
  { keywords: ['bean','beans'], text: 'The Beans Project links Burundi smallholders to buyers across East Africa through improved organization and aggregation.', suggestion: { label: 'Beans Project', link: '/projects/beans' } },
  { keywords: ['partner','partnership','donate','support','invest'], text: 'We partner with input suppliers, buyers, NGOs, governments, and investors to build inclusive agricultural markets. Reach out through the Partner With Us page to explore collaboration.', suggestion: { label: 'Become a Partner', link: '/partner' } },
  { keywords: ['contact','email','phone','call','reach'], text: 'You can reach Pamba Feeds at info@pambafeeds.com or +254 XXX XXX XXX. Visit the Contact page for a message form and our office hours.', suggestion: { label: 'Contact Us', link: '/contact' } },
  { keywords: ['about','who we are','mission','vision'], text: 'Pamba Feeds is a social agribusiness creating inclusive and sustainable agricultural markets for smallholder farmers across East Africa.', suggestion: { label: 'About Us', link: '/about' } },
  { keywords: ['approach','method','methodology','how we work','how'], text: 'We use a market-systems approach: organize farmers, improve quality, strengthen market linkages, and scale through partnerships.', suggestion: { label: 'Our Approach', link: '/approach' } },
  { keywords: ['impact','results','farmers','tonnes','countries','partners'], text: 'We are active in 3 countries, work with 500+ farmers, have aggregated 100+ tonnes, and built 25+ partnerships across East Africa.', suggestion: { label: 'Our Impact', link: '/impact' } },
  { keywords: ['regional','footprint','uganda','burundi','kenya','south sudan'], text: 'Pamba Feeds operates across Kenya, Uganda, Burundi, and into South Sudan, building regional value chains that benefit smallholder farmers.', suggestion: { label: 'Regional Footprint', link: '/regional-footprint' } },
  { keywords: ['community','empower','women','farmers'], text: 'Community empowerment is central to our work. We support women smallholders with training, inputs, aggregation, and market access.', suggestion: { label: 'Community Empowerment', link: '/community-empowerment' } },
  { keywords: ['climate','food security','resilience'], text: 'We integrate climate-conscious practices and food security goals into our value chains, helping farmers adapt and thrive.', suggestion: { label: 'Climate & Food Security', link: '/climate-food-security' } },
  { keywords: ['why','why pamba','choose'], text: 'Pamba Feeds combines market access, capacity building, and regional networks to create lasting impact for smallholder farmers and partners.', suggestion: { label: 'Why Pamba Feeds', link: '/why-pamba-feeds' } }
]

const getResponse = (input) => {
  const query = input.toLowerCase()
  for (const item of knowledge) {
    if (item.keywords.some(k => query.includes(k))) {
      return item
    }
  }
  return { text: 'I am not sure about that. Try one of the quick options below or ask about our projects, approach, impact, or partnership opportunities.', suggestion: { label: 'Explore Our Work', link: '/approach' } }
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ sender: 'bot', ...getResponse('hello') }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const send = (text) => {
    if (!text.trim()) return
    setMessages(m => [...m, { sender: 'user', text }])
    setInput('')
    setIsTyping(true)
    const response = getResponse(text)
    setTimeout(() => {
      setMessages(m => [...m, { sender: 'bot', ...response }])
      setIsTyping(false)
    }, 1000 + Math.random() * 800)
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '2px solid #166534',
            backgroundColor: 'white',
            color: '#166534',
            fontSize: '32px',
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'slideUp 0.4s ease-out'
          }}
          aria-label='Open chat'
        >
          👤
        </button>
      )}

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          width: 'min(380px, calc(100vw - 48px))',
          maxHeight: '600px',
          height: 'min(600px, calc(100vh - 120px))',
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          border: '1px solid #e2e8f0',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.35s ease-out'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src='/images/pf.png' alt='Pamba' style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
              <div>
                <div style={{ fontWeight: '700', fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>Pamba AI Assistant</div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>Always here to help</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: 'white',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label='Close chat'
            >
              ✕
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: '#f8fafc' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: '16px', animation: 'fadeIn 0.4s ease-out' }}>
                <div style={{ maxWidth: '85%', display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    padding: '14px 18px',
                    borderRadius: '18px',
                    lineHeight: 1.5,
                    fontSize: '14px',
                    backgroundColor: msg.sender === 'user' ? '#166534' : 'white',
                    color: msg.sender === 'user' ? 'white' : '#0f172a',
                    border: msg.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    {msg.text}
                  </div>
                  {msg.suggestion && (
                    <Link
                      to={msg.suggestion.link}
                      onClick={() => setIsOpen(false)}
                      style={{
                        marginTop: '8px',
                        padding: '8px 14px',
                        backgroundColor: '#f59e0b',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '12px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#d97706'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f59e0b'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      {msg.suggestion.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '8px', animation: 'fadeIn 0.3s ease-out' }}>
                <div style={{ padding: '12px 16px', backgroundColor: 'white', borderRadius: '18px', border: '1px solid #e2e8f0', fontSize: '13px', color: '#64748b' }}>
                  Pamba AI is typing<span style={{ animation: 'pulse 1s infinite' }}>...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={{ padding: '16px', backgroundColor: 'white', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              {quickReplies.map((qr) => (
                <button
                  key={qr.value}
                  onClick={() => send(qr.label)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '50px',
                    border: '1px solid #166534',
                    backgroundColor: 'transparent',
                    color: '#166534',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#166534'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#166534'
                  }}
                >
                  {qr.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send(input)}
                placeholder='Type your question...'
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '50px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#0f172a'
                }}
              />
              <button
                onClick={() => send(input)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label='Send'
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroIndex, isPaused])

  useEffect(() => {
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setCounts(stats.map(s => Math.floor(s.value * progress)))
      if (progress === 1) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [])

  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroSlides.length)
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const goToHero = (index) => setHeroIndex(index)

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          color: 'white',
          overflow: 'hidden',
          minHeight: '100vh',
          backgroundColor: '#0f172a'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            display: 'flex',
            width: `${heroSlides.length * 100}%`,
            transform: `translateX(-${heroIndex * (100 / heroSlides.length)}%)`,
            transition: 'transform 0.8s ease-in-out',
            zIndex: 1
          }}
        >
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.title}
              style={{
                width: `${100 / heroSlides.length}%`,
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>

        {/* Overlays */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(22, 101, 52, 0.2) 0%, transparent 50%)',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'pulse 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'pulse 6s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: '100vh',
          padding: '120px 24px 60px'
        }}>
          <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
            <div key={heroIndex} style={{
              animation: 'slideUp 0.8s ease-out',
              maxWidth: '800px'
            }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.2,
              fontFamily: 'Montserrat, sans-serif',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              {heroSlides[heroIndex].title}<br />
              <span style={{ color: '#f59e0b', fontSize: 'clamp(24px, 4vw, 40px)' }}>{heroSlides[heroIndex].highlight}</span>
            </h1>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <Link to="/projects" style={{
                padding: '18px 40px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: 'none',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(22, 163, 74, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.4)'
                    }}>
                Explore Our Projects
              </Link>
              <Link to="/partner" style={{
                padding: '18px 40px',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
                borderRadius: '12px',
                backgroundColor: 'transparent',
                border: '2px solid #f59e0b',
                color: '#f59e0b',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'inline-block'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f59e0b'
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#f59e0b'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}>
                Partner With Us
              </Link>
            </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 4
        }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToHero(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === heroIndex ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: index === heroIndex ? '#f59e0b' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {stats.map((item, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '32px',
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)'
                      e.currentTarget.style.borderColor = '#166534'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: '#166534', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>
                  {counts[index]}{item.suffix}
                </div>
                <div style={{ fontSize: '16px', color: '#64748b', fontWeight: '600' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: '100px 0', backgroundColor: '#fef9f3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
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
                Our Mission
              </div>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '24px',
                lineHeight: 1.2,
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Building Stronger Agricultural Value Chains
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', marginBottom: '32px', borderRadius: '2px' }}></div>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                Pamba Feeds works with smallholder farmers, farmer-led cooperatives, agriprocessors and other market actors to create stronger and more inclusive agricultural markets.
              </p>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.8 }}>
                We identify market opportunities, connect farmers to buyers, and support producers with the tools, skills and resources they need to meet market demand.
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
                src="/images/farm.png"
                alt="Our mission"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <ImageSlider />

      {/* Our Approach Preview */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
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
              Our Methodology
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '24px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Market Systems Approach
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', margin: '0 auto 32px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
              Rather than working with farmers in isolation, Pamba Feeds works with the different actors that make agricultural markets function.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: '🔍', title: 'Identify Market Opportunities', desc: 'We identify demand, market gaps and opportunities within agricultural value chains.', color: '#166534' },
              { icon: '🤝', title: 'Work With Market Actors', desc: 'We collaborate with farmers, cooperatives, buyers, agriprocessors, input suppliers and other value-chain actors.', color: '#f59e0b' },
              { icon: '📦', title: 'Organize & Aggregate', desc: 'We support farmers to organize into groups and cooperatives that can collectively respond to market demand.', color: '#166534' },
              { icon: '🎓', title: 'Build Farmer Capacity', desc: 'We support farmers with knowledge, training, tools and resources needed to improve production and quality.', color: '#f59e0b' },
              { icon: '🔗', title: 'Connect Farmers to Markets', desc: 'We establish market linkages between organized producers and potential buyers.', color: '#166534' },
              { icon: '♻️', title: 'Build Sustainable Value Chains', desc: 'We work to create commercially viable relationships that can continue beyond individual projects.', color: '#f59e0b' },
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s ease',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-12px)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
                      e.currentTarget.style.borderColor = item.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: item.color
                }}></div>
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
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/approach" style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '700',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
              color: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: 'none',
              display: 'inline-block',
              boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
            }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.3)'
                  }}>
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
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
              Our Value Chains
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              marginBottom: '24px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Our Impact Projects
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#f59e0b', margin: '0 auto 32px', borderRadius: '2px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {/* Apiculture */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)'
                    e.currentTarget.style.borderColor = '#f59e0b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}>
              <img
                src="/images/pur.jpg"
                alt="Apiculture"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '24px'
                }}
              />
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                Apiculture Project
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: 1.6 }}>
                Connecting Kenyan Beekeepers to New Markets in Baringo and Western Kenya
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Organizing beekeepers into farmer groups
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Building farmer capacity
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Supporting quality improvement
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Aggregating production
                </li>
              </ul>
              <Link to="/projects" style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
                borderRadius: '12px',
                backgroundColor: '#f59e0b',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'block',
                textAlign: 'center'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}>
                Learn More
              </Link>
            </div>

            {/* Groundnuts */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)'
                    e.currentTarget.style.borderColor = '#f59e0b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}>
              <img
                src="/images/bol.jpg"
                alt="Groundnuts"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '24px'
                }}
              />
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                Groundnut Project
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: 1.6 }}>
                Connecting Eastern Uganda Farmers to Kenyan Markets
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Working with farmer-led cooperatives
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Supporting aggregation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Improving access to markets
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Strengthening cross-border trade
                </li>
              </ul>
              <Link to="/projects" style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
                borderRadius: '12px',
                backgroundColor: '#f59e0b',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'block',
                textAlign: 'center'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}>
                Learn More
              </Link>
            </div>

            {/* Beans */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '24px',
              padding: '48px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)'
                    e.currentTarget.style.borderColor = '#f59e0b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}>
              <img
                src="/images/yel.jpg"
                alt="Beans"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '24px'
                }}
              />
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif' }}>
                Beans Project
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '24px', lineHeight: 1.6 }}>
                Connecting Burundi Farmers to Regional Markets
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Connecting farmers to regional markets
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Supporting farmer organization
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Identifying market demand
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#f59e0b' }}>✓</span>
                  Strengthening aggregation
                </li>
              </ul>
              <Link to="/projects" style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Montserrat, sans-serif',
                textDecoration: 'none',
                borderRadius: '12px',
                backgroundColor: '#f59e0b',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'block',
                textAlign: 'center'
              }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
            marginBottom: '24px',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: 1.2
          }}>
            Let us Build Stronger Agricultural Markets Together
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#dcfce7',
            marginBottom: '48px',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            Whether you are a farmer organization, cooperative, food processor, or buyer, there are meaningful ways to collaborate and create impact together.
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
              Partner With Pamba Feeds
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
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

      <ChatAssistant />
    </div>
  )
}

export default Home