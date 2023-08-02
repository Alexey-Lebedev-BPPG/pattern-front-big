import { StoryFn, Meta } from '@storybook/react';
import { ListingStatus } from './ListingStatus';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: ListingStatus,
  title: 'shared/Statuses/ListingStatus',
} as Meta<typeof ListingStatus>;

const Template: StoryFn<typeof ListingStatus> = args => (
  <ListingStatus {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  status: 'Transferred',
};
