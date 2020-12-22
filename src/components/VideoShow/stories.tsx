import { Story, Meta } from '@storybook/react/types-6-0'
import VideoShow, { VideoShowProps } from '.'

export default {
  title: 'VideoShow',
  component: VideoShow
} as Meta

export const Default: Story<VideoShowProps> = (args) => <VideoShow {...args} />
