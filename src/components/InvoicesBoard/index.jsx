import useInvoices from '../../hooks/useInvoices'

export default function InvoicesBoard() {
  const invoices = useInvoices()

  return (
    <article className="flex flex-col justify-between gap-2">
      <h2>Invoices</h2>
      <ul className="flex flex-col justify-between align-middle w-[300px] gap-3">
        {invoices &&
          invoices.map((invoice) => (
            <li
              className="flex flex-row w-[100%] h-[50px] justify-between align-middle list-none"
              key={invoice.id}
            >
              <span>Date{invoice.date}</span>
              <span>Subtotal{invoice.subtotal}</span>
              <span>Discount{invoice.discount}</span>
              <span>Total{invoice.total}</span>
            </li>
          ))}
      </ul>
    </article>
  )
}
