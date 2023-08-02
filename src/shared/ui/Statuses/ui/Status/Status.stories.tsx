import { StoryFn, Meta } from '@storybook/react';
import { Status } from './Status';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Status,
  title: 'shared/Statuses/Status',
} as Meta<typeof Status>;

const Template: StoryFn<typeof Status> = args => <Status {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: 'RequestedBack',
};
