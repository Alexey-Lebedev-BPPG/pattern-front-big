import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
  alias: { '@': options.paths.src },
  extensions: ['.tsx', '.ts', '.js'],
  fallback: {
    assert: false,
    crypto: false,
    'crypto-browserify': false,
    fs: false,
    http: false,
    https: false,
    net: false,
    os: false,
    path: false,
    stream: false,
    tls: false,
    url: false,
    zlib: false,
  },
  mainFiles: ['index'],
  modules: [options.paths.src, 'node_modules'],
  preferAbsolute: true,
});
