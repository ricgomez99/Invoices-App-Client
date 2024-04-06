export default function Input({
  value,
  handleChange,
  type,
  placeholder,
  title,
  name,
}) {
  return (
    <div className="flex flex-col mt-[10px] mx-0">
      <label className="flex align-baseline">{title}</label>
      <input
        className="text-[#111] py-2 px-1"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
