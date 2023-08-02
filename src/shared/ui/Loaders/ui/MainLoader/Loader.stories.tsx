import { StoryFn, Meta } from '@storybook/react';
import { Loader } from './Loader';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Loader,
  title: 'shared/Loaders/Loader',
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = args => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'testText',
};
