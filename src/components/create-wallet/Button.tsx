import {Number} from "../wallet-ui/Number"
type Props = {
  amount: number
}
export const Button = ({amount}: Props) => {
  return (
    <button className="w-full p-4 transition-colors bg-blue-600 text-blue-50 rounded-r-md disabled:bg-slate-100 disabled:text-slate-400 hover:bg-blue-900">
      Create wallet of <Number value={amount} /> XRP
    </button>
  )
}
