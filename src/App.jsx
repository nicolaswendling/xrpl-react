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

      <div className="my-8 text-center">
        <div className="inline-flex px-4 py-2 bg-blue-600 rounded-md text-blue-50">
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
      <div className="max-w-sm mx-auto mb-8 text-center">
        <h1 className="text-2xl text-blue-600">
          <img
            src="/xrp-logo.webp"
            alt="XRP"
            className="block h-8 mx-auto mb-2"
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
      <div className="max-w-sm mx-auto mt-8 text-sm text-center text-blue-600">
        <p className="mt-2">
          Fast and green, the digital asset XRP was built to be the most
          practical cryptocurrency for applications across the financial
          services space.
        </p>
      </div>
    </>
  )
}
