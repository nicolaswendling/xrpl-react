import {ComponentPropsWithoutRef} from "react"
type Props = ComponentPropsWithoutRef<"h2">

export const Header = ({children}: Props) => {
  return <h2 className="mb-2 text-xl text-center text-blue-950">{children}</h2>
}
