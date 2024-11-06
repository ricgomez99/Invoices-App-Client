const calculateTotal = ({ subtotal, discount }) => {
  let total = 0
  if (subtotal > 0 && discount > 0) {
    const discountPercentage = Math.floor((subtotal * discount) / 100)
    total += Math.abs(subtotal - discountPercentage)
  }
  return total
}

export default calculateTotal
