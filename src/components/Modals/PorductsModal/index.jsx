import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react'

export default function ProductsModal({ open, handler, products }) {
  return (
    <Dialog className="flex flex-col items-start" open={open} handler={handler}>
      <DialogHeader>Products</DialogHeader>
      <DialogBody>
        {products.length <= 0 ? (
          <h5 className="font-bold">No products available</h5>
        ) : (
          <ul>
            {products?.map((product) => (
              <li
                className="flex flex-col justify-between"
                key={product.productId}
              >
                <h5 className="font-bold">{product.name}</h5>
                <span>ID: {product.productId}</span>
                <span>Quantity: {product.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </DialogBody>
      <DialogFooter>
        <Button onClick={handler}>Close</Button>
      </DialogFooter>
    </Dialog>
  )
}
