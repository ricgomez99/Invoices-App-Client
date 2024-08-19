import { Typography, Input } from '@material-tailwind/react'

export default function InputField({
  value,
  type,
  placeholder,
  label,
  name,
  register,
}) {
  return (
    <>
      <Typography variant="small" color="gray" className="font-bold">
        {label}
      </Typography>
      <Input
        className="text-[#111] p-2"
        id={name}
        size="md"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        {...register(name, {
          required: true,
        })}
      />
    </>
  )
}
