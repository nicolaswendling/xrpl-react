import {FormEvent, useState, useEffect} from "react"
import {useQuerySendXRP} from "./useQuerySendXRP"
import {
  useBalance,
  ReserveRequirement as RESERVE_REQUIREMENT,
} from "@nice-xrpl/react-xrpl"

export const useSendXRP = () => {
  const {querySendXRP, sendingStatus} = useQuerySendXRP()
  const balance = useBalance()

  const [amount, setAmount] = useState(0)
  const [maxAmount, setMaxAmount] = useState(balance - RESERVE_REQUIREMENT)
  const [address, setAddress] = useState("")

  const formStatus = () =>
    !amount || amount >= maxAmount || !address || sendingStatus

  const submitQuery = async (event: FormEvent) => {
    event.preventDefault()

    if (address === "") {
      return alert("Please fill the wallet address")
    }

    if (amount >= maxAmount) {
      return alert("Not enough XRP")
    }

    querySendXRP({
      amount,
      address,
      setAmount,
    })
  }

  useEffect(() => {
    setMaxAmount(balance - RESERVE_REQUIREMENT)
  }, [balance])

  return {
    formStatus,
    balance,
    maxAmount,
    amount,
    sendingStatus,
    setAmount,
    address,
    setAddress,
    submitQuery,
    RESERVE_REQUIREMENT,
  }
}
