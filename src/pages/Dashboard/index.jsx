import AdminDashboard from '../../components/AdminDashboard/index'
import ClientDashboard from './../../components/ClientDashboard/index'
import { useAuth } from '../../hooks/useAuth'
import DashboardBar from '../../components/DashboardBar'

export default function Dashboard() {
  const { getUserRole } = useAuth()
  const userRole = getUserRole()
  return (
    <section className="flex flex-col w-full h-[100vh]">
      <DashboardBar />
      <div className="flex flex-col w-full h-full justify-center items-center">
        {userRole === 'admin' ? <AdminDashboard /> : <ClientDashboard />}
      </div>
    </section>
  )
}
