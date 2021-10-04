import { Flex, Heading, Box, Image } from 'theme-ui'
import { useHistory } from 'react-router'
import { EtherSymbol } from '@ethersproject/constants'
import { useWeb3React } from '@web3-react/core'
import { useAppState } from '../../state'
import { Identicon } from '..'
import { toShort } from '../../utils'

export type UserMenuProps = {
  //
}

const UserMenu = () => {
  const { user, isAuthenticated, disconnect } = useAppState()
  const { deactivate } = useWeb3React()

  const history = useHistory()

  const logout = () => {
    deactivate()
    disconnect()
    history.go(0)
  }

  return (
    <Flex sx={{ ml: 'auto', justifySelf: 'flex-end' }}>
      {isAuthenticated && user && (
        <>
          <Box sx={{ display: ['none', 'block'] }}>
            <Heading sx={{ p: 0, color: 'concrete' }} as="h4">
              {toShort(user.address)}
            </Heading>
            <Heading sx={{ p: 0, mt: 1, textAlign: 'right', color: 'concrete' }} as="h5">
              {EtherSymbol}
              {user.balance}
            </Heading>
          </Box>

          <Box
            onClick={() => {
              history.push('/profile')
            }}
            sx={{
              cursor: 'pointer',
              ml: [2, 3],
              height: 30,
              width: 30,
              borderRadius: '100%',
            }}
          >
            <Identicon size={30} address={user.address} />
          </Box>

          <Box>
            <Image
              onClick={logout}
              sx={{ width: 30, height: 30, ml: [2, 3] }}
              src="/static/logout.svg"
            />
          </Box>
        </>
      )}
    </Flex>
  )
}

export { UserMenu }
