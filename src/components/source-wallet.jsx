import {SendXRP} from "./wallet-ui/send-xrp"
import {WalletBalance} from "./wallet-ui/wallet-balance"
import {WalletInfo} from "./wallet-ui/wallet-info"
import {WalletSeed} from "./wallet-ui/wallet-seed"
import {Header} from "./wallet-ui/header"

export function SourceWallet() {
  return (
    <div className="Wallet">
      <Header>Source Wallet</Header>
      <WalletSeed />
      <WalletInfo />
      <WalletBalance />
      <SendXRP />
    </div>
  )
}
