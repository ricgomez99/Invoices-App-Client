import { Card, CardBody, Button } from '@material-tailwind/react'
import InputField from '../Input'
// import useRegister from '../../../hooks/useRegister'
import { useForm } from 'react-hook-form'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // const createUser = useRegister()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const errorMessageClass = 'text-sm text-red-400'

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
              value={register.username}
              register={register}
            />
            {errors.username && (
              <span className={errorMessageClass}>username is required</span>
            )}
            <InputField
              name="email"
              placeholder="email"
              label="email"
              type="text"
              value={register.email}
              register={register}
            />
            {errors.email && (
              <span className={errorMessageClass}>email is required</span>
            )}
            <InputField
              name="password"
              placeholder="password"
              label="password"
              type="password"
              value={register.password}
              register={register}
            />
            {errors.password && (
              <span className={errorMessageClass}>password is required</span>
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
