import { TrendingUp, CreditCard, Send, Clock } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    label: 'Total Transactions',
    value: '12',
    change: '+3 this month',
    color: 'bg-blue-500',
  },
  {
    icon: CreditCard,
    label: 'Active Forex Cards',
    value: '2',
    change: 'Multi-currency',
    color: 'bg-purple-500',
  },
  {
    icon: Send,
    label: 'Money Transfers',
    value: '5',
    change: 'Completed',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    label: 'Pending Orders',
    value: '1',
    change: 'In processing',
    color: 'bg-orange-500',
  },
]

export default function DashboardOverview() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

