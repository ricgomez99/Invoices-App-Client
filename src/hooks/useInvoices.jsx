import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { getInvoices } from '../utils/invoices'

export default function useInvoices() {
  const [invoices, setInvoices] = useState(null)
  const { getAccessToken } = useAuth()

  const requestData = async () => {
    try {
      const authToken = getAccessToken()
      const data = await getInvoices(authToken)
      if (!data) return null
      setInvoices(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    requestData()
  }, [invoices])

  return invoices
}
