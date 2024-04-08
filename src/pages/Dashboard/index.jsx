import useLogout from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import InvoicesBoard from '../../components/InvoicesBoard'

export default function Dashboard() {
  const logOut = useLogout()
  const goTo = useNavigate()

  const handleSignOut = async () => {
    await logOut()
    goTo('/login')
  }

  return (
    <>
      <section className="flex flex-col mx-auto justify-center align-middle">
        <h1>Dashboard</h1>
        <InvoicesBoard />
        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </section>
    </>
  )
}
