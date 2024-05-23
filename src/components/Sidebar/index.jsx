import { Card, Typography, Button, CardBody } from '@material-tailwind/react'
import Drawer from '../Drawer'
import useLogout from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import { MdOutlineCancel } from 'react-icons/md'

export default function SideBar({ open, close }) {
  const logOut = useLogout()
  const goTo = useNavigate()

  const handleSignOut = async () => {
    await logOut()
    goTo('/login')
  }
  return (
    <Drawer isOpen={open} onClose={close} postion="left">
      <Card className="w-full h-full bg-transparent flex flex-col">
        <div className="bg-transparent flex flex-row justify-between items-center">
          <Typography variant="h4" color="white" className="font-semibold">
            Menu
          </Typography>
          <MdOutlineCancel
            onClick={() => close()}
            className="w-5 h-5 text-white cursor-pointer hover:animate-pulse"
          >
            Close
          </MdOutlineCancel>
        </div>
        <CardBody className="flex flex-col">
          <Button
            onClick={handleSignOut}
            size="sm"
            className="flex flex-row justify-center gap-3 items-center px-4"
          >
            Log-out <CiLogout className="w-5 h-5 text-white bg-transparent" />
          </Button>
        </CardBody>
      </Card>
    </Drawer>
  )
}
