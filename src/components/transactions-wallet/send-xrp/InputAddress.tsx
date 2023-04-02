type Props = {
  id: string
  address: string
  setAddress: (address: string) => void
}

export const InputAddress = ({id, address, setAddress}: Props) => {
  return (
    <input
      id={`destination_address_${id}`}
      className="flex-1 w-full p-4 border-l-[1px] text-blue-950 border-slate-300"
      placeholder="ex: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      value={address}
      onChange={(event) => setAddress(event.currentTarget.value)}
      type="text"
    />
  )
}
