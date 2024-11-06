import { Input } from '@material-tailwind/react'

export default function InputField({
  type,
  placeholder,
  label,
  name,
  register,
  validation,
}) {
  return (
    <>
      <Input
        className="text-black p-2"
        id={name}
        size="md"
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </>
  )
}
