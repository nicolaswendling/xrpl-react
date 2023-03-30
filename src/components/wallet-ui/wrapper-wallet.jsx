export const WrapperWallet = ({children, ...props}) => {
  return (
    <div
      className={`p-4 bg-slate-50 rounded-md min-h-[72px] ${props.className}`}
    >
      {children}
    </div>
  )
}
