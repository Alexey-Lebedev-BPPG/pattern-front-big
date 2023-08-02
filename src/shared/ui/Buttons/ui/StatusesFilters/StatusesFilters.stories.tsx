import { StoryFn, Meta } from '@storybook/react';
import { StatusesFilters } from './StatusesFilters';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: StatusesFilters,
  title: 'shared/Buttons/StatusesFilters',
} as Meta<typeof StatusesFilters>;

const Template: StoryFn<typeof StatusesFilters> = args => (
  <StatusesFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  statuses: ['buy', 'now', 'enter'],
};
