'use client'

import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

const forexCards = [
  {
    name: 'BookMyForex Multi-Currency Card',
    type: 'Multi-Currency',
    currencies: ['USD', 'EUR', 'GBP', 'AED', 'AUD', 'CAD', 'SGD', 'CHF'],
    features: [
      'Zero markup on 8 currencies',
      'Accepted in 200+ countries',
      'Free ATM withdrawals (first 3)',
      'Chip & PIN security',
      'Online reload/unload',
      'Mobile app access',
    ],
    price: 'Free',
    popular: true,
  },
  {
    name: 'Student Forex Card',
    type: 'Student Special',
    currencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD'],
    features: [
      'Special student rates',
      'Higher load limits',
      'Free ISIC card',
      'Education payment support',
      'Parent access',
      '24/7 support',
    ],
    price: 'Free',
    popular: false,
  },
  {
    name: 'Premium Travel Card',
    type: 'Premium',
    currencies: ['USD', 'EUR', 'GBP', 'AED', 'AUD', 'CAD', 'SGD', 'CHF', 'JPY', 'THB'],
    features: [
      'Zero markup on 10 currencies',
      'Airport lounge access',
      'Travel insurance included',
      'Concierge services',
      'Priority support',
      'Higher withdrawal limits',
    ],
    price: '₹500',
    popular: false,
  },
]

export default function ForexCardList() {
  const router = useRouter()

  const handleGetCard = (cardName: string) => {
    alert(`Great choice! You selected: ${cardName}\n\nProceeding to application form...`)
    // In a real app, this would navigate to an application form
    // router.push('/forex-cards/apply?card=' + encodeURIComponent(cardName))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Forex Card</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {forexCards.map((card, index) => (
          <div
            key={index}
            className={`card relative ${card.popular ? 'ring-2 ring-primary-500' : ''}`}
          >
            {card.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.name}</h3>
              <p className="text-gray-600 mb-4">{card.type}</p>
              <div className="text-4xl font-bold text-primary-600">{card.price}</div>
              <p className="text-sm text-gray-500">Card issuance fee</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-2">Supported Currencies:</p>
              <div className="flex flex-wrap gap-2">
                {card.currencies.map((curr, i) => (
                  <span key={i} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {curr}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {card.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleGetCard(card.name)}
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                card.popular
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              Get This Card
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-lg mb-2">💡 How to Choose?</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Multi-Currency Card:</strong> Best for tourists visiting multiple countries</li>
          <li>• <strong>Student Card:</strong> Perfect for students studying abroad</li>
          <li>• <strong>Premium Card:</strong> Ideal for frequent travelers and business trips</li>
        </ul>
      </div>
    </div>
  )
}

