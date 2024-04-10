import { useAuth } from './useAuth'
import { useState, useEffect } from 'react'
import useRefreshToken from './useRefreshToken'

export default function PersistLogin({ children }) {
  const [loading, setLoading] = useState(true)
  const { getAccessToken } = useAuth()

  const currentAccessToken = getAccessToken()
  const refresh = useRefreshToken()

  useEffect(() => {
    const verifyTokens = async () => {
      try {
        await refresh()
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    !currentAccessToken ? verifyTokens() : setLoading(false)
  }, [])

  useEffect(() => {
    console.log(`Loading: ${loading}`)
  }, [loading])

  return <>{loading ? <span>Loading...</span> : children}</>
}
