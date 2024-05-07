import { updateProduct } from '../utils/products'
import { useAuth } from './useAuth'

export default function useUpdateProduct() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const update = async (updateQuery) => {
    try {
      if (updateQuery) {
        console.log('query:', updateQuery)
        const { id, quantity } = updateQuery
        return await updateProduct({ authToken, id, quantity })
      }

      return null
    } catch (error) {
      console.log(error)
    }
  }

  return update
}
