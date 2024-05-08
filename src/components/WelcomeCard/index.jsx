import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

export default function WelcomeCard() {
  const goTo = useNavigate()
  return (
    <Card className="w-96 mt-6 text-right">
      <CardBody>
        <Typography variant="h5" color="gray" className="font-body mb-2">
          Where to start?
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="font-normal"
        >
          Get started by signing in to your account and unlock the convenience
          of generating professional invoices effortlessly.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => goTo('/login')}>Login</Button>
      </CardFooter>
    </Card>
  )
}
