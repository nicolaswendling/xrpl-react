import React from "react"

const querySendXRP = async ({
  balance,
  RESERVE_REQUIREMENT,
  amount,
  address,
  setSending,
  setAmount,
  sendXRP,
}: QuerySendXRPProps) => {
  if (address === "") {
    return alert("Please fill the wallet address")
  }

  if (amount >= balance - RESERVE_REQUIREMENT) {
    return alert("Not enough XRP")
  }

  setSending(true)

  try {
    const transaction = (await sendXRP(address, amount)) as SendXRPReturnProps

    const {Fee: feesInDrops, Amount: amountInDrops} = transaction.result
    alert(buildMessage(amountInDrops, feesInDrops, RESERVE_REQUIREMENT))
  } catch (error) {
    alert(error)
  } finally {
    setSending(false)
    setAmount(0)
  }
}

const buildMessage = (
  amountInDrops: string,
  feesInDrops: string,
  RESERVE_REQUIREMENT: number
) => {
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
  return querySendXRP
}
