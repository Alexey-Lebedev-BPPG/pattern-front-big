import { StoryFn, Meta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Spinner,
  title: 'shared/Loaders/Spinner',
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = args => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
