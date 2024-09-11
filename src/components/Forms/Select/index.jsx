import { Select, Option, Typography } from '@material-tailwind/react'
import React from 'react'

export default function SelectField({ title, selectName, elements, register }) {
  return (
    <>
      <Typography variant="small" color="gray" className="font-bold">
        {title}
      </Typography>
      <Select
        name={selectName}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
          })
        }
        {...register(selectName)}
      >
        {elements &&
          elements.map((element) => (
            <Option key={element.id} value={element.id} disabled={false}>
              {element.name}
            </Option>
          ))}
      </Select>
    </>
  )
}
