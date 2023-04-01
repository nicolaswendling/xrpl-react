export type SendXrpProps = (
  address: string,
  amount: number
) => Promise<SendXRPReturnProps>

export type SendXRPReturnProps = {
  id: number
  result: {
    Fee: string
    Amount: string
    Account: string
    Destination: string
  }
}

export type QuerySendXRPProps = {
  amount: number
  address: string
  setAmount: (amount: number) => void
}
