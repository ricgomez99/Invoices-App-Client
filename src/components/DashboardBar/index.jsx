import { Typography } from '@material-tailwind/react'
import BurguerMenu from '../BurguerMenu'

export default function DashboardBar() {
  return (
    <nav className="bg-white-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 w-full justify-center items-center flex flex-col h-20 px-3 shadow-[0_5px_8px_-5px_#ccc]">
      <div className="flex flex-row w-[100%] max-w-[800px] justify-between items-center">
        <Typography variant="h3" color="black" className="font-semibold">
          Dashboard
        </Typography>
        <BurguerMenu />
      </div>
    </nav>
  )
}
