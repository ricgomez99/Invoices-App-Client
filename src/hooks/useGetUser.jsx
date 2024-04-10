import { useState, useEffect } from 'react'
import { getUserById } from '../utils/users'

export default function useGetUser(userId) {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const response = await getUserById(userId)
      if (response) return null
      setUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return user
}
