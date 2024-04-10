import InvoicesBoard from './../InvoicesBoard/index'
import { Button } from '@material-tailwind/react'
import useLogout from './../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

export default function ClientDashboard() {
  const logOut = useLogout()
  const goTo = useNavigate()

  const handleSignOut = async () => {
    await logOut()
    goTo('/login')
  }
  return (
    <>
      <div className="w-[100%] h-auto bg-[#f9f9f9] p-6 rounded-lg max-w-[800px] flex flex-col justify-center items-center">
        <InvoicesBoard />
      </div>
      <Button size="md" className="my-4" onClick={handleSignOut}>
        Logout
      </Button>
    </>
  )
}
