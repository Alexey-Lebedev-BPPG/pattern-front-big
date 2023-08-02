import { StoryFn, Meta } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: TextArea,
  title: 'shared/Inputs/TextArea',
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = args => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Message',
  placeholder: 'Message',
  sizeRows: 9,
  value: '',
};
