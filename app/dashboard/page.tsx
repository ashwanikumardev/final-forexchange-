import DashboardOverview from '@/components/dashboard/DashboardOverview'
import RecentOrders from '@/components/dashboard/RecentOrders'
import ForexCardsSummary from '@/components/dashboard/ForexCardsSummary'
import QuickActions from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your forex activity overview</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardOverview />
            <RecentOrders />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuickActions />
            <ForexCardsSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

