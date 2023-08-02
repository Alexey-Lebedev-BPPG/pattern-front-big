// import { withTests } from '@storybook/addon-jest';
// import results from '../../reports/unit/.jest-test-results.json';
import { FeaturesFlagsDecorator } from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '../../src/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
// import initStoryshots from '@storybook/addon-storyshots';

const parameters: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    paddings: {
      default: 'VeryLarge',
      values: [
        { name: 'VerySmall', value: '16px' },
        { name: 'Small', value: '32px' },
        { name: 'VeryMedium', value: '48px' },
        { name: 'Medium', value: '64px' },
        { name: 'Large', value: '80px' },
        { name: 'VeryLarge', value: '96px' },
      ],
    },
    themes: {
      // default: 'dark',
      list: [
        { class: Theme.LIGHT, color: '#ffffff', name: 'light' },
        { class: Theme.DARK, color: '#000000', name: 'dark' },
      ],
    },
  },
};

export const decorators = [
  // withTests({ results }),
  // initStoryshots(),
  StyleDecorator,
  ThemeDecorator(Theme.DARK),
  RouterDecorator,
  TranslationDecorator,
  SuspenseDecorator,
  // декоратор, который добавляет поддержку фичи-флагов
  FeaturesFlagsDecorator({}),
  NewDesignDecorator,
];

export default parameters;
