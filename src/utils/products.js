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

    return mappedProducts(data)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const updateProduct = async ({ authToken, id, quantity }) => {
  try {
    const { data } = await axios.patch(
      `${url}/products/${id}`,
      { quantity },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    )

    if (!data) return null
    console.log(data)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const createProduct = async ({ data, authToken }) => {
  try {
    const formData = {
      quantity: Number(data.quantity),
      productName: data.productName,
    }
    const response = await axios.post(`${url}/products`, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    })

    if (!response) throw new Error('Unable to create product')

    console.log('product response: ', response.data)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

const mappedProducts = (data) =>
  data &&
  data.map((product) => ({
    id: product.id,
    quantity: product.quantity,
    name: product.productName,
  }))
