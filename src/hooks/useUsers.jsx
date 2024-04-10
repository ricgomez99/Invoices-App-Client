import { useState, useEffect } from 'react'
import { getUsers } from '../utils/users'

export default function useUsers() {
  const [allUsers, setAllUsers] = useState(null)
  const fetchUsers = async () => {
    try {
      const users = await getUsers()
      if (!users) return null
      setAllUsers(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return allUsers
}
