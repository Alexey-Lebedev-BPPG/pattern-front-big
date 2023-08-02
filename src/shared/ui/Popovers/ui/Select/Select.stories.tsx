import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Select,
  title: 'shared/Popovers/Select',
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { content: 'Первый пункт', value: 'Первый пункт' },
    { content: 'Второй пункт', value: 'Второй пункт' },
    { content: 'Третий пункт', disabled: true, value: 'Третий пункт' },
  ],
  label: 'Укажите значение',
  value: 'Второй пункт',
};
