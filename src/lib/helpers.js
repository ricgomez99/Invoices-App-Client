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
    const { accessToken, refreshToken, role } = data

    return { accessToken, refreshToken, role }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const createUser = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(
      `${url}/users`,
      { username, email, password },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error: ', error.message)
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

export const logout = async (refreshToken) => {
  try {
    const request = await axios.post(
      `${url}/auth/logout`,
      { token: refreshToken },
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
