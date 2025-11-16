import Link from 'next/link'
import { Banknote, CreditCard, Send, RefreshCw, Briefcase, Plane } from 'lucide-react'

const services = [
  {
    icon: Banknote,
    title: 'Exchange Currency',
    description: 'Buy or sell foreign currency notes at the best rates with doorstep delivery',
    link: '/exchange-currency',
    color: 'bg-blue-500',
  },
  {
    icon: Send,
    title: 'Transfer Money Abroad',
    description: 'Send money internationally at competitive rates with partner banks',
    link: '/transfer-money',
    color: 'bg-green-500',
  },
  {
    icon: CreditCard,
    title: 'Forex Cards',
    description: 'Zero markup forex cards accepted in 200+ countries with ATM withdrawals',
    link: '/forex-cards',
    color: 'bg-purple-500',
  },
  {
    icon: RefreshCw,
    title: 'Reload/Unload Forex Card',
    description: 'Easily reload or unload your forex card online with instant processing',
    link: '/reload-card',
    color: 'bg-orange-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate Solutions',
    description: 'Customized forex solutions for businesses and corporate travel',
    link: '/corporate',
    color: 'bg-indigo-500',
  },
  {
    icon: Plane,
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance coverage for international trips',
    link: '/travel-insurance',
    color: 'bg-pink-500',
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Complete forex solutions for all your international needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.link}
                className="card group hover:scale-105 transition-transform duration-200"
              >
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <span>→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

