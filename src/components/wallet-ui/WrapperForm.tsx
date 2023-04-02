import {ComponentPropsWithRef} from "react"
type Props = ComponentPropsWithRef<"div">
export const WrapperForm = ({children}: Props) => {
  return (
    <div className="p-2 bg-white rounded-md">
      <div className="flex gap-px max-md:p-px max-md:flex-col bg-slate-300">
        {children}
      </div>
    </div>
  )
}
