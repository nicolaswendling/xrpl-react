import {useState} from "react"
import {SendXrpProps, SendXRPReturnProps, QuerySendXRPProps} from "./types"
import {useSendXRP as useSendXRPL} from "@nice-xrpl/react-xrpl"
import {useDialogContext} from "../../dialog/useDialogContext"

type MessageProps = {
  amountInDrops: string
  feesInDrops: string
  elapsedTime: number
}

const Message = ({amountInDrops, feesInDrops, elapsedTime}: MessageProps) => {
  const dropsToXRP = new Intl.NumberFormat("en-US").format(
    +amountInDrops / 1_000_000
  )
  const feesInXRP = +feesInDrops / 1_000_000

  return (
    <>
      <p className="text-lg leading-7">
        You have sent{" "}
        <span className="p-1 text-base text-white bg-blue-600 rounded-sm">
          ${dropsToXRP} XRP
        </span>{" "}
        in{" "}
        <span className="p-1 text-base text-white bg-blue-600 rounded-sm">
          ${elapsedTime / 1000} seconds
        </span>
      </p>
      <p className="mt-2 text-lg leading-7">
        Fees only ${feesInDrops} drops&nbsp;=&nbsp;
        <span className="p-1 text-base text-white bg-blue-600 rounded-sm">
          ${feesInXRP} XRP
        </span>
      </p>
    </>
  )
}

export const useQuerySendXRP = () => {
  const {openModal} = useDialogContext()
  const sendXRP = useSendXRPL() as SendXrpProps
  const [sendingStatus, setSendingStatus] = useState(false)

  // prettier-ignore
  const querySendXRP = async ({amount, address, setAmount}: QuerySendXRPProps) => {
    setSendingStatus(true)
    const start = new Date().getTime()

    try {
      const transaction = (await sendXRP(address, amount)) as SendXRPReturnProps
      const {Fee: feesInDrops, Amount: amountInDrops} = transaction.result

      const end = new Date().getTime()
      const elapsedTime = end - start
      const message = (
        <Message
          amountInDrops={amountInDrops}
          feesInDrops={feesInDrops}
          elapsedTime={elapsedTime}
        />
      )
      const title = "Sent successfully!"
      openModal({title, message})

    } catch (error) {
      openModal({title: 'Error', message: error as string})
    } finally {
      setSendingStatus(false)
      setAmount(0)
    }
  }

  return {querySendXRP, sendingStatus}
}
