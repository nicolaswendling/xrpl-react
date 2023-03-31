import {CreateSourceWallet} from "../create-wallet"
import {Wallet} from "../wallet"
import {Wrapper} from "./wrapper"

export const WalletUI = ({id}: {id: number}) => {
  return (
    <Wrapper>
      <CreateSourceWallet>
        <Wallet id={id} />
      </CreateSourceWallet>
    </Wrapper>
  )
}
