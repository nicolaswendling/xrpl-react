import {useWalletAddress} from "@nice-xrpl/react-xrpl"

export function WalletInfo() {
  // The useWalletAddress hook gives you the address
  // of the wallet used up in the tree.
  const address = useWalletAddress()

  return (
    <div className="bg-slate-300 p-2 mb-2 flex gap-2 items-center rounded-md">
      <span className="font-bold basis-28">Address:</span>
      <div className="flex-1 flex gap-px">
        <input
          className="py-2 px-4 text-blue-950 w-full rounded-l-md"
          defaultValue={address}
          type="text"
          readOnly={true}
        />
        <button
          className="py-2 px-4 bg-blue-600 text-blue-50 rounded-r-md disabled:bg-slate-200 disabled:text-slate-400 hover:bg-blue-900 transition-colors"
          onClick={async () => {
            navigator.clipboard.writeText(address)
          }}
        >
          copy
        </button>
      </div>
    </div>
  )
}
