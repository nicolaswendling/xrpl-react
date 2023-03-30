import {useBalance} from "@nice-xrpl/react-xrpl"

export function WalletBalance() {
  // The useBalance hook gives you the balance of a wallet
  // This is a request hook, so it can be used with
  // a wallet or a wallet address.
  const balance = useBalance()

  return (
    <div className="bg-blue-600 p-2 text-center  text-blue-50 gap-2 rounded-md">
      {balance} XRP
    </div>
  )
}
