import { StoryFn, Meta } from '@storybook/react';
import { IncDecButtons } from './IncDecButtons';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: IncDecButtons,
  title: 'shared/Buttons/IncDecButtons',
} as Meta<typeof IncDecButtons>;

const Template: StoryFn<typeof IncDecButtons> = args => (
  <IncDecButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
