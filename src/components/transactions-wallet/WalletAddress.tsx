import {useWalletAddress} from "@nice-xrpl/react-xrpl"
import {useState} from "react"
export const WalletAddress = () => {
  const [copied, setCopied] = useState(false)
  const address = useWalletAddress()

  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-md">
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
            await navigator.clipboard.writeText(address)
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  )
}
