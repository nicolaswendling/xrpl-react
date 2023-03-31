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
  const handlerOnSubmit = async (event) => {
    event.preventDefault()
    if (destinationAddress === "") return
    if (amount >= balance - ReserveRequirement) return

    setSending(true)
    try {
      const result = await sendXRP(destinationAddress, amount)
    } catch (error) {
      alert(error)
    } finally {
      setSending(false)
      setAmount(0)
    }
  }

  const isDisabled = () => {
    return (
      !amount ||
      amount >= balance - ReserveRequirement ||
      !destinationAddress ||
      sending
    )
  }
  return (
    <>
      <div className="mt-4 text-center">
        <label className="" htmlFor={`amount_${id}`}>
          Send{" "}
          <strong className="font-mono text-blue-600">
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
      <form onSubmit={handlerOnSubmit}>
        <fieldset disabled={sending}>
          <div className="flex gap-px p-2 mb-2 rounded-md bg-slate-300 text-blue-50">
            <input
              id={`amount_${id}`}
              className="p-4 text-blue-950 rounded-l-md  w-full max-w-[200px]"
              value={amount}
              onChange={(event) => {
                let value = event.currentTarget.value
                if (value === "") value = 0
                if (value < 0) value = 0
                if (value >= balance - ReserveRequirement)
                  value = balance - ReserveRequirement
                setAmount(parseInt(value, 10))
              }}
              type="number"
            />
            <input
              id={`destinationAddress_${id}`}
              className="flex-1 w-full p-4 text-blue-950"
              placeholder="ex: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
              value={destinationAddress}
              onChange={(event) =>
                setDestinationAddress(event.currentTarget.value)
              }
              type="text"
            />
            <button
              className="self-end flex-shrink-0 w-full p-4 transition-colors bg-blue-600 basis-28 text-blue-50 rounded-r-md disabled:bg-slate-200 disabled:text-slate-400 hover:bg-blue-900"
              disabled={isDisabled()}
            >
              Send
            </button>
          </div>
          <input
            type="range"
            min="0"
            step="1"
            max={balance - ReserveRequirement}
            value={amount}
            onChange={(event) =>
              setAmount(parseInt(event.currentTarget.value, 10))
            }
            className="w-full"
          />
        </fieldset>
      </form>
      {sending && (
        <div className="pt-4 pb-2 mt-2 text-center animate-bounce">
          <span className="px-4 py-2 bg-blue-600 rounded-md text-blue-50">
            Waiting for response...
          </span>
        </div>
      )}
    </>
  )
}
