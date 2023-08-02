import { StoryFn, Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: RadioButton,
  title: 'shared/Buttons/RadioButton',
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
