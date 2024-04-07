import useLogout from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const logOut = useLogout()
  const goTo = useNavigate()

  const handleSignOut = async () => {
    await logOut()
    goTo('/login')
  }

  return (
    <>
      <section className="flex mx-auto justify-center align-middle">
        <h1>Dashboard</h1>
        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </section>
    </>
  )
}
