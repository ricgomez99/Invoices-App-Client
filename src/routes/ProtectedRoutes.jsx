import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export function ProtectedRoutes() {
  // eslint-disable-next-line no-unused-vars
  const [isAuth, setIsAuth] = useState(false)
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}
