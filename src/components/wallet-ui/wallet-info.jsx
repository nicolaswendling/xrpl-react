import {useWalletAddress} from "@nice-xrpl/react-xrpl"

export function WalletInfo() {
  // The useWalletAddress hook gives you the address
  // of the wallet used up in the tree.
  const address = useWalletAddress()

  return (
    <div className="bg-blue-50 p-2 mb-2 flex gap-2 items-center">
      <span className="font-bold basis-28">Address:</span>
      <input
        className="py-2 px-4 text-blue-950 w-full"
        defaultValue={address}
        type="text"
        readOnly={true}
      />
    </div>
  )
}
