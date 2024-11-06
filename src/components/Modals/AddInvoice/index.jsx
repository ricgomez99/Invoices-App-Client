import {
  Card,
  Dialog,
  Typography,
  Button,
  CardBody,
  DialogBody,
} from '@material-tailwind/react'

import { useRef, useState, useCallback, useEffect } from 'react'
import { createInvoice } from '../../../utils/invoices'
import { useAuth } from '../../../hooks/useAuth'
import useUpdateProduct from '../../../hooks/useUpdateProduct'
import InputField from '../../Forms/Input'
import SelectField from '../../Forms/Select'
import { useForm } from 'react-hook-form'
import calculateTotal from '../../../utils/calculateTotal'
import Quantity from '../../Quantity/Quantity'

export default function AddInvoice({ open, handler, products, users }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState()
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()
  const updateQuantity = useUpdateProduct()

  const quantity = useRef(0)

  const addQuantity = () => setCounter((quantity.current += 1))
  const removeQuantity = () =>
    counter > 0 ? setCounter((quantity.current -= 1)) : null

  const addCallBack = useCallback(addQuantity, [quantity, counter])
  const removeCallBack = useCallback(removeQuantity, [quantity, counter])

  const resetState = () => {
    reset()
    setTotal(0)
  }

  const [discount, subtotal] = watch(['discount', 'subtotal'])
  const finalTotal = calculateTotal({ discount, subtotal })

  useEffect(() => {
    setTotal(finalTotal)
  }, [total, finalTotal])

  const onSubmit = handleSubmit(async (data) => {
    try {
      const invoiceData = { ...data, total }
      invoiceData.subtotal = Number(invoiceData.subtotal)
      invoiceData.discount = Number(invoiceData.discount)
      console.log(invoiceData)
      // const response = await createInvoice({ authToken, invoiceData })
    } catch (error) {
      console.log(error)
    } finally {
      resetState()
    }

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
  })

  const removeButtonClass =
    counter <= 0
      ? 'cursor-not-allowed opacity-50 w-5 h-5'
      : 'w-5 h-5 cursor-pointer'

  return (
    <>
      <Dialog size="xs" open={open} handler={handler} className="bg-white">
        <DialogBody className="flex justify-center">
          <Card className="w-full" shadow={false}>
            <CardBody className="w-full flex flex-col">
              <Typography
                variant="h4"
                color="black"
                className="font-bold text-center"
              >
                Add a new Invoice
              </Typography>
              <form className="w-full" onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-1 md:lg:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <SelectField
                      title="Client"
                      selectName="userId"
                      elements={users}
                      register={register}
                    />
                  </div>
                  <div className="flex flex-col">
                    <SelectField
                      title="Products"
                      selectName="productId"
                      elements={products}
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
                    <InputField
                      name="subtotal"
                      label="Subtotal"
                      placeholder="0"
                      title="Subtotal"
                      type="text"
                      register={register}
                    />
                  </div>
                  <Quantity
                    counter={counter}
                    add={addCallBack}
                    remove={removeCallBack}
                    removeClass={removeButtonClass}
                  />
                  <div className="flex flex-row items-center gap-2">
                    <Typography variant="h5" color="gray" className="font-bold">
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
