import axios, { AxiosError } from 'axios'

const url = import.meta.env.VITE_BASE_URL

export const getInvoices = async (authToken) => {
  try {
    const { data } = await axios.get(`${url}/invoices`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    })
    if (!data) return null

    return mapInvoices(data)
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const createInvoice = async ({ authToken, invoiceData }) => {
  try {
    const { data } = await axios.post(`${url}/invoices`, invoiceData, {
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

export const deleteInvoice = async ({ id, authToken }) => {
  try {
    const { data } = await axios.delete(`${url}/invoices/${id}`, {
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

const mapInvoices = (invoices) => {
  return (
    invoices &&
    invoices?.map((invoice) => ({
      id: invoice.id,
      date: invoice.date,
      subtotal: invoice.subtotal,
      image: invoice.imageUrl,
      discount: invoice.discount,
      total: invoice.total,
      userId: invoice.userId,
      products: invoice.products?.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        name: item.productName,
      })),
    }))
  )
}
