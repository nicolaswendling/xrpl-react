import {useState} from "react"
import {useBalance, useSendXRP, ReserveRequirement} from "@nice-xrpl/react-xrpl"
import {Number} from "./number"

export function SendXRP({id}) {
  // The useSendXRP hook can be used to send XRP to
  // another account.  This is a transactional hook and
  // requires a wallet.
  const sendXRP = useSendXRP()
  const balance = useBalance()

  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(0)
  const [sending, setSending] = useState(false)

  return (
    <>
      <div className="mt-4 text-center">
        <label className="" htmlFor={`amount_${id}`}>
          Send{" "}
          <strong className="text-blue-600 font-mono">
            <Number value={amount} /> XRP
          </strong>
        </label>
        &nbsp;
        <label htmlFor={`destinationAddress_${id}`} className="">
          to{": "}
          {destinationAddress ? (
            <strong className="text-base">{destinationAddress}</strong>
          ) : (
            "fill the wallet address"
          )}
        </label>
      </div>
      <div className="flex gap-px bg-slate-300 text-blue-50 p-2 mb-2 rounded-md">
        <div className="">
          <input
            id={`amount_${id}`}
            className="py-2 px-4 text-blue-950 rounded-l-md  w-full max-w-[200px]"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
            type="number"
          />
        </div>
        <div className=" flex-1">
          <input
            id={`destinationAddress_${id}`}
            className="py-2 px-4 text-blue-950 w-full"
            placeholder="ex: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div className="self-end">
          <button
            className="py-2 px-4 bg-blue-600 text-blue-50 rounded-r-md disabled:bg-slate-200 disabled:text-slate-400"
            onClick={async () => {
              setSending(true)
              try {
                const result = await sendXRP(destinationAddress, amount)
              } catch (e) {
                alert(e)
              } finally {
                setSending(false)
                setAmount(0)
              }
            }}
            disabled={
              !amount ||
              amount >= balance - ReserveRequirement ||
              !destinationAddress ||
              sending
            }
          >
            Send
          </button>
        </div>
      </div>
      {sending && (
        <div className="mt-2 text-center animate-bounce pt-4 pb-2">
          <span className="bg-blue-600 text-blue-50 rounded-md py-2 px-4">
            Waiting for response...
          </span>
        </div>
      )}
    </>
  )
}
