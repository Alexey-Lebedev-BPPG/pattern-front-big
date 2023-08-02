import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Buttons';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Dropdown,
  title: 'shared/Popovers/Dropdown',
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = arg => <Dropdown {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
  trigger: <Button>{'Open'}</Button>,
};

export const Dark = Template.bind({});
Dark.args = {
  items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
  trigger: <Button>{'Open'}</Button>,
};
