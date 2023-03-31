type Props = {
  max: number
  amount: number
  setAmount: (amount: number) => void
  id: string
}

export const InputAmount = ({max, amount, setAmount, id}: Props) => {
  const handlerOnChange = (inputValue: string) => {
    let value = parseInt(inputValue, 10)
    if (isNaN(value) || value < 0) value = 0
    if (value >= max) value = max

    setAmount(value)
  }

  return (
    <input
      id={`amount_${id}`}
      className="p-4 text-blue-950 rounded-l-md  w-full max-w-[200px]"
      value={amount}
      onChange={(event) => {
        handlerOnChange(event.target.value)
      }}
      type="number"
    />
  )
}
