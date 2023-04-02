import {ComponentPropsWithoutRef} from "react"
type Props = ComponentPropsWithoutRef<"h2">

export const Header = ({children}: Props) => {
  return (
    <h2 className="p-2 mb-2 text-xl text-center bg-blue-950 text-slate-50 rounded-t-md">
      {children}
    </h2>
  )
}
