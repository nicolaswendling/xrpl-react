import {Number} from "../wallet-ui/number"
type Props = {
  amount: number
}
export const Button = ({amount}: Props) => {
  return (
    <button className="w-full p-4 text-white transition-colors duration-300 rounded-md bg-blue-950 hover:bg-blue-900">
      Create wallet of <Number value={amount} /> XRP
    </button>
  )
}
