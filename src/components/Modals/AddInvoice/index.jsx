import {
  Card,
  Dialog,
  Typography,
  Input,
  Button,
  CardBody,
  Select,
  Option,
} from '@material-tailwind/react'
import { BsFillPlusSquareFill, BsDashSquareFill } from 'react-icons/bs'
import React, { useRef, useState } from 'react'
import { createInvoice } from '../../../utils/invoices'
import { useAuth } from '../../../hooks/useAuth'

export default function AddInvoice({ open, handler, products, users }) {
  const [counter, setCounter] = useState(0)
  const [query, setQuery] = useState({
    date: '',
    subtotal: 0,
    discount: 0,
  })
  const [productId, setProductId] = useState('')
  const [userId, setUserId] = useState('')
  const [total, setTotal] = useState(0)
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const handleQueryChange = (event) => {
    const { name, value } = event.target
    setQuery((prev) => ({ ...prev, [name]: value }))
    calculateTotal()
  }

  const handleUserChange = (event) => {
    setUserId(event)
  }

  const handleProductChange = (event) => {
    setProductId(event)
  }

  const resetState = () => {
    setQuery({
      date: '',
      subtotal: 0,
      discount: 0,
    })
    setProductId('')
    setUserId('')
    setTotal(0)
  }

  const calculateTotal = () => {
    if (query.subtotal > 0) {
      const subtotal = parseFloat(query.subtotal)
      const discount = parseFloat(query.discount)
      const discountCalc = Math.floor(subtotal * discount) / 100
      const total = subtotal - discountCalc
      setTotal(total)
    }
    return null
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const invoiceData = {
        invoice: { ...query, total },
        productIds: [productId],
        userId,
      }

      invoiceData.invoice.discount = Number(invoiceData.invoice.discount)
      invoiceData.invoice.subtotal = Number(invoiceData.invoice.subtotal)

      const response = await createInvoice({ authToken, invoiceData })
      if (!response) return null
      console.log(invoiceData)
      resetState()
    } catch (error) {
      console.log(error)
    }
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
    <Dialog size="md" open={open} handler={handler} className="bg-white">
      <Card className="mx-auto w-full max-w-lg" shadow={false}>
        <CardBody className="w-full flex flex-col">
          <Typography variant="h4" color="black" className="font-bold">
            Add a new Invoice
          </Typography>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
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
                <Select
                  value={userId}
                  name="userId"
                  selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                      disabled: true,
                      className:
                        'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
                    })
                  }
                  onChange={handleUserChange}
                >
                  {users &&
                    users.map((user) => (
                      <Option
                        key={user.userId}
                        value={user.userId}
                        disabled={false}
                      >
                        {user.username}
                      </Option>
                    ))}
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
                  selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                      disabled: true,
                      className:
                        'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
                    })
                  }
                  onChange={handleProductChange}
                >
                  {products &&
                    products.map((product) => (
                      <Option
                        key={product.id}
                        value={product.id}
                        disabled={false}
                      >
                        {product.productName}
                      </Option>
                    ))}
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
            <Button className="my-3" type="submit">
              Create
            </Button>
          </form>
        </CardBody>
      </Card>
    </Dialog>
  )
}
