import {useIsConnected} from "@nice-xrpl/react-xrpl"

export const Connected = () => {
  const isConnected = useIsConnected()

  return (
    <div className="flex items-center justify-center my-8 text-blue-50">
      Connected to XRPL&nbsp;
      {!isConnected ? (
        <span className="inline-flex flex-shrink-0 p-2 rounded-full bg-slate-700"></span>
      ) : (
        <span className="inline-flex flex-shrink-0 p-2 rounded-full bg-amber-300"></span>
      )}
    </div>
  )
}
