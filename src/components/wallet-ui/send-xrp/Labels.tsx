import {Number} from "../number"

export const Labels = ({
  id,
  destinationAddress,
  amount,
}: {
  id: string
  destinationAddress: string
  amount: number
}) => {
  return (
    <div className="mt-4 text-center">
      <label className="" htmlFor={`amount_${id}`}>
        Send{" "}
        <strong className="font-mono text-blue-600">
          <Number value={amount} /> XRP
        </strong>
      </label>
      &nbsp;
      <label htmlFor={`destinationAddress_${id}`} className="">
        to{" "}
        {destinationAddress ? (
          <strong className="text-base text-blue-600">
            {destinationAddress}
          </strong>
        ) : (
          "fill the wallet address"
        )}
      </label>
    </div>
  )
}
