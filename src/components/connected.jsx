import {useIsConnected} from "@nice-xrpl/react-xrpl"

export const Connected = () => {
  // The useIsConnected hook will let you know // when the client has connected to the xrpl network
  const isConnected = useIsConnected()

  return (
    <div className="my-8 text-center text-blue-50">
      Connected to XRPL:
      <span className="inline-flex p-1 bg-blue-600 rounded-md text-blue-50">
        {isConnected ? "Yes" : "No"}
      </span>
    </div>
  )
}
