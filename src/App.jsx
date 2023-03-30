import {Networks, useIsConnected, XRPLClient} from "@nice-xrpl/react-xrpl"
import {CreateSourceWallet} from "./components/create-source-wallet.jsx"
import {SourceWallet} from "./components/source-wallet.jsx"
import {WrapperWallet as Wrapper} from "./components/wallet-ui/wrapper-wallet.jsx"

function MainApp() {
  // The useIsConnected hook will let you know
  // when the client has connected to the xrpl network
  const isConnected = useIsConnected()

  return (
    <div className="font-mono">
      <Wrapper className="mb-4">
        <CreateSourceWallet>
          <SourceWallet id="01" />
        </CreateSourceWallet>
      </Wrapper>

      <Wrapper>
        <CreateSourceWallet>
          <SourceWallet id="02" />
        </CreateSourceWallet>
      </Wrapper>

      <div className="text-center my-8">
        <div className="inline-flex py-2 px-4 bg-blue-600 text-blue-50 rounded-md">
          Connected to XRPL: {isConnected ? "Yes" : "No"}
        </div>
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
    <>
      <div className="mb-8 text-center max-w-sm mx-auto">
        <h1 className="text-2xl text-blue-600">
          <img
            src="/xrp-logo.webp"
            alt="XRP"
            className="h-8 block mb-2 mx-auto"
          />
          XRP
          <small className="block text-3xl text-blue-50">
            Utility for the new global economy
          </small>
        </h1>
      </div>
      <XRPLClient network={Networks.Testnet}>
        <MainApp />
      </XRPLClient>
      <div className="text-blue-600 text-sm mt-8 text-center max-w-sm mx-auto">
        <p className="mt-2">
          Fast and green, the digital asset XRP was built to be the most
          practical cryptocurrency for applications across the financial
          services space.
        </p>
      </div>
    </>
  )
}
