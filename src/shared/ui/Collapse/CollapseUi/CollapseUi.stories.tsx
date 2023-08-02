import { StoryFn, Meta } from '@storybook/react';
import { CollapseUi } from './CollapseUi';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: CollapseUi,
  title: 'shared/CollapseUi',
} as Meta<typeof CollapseUi>;

const Template: StoryFn<typeof CollapseUi> = args => <CollapseUi {...args} />;

export const Collapse = Template.bind({});
Collapse.args = {
  children: 'Text',
  open: false,
};
