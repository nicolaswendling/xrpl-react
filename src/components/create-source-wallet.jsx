import {useCreateWallet, Wallet} from "@nice-xrpl/react-xrpl"
import {useState} from "react"
import {Number} from "./wallet-ui/number"

export function CreateSourceWallet({children}) {
  const min = 100
  const max = 1000000
  const step = 1000
  const [seed, setSeed] = useState("")
  const [sending, setSending] = useState(false)
  const [amount, setAmount] = useState(min)

  // When connected to the testnet/dev net, you can
  // use the useCreateWallet series of hooks to create
  // a wallet and fund it from the faucet.
  const createWallet = useCreateWallet()

  // The Wallet component is used when you have
  // credentials. It enables the use of all
  // transactional hooks and all request hooks.
  return seed ? (
    <Wallet seed={seed}>{children}</Wallet>
  ) : (
    <div>
      {!sending ? (
        <div className="flex gap-2">
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={amount}
            className="p-4 border-blue-950 w-full border-2 rounded-md"
            onChange={(input) => {
              const value = parseInt(input.currentTarget.value, 10)
              if (value >= min && value <= max) {
                setAmount(value)
              }
            }}
          />
          <button
            className="p-4 bg-blue-950 text-white rounded w-full hover:bg-blue-900 transition-colors duration-300"
            onClick={async () => {
              setSending(true)
              const initialState = await createWallet(amount.toString())
              setSending(false)
              if (initialState.wallet.seed) {
                setSeed(initialState.wallet.seed)
              }
            }}
          >
            Create wallet of <Number value={amount} /> XRP
          </button>
        </div>
      ) : (
        <div className="p-4 text-center">Creating wallet...</div>
      )}
    </div>
  )
}
