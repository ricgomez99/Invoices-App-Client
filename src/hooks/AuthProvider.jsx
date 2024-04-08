import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  getRefreshToken: () => {},
  saveTokens: ({ access, refresh }) => {},
  refreshAccessToken: (newToken) => {},
  removeAuth: () => {},
})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState({
    accessToken: '',
  })

  const getAccessToken = () => accessToken.accessToken

  const getRefreshToken = () => {
    const refreshToken = localStorage.getItem('token')

    return refreshToken !== null ? refreshToken : null
  }

  const saveTokens = ({ access, refresh }) => {
    setAccessToken((prev) => ({ ...prev, accessToken: access }))
    localStorage.setItem('token', refresh)
    setIsAuthenticated(true)
  }

  const refreshAccessToken = (newToken) => {
    setAccessToken((prev) => ({ ...prev, accessToken: newToken }))
    setIsAuthenticated(true)
  }

  const removeAuth = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        saveTokens,
        refreshAccessToken,
        removeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
