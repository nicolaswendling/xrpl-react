import {useWalletAddress} from "@nice-xrpl/react-xrpl"

export function WalletInfo() {
  // The useWalletAddress hook gives you the address
  // of the wallet used up in the tree.
  const address = useWalletAddress()

  return (
    <div className="flex items-center gap-2 p-2 mb-2 rounded-md bg-slate-300">
      <span className="font-bold">Address:</span>
      <div className="flex flex-1 gap-px">
        <input
          className="w-full p-4 text-blue-950 rounded-l-md"
          defaultValue={address}
          type="text"
          readOnly={true}
        />
        <button
          className="flex-shrink-0 px-4 py-2 transition-colors bg-blue-600 basis-28 text-blue-50 rounded-r-md disabled:bg-slate-200 disabled:text-slate-400 hover:bg-blue-900"
          onClick={async () => {
            alert(`${address} copied to clipboard!`)
            navigator.clipboard.writeText(address)
          }}
        >
          Copy
        </button>
      </div>
    </div>
  )
}
