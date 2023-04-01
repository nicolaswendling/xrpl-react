type Props = {
  onClick: () => void
  disabled: boolean
}

export const AddWallet = ({onClick, disabled}: Props) => {
  return (
    <div className="mt-4 text-center">
      <button
        disabled={disabled}
        className="px-6 py-4 transition-colors duration-500 bg-blue-600 rounded-md text-blue-50 hover:bg-blue-200 hover:text-blue-950 disabled:bg-slate-800 disabled:text-slate-600 disabled:pointer-events-none"
        onClick={onClick}
      >
        Add a new Wallet
      </button>
    </div>
  )
}
