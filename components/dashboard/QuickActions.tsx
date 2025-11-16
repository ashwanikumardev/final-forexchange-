import Link from 'next/link'
import { Banknote, CreditCard, Send, RefreshCw, FileText, User } from 'lucide-react'

const actions = [
  { icon: Banknote, label: 'Exchange Currency', href: '/exchange-currency', color: 'bg-blue-500' },
  { icon: CreditCard, label: 'Get Forex Card', href: '/forex-cards', color: 'bg-purple-500' },
  { icon: Send, label: 'Transfer Money', href: '/transfer-money', color: 'bg-green-500' },
  { icon: RefreshCw, label: 'Reload Card', href: '/reload-card', color: 'bg-orange-500' },
  { icon: FileText, label: 'My Orders', href: '/orders', color: 'bg-indigo-500' },
  { icon: User, label: 'KYC Status', href: '/kyc', color: 'bg-pink-500' },
]

export default function QuickActions() {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Link
              key={index}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className={`${action.color} p-3 rounded-lg`}>
                <Icon className="text-white" size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

