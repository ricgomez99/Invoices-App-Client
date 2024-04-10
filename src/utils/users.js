import axios, { AxiosError } from 'axios'

const url = import.meta.env.VITE_BASE_URL
export const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(`${url}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!data) return null
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${url}/users`, {
      headers: { 'Content-Type': 'application/json' },
    })

    if (!data) return null
    return modelUsers(data)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

const modelUsers = (users) =>
  users &&
  users.map((item) => ({
    userId: item.id,
    username: item.username,
    email: item.email,
    role: item.role,
  }))
