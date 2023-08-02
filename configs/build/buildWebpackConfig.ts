import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (
  options: BuildOptions,
): webpack.Configuration => {
  const { paths, mode, isDev, isDevDebug } = options;

  return {
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    entry: paths.entry,
    experiments: { topLevelAwait: true },
    ignoreWarnings: [/Failed to parse source map/],
    mode,
    module: { rules: buildLoaders(options) },
    optimization: {
      mergeDuplicateChunks: true,
      minimize: !isDev,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin({ exclude: /\/excludes/, parallel: 4 }),
      ],
      removeAvailableModules: true,
      sideEffects: true,
    },
    output: {
      assetModuleFilename: 'assets/[name].[hash][ext]',
      clean: true,
      filename: 'js/[name].[contenthash].js',
      globalObject: 'this',
      library: 'engine',
      libraryTarget: 'umd',
      path: paths.build,
      publicPath: '/',
      umdNamedDefine: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    stats: {
      assets: Boolean(isDevDebug),
      entrypoints: Boolean(isDevDebug),
      modules: Boolean(isDevDebug),
    },
  };
};
