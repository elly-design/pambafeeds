import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Approach from './pages/Approach'
import Projects from './pages/Projects'
import Apiculture from './pages/Apiculture'
import Groundnuts from './pages/Groundnuts'
import Beans from './pages/Beans'
import ClimateFoodSecurity from './pages/ClimateFoodSecurity'
import CommunityEmpowerment from './pages/CommunityEmpowerment'
import RegionalFootprint from './pages/RegionalFootprint'
import OurPartners from './pages/OurPartners'
import Impact from './pages/Impact'
import WhyPambaFeeds from './pages/WhyPambaFeeds'
import Partner from './pages/Partner'
import Contact from './pages/Contact'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/apiculture" element={<Apiculture />} />
          <Route path="/projects/groundnuts" element={<Groundnuts />} />
          <Route path="/projects/beans" element={<Beans />} />
          <Route path="/climate-food-security" element={<ClimateFoodSecurity />} />
          <Route path="/community-empowerment" element={<CommunityEmpowerment />} />
          <Route path="/regional-footprint" element={<RegionalFootprint />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/why-pamba-feeds" element={<WhyPambaFeeds />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/partner-with-us" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App