import { Select, Option, Typography } from '@material-tailwind/react'
import React from 'react'

export default function SelectField({
  title,
  selectValue,
  selectName,
  handleChange,
  elements,
}) {
  return (
    <>
      <Typography variant="h6" color="gray" className="font-bold">
        {title}
      </Typography>
      <Select
        value={selectValue}
        name={selectName}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
          })
        }
        onChange={handleChange}
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
