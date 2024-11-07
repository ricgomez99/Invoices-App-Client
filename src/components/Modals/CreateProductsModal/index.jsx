import { Card, Dialog, CardBody, Typography } from '@material-tailwind/react'

import InputField from '../../Forms/Input'
// import eventManager from '../../../lib/eventManager'
import useCreateProduct from '../../../hooks/useCresteProduct'
import { useForm } from 'react-hook-form'
import Button from '../../Button'

export function CreateProductsModal({ handler, open }) {
  const { register, handleSubmit, reset } = useForm()
  const create = useCreateProduct()

  const onSubmit = handleSubmit(async (data) => {
    create(data)
    handler(() => false)
    reset()
  })

  return (
    <>
      <Dialog size="xs" open={open} handler={handler}>
        <Card className="flex flex-col justify-center p-3 text-center">
          <Typography variant="h4" color="blue-gray">
            Create Product
          </Typography>

          <CardBody>
            <form onSubmit={onSubmit} className="flex flex-col justify-center">
              <div className="flex flex-col gap-2 py-2">
                <InputField
                  title="Quantity"
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  label="product quantity"
                  register={register}
                />
                <InputField
                  title="Name"
                  type="text"
                  name="productName"
                  placeholder="name"
                  label="product name"
                  register={register}
                />
              </div>
              <Button type="submit">Create</Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  )
}
