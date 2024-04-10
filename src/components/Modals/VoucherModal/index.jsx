import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react'
import defaultImage from './defaultImage.png'

export default function VoucherModal({ open, handler, image }) {
  return (
    <Dialog
      className="flex flex-col items-center text-left"
      open={open}
      handler={handler}
    >
      <DialogHeader>Products</DialogHeader>
      <DialogBody>
        <img
          alt="voucher-image-reference"
          src={image === '' ? defaultImage : image}
          className="h-60 w-full rounded-lg object-cover object-center"
        />
      </DialogBody>
      <DialogFooter>
        <Button onClick={handler}>Close</Button>
      </DialogFooter>
    </Dialog>
  )
}
