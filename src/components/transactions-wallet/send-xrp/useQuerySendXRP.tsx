import {useState} from "react"
import {SendXrpProps, SendXRPReturnProps, QuerySendXRPProps} from "./types"
import {
  useSendXRP as useSendXRPL,
  ReserveRequirement as RESERVE_REQUIREMENT,
} from "@nice-xrpl/react-xrpl"

const buildMessage = (
  amountInDrops: string,
  feesInDrops: string,
  elapsedTime: number
) => {
  const dropsToXRP = new Intl.NumberFormat("en-US").format(
    +amountInDrops / 1_000_000
  )
  const feesInXRP = +feesInDrops / 1_000_000

  const message = `
      ------------------------
      Transaction Time: ${elapsedTime} ms / ${elapsedTime / 1000} s
      ------------------------
      - Amount: ${dropsToXRP} XRP
      - Fee: ${feesInDrops} Drops / ${feesInXRP} XRP
      ------------------------
      Wallet Requirement: ${RESERVE_REQUIREMENT} XRP
      ------------------------
      `

  return message
}

export const useQuerySendXRP = () => {
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
      console.log(`Temps écoulé : ${elapsedTime} ms`)

      alert(buildMessage(amountInDrops, feesInDrops, elapsedTime))
    } catch (error) {
      alert(error)
    } finally {
      setSendingStatus(false)
      setAmount(0)
    }
  }

  return {querySendXRP, sendingStatus}
}
