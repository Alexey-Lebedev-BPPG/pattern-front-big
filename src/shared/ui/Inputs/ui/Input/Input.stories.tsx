import { StoryFn, Meta } from '@storybook/react';
import { Input } from './Input';
import { IconButton } from '../../../Buttons';
import { Icon } from '../../../Icon';
import { Tooltip } from '../../../Popovers';
import logo from '@/shared/assets/svg/logo.svg';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Input,
  title: 'shared/Inputs/Input',
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {
  endIcon: (
    <IconButton aria-label='toggle password visibility'>
      <Icon Svg={logo} />
    </IconButton>
  ),
  placeholder: 'Search Cards by Name',
  type: 'search',
  value: '',
};

export const Number = Template.bind({});
Number.args = {
  isValidate: true,
  max: 10,
  min: 1,
  placeholder: 'Min',
  type: 'number',
  value: '',
};

export const Email = Template.bind({});
Email.args = {
  errorIcon: <Icon Svg={logo} />,
  isValidate: true,
  name: 'email',
  placeholder: 'Name@example.com',
  required: true,
  type: 'email',
};

export const Profile = Template.bind({});
Profile.args = {
  afterIcon: (
    <Tooltip
      titleText='Public information will be available to everyone'
      placement='bottom'
      textWidth='123px'
    >
      <Icon Svg={logo} />
    </Tooltip>
  ),
  placeholder: 'Enter username',
  value: '',
};
