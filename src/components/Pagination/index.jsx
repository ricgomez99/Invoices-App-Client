import { Button, IconButton } from '@material-tailwind/react'
import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export default function Pagination({ invoices, invoicePerPage, pageChange }) {
  const [active, setActive] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const numOfInvoices = []

  for (let i = 1; i <= Math.ceil(invoices / invoicePerPage); i++) {
    numOfInvoices.push(i)
  }

  const getItemProps = (index) => ({
    variant: active === index ? 'filled' : 'text',
    color: 'gray',
    onClick: () => {
      setActive(index)
      pageChange(index)
    },
  })

  const next = () => {
    if (active === 5) return

    setActive(active + 1)
    pageChange(active + 1)
  }
  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
    pageChange(active - 1)
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className=" flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <IoIosArrowBack className="w-4 h-4" />
      </Button>
      <div className="flex items-center gap-2">
        {numOfInvoices &&
          numOfInvoices.map((page) => (
            <IconButton key={page} {...getItemProps(page)}>
              {page}
            </IconButton>
          ))}
      </div>
      <Button
        variant="text"
        className=" flex items-center gap-2"
        onClick={next}
        disabled={active === numOfInvoices.length}
      >
        <IoIosArrowForward className="w-4 h-4" />
      </Button>
    </div>
  )
}
