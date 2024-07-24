import {
  Card,
  Dialog,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'
import { useState } from 'react'
import InputField from '../../Forms/Input'
import eventManager from '../../../lib/eventManager'
import useCreateProduct from '../../../hooks/useCresteProduct'

export function CreateProductsModal({ handler, open }) {
  const [formState, setFormState] = useState({
    quantity: null,
    productName: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }
  const sendData = useCreateProduct(formState)
  const manageUrl = eventManager(sendData)

  const handleSubmit = (e) => {
    e.preventDefault()
    manageUrl()
    handler(() => false)
  }

  return (
    <>
      <Dialog size="md" open={open} handler={handler}>
        <Card>
          <CardHeader className="text-center">
            <Typography color="blue-gray">Create Product</Typography>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between items-center"
            >
              <InputField
                title="Quantity"
                handleChange={handleChange}
                value={formState.quantity}
                type="number"
                name="quantity"
              />
              <InputField
                title="Name"
                handleChange={handleChange}
                value={formState.productName}
                type="text"
                name="productName"
              />
              <button type="submit">Create</button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  )
}
