import { useAuth } from './useAuth'
import { refreshToken } from '../lib/helpers'

export default function useRefreshToken() {
  const { getRefreshToken, refreshAccessToken } = useAuth()
  const requestToken = async () => {
    const token = getRefreshToken()
    try {
      if (!token) return null
      const newAccessToken = await refreshToken(token)
      refreshAccessToken(newAccessToken)

      return newAccessToken
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return requestToken
}
