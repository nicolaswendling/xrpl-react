type SendXrpProps = (
  address: string,
  amount: number
) => Promise<SendXRPReturnProps>

type SendXRPReturnProps = {
  id: number
  result: {
    Fee: string
    Amount: string
    Account: string
    Destination: string
  }
}

type QuerySendXRPProps = {
  balance: number
  RESERVE_REQUIREMENT: number
  amount: number
  address: string
  setSending: (sending: boolean) => void
  setAmount: (amount: number) => void
  sendXRP: SendXrpProps
}
