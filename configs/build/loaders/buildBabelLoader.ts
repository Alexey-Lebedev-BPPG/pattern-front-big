import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isDev: boolean;
  isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => {
  const isProd = !isDev;

  return {
    exclude: /node_modules/,
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheCompression: false,
        cacheDirectory: true,
        compact: !isDev,
        plugins: [
          [
            'i18next-extract',
            { keyAsDefaultValue: true, locales: ['ru', 'en'] },
          ],
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
        presets: ['@babel/preset-env'],
      },
    },
  };
};
