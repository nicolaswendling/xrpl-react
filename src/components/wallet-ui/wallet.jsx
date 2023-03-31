import {CreateSourceWallet} from "../create-source-wallet.jsx"
import {SourceWallet} from "../source-wallet.jsx"
import {WrapperWallet as Wrapper} from "./wrapper-wallet.jsx"

export const Wallet = ({id}) => {
  return (
    <Wrapper>
      <CreateSourceWallet>
        <SourceWallet id={id} />
      </CreateSourceWallet>
    </Wrapper>
  )
}
