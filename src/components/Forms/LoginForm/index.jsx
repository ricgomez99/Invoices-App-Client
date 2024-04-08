import { useState } from 'react'
import Input from '../Input'
import Button from '../../Button'
import { signInUser } from '../../../lib/helpers'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const [query, setQuery] = useState({
    email: '',
    password: '',
  })

  const { saveTokens } = useAuth()
  const goTo = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuery((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { accessToken, refreshToken } = await signInUser({ query })
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
    <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
      <Input
        value={query.email}
        name="email"
        placeholder="Email"
        title="Email"
        type="text"
        handleChange={handleChange}
      />
      <Input
        value={query.password}
        name="password"
        placeholder="Password"
        title="Password"
        type="password"
        handleChange={handleChange}
      />
      <Button type="submit">Sign in</Button>
    </form>
  )
}
