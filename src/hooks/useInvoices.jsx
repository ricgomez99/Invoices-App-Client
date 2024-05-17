import { useAuth } from './useAuth'
import { getInvoices } from '../utils/invoices'
import useSWR from 'swr'

export default function useInvoices() {
  const { getAccessToken } = useAuth()
  const authToken = getAccessToken()

  const { data: invoices } = useSWR(
    'getInvoices',
    () => getInvoices(authToken),
    { refreshInterval: 1000 }
  )

  return invoices
}
