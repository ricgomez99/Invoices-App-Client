import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import PersistLogin from '../hooks/PersistLogin'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <PersistLogin>
        <ProtectedRoutes />
      </PersistLogin>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])
