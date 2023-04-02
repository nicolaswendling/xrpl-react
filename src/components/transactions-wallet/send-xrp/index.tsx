import {useSendXRP} from "./useSendXRP"
import {Labels} from "./Labels"
import {Loading} from "./Loading"
import {InputAmount} from "./InputAmount"
import {InputAddress} from "./InputAddress"
import {InputRange} from "./InputRange"
import {Button} from "./Button"

export const SendXRP = ({id}: {id: string}) => {
  const {
    amount,
    maxAmount,
    setAmount,
    address,
    setAddress,
    submitQuery,
    sendingStatus,
    formStatus,
  } = useSendXRP()

  return (
    <>
      <Labels id={id} amount={amount} address={address} />
      <form onSubmit={submitQuery}>
        <fieldset disabled={sendingStatus}>
          <div className="p-2 mb-2 bg-white rounded-md">
            <div className="flex gap-px max-md:p-px max-md:flex-col bg-slate-300 md:rounded-md">
              <InputAmount
                max={maxAmount}
                amount={amount}
                setAmount={setAmount}
                id={id}
              />
              <InputAddress id={id} address={address} setAddress={setAddress} />
              <Button disabled={formStatus()} />
            </div>
          </div>
          <InputRange max={maxAmount} amount={amount} setAmount={setAmount} />
        </fieldset>
      </form>
      {sendingStatus && <Loading />}
    </>
  )
}
