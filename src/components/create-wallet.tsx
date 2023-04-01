import {Wallet} from "@nice-xrpl/react-xrpl"
import {useState, ReactNode} from "react"
import {CreateWalletForm as Form} from "./create-wallet-form"

type Props = {
  children: ReactNode
}

export function CreateWallet({children}: Props) {
  const [seed, setSeed] = useState("")

  return seed ? (
    <Wallet seed={seed}>{children}</Wallet>
  ) : (
    <Form setSeed={setSeed} />
  )
}
