export const Button = ({disabled}: {disabled: boolean}) => {
  return (
    <button
      className="self-end flex-shrink-0 w-full p-4 transition-colors bg-blue-600 basis-28 text-blue-50 rounded-r-md disabled:bg-slate-100 disabled:text-slate-400 hover:bg-blue-900"
      disabled={disabled}
    >
      Send
    </button>
  )
}
