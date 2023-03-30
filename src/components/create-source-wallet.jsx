import {useCreateWallet, Wallet} from "@nice-xrpl/react-xrpl"
import {useState} from "react"
import {Number} from "./wallet-ui/number"

export function CreateSourceWallet({children}) {
  const min = 1_000
  const max = 1_000_000
  const step = 1_000
  const [seed, setSeed] = useState("")
  const [sending, setSending] = useState(false)
  const [amount, setAmount] = useState(min)

  const handlerAdjustAmount = (event) => {
    const value = parseInt(event.currentTarget.value, 10)
    if (value >= min && value <= max) {
      setAmount(value)
    }
  }

  const handlerSubmit = async (event) => {
    event.preventDefault()

    setSending(true)
    const initialState = await createWallet(amount.toString())
    if (initialState.wallet.seed) {
      setSeed(initialState.wallet.seed)
      setSending(false)
    }
  }

  // When connected to the testnet/dev net, you can
  // use the useCreateWallet series of hooks to create
  // a wallet and fund it from the faucet.
  const createWallet = useCreateWallet()

  // The Wallet component is used when you have
  // credentials. It enables the use of all
  // transactional hooks and all request hooks.
  return seed ? (
    <>
      <Wallet seed={seed}>{children}</Wallet>
    </>
  ) : (
    <div>
      <form onSubmit={handlerSubmit}>
        <fieldset disabled={sending}>
          <div className="flex gap-0">
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={amount}
              className="w-full p-4 border-2 rounded-l-md border-blue-950"
              onChange={handlerAdjustAmount}
            />
            {!sending ? (
              <button className="w-full p-4 text-white transition-colors duration-300 rounded-r-md bg-blue-950 hover:bg-blue-900">
                Create wallet of <Number value={amount} /> XRP
              </button>
            ) : (
              <div className="w-full p-4 text-center text-white transition-colors duration-300 rounded-r-md bg-blue-950">
                <span className=" animate-pulse">Creating wallet</span>
              </div>
            )}
          </div>
          <input
            type="range"
            className="w-full mt-4"
            min={min}
            max={max}
            step={step}
            value={amount}
            onChange={handlerAdjustAmount}
          />
        </fieldset>
      </form>
    </div>
  )
}
