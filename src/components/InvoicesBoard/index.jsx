import useInvoices from '../../hooks/useInvoices'
import Pagination from '../Pagination'
import { useState } from 'react'
import InvoiceCard from '../InvoiceCard'

export default function InvoicesBoard() {
  const tableHead = [
    'Invoice',
    'Client',
    'Date',
    'Subtotal',
    'Discount',
    'Total',
  ]
  const invoices = useInvoices()
  const [currentPage, setCurrentPage] = useState(1)

  // eslint-disable-next-line no-unused-vars
  const [invoicePerPage, setInvoicePerPage] = useState(5)
  const lastInvoiceIdx = currentPage * invoicePerPage
  const firstInvoiceIdx = lastInvoiceIdx - invoicePerPage
  const currentInvoices =
    invoices && invoices.slice(firstInvoiceIdx, lastInvoiceIdx)
  const pageChange = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section className="w-full h-full flex flex-col gap-6">
      <div className="bg-[#1114] w-full h-11 rounded-md items-center flex flex-row justify-between px-2">
        {tableHead &&
          tableHead.map((title) => (
            <span
              className="text-white font-semibold text-base text-center min-w-16"
              key={title}
            >
              {title}
            </span>
          ))}
      </div>
      <aside>
        {currentInvoices
          ? currentInvoices.map((invoice) => (
              <InvoiceCard
                id={invoice.id}
                date={invoice.date}
                discount={invoice.discount}
                subtotal={invoice.subtotal}
                total={invoice.total}
                userId={invoice.userId}
                key={invoice.id}
              />
            ))
          : null}
        {invoices ? (
          <div className="flex justify-center items-center py-5">
            <Pagination
              invoices={invoices.length}
              invoicePerPage={invoicePerPage}
              pageChange={pageChange}
            />
          </div>
        ) : null}
      </aside>
    </section>
  )
}
