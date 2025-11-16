import { Shield, TrendingUp, Clock, Truck, Award, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Best Exchange Rates',
    description: 'We guarantee the best forex rates in the market. Save up to ₹5 per USD compared to banks.',
  },
  {
    icon: Shield,
    title: 'RBI Authorized',
    description: '100% safe and secure. We are authorized by RBI and comply with all FEMA regulations.',
  },
  {
    icon: Clock,
    title: 'Same Day Delivery',
    description: 'Get your forex delivered to your doorstep on the same day in major cities.',
  },
  {
    icon: Truck,
    title: 'Free Doorstep Delivery',
    description: 'Free delivery across 650+ cities in India. No hidden charges or delivery fees.',
  },
  {
    icon: Award,
    title: 'Trusted by 1M+ Users',
    description: 'Join over 1 million satisfied customers who trust us for their forex needs.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    description: 'Our expert team is available round the clock to assist you with any queries.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BookMyForex?</h2>
          <p className="text-xl text-gray-600">India's most trusted forex platform with unbeatable benefits</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">1M+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">650+</p>
            <p className="text-gray-600">Cities Covered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">₹5000Cr+</p>
            <p className="text-gray-600">Forex Exchanged</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 mb-2">4.8/5</p>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

