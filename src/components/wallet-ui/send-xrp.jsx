import {useState} from "react"
import {useBalance, useSendXRP, ReserveRequirement} from "@nice-xrpl/react-xrpl"

export function SendXRP() {
  // The useSendXRP hook can be used to send XRP to
  // another account.  This is a transactional hook and
  // requires a wallet.
  const sendXRP = useSendXRP()
  const balance = useBalance()

  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(50)
  const [sending, setSending] = useState(false)

  return (
    <>
      <div className="text-center text-lg mt-4">
        <label className="" htmlFor="srcAmount">
          Send <strong className="text-blue-600">{amount}XRP</strong>
        </label>
        &nbsp;
        <label htmlFor="destinationAddress" className="">
          to{": "}
          {destinationAddress ? (
            <strong className="text-base">{destinationAddress}</strong>
          ) : (
            "fill the wallet address"
          )}
        </label>
      </div>
      <div className="flex gap-px bg-slate-950 text-blue-50 p-4 rounded-md">
        <div className="">
          <input
            id="srcAmount"
            className="py-2 px-4 text-blue-950 rounded-l-md  w-full max-w-[200px]"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
            type="number"
          />
        </div>
        <div className=" flex-1">
          <input
            id="destinationAddress"
            className="py-2 px-4 text-blue-950 w-full"
            placeholder="ex: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div className="self-end">
          <button
            className="py-2 px-4 bg-blue-200 text-blue-900 rounded-r-md"
            onClick={async () => {
              setSending(true)
              try {
                const result = await sendXRP(destinationAddress, amount)
                console.log("UI: ", result)
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
        <div className="bg-blue-900 text-blue-50 p-4 mt-2 text-center rounded-md">
          Waiting for response...
        </div>
      )}
    </>
  )
}
