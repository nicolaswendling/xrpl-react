import {useBalance} from "@nice-xrpl/react-xrpl"
import {Number} from "./number"

export function WalletBalance() {
  // The useBalance hook gives you the balance of a wallet
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const balance = useBalance()

  return (
    <div className="gap-2 p-2 text-center rounded-md bg-blue-950 text-blue-50">
      <Number value={balance} /> XRP
    </div>
  )
}
