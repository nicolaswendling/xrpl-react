import {InputProps} from "./types"

export const InputNumber = ({amount, min, max, step, onChange}: InputProps) => {
  return (
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={amount}
      onChange={onChange}
      className="w-full p-4 border-2 rounded-md border-blue-950"
    />
  )
}
