import {FormEvent, useState} from "react"
import {useQuerySendXRP} from "./useQuerySendXRP"
import {
  useBalance,
  useSendXRP as useSendXRPL,
  ReserveRequirement as RESERVE_REQUIREMENT,
} from "@nice-xrpl/react-xrpl"

export const useSendXRP = () => {
  const requestSendXRP = useQuerySendXRP()
  const sendXRP = useSendXRPL() as SendXrpProps

  const balance = useBalance()

  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(0)
  const [sending, setSending] = useState(false)
  const [maxAmount] = useState(balance - RESERVE_REQUIREMENT)

  const isDisabled = () =>
    !amount || amount >= maxAmount || !destinationAddress || sending

  const handlerOnSubmit = async (event: FormEvent) => {
    event.preventDefault()
    requestSendXRP({
      balance,
      maxAmount,
      RESERVE_REQUIREMENT,
      amount,
      address: destinationAddress,
      setSending,
      setAmount,
      sendXRP,
    })
  }

  return {
    isDisabled,
    balance,
    maxAmount,
    amount,
    sending,
    setAmount,
    destinationAddress,
    setDestinationAddress,
    handlerOnSubmit,
    RESERVE_REQUIREMENT,
  }
}
