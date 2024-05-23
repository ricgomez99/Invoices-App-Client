import { Button } from '@material-tailwind/react'
import InvoicesBoard from './../InvoicesBoard/index'
import { useState } from 'react'
import AddInvoice from '../Modals/AddInvoice'
import { GrAdd } from 'react-icons/gr'
import useProducts from './../../hooks/useProducts'
import useUsers from '../../hooks/useUsers'

export default function AdminDashboard() {
  const [open, setIsOpen] = useState(false)
  const handleOpenForm = () => setIsOpen(!open)
  const users = useUsers()
  const products = useProducts()

  return (
    <>
      <div className="w-[100%] h-auto bg-[#f9f9f9] p-6 rounded-lg max-w-[800px] flex flex-col justify-center items-center">
        <Button
          size="lg"
          className="my-3 self-start flex items-center gap-3"
          onClick={handleOpenForm}
        >
          <GrAdd color="#fff" className="w-4 h-4" />
          Add Invoice
        </Button>
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
    </>
  )
}
