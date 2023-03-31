import {useCreateWallet, Wallet} from "@nice-xrpl/react-xrpl"
import {useState, FormEvent, ChangeEvent} from "react"
import {Number} from "./wallet-ui/number"

export function CreateSourceWallet({children}) {
  const min = 1_000
  const max = 1_000_000
  const step = 1_000

  const [seed, setSeed] = useState("")
  const [sending, setSending] = useState(false)
  const [amount, setAmount] = useState(min)
  const createWallet = useCreateWallet()

  const handlerAdjustAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (value >= min && value <= max) {
      setAmount(value)
    }
  }

  const handlerSubmit = async (event: FormEvent) => {
    event.preventDefault()

    setSending(true)
    const initialState = await createWallet(amount.toString())
    if (initialState.wallet.seed) {
      setSeed(initialState.wallet.seed)
      setSending(false)
    }
  }

  return seed ? (
    <>
      <Wallet seed={seed}>{children}</Wallet>
    </>
  ) : (
    <div>
      <form onSubmit={handlerSubmit}>
        <fieldset disabled={sending}>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={amount}
              className="w-full p-4 border-2 rounded-md border-blue-950"
              onChange={handlerAdjustAmount}
            />
            <input
              type="range"
              className="w-full"
              min={min}
              max={max}
              step={step}
              value={amount}
              onChange={handlerAdjustAmount}
            />
            {!sending ? (
              <button className="w-full p-4 text-white transition-colors duration-300 rounded-md bg-blue-950 hover:bg-blue-900">
                Create wallet of <Number value={amount} /> XRP
              </button>
            ) : (
              <div className="w-full p-4 text-center text-white transition-colors duration-300 rounded-md bg-blue-950">
                <span className=" animate-pulse">Creating wallet</span>
              </div>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  )
}
