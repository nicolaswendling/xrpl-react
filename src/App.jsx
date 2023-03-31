import {Networks, XRPLClient} from "@nice-xrpl/react-xrpl"
import {MainApp} from "./MainApp.jsx"
import {XRPHeader} from "./components/page-ui/xrp-header.jsx"
import {XRPFooter} from "./components/page-ui/xrp-footer.jsx"

export default function App() {
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
