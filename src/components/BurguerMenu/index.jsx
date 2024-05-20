import { IconButton } from '@material-tailwind/react'
import { useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import SideBar from '../Sidebar'

export default function BurguerMenu() {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const handleOpen = () => setIsDrawOpen(!isDrawOpen)

  return (
    <>
      <IconButton variant="text" size="md" onClick={handleOpen}>
        {isDrawOpen ? (
          <RxCross1 className="h-6 w-6 stroke-1" />
        ) : (
          <LuMenu className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      {isDrawOpen ? <SideBar open={isDrawOpen} close={handleOpen} /> : null}
    </>
  )
}
