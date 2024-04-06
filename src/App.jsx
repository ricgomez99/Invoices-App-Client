import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'

function App() {
  return (
    <>
      <div className="mx-auto flex justify-center align-middle">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
