import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => ({
  allowedHosts: options.isDev ? 'all' : undefined,
  client: {
    logging: options.isDevDebug ? 'log' : 'none',
    overlay: {
      errors: Boolean(options.isDevDebug),
      warnings: Boolean(options.isDevDebug),
    },
    progress: Boolean(options.isDevDebug),
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  port: options.port,
});
