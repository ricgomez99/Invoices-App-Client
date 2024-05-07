import { useState } from 'react'
import { signInUser } from '../../../lib/helpers'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '@material-tailwind/react'
import InputField from './../Input/index'

export default function LoginForm() {
  const [query, setQuery] = useState({
    email: '',
    password: '',
  })

  const { saveTokens, saveUserRole } = useAuth()
  const goTo = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuery((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { accessToken, refreshToken, role } = await signInUser({ query })
      saveUserRole(role)
      if (accessToken && refreshToken) {
        saveTokens({ access: accessToken, refresh: refreshToken })
        goTo('/dashboard')
      }
      return null
    } catch (error) {
      console.log(error)
    } finally {
      setQuery({ email: '', password: '' })
    }
  }

  return (
    <Card
      color="white"
      shadow={true}
      className="text-left p-4 w-80 max-w-[450px] min-w-64 h-auto max-h-96 min-h-60 flex justify-center"
    >
      <img
        className="w-[100%] h-[50px] object-contain"
        alt="AIMED EDGE LOGO"
        src="https://aimedgeapps.com/wp-content/uploads/2021/12/Captura-de-pantalla-2021-12-15-131916.jpg"
      />

      <form
        className="my-3 w-[100%] max-w-[450px] min-w-64"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 w-[100%] flex flex-col gap-4">
          <InputField
            value={query.email}
            name="email"
            placeholder="Email"
            title="Email"
            type="text"
            handleChange={handleChange}
          />
          <InputField
            value={query.password}
            name="password"
            placeholder="Password"
            title="Password"
            type="password"
            handleChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <Button type="submit" className="w-[100%]">
            Sign in
          </Button>
        </div>
      </form>
    </Card>
  )
}
