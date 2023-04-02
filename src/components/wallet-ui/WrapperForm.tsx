import {ComponentPropsWithRef} from "react"
type Props = ComponentPropsWithRef<"div">
export const WrapperForm = ({children}: Props) => {
  return (
    <div className="p-2 bg-white rounded-md">
      <div className="flex gap-px p-px md:rounded-md max-md:flex-col bg-slate-200">
        {children}
      </div>
    </div>
  )
}
