import {
  Card,
  Dialog,
  Typography,
  Input,
  Button,
  CardBody,
  CardFooter,
  Select,
  Option,
} from '@material-tailwind/react'
import { BsFillPlusSquareFill, BsDashSquareFill } from 'react-icons/bs'
import { useRef, useState } from 'react'

export default function AddInvoice({ open, handler }) {
  const [counter, setCounter] = useState(0)
  const [query, setQuery] = useState({
    date: '',
    subtotal: 0,
    discount: 0,
  })
  const [productId, setProductId] = useState([])
  const [userId, setUserId] = useState('')
  const [total, setTotal] = useState(0)

  const handleQueryChange = (event) => {
    const { name, value } = event.target
    setQuery((prev) => ({ ...prev, [name]: value }))
    calculateTotal()
  }

  const handleUserChange = (event) => {
    const { value } = event.target
    setUserId(value)
  }

  const handleProductChange = (event) => {
    const { value } = event.target
    setProductId(value)
  }

  const calculateTotal = () => {
    if (query.subtotal > 0) {
      const subtotal = parseFloat(query.subtotal)
      const discount = parseFloat(query.discount)
      const discountCalc = (subtotal * discount) / 100
      const total = subtotal - discountCalc
      setTotal(total)
    }
    return null
  }

  const quantity = useRef(0)
  const addQuantity = () => setCounter((quantity.current += 1))
  const removeQuantity = () =>
    counter > 0 ? setCounter((quantity.current -= 1)) : null

  const removeButtonClass =
    counter <= 0
      ? 'cursor-not-allowed opacity-50 w-5 h-5'
      : 'w-5 h-5 cursor-pointer'

  return (
    <Dialog size="lg" open={open} handler={handler} className="bg-white">
      <Card className="mx-auto w-full max-w-lg">
        <CardBody className="flex flex-col">
          <Typography variant="h4" color="black" className="font-bold">
            Add a new Invoice
          </Typography>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Date
              </Typography>
              <Input
                size="md"
                placeholder="date"
                name="date"
                type="date"
                value={query.date}
                onChange={handleQueryChange}
              />
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Client
              </Typography>
              <Select value={userId} name="userId" onChange={handleUserChange}>
                <Option value="lorem Ipsum">Lorem ipsum</Option>
                <Option value="lorem Ipsum">Lorem ipsum</Option>
              </Select>
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Discount
              </Typography>
              <Input
                size="md"
                placeholder="0%"
                name="discount"
                type="number"
                value={query.discount}
                onChange={handleQueryChange}
              />
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Product
              </Typography>
              <Select
                value={productId}
                name="productId"
                onChange={handleProductChange}
              >
                <Option value="lorem Ipsum">Lorem ipsum</Option>
                <Option value="lorem Ipsum">Lorem ipsum</Option>
              </Select>
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Subtotal
              </Typography>
              <Input
                size="md"
                placeholder="0"
                type="text"
                name="subtotal"
                value={query.subtotal}
                onChange={handleQueryChange}
              />
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Product Quantity
              </Typography>
              <div className="flex flex-row justify-between items-center w-10 h-9 gap-2">
                <span className="font-bold text-blue-gray-300 text-[24px]">
                  {counter}
                </span>
                <div className="flex flex-row gap-2">
                  <BsFillPlusSquareFill
                    onClick={addQuantity}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <BsDashSquareFill
                    onClick={removeQuantity}
                    className={removeButtonClass}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Typography variant="h6" color="gray" className="font-bold">
                Total:
              </Typography>
              <span className="font-bold text-blue-gray-300 text-[24px]">
                {total}
              </span>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button>Create</Button>
        </CardFooter>
      </Card>
    </Dialog>
  )
}
