import {useState, useEffect} from "react"

export const useCreateWallets = () => {
  const MAX_WALLETS = 4
  const MIN_WALLETS = 2
  const [wallets, setWallets] = useState(MIN_WALLETS)
  const [createdWallets, setCreatedWallets] = useState(0)

  const validateWalletCreated = () => {
    setCreatedWallets((current) => {
      const newValue = current + 1
      return newValue
    })
  }

  const authCreateWallet = () =>
    wallets >= MAX_WALLETS || createdWallets < wallets

  const addWallet = () => {
    if (wallets >= MAX_WALLETS)
      return alert(`You can only have ${MAX_WALLETS} wallets at a time`)
    setWallets((current) => current + 1)
  }

  return {
    authCreateWallet,
    wallets,
    addWallet,
    createdWallets,
    validateWalletCreated,
  }
}
