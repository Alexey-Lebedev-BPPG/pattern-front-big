import { StoryFn, Meta } from '@storybook/react';
import { StatusShipments } from './StatusShipments';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: StatusShipments,
  title: 'shared/Statuses/StatusShipments',
} as Meta<typeof StatusShipments>;

const Template: StoryFn<typeof StatusShipments> = args => (
  <StatusShipments {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  status: 'Delivered',
};
