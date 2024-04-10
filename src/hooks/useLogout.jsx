import { useAuth } from './useAuth'
import { logout } from '../lib/helpers'

export default function useLogout() {
  const { getRefreshToken, removeAuth } = useAuth()
  const signOut = async () => {
    try {
      const token = getRefreshToken()
      if (!token) return null
      await logout(token)
      removeAuth()
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return signOut
}
