import {useCreateWallet as useCreateWalletXRPL} from "@nice-xrpl/react-xrpl"
import {useState, FormEvent, ChangeEvent} from "react"
import {useCreateWallets} from "./useCreateWallet"
import {Loading} from "./Loading"
import {Button} from "./Button"
import {InputNumber} from "./InputNumber"
import {InputRange} from "./InputRange"

type Props = {
  setSeed: (seed: string) => void
}

export function Form({setSeed}: Props) {
  const min = 1_000
  const max = 1_000_000
  const step = 1_000

  const [sendingStatus, setSendingStatus] = useState(false)
  // const [createdWallets, setCreatedWallets] = useState(0)
  const [amount, setAmount] = useState(min)
  const createWallet = useCreateWalletXRPL()
  const {validateWalletCreated, addWallet} = useCreateWallets()

  const changeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (value >= min && value <= max) {
      setAmount(value)
    }
  }

  const submitCreateWallet = async (event: FormEvent) => {
    event.preventDefault()

    setSendingStatus(true)
    const initialState = await createWallet(amount.toString())
    if (initialState.wallet.seed) {
      console.log("validateWalletCreated dans FORM.tsx", validateWalletCreated)
      validateWalletCreated()
      addWallet()
      setSeed(initialState.wallet.seed)
      setSendingStatus(false)
    }
  }

  return (
    <div>
      <form onSubmit={submitCreateWallet}>
        <fieldset disabled={sendingStatus}>
          <div className="flex flex-col gap-2">
            <InputNumber
              amount={amount}
              min={min}
              max={max}
              step={step}
              onChange={changeAmount}
            />
            <InputRange
              min={min}
              max={max}
              step={step}
              amount={amount}
              onChange={changeAmount}
            />
            {!sendingStatus ? <Button amount={amount} /> : <Loading />}
          </div>
        </fieldset>
      </form>
    </div>
  )
}
