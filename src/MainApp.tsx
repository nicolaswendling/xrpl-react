import {Wallet} from "./components/Wallet"
import {useWalletContext} from "./components/create-wallet/useWalletContext"
import {AddWallet} from "./components/wallet-ui/AddWallet"
import {Connected} from "./components/wallet-ui/Connected"

export const MainApp = () => {
  const {wallets, authCreateWallet, addWallet} = useWalletContext()

  return (
    <main className="font-mono">
      <div className="grid gap-4">
        {[...Array(wallets)].map((_, index) => (
          <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
        ))}
      </div>
      {!authCreateWallet() && (
        <AddWallet disabled={authCreateWallet()} onClick={addWallet} />
      )}
      <Connected />
    </main>
  )
}
