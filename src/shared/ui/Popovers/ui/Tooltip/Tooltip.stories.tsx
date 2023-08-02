import { StoryFn, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { IconButton } from '../../../Buttons';
import { Icon } from '../../../Icon';
import logo from '@/shared/assets/svg/logo.svg';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Tooltip,
  title: 'shared/Popovers/Tooltip',
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = args => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <IconButton>
      <Icon Svg={logo} />
    </IconButton>
  ),
  placement: 'bottom',
  titleText: 'testing',
};
