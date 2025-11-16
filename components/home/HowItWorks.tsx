import { Search, FileCheck, CreditCard, Truck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Compare Rates',
    description: 'Check live forex rates and compare with banks to see how much you save.',
    step: '01',
  },
  {
    icon: FileCheck,
    title: 'Place Order',
    description: 'Select your currency, enter amount, and place your order online in minutes.',
    step: '02',
  },
  {
    icon: CreditCard,
    title: 'Make Payment',
    description: 'Pay securely using UPI, net banking, or card. 100% safe and encrypted.',
    step: '03',
  },
  {
    icon: Truck,
    title: 'Get Delivery',
    description: 'Receive your forex at your doorstep. Same day delivery in major cities.',
    step: '04',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get your forex in 4 simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-primary-600 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mt-4">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="text-primary-300 text-4xl">→</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

