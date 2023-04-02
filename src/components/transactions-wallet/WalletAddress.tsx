import {useWalletAddress} from "@nice-xrpl/react-xrpl"
import {useState} from "react"
import {WrapperForm} from "../wallet-ui/WrapperForm"
export const WalletAddress = () => {
  const [copied, setCopied] = useState(false)
  const address = useWalletAddress()

  return (
    <WrapperForm>
      <input
        className="w-full p-4 text-blue-950 md:rounded-l-md"
        defaultValue={address}
        type="text"
        readOnly={true}
      />
      <button
        className="flex-shrink-0 p-4 transition-colors bg-blue-600 md:basis-28 text-blue-50 md:rounded-r-md disabled:bg-slate-200 disabled:text-slate-400 hover:bg-blue-900"
        onClick={async () => {
          await navigator.clipboard.writeText(address)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </WrapperForm>
  )
}
