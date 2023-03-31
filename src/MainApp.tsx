import {Wallet} from "./components/wallet"
import {useWallets} from "./components/use-wallets"
import {AddWallet} from "./components/wallet-ui/add-wallet"
import {Connected} from "./components/connected"

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
