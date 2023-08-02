import { StoryFn, Meta } from '@storybook/react';
import { Links } from './Links';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Links,
  title: 'shared/Links',
} as Meta<typeof Links>;

const Template: StoryFn<typeof Links> = args => <Links {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
