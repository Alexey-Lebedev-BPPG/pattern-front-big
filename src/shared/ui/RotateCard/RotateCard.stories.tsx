import { StoryFn, Meta } from '@storybook/react';
import { RotateCard } from './RotateCard';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: RotateCard,
  title: 'shared/RotateCard',
} as Meta<typeof RotateCard>;

const Template: StoryFn<typeof RotateCard> = args => <RotateCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  alt: 'test',
  backImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyEzoiP-bn3Q4mEFLtL-BAZ82SPVTjccTbA&usqp=CAU',
  frontImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziqU76gcK2HMnjxC7QPCZRZI6uVl05zvB6A&usqp=CAU',
  status: 'Transferred',
};
