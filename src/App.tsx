import {Networks, useIsConnected, XRPLClient} from "@nice-xrpl/react-xrpl"
import {CreateSourceWallet} from "./components/create-source-wallet"
import {CreateDestinationWallet} from "./components/create-destination-wallet"
import {DestinationWallet} from "./components/destination-wallet"
import {SourceWallet} from "./components/source-wallet"

function MainApp() {
  // The useIsConnected hook will let you know
  // when the client has connected to the xrpl network
  const isConnected = useIsConnected()

  return (
    <div className="relative p-10 bg-blue-200  rounded-b-md rounded-tl-md">
      <div className="py-2 px-4 bg-blue-200 mb-px  text-blue-900 absolute bottom-full right-0 rounded-t-md">
        Connected to XRPL: {isConnected ? "Yes" : "No"}
      </div>

      <div className="p-2 bg-blue-100 mb-2 rounded-md">
        <CreateSourceWallet>
          <SourceWallet />
        </CreateSourceWallet>
      </div>

      <div className="p-2 bg-blue-100 rounded-md">
        <CreateDestinationWallet>
          <DestinationWallet />
        </CreateDestinationWallet>
      </div>
    </div>
  )
}

// The main application.  Wrap it with XRPLClient to
// create a connection to the xrpl network!
// All of the hooks require a client somewhere above
// them in the tree.
export default function App() {
  return (
    <div className="App">
      <XRPLClient network={Networks.Testnet}>
        <MainApp />
      </XRPLClient>
    </div>
  )
}
