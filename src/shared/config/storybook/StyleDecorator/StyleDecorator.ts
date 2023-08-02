import { StoryFn } from '@storybook/react';
// eslint-disable-next-line path-checher-ulbi-example/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => StoryFn) => story();
