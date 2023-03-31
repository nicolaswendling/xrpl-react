import {useState} from "react"
import {Networks, XRPLClient} from "@nice-xrpl/react-xrpl"
import {Wallet} from "./components/wallet-ui/wallet.jsx"
import {Connected} from "./components/connected.jsx"
function MainApp() {
  const [wallets, setWallets] = useState(2)
  const addWallet = () => setWallets((current) => current + 1)

  return (
    <div className="font-mono">
      {[...Array(wallets)].map((_, index) => (
        <Wallet key={`wallet_${index}`} id={`wallet_${index}`} />
      ))}
      <div className="mt-4 text-center">
        <button
          className="px-6 py-4 transition-colors duration-500 bg-blue-600 rounded-md text-blue-50 hover:bg-blue-200 hover:text-blue-950"
          onClick={addWallet}
        >
          Add a new Wallet
        </button>
      </div>
      <Connected />
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
