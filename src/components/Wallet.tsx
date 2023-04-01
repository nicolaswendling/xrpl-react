import {Wallet as WalletXRPL} from "@nice-xrpl/react-xrpl"
import {TransactionsWallet} from "./transactions-wallet"
import {Wrapper} from "./wallet-ui/Wrapper"

import {useState} from "react"
import {Form as FormCreateWallet} from "./create-wallet/Form"

export const Wallet = ({id}: {id: string}) => {
  const [seed, setSeed] = useState("")
  return (
    <Wrapper>
      {seed ? (
        <WalletXRPL seed={seed}>
          <TransactionsWallet id={id} />
        </WalletXRPL>
      ) : (
        <FormCreateWallet setSeed={setSeed} />
      )}
    </Wrapper>
  )
}
