import { Typography } from '@material-tailwind/react'

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
      <Typography variant="h6" color="gray" className="-mb-3">
        {title}
      </Typography>
      <input
        className="text-[#111] p-2 border-2 border-gray-500 rounded-md"
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
