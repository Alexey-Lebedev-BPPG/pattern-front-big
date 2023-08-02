import { StoryFn, Meta } from '@storybook/react';
import { PTag } from './Ptags';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: PTag,
  title: 'shared/PTag',
} as Meta<typeof PTag>;

const Template: StoryFn<typeof PTag> = args => <PTag {...args} />;

export const PtagsValue = Template.bind({});
PtagsValue.args = {
  children: 'Text',
  tag: 'value',
};

export const PtagsName = Template.bind({});
PtagsName.args = {
  children: 'Text',
  tag: 'name',
};
