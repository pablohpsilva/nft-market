import { Story, Meta } from '@storybook/react/types-6-0'
import { BigNumber } from 'ethers'

import { TokenPretty, TokenPrettyCompProps } from './TokenPretty'

export default {
  title: 'Components/TokenPretty',
  component: TokenPretty,
  parameters: {
    layout: 'padded',
  },
} as Meta

const Template: Story<TokenPrettyCompProps> = args => <TokenPretty {...args} />

export const Default = Template.bind({})
Default.args = {
  token: {
    id: '1',
    uri: 'token1',
    price: BigNumber.from(1),
    name: 'Token 1',
  },
} as TokenPrettyCompProps
