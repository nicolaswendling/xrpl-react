import {SendXRP} from "./wallet-ui/send-xrp"
import {WalletBalance} from "./wallet-ui/wallet-balance"
import {WalletAddress} from "./wallet-ui/wallet-address"
import {Header} from "./wallet-ui/header"

type Props = {
  id: string
}

export function TransactionsWallet({id}: Props) {
  return (
    <>
      <Header>
        <WalletBalance />
      </Header>
      <SendXRP id={id} />
      <WalletAddress />
    </>
  )
}
