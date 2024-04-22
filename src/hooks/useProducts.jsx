import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { getProducts } from '../utils/products'

export default function useProducts() {
  const [products, setProducts] = useState(null)
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const fetchProducts = async () => {
    try {
      const result = await getProducts(authToken)
      if (!result) return null

      setProducts(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return products
}
