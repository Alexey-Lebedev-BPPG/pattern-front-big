import { Meta, StoryFn } from '@storybook/react';
import { Overlay } from './Overlay';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Overlay,
  title: 'shared/Overlay',
} as Meta<typeof Overlay>;

const Template: StoryFn<typeof Overlay> = arg => <Overlay {...arg} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
