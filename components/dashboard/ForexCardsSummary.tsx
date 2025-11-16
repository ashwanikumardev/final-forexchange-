import { CreditCard, Eye, RefreshCw } from 'lucide-react'

const cards = [
  {
    name: 'Multi-Currency Card',
    number: '**** **** **** 1234',
    balance: '$1,250.00',
    currency: 'USD',
    status: 'ACTIVE',
  },
  {
    name: 'Student Forex Card',
    number: '**** **** **** 5678',
    balance: '£850.00',
    currency: 'GBP',
    status: 'ACTIVE',
  },
]

export default function ForexCardsSummary() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">My Forex Cards</h2>
        <a href="/forex-cards" className="text-primary-600 text-sm font-semibold hover:underline">
          View All
        </a>
      </div>

      <div className="space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm opacity-90">{card.name}</p>
                <p className="text-lg font-mono mt-1">{card.number}</p>
              </div>
              <CreditCard size={24} />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs opacity-75">Available Balance</p>
                <p className="text-2xl font-bold">{card.balance}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                  <Eye size={16} />
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-outline w-full mt-4">
        + Add New Card
      </button>
    </div>
  )
}

