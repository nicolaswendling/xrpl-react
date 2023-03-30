import {useCreateWallet, Wallet} from "@nice-xrpl/react-xrpl"
import {useState} from "react"

export function CreateSourceWallet({children}) {
  const [seed, setSeed] = useState("")
  const [sending, setSending] = useState(false)

  // When connected to the testnet/dev net, you can
  // use the useCreateWallet series of hooks to create
  // a wallet and fund it from the faucet.
  const createWallet = useCreateWallet()

  // The Wallet component is used when you have
  // credentials. It enables the use of all
  // transactional hooks and all request hooks.
  return seed ? (
    <Wallet seed={seed}>{children}</Wallet>
  ) : (
    <div>
      {!sending ? (
        <button
          className="p-4 bg-blue-950 text-white rounded w-full"
          onClick={async () => {
            setSending(true)
            const initialState = await createWallet("1048")

            setSending(false)

            if (initialState.wallet.seed) {
              console.log("created wallet: ", initialState)
              setSeed(initialState.wallet.seed)
            }
          }}
        >
          Create source wallet
        </button>
      ) : (
        <div className="p-4 text-center">Creating source wallet...</div>
      )}
    </div>
  )
}
