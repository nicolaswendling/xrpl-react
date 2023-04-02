import {useState, createContext} from "react"
import {PropsWithChildren} from "react"
import {useDialogContext} from "../dialog/useDialogContext"

type WalletContextType = {
  createdWallets: number
  wallets: number
  validateWalletCreated: () => void
  authCreateWallet: () => boolean
  addWallet: () => void
}

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined
)

export const WalletProvider = ({children}: PropsWithChildren) => {
  const MAX_WALLETS = 5
  const MIN_WALLETS = 2
  const [wallets, setWallets] = useState(MIN_WALLETS)
  const [createdWallets, setCreatedWallets] = useState(0)
  const {openModal} = useDialogContext()

  const authCreateWallet = () =>
    wallets >= MAX_WALLETS || createdWallets < wallets

  const addWallet = () => {
    if (wallets >= MAX_WALLETS) {
      openModal({
        title: "Error",
        message: `You can only have ${MAX_WALLETS} wallets at a time`,
      })
    } else {
      setWallets((current) => current + 1)
    }
  }

  const validateWalletCreated = () => {
    setCreatedWallets((current) => current + 1)
  }

  return (
    <WalletContext.Provider
      value={{
        createdWallets,
        validateWalletCreated,
        authCreateWallet,
        addWallet,
        wallets,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
