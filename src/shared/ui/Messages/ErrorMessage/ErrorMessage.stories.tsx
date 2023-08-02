import { StoryFn, Meta } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: ErrorMessage,
  title: 'shared/ErrorMessage',
} as Meta<typeof ErrorMessage>;

const Template: StoryFn<typeof ErrorMessage> = args => (
  <ErrorMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  errorMessage: 'testText',
};
