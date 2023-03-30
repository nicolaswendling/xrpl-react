import {useWallet} from "@nice-xrpl/react-xrpl"

export function WalletSeed() {
  // The useWallet hook gives you direct access to the
  // raw xrpl wallet - from here you can grab the seed
  // or any other information.
  const wallet = useWallet()

  return (
    <div className="bg-blue-50 p-2 flex gap-2 mb-2">
      <span className="font-bold basis-28">Seed:</span>
      {wallet.seed}
    </div>
  )
}
