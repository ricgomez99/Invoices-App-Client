import { Typography, Input } from '@material-tailwind/react'

export default function InputField({
  value,
  handleChange,
  type,
  placeholder,
  title,
  name,
}) {
  return (
    <>
      <Typography variant="h6" color="gray" className="font-bold">
        {title}
      </Typography>
      <Input
        className="text-[#111] p-2"
        size="md"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  )
}
