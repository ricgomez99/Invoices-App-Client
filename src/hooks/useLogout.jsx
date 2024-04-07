import { useAuth } from './useAuth'
import { logout } from '../lib/helpers'

export default function useLogout() {
  const { getRefreshToken, removeAuth } = useAuth()
  const signOut = async () => {
    const token = getRefreshToken()
    try {
      const response = await logout(token)
      if (!token || !response) return null
      removeAuth()
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return signOut
}
