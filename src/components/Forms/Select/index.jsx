import { Typography } from '@material-tailwind/react'

export default function SelectField({ title, selectName, elements, register }) {
  return (
    <>
      <Typography variant="small" color="gray" className="font-bold">
        {title}
      </Typography>
      <select
        className="py-2 px-1 text-sm font-normal text-blue-gray-700 rounded-md bg-white ring-1 ring-blue-gray-200"
        name={selectName}
        {...register(selectName)}
      >
        {elements &&
          elements.map((element) => (
            <option
              className="flex items-center opacity-100 px-0 gap-2 pointer-events-none"
              key={element.id}
              value={element.id}
              disabled={false}
            >
              {element.name}
            </option>
          ))}
      </select>
    </>
  )
}
