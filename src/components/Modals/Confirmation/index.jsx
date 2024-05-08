import {
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

export default function ConfirmationModal({ title, callBack, id, open }) {
  const handleConfirm = () => {
    callBack(id)
    open()
  }
  return (
    <>
      <Dialog size="sm" open={open} className="flex flex-col justify-center">
        <DialogBody>
          <Typography
            variant="h4"
            className="font-bold text-center"
            color="black"
          >
            Are you shure to {title} this invoice?
          </Typography>
        </DialogBody>
        <DialogFooter className="flex flex-row justify-center gap-2">
          <Button onClick={() => open()}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
