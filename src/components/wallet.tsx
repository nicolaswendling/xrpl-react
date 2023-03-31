import {SendXRP} from "./wallet-ui/send-xrp"
import {WalletBalance} from "./wallet-ui/wallet-balance"
import {WalletAddress} from "./wallet-ui/wallet-address"
import {Header} from "./wallet-ui/header"

export function Wallet({id}: {id: string}) {
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
