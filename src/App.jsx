import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import CategoriesSection from './components/CategoriesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorksSection />
      <CategoriesSection />
      <CTASection />
      <Footer />
    </>
  )
}
