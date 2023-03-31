import {Wallet} from "@nice-xrpl/react-xrpl"
import {useState} from "react"
import {CreateWalletForm as Form} from "./create-wallet-form"

export function CreateSourceWallet({children}: {children: React.ReactNode}) {
  const [seed, setSeed] = useState("")

  return seed ? (
    <Wallet seed={seed}>{children}</Wallet>
  ) : (
    <Form setSeed={setSeed} />
  )
}
