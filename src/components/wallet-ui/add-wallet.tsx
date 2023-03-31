type PropsType = {
  onClick: () => {}
  disabled: boolean
}

export const AddWallet = ({onClick, disabled}: PropsType) => {
  return (
    <div className="mt-4 text-center">
      <button
        disabled={disabled}
        className="px-6 py-4 transition-colors duration-500 bg-blue-600 rounded-md text-blue-50 hover:bg-blue-200 hover:text-blue-950"
        onClick={onClick}
      >
        Add a new Wallet
      </button>
    </div>
  )
}
