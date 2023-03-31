export const Number = ({value}: {value: number}) => {
  return <span>{new Intl.NumberFormat("en-US").format(value)}</span>
}
