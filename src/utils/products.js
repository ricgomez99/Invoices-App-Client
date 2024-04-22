import axios, { AxiosError } from 'axios'

const url = import.meta.env.VITE_BASE_URL
export const getProducts = async (authToken) => {
  try {
    const { data } = await axios.get(`${url}/products`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
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
