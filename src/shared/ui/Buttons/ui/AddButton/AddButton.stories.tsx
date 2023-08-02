import { StoryFn, Meta } from '@storybook/react';
import { AddButton } from './AddButton';
import { Icon } from '../../../Icon';
import logo from '@/shared/assets/svg/logo.svg';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: AddButton,
  title: 'shared/Buttons/AddButton',
} as Meta<typeof AddButton>;

const Template: StoryFn<typeof AddButton> = args => <AddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: <Icon Svg={logo} />,
};
