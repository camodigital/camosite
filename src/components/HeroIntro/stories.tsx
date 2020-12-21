import { Story, Meta } from '@storybook/react/types-6-0'
import HeroIntro from '.'

export default {
  title: 'HeroIntro',
  component: HeroIntro
} as Meta

export const Default: Story = () => <HeroIntro />
