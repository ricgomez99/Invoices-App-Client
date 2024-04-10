import AdminDashboard from '../../components/AdminDashboard/index'
import ClientDashboard from './../../components/ClientDashboard/index'
import { useAuth } from '../../hooks/useAuth'

export default function Dashboard() {
  const { getUserRole } = useAuth()
  const userRole = getUserRole()
  return (
    <section className="flex flex-col w-[100%] h-[100%] justify-center items-center">
      {userRole === 'admin' ? <AdminDashboard /> : <ClientDashboard />}
    </section>
  )
}
