import { StoryFn, Meta } from '@storybook/react';
import { BlockStatus } from './BlockStatus';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: BlockStatus,
  title: 'shared/Statuses/BlockStatus',
} as Meta<typeof BlockStatus>;

const Template: StoryFn<typeof BlockStatus> = args => <BlockStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: 'Burned',
};
