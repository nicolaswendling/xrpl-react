import {Networks, XRPLClient} from "@nice-xrpl/react-xrpl"
import {MainApp} from "./MainApp"
import {XRPHeader} from "./components/page/Header"
import {XRPFooter} from "./components/page/Footer"
import {WalletProvider} from "./components/create-wallet/WalletContext"

const App = () => {
  return (
    <>
      <XRPHeader />
      <XRPLClient network={Networks.Testnet}>
        <WalletProvider>
          <MainApp />
        </WalletProvider>
      </XRPLClient>
      <XRPFooter />
    </>
  )
}

export default App
