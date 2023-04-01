type Props = {
  id: string
  address: string
  setAddress: (address: string) => void
}

export const InputAddress = ({id, address, setAddress}: Props) => {
  return (
    <input
      id={`destination_address_${id}`}
      className="flex-1 w-full p-4 text-blue-950"
      placeholder="ex: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh"
      value={address}
      onChange={(event) => setAddress(event.currentTarget.value)}
      type="text"
    />
  )
}
