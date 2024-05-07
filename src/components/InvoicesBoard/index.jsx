import useInvoices from '../../hooks/useInvoices'
import Invoice from '../Invoice'
import { Card, Typography } from '@material-tailwind/react'

export default function InvoicesBoard() {
  const tableHead = [
    '# Invoice',
    'Client',
    'Date',
    'Subtotal',
    'Discount',
    'Total',
    'Voucher',
    'Products',
    'Options',
  ]
  const invoices = useInvoices()

  return (
    <Card className="w-full h-full rounded-none bg-[#f9f9f9] overflow-x-auto">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {tableHead.map((item) => (
              <th key={item} className="p-4 border-b border-t border-gray-300">
                <Typography variant="h5" color="black" className="font-bold">
                  {item}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.map((invoice) => (
              <tr key={invoice.id}>
                <Invoice {...invoice} />
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  )
}
