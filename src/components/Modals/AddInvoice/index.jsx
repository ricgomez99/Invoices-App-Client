import {
  Card,
  Dialog,
  Typography,
  Button,
  CardBody,
  DialogBody,
} from '@material-tailwind/react'
import { BsFillPlusSquareFill, BsDashSquareFill } from 'react-icons/bs'
import { useRef, useState, useCallback } from 'react'
import { createInvoice } from '../../../utils/invoices'
import { useAuth } from '../../../hooks/useAuth'
import useUpdateProduct from '../../../hooks/useUpdateProduct'
import InputField from '../../Forms/Input'
import SelectField from '../../Forms/Select'
import { useForm } from 'react-hook-form'

export default function AddInvoice({ open, handler, products, users }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
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
  const updateQuantity = useUpdateProduct()

  const quantity = useRef(0)

  const addQuantity = () => setCounter((quantity.current += 1))
  const removeQuantity = () =>
    counter > 0 ? setCounter((quantity.current -= 1)) : null

  const addCallBack = useCallback(addQuantity, [quantity, counter])
  const removeCallBack = useCallback(removeQuantity, [quantity, counter])

  // const handleQueryChange = (event) => {
  //   const { name, value } = event.target
  //   setQuery((prev) => ({ ...prev, [name]: value }))
  //   calculateTotal()
  // }

  // const handleUserChange = (event) => {
  //   setUserId(event)
  // }

  // const handleProductChange = (event) => {
  //   setProductId(event)
  // }

  // const resetState = () => {
  //   setQuery({
  //     date: '',
  //     subtotal: 0,
  //     discount: 0,
  //   })
  //   setProductId('')
  //   setUserId('')
  //   setTotal(0)
  // }

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

  const onSubmit = handleSubmit(async (data) => {
    // try {
    //   const invoiceData = {
    //     invoice: { ...query, total },
    //     productIds: [productId],
    //     userId,
    //   }

    //   const { id } =
    //     products && products.find((product) => product.id === productId)

    //   invoiceData.invoice.discount = Number(invoiceData.invoice.discount)
    //   invoiceData.invoice.subtotal = Number(invoiceData.invoice.subtotal)

    //   const response = await createInvoice({ authToken, invoiceData })
    //   const updateQuery = {
    //     quantity: counter,
    //     id,
    //   }
    //   if (!response) return null
    //   updateQuantity(updateQuery)
    //   resetState()
    //   handler(() => false)
    // } catch (error) {
    //   console.log(error)
    // }
    console.log(data)
  })

  const removeButtonClass =
    counter <= 0
      ? 'cursor-not-allowed opacity-50 w-5 h-5'
      : 'w-5 h-5 cursor-pointer'

  return (
    <>
      <Dialog size="md" open={open} handler={handler} className="bg-white">
        <DialogBody>
          <Card className="mx-auto w-full max-w-lg" shadow={false}>
            <CardBody className="w-full flex flex-col">
              <Typography variant="h4" color="black" className="font-bold">
                Add a new Invoice
              </Typography>
              <form className="w-full" onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <InputField
                      name="date"
                      label="Date"
                      placeholder="date"
                      title="0%"
                      type="date"
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <SelectField
                      title="Client"
                      selectValue={userId}
                      selectName="userId"
                      elements={users}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <InputField
                      name="discount"
                      label="Discount"
                      placeholder="Discount"
                      title="Discount"
                      type="number"
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <SelectField
                      title="Products"
                      selectValue={productId}
                      selectName="productId"
                      elements={products}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <InputField
                      name="subtotal"
                      label="Subtotal"
                      placeholder="0"
                      title="Subtotal"
                      type="text"
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Typography variant="h6" color="gray" className="font-bold">
                      Product Quantity:
                    </Typography>
                    <div className="flex flex-row justify-between items-center w-10 h-9 gap-2">
                      <span className="font-bold text-blue-gray-300 text-[24px]">
                        {counter}
                      </span>
                      <div className="flex flex-row gap-2">
                        <BsFillPlusSquareFill
                          onClick={addCallBack}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <BsDashSquareFill
                          onClick={removeCallBack}
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
                <Button className="my-3 w-full" type="submit">
                  Create
                </Button>
              </form>
            </CardBody>
          </Card>
        </DialogBody>
      </Dialog>
    </>
  )
}
