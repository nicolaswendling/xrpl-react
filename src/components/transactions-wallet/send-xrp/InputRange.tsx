type Props = {
  max: number
  amount: number
  setAmount: (amount: number) => void
}

export const InputRange = ({max, amount, setAmount}: Props) => {
  return (
    <input
      type="range"
      min="0"
      step="1"
      max={max}
      value={amount}
      onChange={(event) => setAmount(parseInt(event.currentTarget.value, 10))}
      className="block w-full my-4"
    />
  )
}
