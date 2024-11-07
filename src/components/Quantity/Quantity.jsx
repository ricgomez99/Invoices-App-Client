import { Typography } from '@material-tailwind/react'
import { BsFillPlusSquareFill, BsDashSquareFill } from 'react-icons/bs'

export default function Quantity({ counter, add, remove, removeClass }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Typography variant="h6" color="gray" className="font-bold">
        Product Quantity:
      </Typography>
      <div className="flex flex-row justify-between items-center w-10 h-9 gap-2">
        <span className="font-bold text-blue-gray-300 text-[24px]">
          {counter}
        </span>
        <div className="flex flex-row gap-2">
          <BsFillPlusSquareFill
            onClick={add}
            className="w-5 h-5 cursor-pointer"
          />
          <BsDashSquareFill onClick={remove} className={removeClass} />
        </div>
      </div>
    </div>
  )
}
