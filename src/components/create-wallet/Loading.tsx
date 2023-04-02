type Props = {
  value: number
}

export const Loading = ({value}: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-4 text-xl text-white transition-colors duration-300 rounded-md bg-blue-950">
      <span className="animate-pulse">Creating wallet of {value} XRP</span>
    </div>
  )
}
