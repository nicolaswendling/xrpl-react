import {WalletBalance} from "./wallet-ui/wallet-balance"
import {WalletInfo} from "./wallet-ui/wallet-info"
import {Header} from "./wallet-ui/header"

export function DestinationWallet() {
  return (
    <div className="Wallet">
      <Header>Destination Wallet</Header>
      <WalletInfo />
      <WalletBalance />
    </div>
  )
}
