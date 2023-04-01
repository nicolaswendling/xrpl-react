export type InputProps = {
  amount: number
  min: number
  max: number
  step: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
