import { useState } from 'react'
import Input from '../Input'
import Button from '../../Button'

export default function LoginForm() {
  const [query, setQuery] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuery((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
    setQuery({ email: '', password: '' })
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
