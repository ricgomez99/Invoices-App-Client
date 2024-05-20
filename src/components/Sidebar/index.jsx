import { Drawer, Card, Typography, Button } from '@material-tailwind/react'

export default function SideBar({ open, close }) {
  return (
    <Drawer open={open} placement="left" onClose={close} className="p-4">
      <Card
        color="gray"
        shadow={false}
        className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4"
      >
        <Typography variant="h4" color="white" className="font-semibold">
          Menu
        </Typography>

        <div className="flex flex-col justify-between items-center">
          <Button size="sm">Log-out</Button>
        </div>
      </Card>
    </Drawer>
  )
}
