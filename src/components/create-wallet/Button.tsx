import {Number} from "../wallet-ui/Number"
type Props = {
  amount: number
}
export const Button = ({amount}: Props) => {
  return (
    <button className="w-full p-4 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-900">
      Create wallet of <Number value={amount} /> XRP
    </button>
  )
}
