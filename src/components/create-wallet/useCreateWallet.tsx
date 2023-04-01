import {useState} from "react"

export const useWallets = (maxWallet: number) => {
  const MAX_WALLETS = maxWallet
  const MIN_WALLETS = 2
  const [wallets, setWallets] = useState(MIN_WALLETS)

  const isDisabled = () => wallets >= MAX_WALLETS || wallets <= MIN_WALLETS

  const addWallet = () => {
    if (wallets >= MAX_WALLETS)
      return alert(`You can only have ${MAX_WALLETS} wallets at a time`)
    setWallets((current) => current + 1)
  }

  return {
    isDisabled,
    wallets,
    addWallet,
  }
}
