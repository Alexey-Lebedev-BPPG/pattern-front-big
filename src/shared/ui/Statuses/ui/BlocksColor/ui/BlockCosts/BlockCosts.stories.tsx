import { StoryFn, Meta } from '@storybook/react';
import { BlockCosts } from './BlockCosts';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: BlockCosts,
  title: 'shared/Statuses/BlockCosts',
} as Meta<typeof BlockCosts>;

const Template: StoryFn<typeof BlockCosts> = args => <BlockCosts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  amount: '1',
  countBoxes: '4',
  status: 'Listed',
  subtitle: 'Testing Test',
  tooltip: true,
  value2: '300010234',
};
