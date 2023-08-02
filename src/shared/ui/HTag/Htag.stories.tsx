import { StoryFn, Meta } from '@storybook/react';
import { Htag } from './Htag';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Htag,
  title: 'shared/Htag',
} as Meta<typeof Htag>;

const Template: StoryFn<typeof Htag> = args => <Htag {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
