import {CreateSourceWallet} from "../create-wallet"
import {Wallet} from "../wallet"
import {Wrapper} from "./wrapper"

export const Wallet = ({id}: {id: number}) => {
  return (
    <Wrapper>
      <CreateSourceWallet>
        <Wallet id={id} />
      </CreateSourceWallet>
    </Wrapper>
  )
}
