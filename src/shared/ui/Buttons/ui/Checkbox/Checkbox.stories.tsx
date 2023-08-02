import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Checkbox,
  title: 'shared/Buttons/Checkbox',
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
};
