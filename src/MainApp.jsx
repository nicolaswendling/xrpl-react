import {useState} from "react"
import {Wallet} from "./components/wallet-ui/wallet.jsx"
import {AddWallet} from "./components/wallet-ui/add-wallet.jsx"
import {Connected} from "./components/connected.jsx"

export const MainApp = () => {
  const [wallets, setWallets] = useState(2)
  const addWallet = () => setWallets((current) => current + 1)

  return (
    <main className="font-mono">
      {[...Array(wallets)].map((_, index) => (
        <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
      ))}
      <AddWallet onClick={addWallet} />
      <Connected />
    </main>
  )
}
