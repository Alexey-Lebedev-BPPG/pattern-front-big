import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildScssLoaders } from '../build/loaders/buildScssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

const config = {
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
    '@storybook/addon-mdx-gfm',
    'storybook-addon-paddings',
    '@storybook/addon-storyshots',
    '@storybook/addon-storyshots-puppeteer',
  ],
  docs: { autodocs: true },
  framework: {
    name: '@storybook/react-webpack5',
    options: { builder: { lazyCompilation: true }, fastRefresh: true },
  },
  staticDirs: ['../../public'],
  stories: [{ directory: '../../src', files: '**/*.stories.@(js|jsx|ts|tsx)' }],
  webpackFinal: async (inputConfig: Configuration) => {
    const paths: BuildPaths = {
      build: '',
      buildLocales: '',
      entry: '',
      envPath: '',
      html: '',
      locales: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
    inputConfig!.resolve!.modules!.push(paths.src);
    inputConfig!.resolve!.extensions!.push('.ts', '.tsx');
    inputConfig!.resolve!.alias = {
      ...inputConfig!.resolve!.alias,
      '@': paths.src,
    };

    inputConfig!.module!.rules = inputConfig!.module!.rules!.map(
      (rule: RuleSetRule | '...') => {
        if (
          rule !== '...' &&
          rule.test instanceof RegExp &&
          rule.test.toString().includes('svg')
        )
          return { ...rule, exclude: /\.svg$/i };

        return rule;
      },
    );

    inputConfig.module?.rules?.push(buildSvgLoader());

    inputConfig.module?.rules?.push(buildCssLoaders(true));
    inputConfig.module?.rules?.push(buildScssLoaders(true));

    inputConfig!.plugins!.push(
      new DefinePlugin({
        __API__: JSON.stringify('https://testapi.ru'),
        __IS_DEV__: JSON.stringify(true),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
    return inputConfig;
  },
};

export default config;
