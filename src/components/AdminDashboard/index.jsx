import { Button } from '@material-tailwind/react'
import InvoicesBoard from './../InvoicesBoard/index'
import { useState, useCallback } from 'react'
import AddInvoice from '../Modals/AddInvoice'
import { GrAdd } from 'react-icons/gr'
import useProducts from './../../hooks/useProducts'
import useUsers from '../../hooks/useUsers'
import { CreateProductsModal } from '../Modals/CreateProductsModal/index'

export default function AdminDashboard() {
  const [open, setIsOpen] = useState(false)
  const [openProductsForm, setOpenProductsForm] = useState(false)
  const handleOpenForm = useCallback(() => setIsOpen(!open), [open])
  const handleOpenProductForm = useCallback(() =>
    setOpenProductsForm(!openProductsForm)
  )
  const users = useUsers()
  const products = useProducts()

  return (
    <>
      <div className="w-[100%] h-auto bg-[#f9f9f9] p-6 rounded-lg max-w-[800px] flex flex-col justify-center items-center">
        <div className="w-auto flex flex-row self-start items-start justify-between gap-2">
          <Button
            size="lg"
            className="my-3 self-start flex items-center gap-3 cursor-pointer"
            onClick={handleOpenForm}
          >
            <GrAdd color="#fff" className="w-4 h-4" />
            Add Invoice
          </Button>
          <Button
            size="lg"
            className="my-3 self-start flex items-center gap-3 cursor-pointer"
            onClick={handleOpenProductForm}
          >
            Create Product
          </Button>
        </div>
        <InvoicesBoard />
      </div>
      {open ? (
        <AddInvoice
          open={open}
          handler={handleOpenForm}
          products={products}
          users={users}
        />
      ) : null}
      {openProductsForm ? (
        <CreateProductsModal
          open={openProductsForm}
          handler={handleOpenProductForm}
        />
      ) : null}
    </>
  )
}
