import {ComponentPropsWithoutRef} from "react"
type Props = ComponentPropsWithoutRef<"div">

export const Wrapper = ({children}: Props) => {
  return (
    <div className="p-4 bg-slate-50 rounded-md min-h-[130px] w-full">
      {children}
    </div>
  )
}
