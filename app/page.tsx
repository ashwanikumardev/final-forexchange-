import HeroSection from '@/components/home/HeroSection'
import ServiceCards from '@/components/home/ServiceCards'
import RateTicker from '@/components/rates/RateTicker'
import CurrencyConverter from '@/components/rates/CurrencyConverter'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RateTicker />
      <ServiceCards />
      <CurrencyConverter />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

