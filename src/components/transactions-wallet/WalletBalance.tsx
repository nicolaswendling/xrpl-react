import {useBalance} from "@nice-xrpl/react-xrpl"
import {Number} from "../wallet-ui/Number"

export const WalletBalance = () => {
  const balance = useBalance()

  return (
    <span>
      <Number value={balance} /> XRP
    </span>
  )
}
