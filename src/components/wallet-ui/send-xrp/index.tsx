import {useSendXRP} from "./useSendXRP"
import {Labels} from "./Labels"
import {Loading} from "./Loading"
import {InputAmount} from "./InputAmount"
import {InputAddress} from "./InputAddress"
import {InputRange} from "./InputRange"
import {Button} from "./Button"

export const SendXRP = ({id}: {id: string}) => {
  const {
    balance,
    amount,
    setAmount,
    destinationAddress,
    setDestinationAddress,
    handlerOnSubmit,
    isDisabled,
    sending,
    RESERVE_REQUIREMENT,
  } = useSendXRP()

  return (
    <>
      <Labels id={id} amount={amount} destinationAddress={destinationAddress} />
      <form onSubmit={handlerOnSubmit}>
        <fieldset disabled={sending}>
          <div className="flex gap-px p-2 mb-2 rounded-md bg-slate-300 text-blue-50">
            <InputAmount
              max={balance - RESERVE_REQUIREMENT}
              amount={amount}
              setAmount={setAmount}
              id={id}
            />
            <InputAddress
              id={id}
              address={destinationAddress}
              setAddress={setDestinationAddress}
            />
            <Button disabled={isDisabled()} />
          </div>
          <InputRange
            max={balance - RESERVE_REQUIREMENT}
            amount={amount}
            setAmount={setAmount}
          />
        </fieldset>
      </form>
      {sending && <Loading />}
    </>
  )
}
