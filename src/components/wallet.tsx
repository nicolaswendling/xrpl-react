import {CreateWallet} from "./create-wallet"
import {TransactionsWallet} from "./transactions-wallet"
import {Wrapper} from "./wallet-ui/wrapper"

export const Wallet = ({id}: {id: string}) => {
  return (
    <Wrapper>
      <CreateWallet>
        <TransactionsWallet id={id} />
      </CreateWallet>
    </Wrapper>
  )
}
