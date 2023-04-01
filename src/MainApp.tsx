import {Wallet} from "./components/wallet"
import {useCreateWallets} from "./components/create-wallet/useCreateWallet"
import {AddWallet} from "./components/wallet-ui/add-wallet"
import {Connected} from "./components/connected"
import {useEffect} from "react"

export const MainApp = () => {
  const {wallets, createdWallets, authCreateWallet, addWallet} =
    useCreateWallets()

  useEffect(() => {
    console.log("useEffect: createdWallets", createdWallets, authCreateWallet())
  }, [createdWallets])

  return (
    <main className="font-mono">
      <div className="grid gap-4">
        {[...Array(wallets)].map((_, index) => (
          <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
        ))}
      </div>
      <AddWallet disabled={authCreateWallet()} onClick={addWallet} />
      <Connected />
    </main>
  )
}
