import { StoryFn, Meta } from '@storybook/react';
import { Layout } from './Layout';
import { Icon } from '../Icon';
import logo from '@/shared/assets/svg/logo.svg';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Layout,
  title: 'shared/Layout',
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = args => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <Icon Svg={logo} /> <h2>{'test'}</h2>
      <h2>{'test'}</h2>
    </div>
  ),
};
