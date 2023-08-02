import { StoryFn, Meta } from '@storybook/react';
import { CardUi } from './CardUi';
import img from './sealedBox.png';
import { AppImage } from '../AppImage';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: CardUi,
  title: 'shared/CardUi',
} as Meta<typeof CardUi>;

const Template: StoryFn<typeof CardUi> = args => <CardUi {...args} />;

export const CardValue = Template.bind({});
CardValue.args = {
  children: (
    <div style={{ width: '18rem' }}>
      <AppImage src={img} />
    </div>
  ),
};
