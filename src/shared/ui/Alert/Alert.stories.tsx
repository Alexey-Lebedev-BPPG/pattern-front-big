import { StoryFn, Meta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Alert,
  title: 'shared/Alert',
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = args => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  status: 'info',
  text: 'testText',
};
