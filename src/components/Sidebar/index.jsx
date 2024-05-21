// import {  Card, Typography, Button } from '@material-tailwind/react'
import Drawer from '../Drawer'

export default function SideBar({ open, close }) {
  return (
    <Drawer isOpen={open} onClose={close} postion="left">
      <div>
        <p>The Drawer Content!</p>
        <button onClick={() => close()}>Click Me</button>
      </div>
    </Drawer>
  )
}
