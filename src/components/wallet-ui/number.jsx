import React from "react"

export const Number = ({value}) => {
  return <span>{new Intl.NumberFormat("en-US").format(value)}</span>
}
