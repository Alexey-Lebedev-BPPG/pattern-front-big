import { StoryFn, Meta } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Skeleton,
  title: 'shared/Skeleton',
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  border: '0',
  height: 100,
  width: 100,
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  height: 100,
  width: 100,
};
