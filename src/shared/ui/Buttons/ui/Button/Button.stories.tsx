import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Button,
  title: 'shared/Buttons/Button',
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  typeButton: 'clear',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  typeButton: 'primary',
};

export const PrimaryAlternative = Template.bind({});
PrimaryAlternative.args = {
  children: 'PrimaryAlternative',
  typeButton: 'primary-alternative',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  typeButton: 'secondary',
};

export const SecondaryAlternative = Template.bind({});
SecondaryAlternative.args = {
  children: 'SecondaryAlternative',
  typeButton: 'secondary-alternative',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  typeButton: 'ghost',
};
