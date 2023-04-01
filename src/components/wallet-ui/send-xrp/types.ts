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
  amount: number
  address: string
  setAmount: (amount: number) => void
}
