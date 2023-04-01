import {useState} from "react"
import {SendXrpProps, SendXRPReturnProps, QuerySendXRPProps} from "./types"
import {
  useSendXRP as useSendXRPL,
  ReserveRequirement as RESERVE_REQUIREMENT,
} from "@nice-xrpl/react-xrpl"

const buildMessage = (amountInDrops: string, feesInDrops: string) => {
  const dropsToXRP = new Intl.NumberFormat("en-US").format(
    +amountInDrops / 1_000_000
  )
  const feesInXRP = +feesInDrops / 1_000_000

  const message = `
      ------------------------
      Successfully sent !
      ------------------------
      - Amount: ${dropsToXRP} XRP
      - Fee: ${feesInDrops} Drops / ${feesInXRP} XRP
      ------------------------
      Wallet Requirement: ${RESERVE_REQUIREMENT} XRP
      `

  return message
}

export const useQuerySendXRP = () => {
  const sendXRP = useSendXRPL() as SendXrpProps
  const [sendingStatus, setSendingStatus] = useState(false)

  const querySendXRP = async ({
    amount,
    address,
    setAmount,
  }: QuerySendXRPProps) => {
    setSendingStatus(true)

    try {
      const transaction = (await sendXRP(address, amount)) as SendXRPReturnProps
      const {Fee: feesInDrops, Amount: amountInDrops} = transaction.result
      alert(buildMessage(amountInDrops, feesInDrops))
    } catch (error) {
      alert(error)
    } finally {
      setSendingStatus(false)
      setAmount(0)
    }
  }

  return {querySendXRP, sendingStatus}
}
