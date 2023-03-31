import {Networks, XRPLClient} from "@nice-xrpl/react-xrpl"
import {MainApp} from "./MainApp"
import {XRPHeader} from "./components/page-ui/xrp-header"
import {XRPFooter} from "./components/page-ui/xrp-footer"

const App = () => {
  return (
    <>
      <XRPHeader />
      <XRPLClient network={Networks.Testnet}>
        <MainApp />
      </XRPLClient>
      <XRPFooter />
    </>
  )
}

export default App
