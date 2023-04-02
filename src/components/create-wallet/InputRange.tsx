import {InputProps} from "./types"

export const InputRange = ({amount, min, max, step, onChange}: InputProps) => {
  return (
    <input
      type="range"
      className="block w-full mt-4"
      min={min}
      max={max}
      step={step}
      value={amount}
      onChange={onChange}
    />
  )
}
