import {SendXRP} from "./send-xrp"
import {WalletBalance} from "./WalletBalance"
import {WalletAddress} from "./WalletAddress"
import {Header} from "./Header"

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
