import {useState} from "react"
import {WalletUI} from "./components/wallet-ui/wallet-ui"
import {AddWallet} from "./components/wallet-ui/add-wallet"
import {Connected} from "./components/connected"

export const MainApp = () => {
  const MAX_WALLETS = 4
  const [wallets, setWallets] = useState(2)

  const addWallet = () => {
    if (wallets >= MAX_WALLETS)
      return alert(`You can only have ${MAX_WALLETS} wallets at a time`)
    setWallets((current) => current + 1)
  }

  return (
    <main className="font-mono">
      <div className="grid gap-4">
        {[...Array(wallets)].map((_, index) => (
          <WalletUI key={`wallet_${index}`} id={`wallet_${index}`} />
        ))}
      </div>
      <AddWallet disabled={wallets >= MAX_WALLETS} onClick={addWallet} />
      <Connected />
    </main>
  )
}