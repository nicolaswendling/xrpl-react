import {FormEvent, useState} from "react"
import {
  useBalance,
  useSendXRP as useSendXRPL,
  ReserveRequirement as RESERVE_REQUIREMENT,
} from "@nice-xrpl/react-xrpl"

type SendXRPProps = {
  id: number
  result: {
    Fee: string
    Amount: string
    Account: string
    Destination: string
  }
}

export const useSendXRP = () => {
  const sendXRP = useSendXRPL()
  const balance = useBalance()

  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(0)
  const [sending, setSending] = useState(false)

  const buildMessage = (amountInDrops: string, feesInDrops: string) => {
    const dropsToXRP = new Intl.NumberFormat("en-US").format(
      +amountInDrops / 1_000_000
    )
    const feesInXRP = +feesInDrops / 1_000_000

    const message = `
          Successfully sent !
          - Amount: ${dropsToXRP} XRP
          - Fee: ${feesInDrops} Drops / ${feesInXRP} XRP
          `

    return message
  }

  const handlerOnSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (destinationAddress === "") {
      return alert("Please fill the wallet address")
    }

    if (amount >= balance - RESERVE_REQUIREMENT) {
      return alert("Not enough XRP")
    }

    setSending(true)

    try {
      const transaction = (await sendXRP(
        destinationAddress,
        amount
      )) as SendXRPProps

      const {Fee: feesInDrops, Amount: amountInDrops} = transaction.result
      alert(buildMessage(amountInDrops, feesInDrops))
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
      amount >= balance - RESERVE_REQUIREMENT ||
      !destinationAddress ||
      sending
    )
  }

  return {
    balance,
    amount,
    setAmount,
    destinationAddress,
    setDestinationAddress,
    handlerOnSubmit,
    isDisabled,
    sending,
    RESERVE_REQUIREMENT,
  }
}
