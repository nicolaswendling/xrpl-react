import React from "react"

export const Loading = () => {
  return (
    <div className="w-full p-4 text-center text-white transition-colors duration-300 rounded-md bg-blue-950">
      <span className=" animate-pulse">Creating wallet</span>
    </div>
  )
}
