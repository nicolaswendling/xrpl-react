## XRPLedger React/TS - Proof of Concept

This is a proof of concept for a React/TypeScript application that uses the XRPLedger API.

![XRPLedger React/TS - Proof of Concept](https://dam.malt.com/90dc3084-8656-4396-ac84-4ee25ee85f20?func=bound&w=2048&org_if_sml=1)

[XRPLedger React PoC live demo](https://xrpl-react.vercel.app/)

--

## Troubles

Looks to have troubles on Testnet : `WebSocket connection to 'wss://s.altnet.rippletest.net:51233/' failed`

I have seen there is issue on [Xrpl website](https://www.3wxy.net/xrp-testnet-faucet.html) too.

Switch from TestNet to DevNet : `<XRPLClient network={Networks.Devnet}>`
