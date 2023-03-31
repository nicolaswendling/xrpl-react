import {CreateSourceWallet} from "../create-wallet"
import {SourceWallet} from "../wallet"
import {Wrapper} from "./wrapper"

export const Wallet = ({id}: {id: number}) => {
  return (
    <Wrapper>
      <CreateSourceWallet>
        <SourceWallet id={id} />
      </CreateSourceWallet>
    </Wrapper>
  )
}
