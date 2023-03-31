import {useState, useEffect} from "react"
import {Wallet} from "./components/wallet"
import {AddWallet} from "./components/wallet-ui/add-wallet"
import {Connected} from "./components/connected"

export const useWallets = (maxWallet: number) => {
  const MAX_WALLETS = maxWallet
  const MIN_WALLETS = 2
  const [wallets, setWallets] = useState(MIN_WALLETS)

  const isDisabled = () => wallets >= MAX_WALLETS || wallets <= MIN_WALLETS

  const addWallet = () => {
    if (wallets >= MAX_WALLETS)
      return alert(`You can only have ${MAX_WALLETS} wallets at a time`)
    setWallets((current) => current + 1)
  }

  return {
    isDisabled,
    wallets,
    addWallet,
  }
}

export const MainApp = () => {
  const {wallets, isDisabled, addWallet} = useWallets(4)

  return (
    <main className="font-mono">
      <div className="grid gap-4">
        {[...Array(wallets)].map((_, index) => (
          <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
        ))}
      </div>
      <AddWallet disabled={isDisabled()} onClick={addWallet} />
      <Connected />
    </main>
  )
}
