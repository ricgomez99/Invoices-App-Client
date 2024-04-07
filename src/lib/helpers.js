import axios, { AxiosError } from 'axios'
const url = import.meta.env.VITE_BASE_URL

export const signInUser = async ({ query }) => {
  try {
    const { data } = await axios.post(`${url}/auth/login`, query, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!data) return null
    const { accessToken, refreshToken } = data

    return { accessToken, refreshToken }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const refreshToken = async (token) => {
  try {
    const { data } = await axios.post(
      `${url}/auth/refresh`,
      { refreshToken: token },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (!data) return null
    const { accessToken } = data

    return accessToken
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const logout = async (token) => {
  try {
    const request = await axios.post(
      `${url}/auth/logout`,
      { refreshToken: token },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (!request) return null

    return request
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
