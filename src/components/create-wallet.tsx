import {Wallet} from "@nice-xrpl/react-xrpl"
import {useState, ReactNode} from "react"
import {CreateWalletForm as Form} from "./create-wallet-form"

export function CreateWallet({children}: {children: ReactNode}) {
  const [seed, setSeed] = useState("")

  return seed ? (
    <Wallet seed={seed}>{children}</Wallet>
  ) : (
    <Form setSeed={setSeed} />
  )
}
