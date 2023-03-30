import {SendXRP} from "./wallet-ui/send-xrp"
import {WalletBalance} from "./wallet-ui/wallet-balance"
import {WalletInfo} from "./wallet-ui/wallet-info"
import {Header} from "./wallet-ui/header"

export function SourceWallet({id}) {
  return (
    <>
      <div className="Wallet">
        <Header>
          <WalletBalance />
        </Header>
        <SendXRP id={id} />
        <WalletInfo />
      </div>
    </>
  )
}
