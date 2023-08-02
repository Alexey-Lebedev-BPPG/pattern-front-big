import { StoryFn, Meta } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Autocomplete,
  title: 'shared/Inputs/Autocomplete',
} as Meta<typeof Autocomplete>;

const Template: StoryFn<typeof Autocomplete> = args => (
  <Autocomplete {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ],
  placeholder: 'From',
  value: '',
};
