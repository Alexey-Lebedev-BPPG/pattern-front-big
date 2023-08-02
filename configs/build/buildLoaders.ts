import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildMjsLoader } from './loaders/buildMjsLoader';
import { buildScssLoaders } from './loaders/buildScssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = buildSvgLoader();
  const fileLoader = buildFileLoader();
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const mjsLoader = buildMjsLoader();
  const cssLoaders = buildCssLoaders(options.isDev);
  const scssLoaders = buildScssLoaders(options.isDev);
  const svgURL = {
    resourceQuery: /url/,
    test: /\.svg$/i,
    type: 'asset',
  };

  return [
    svgURL,
    svgLoader,
    fileLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    mjsLoader,
    scssLoaders,
    cssLoaders,
  ];
};
