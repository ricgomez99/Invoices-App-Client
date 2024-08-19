import { createUser } from '../lib/helpers'

export default function useRegister() {
  const create = async ({ username, email, password }) => {
    try {
      await createUser({ username, email, password })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    }
  }

  return create
}
