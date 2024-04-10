import './App.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {
  const routes = Routes()
  return (
    <>
      <div className="flex w-[100%] h-[100%] justify-center align-middle">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
