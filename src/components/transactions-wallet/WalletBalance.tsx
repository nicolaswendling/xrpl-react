import {useBalance} from "@nice-xrpl/react-xrpl"
import {Number} from "../wallet-ui/Number"

export const WalletBalance = () => {
  const balance = useBalance()

  return (
    <div className="gap-2 p-2 text-center rounded-md bg-blue-950 text-blue-50">
      <Number value={balance} /> XRP
    </div>
  )
}
