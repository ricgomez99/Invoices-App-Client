import { signInUser } from '../../../lib/helpers'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '@material-tailwind/react'
import InputField from './../Input/index'
import { useForm } from 'react-hook-form'
import { password, email } from '../validations/formValidations.js'
import InputError from '../Error/InputError'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { saveTokens, saveUserRole } = useAuth()
  const goTo = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { accessToken, refreshToken, role } = await signInUser({ data })
      saveUserRole(role)
      if (accessToken && refreshToken) {
        saveTokens({ access: accessToken, refresh: refreshToken })
        goTo('/dashboard')
      }
      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    } finally {
      reset()
    }
  })

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
        onSubmit={onSubmit}
      >
        <div className="mb-1 w-[100%] flex flex-col gap-4">
          <InputField
            name="email"
            placeholder="Email"
            title="Email"
            type="email"
            register={register}
            validation={email}
          />
          {errors.email && <InputError message={errors.email.message} />}
          <InputField
            name="password"
            placeholder="Password"
            title="Password"
            type="password"
            register={register}
            validation={password}
          />
          {errors.password && <InputError message={errors.password.message} />}
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
