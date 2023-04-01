import {Wallet} from "@nice-xrpl/react-xrpl"
import {useState, ReactNode} from "react"
import {Form} from "./Form"

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
