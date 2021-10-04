import { render } from '@testing-library/react'
import { BigNumber } from 'ethers'
import { TokenPretty } from './TokenPretty'

test(`Renders Token`, () => {
  render(
    <TokenPretty
      token={{
        id: '1',
        name: 'Token 1',
        uri: 'token1',
        price: BigNumber.from(1),
      }}
    />
  )
})
