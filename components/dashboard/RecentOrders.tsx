import { Package, CheckCircle, Clock, XCircle } from 'lucide-react'

const orders = [
  {
    id: 'ORD-2024-001',
    type: 'Currency Exchange',
    currency: 'USD',
    amount: '1000',
    status: 'COMPLETED',
    date: '2024-01-15',
  },
  {
    id: 'ORD-2024-002',
    type: 'Forex Card',
    currency: 'Multi-Currency',
    amount: '50000',
    status: 'PROCESSING',
    date: '2024-01-18',
  },
  {
    id: 'ORD-2024-003',
    type: 'Money Transfer',
    currency: 'GBP',
    amount: '500',
    status: 'COMPLETED',
    date: '2024-01-10',
  },
]

const statusConfig = {
  COMPLETED: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', label: 'Completed' },
  PROCESSING: { icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100', label: 'Processing' },
  PENDING: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Pending' },
  CANCELLED: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100', label: 'Cancelled' },
}

export default function RecentOrders() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Orders</h2>
        <a href="/orders" className="text-primary-600 text-sm font-semibold hover:underline">
          View All
        </a>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const status = statusConfig[order.status as keyof typeof statusConfig]
          const StatusIcon = status.icon

          return (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Package className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{order.type}</p>
                  <p className="text-sm text-gray-600">
                    {order.currency} {order.amount} • {order.id}
                  </p>
                  <p className="text-xs text-gray-500">{order.date}</p>
                </div>
              </div>
              <div className={`flex items-center gap-2 ${status.bg} px-3 py-1 rounded-full`}>
                <StatusIcon className={status.color} size={16} />
                <span className={`text-sm font-medium ${status.color}`}>{status.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

