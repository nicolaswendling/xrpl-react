import {CreateSourceWallet} from "../create-wallet"
import {TransactionsWallet} from "../transactions-wallet"
import {Wrapper} from "./wrapper"

export const Wallet = ({id}: {id: string}) => {
  return (
    <Wrapper>
      <CreateSourceWallet>
        <TransactionsWallet id={id} />
      </CreateSourceWallet>
    </Wrapper>
  )
}
