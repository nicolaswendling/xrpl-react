import {useState} from "react"
import {SendXrpProps, SendXRPReturnProps, QuerySendXRPProps} from "../types"
import {useSendXRP as useSendXRPL} from "@nice-xrpl/react-xrpl"
import {useDialogContext} from "../../../dialog/useDialogContext"
import {Message} from "./Message"
import {TimeTransaction} from "./TimeTransaction"

export const useQuerySendXRP = () => {
  const {openModal} = useDialogContext()
  const sendXRP = useSendXRPL() as SendXrpProps
  const [sendingStatus, setSendingStatus] = useState(false)
  const timeTransaction = new TimeTransaction()

  // prettier-ignore
  const querySendXRP = async ({amount, address, setAmount}: QuerySendXRPProps) => {
    setSendingStatus(true)
    timeTransaction.start()
    try {
      const transaction = (await sendXRP(address, amount)) as SendXRPReturnProps
      const {Fee: feesInDrops, Amount: amountInDrops} = transaction.result

      const elapsedTime = timeTransaction.elapsedTime()
      const title = "Sent successfully!"
      const message = (
        <Message
          amountInDrops={amountInDrops}
          feesInDrops={feesInDrops}
          elapsedTime={elapsedTime}
        />
      )
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
