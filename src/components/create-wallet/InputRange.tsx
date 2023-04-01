import {InputProps} from "./types"

export const InputRange = ({amount, min, max, step, onChange}: InputProps) => {
  return (
    <input
      type="range"
      className="w-full"
      min={min}
      max={max}
      step={step}
      value={amount}
      onChange={onChange}
    />
  )
}
