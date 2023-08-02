import { StoryFn, Meta } from '@storybook/react';
import { SwitchButton } from './SwitchButton';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: SwitchButton,
  title: 'shared/Buttons/SwitchButton',
} as Meta<typeof SwitchButton>;

const Template: StoryFn<typeof SwitchButton> = args => (
  <SwitchButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
