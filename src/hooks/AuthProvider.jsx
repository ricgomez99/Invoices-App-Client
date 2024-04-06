import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  getRefreshToken: () => {},
  saveTokens: ({ access, refresh }) => {},
  refreshAccessToken: (newToken) => {},
})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const getAccessToken = () => accessToken

  const getRefreshToken = () => {
    const refreshToken = localStorage.getItem('token')

    return refreshToken !== null ? refreshToken : null
  }

  const saveTokens = ({ access, refresh }) => {
    setAccessToken(access)
    localStorage.setItem('token', refresh)
    setIsAuthenticated(true)
  }

  const refreshAccessToken = (newToken) => {
    setAccessToken((prev) => ({ ...prev, accessToken: newToken }))
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        saveTokens,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}