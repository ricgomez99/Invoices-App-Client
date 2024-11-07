import { Card, CardBody } from '@material-tailwind/react'

import useUsers from '../../hooks/useUsers'

export default function InvoiceCard({
  id,
  date,
  subtotal,
  discount,
  total,
  userId,
}) {
  const invoiceId = id?.replaceAll('-', ' ').split(' ')[0]
  const dateFormated = date?.replaceAll('-', '/').split('T')[0]
  const spanStyles = 'font-semibold text-sm text-black min-w-16'

  const users = useUsers()
  const user = users && users.find((user) => user.id === userId)
  return (
    <>
      <Card color="transparent" className="w-full h-20 min-h-10 rounded-md">
        <CardBody className="w-full h-full py-0 px-2 items-center flex flex-row justify-between text-center">
          <span className={spanStyles}>{invoiceId}</span>
          <span className={spanStyles}>{user?.name}</span>
          <span className={spanStyles}>{dateFormated}</span>
          <span className={spanStyles}>{subtotal}</span>
          <span className={spanStyles}>{discount}</span>
          <span className={spanStyles}>{total}</span>
        </CardBody>
      </Card>
    </>
  )
}
