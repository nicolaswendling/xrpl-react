export const WrapperWallet = ({children, ...props}) => {
  const styles = props.className || ""
  return (
    <div className={`p-4 bg-slate-50 rounded-md min-h-[130px] ${styles}`}>
      {children}
    </div>
  )
}
