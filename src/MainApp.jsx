import {useState} from "react"
import {Wallet} from "./components/wallet-ui/wallet.jsx"
import {AddWallet} from "./components/wallet-ui/add-wallet.jsx"
import {Connected} from "./components/connected.jsx"

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
          <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
        ))}
      </div>
      <AddWallet disabled={wallets >= MAX_WALLETS} onClick={addWallet} />
      <Connected />
    </main>
  )
}
