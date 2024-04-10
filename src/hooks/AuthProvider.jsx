import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  getRefreshToken: () => {},
  getUserRole: () => {},
  saveTokens: ({ access, refresh }) => {},
  saveUserRole: (userRole) => {},
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

  const getUserRole = () => {
    const role = localStorage.getItem('role')

    return role !== null ? role : null
  }

  const saveTokens = ({ access, refresh }) => {
    setAccessToken((prev) => ({ ...prev, accessToken: access }))
    localStorage.setItem('token', refresh)
    setIsAuthenticated(true)
  }

  const saveUserRole = (userRole) => {
    localStorage.setItem('role', userRole)
  }

  const refreshAccessToken = (newToken) => {
    setAccessToken((prev) => ({ ...prev, accessToken: newToken }))
    setIsAuthenticated(true)
  }

  const removeAuth = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        getUserRole,
        saveTokens,
        saveUserRole,
        refreshAccessToken,
        removeAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
