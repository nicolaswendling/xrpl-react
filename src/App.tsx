import {Networks, XRPLClient} from "@nice-xrpl/react-xrpl"
import {MainApp} from "./MainApp"
import {XRPHeader} from "./components/page/Header"
import {XRPFooter} from "./components/page/Footer"
import {WalletProvider} from "./components/create-wallet/WalletContext"
import {Dialog} from "./components/dialog/Dialog"
import {DialogProvider} from "./components/dialog/DialogContext"

const App = () => {
  return (
    <>
      <XRPHeader />
      <XRPLClient network={Networks.Testnet}>
        <DialogProvider>
          <WalletProvider>
            <MainApp />
            <Dialog />
          </WalletProvider>
        </DialogProvider>
      </XRPLClient>
      <XRPFooter />
    </>
  )
}

export default App
