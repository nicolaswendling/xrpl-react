import {Number} from "../number"

export const Labels = ({
  id,
  address,
  amount,
}: {
  id: string
  address: string
  amount: number
}) => {
  return (
    <div className="mt-4 text-center">
      <label htmlFor={`amount_${id}`}>
        Send{" "}
        <strong className="font-mono text-blue-600">
          <Number value={amount} /> XRP
        </strong>
      </label>
      &nbsp;
      <label htmlFor={`destination_address_${id}`}>
        to{" "}
        {address ? (
          <strong className="text-base text-blue-600">{address}</strong>
        ) : (
          "fill the wallet address"
        )}
      </label>
    </div>
  )
}
