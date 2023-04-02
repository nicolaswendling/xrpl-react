import {ComponentPropsWithoutRef} from "react"
type Props = ComponentPropsWithoutRef<"div">

export const Wrapper = ({children}: Props) => {
  return (
    <div className="w-full p-4 bg-white rounded-md shadow-md bg-gradient-to-tl min-h-[195px] md:min-h-[136px] from-slate-300 shadow-slate-950">
      {children}
    </div>
  )
}
