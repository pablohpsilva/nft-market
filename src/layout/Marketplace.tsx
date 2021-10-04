import { useWeb3React } from '@web3-react/core'
import { Gallery, Login } from '../components'
import { useAppState } from '../state'

const Marketplace = () => {
  const { user } = useAppState()
  const { active, library, activate, deactivate, setError, account, chainId, connector, error } =
    useWeb3React()

  console.log({
    active,
    library,
    activate,
    deactivate,
    setError,
    account,
    chainId,
    connector,
    error,
  })

  return (
    <>
      {!user && <Login />}
      {user && active && <Gallery />}
    </>
  )
}

export { Marketplace }
