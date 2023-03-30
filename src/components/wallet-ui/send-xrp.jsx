import {useState} from "react"
import {useBalance, useSendXRP, ReserveRequirement} from "@nice-xrpl/react-xrpl"

export function SendXRP() {
  // The useSendXRP hook can be used to send XRP to
  // another account.  This is a transactional hook and
  // requires a wallet.
  const sendXRP = useSendXRP()
  const balance = useBalance()

  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(48)
  const [sending, setSending] = useState(false)

  return (
    <>
      <div className="flex gap-px bg-blue-200 p-2 rounded mt-4">
        <div className="">
          <label className="block" htmlFor="srcAmount">
            I'll send XRP
          </label>
          <input
            id="srcAmount"
            className="py-2 px-4 text-blue-950 rounded-l-md  w-full max-w-[200px]"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
            type="number"
          />
        </div>
        <div className=" flex-1">
          <label htmlFor="destinationAddress" className="block">
            to this address
          </label>
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
            className="py-2 px-4 bg-blue-950 text-white rounded-r-md"
            onClick={async () => {
              setSending(true)
              try {
                const result = await sendXRP(destinationAddress, amount)
                console.log("UI: ", result)
              } catch (e) {
                alert(e)
              }

              setSending(false)
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
      {sending && <div>Waiting for response...</div>}
    </>
  )
}
