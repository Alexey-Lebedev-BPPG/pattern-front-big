import { StoryFn, Meta } from '@storybook/react';
import { TinyRadio } from './TinyRadio';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: TinyRadio,
  title: 'shared/Buttons/TinyRadio',
} as Meta<typeof TinyRadio>;

const Template: StoryFn<typeof TinyRadio> = args => <TinyRadio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Active',
};
