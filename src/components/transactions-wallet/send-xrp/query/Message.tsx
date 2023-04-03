type MessageProps = {
  amountInDrops: string
  feesInDrops: string
  elapsedTime: number
}

export const Message = ({
  amountInDrops,
  feesInDrops,
  elapsedTime,
}: MessageProps) => {
  const dropsToXRP = new Intl.NumberFormat("en-US").format(
    +amountInDrops / 1_000_000
  )
  const feesInXRP = +feesInDrops / 1_000_000

  return (
    <>
      <p className="text-lg leading-7">
        You have sent{" "}
        <span className="p-1 text-base text-white bg-blue-900 rounded-md">
          {dropsToXRP} XRP
        </span>{" "}
      </p>
      <p className="mt-2 text-lg leading-7">
        Transaction completed in{" "}
        <span className="p-1 text-base text-white bg-blue-900 rounded-md">
          {(elapsedTime / 1000).toFixed(2)} sec
        </span>
      </p>
      <p className="mt-2 text-lg leading-7">
        Transaction fees charged:&nbsp;
        <span className="p-1 text-base text-white bg-blue-900 rounded-md">
          {feesInXRP} XRP
        </span>
        &nbsp; ({feesInDrops} drops)
      </p>
    </>
  )
}
