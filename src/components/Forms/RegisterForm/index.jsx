import { Card, CardBody, Button } from '@material-tailwind/react'
import InputField from '../Input'
import InputError from '../Error/InputError.jsx'
import useRegister from '../../../hooks/useRegister'
import { useForm } from 'react-hook-form'
import {
  confirmPassword,
  email,
  name,
  password,
} from '../validations/formValidations.js'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm()

  const createUser = useRegister()
  const onSubmit = handleSubmit(async (data) => {
    const { username, email, password } = data
    try {
      await createUser({ username, email, password })
      alert('user created')
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
      reset()
    }
  })

  return (
    <Card className="w-96 max-w-full p-4" shadow={true} color="white">
      <CardBody className="w-full flex flex-col items-center">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col justify-between"
        >
          <div className="w-full flex flex-col justify-center gap-2 items-start">
            <InputField
              name="username"
              placeholder="username"
              label="username"
              type="text"
              register={register}
              validation={name}
            />
            {errors.username && (
              <InputError message={errors.username.message} />
            )}
            <InputField
              name="email"
              placeholder="email"
              label="email"
              type="email"
              register={register}
              validation={email}
            />
            {errors.email && <InputError message={errors.email.message} />}
            <InputField
              name="password"
              placeholder="password"
              label="password"
              type="password"
              register={register}
              validation={password}
            />
            {errors.password && (
              <InputError message={errors.password.message} />
            )}
            <InputField
              name="confirmPassword"
              placeholder="confirm password"
              label="confirm password"
              type="password"
              register={register}
              validation={confirmPassword(watch)}
            />
            {errors.confirmPassword && (
              <InputError message={errors.confirmPassword.message} />
            )}
          </div>
          <div className="w-full mt-4">
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
