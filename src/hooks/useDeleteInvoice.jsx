import { useAuth } from './useAuth'
import { deleteInvoice } from '../utils/invoices'

export default function useDeleteInvoice() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const deleteElement = async (id) => {
    try {
      const deleted = await deleteInvoice({ id, authToken })
      if (!deleted) return null
    } catch (error) {
      console.log(error)
    }
  }

  return deleteElement
}
