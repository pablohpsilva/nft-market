import { useHistory, useLocation } from 'react-router'
import { Box, NavLink, Flex, Heading, Image } from 'theme-ui'
import { useAppState } from '../../state'
import { UserMenu } from '..'

export type HeaderProps = {
  //
}

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  const { user, isAuthenticated } = useAppState()

  return (
    <Box bg="fog" sx={{ boxShadow: 'simple' }}>
      <Flex sx={{ alignItems: 'center', p: 3 }} as="nav">
        <Image
          onClick={() => {
            history.push('/')
          }}
          sx={{ width: 50, cursor: 'pointer' }}
          src="/static/logo.svg"
        />
        <Heading sx={{ ml: [1, 2], color: 'graphite', fontWeight: 'bold' }} as="h4">
          Jasmin Marketplace
          {/* <Text sx={{ display: ['none', 'block'] }}>+ OpenSea.io on Rinkeby Network</Text> */}
        </Heading>
        <UserMenu />
      </Flex>
      {isAuthenticated && user && (
        <Flex bg="midGray" py={3} sx={{ justifyContent: 'center' }}>
          <NavLink
            sx={{
              pointerEvents: location.pathname === '/' ? 'none' : 'visible',
              color: location.pathname === '/' ? 'green' : 'white',
            }}
            onClick={() => history.push('/')}
          >
            Marketplace
          </NavLink>
          <Box sx={{ width: 50 }} />
          <NavLink
            sx={{
              pointerEvents: location.pathname === '/profile' ? 'none' : 'visible',
              color: location.pathname === '/profile' ? 'green' : 'white',
            }}
            onClick={() => history.push('/profile')}
          >
            Profile
          </NavLink>
        </Flex>
      )}
    </Box>
  )
}

export { Header }
