export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  icon?: string;
  buildLocales: string;
  envPath: string;
}

export interface BuildEnv {
  mode: BuildMode;
  modeDebug: boolean;
  port: number;
  apiURL: string;
  SENTRY_AUTH_TOKEN?: string;
  SENTRY_ORG?: string;
  SENTRY_RELEASE?: string;
  SENTRY_PROJECT?: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  isDevDebug: boolean;
  port: number;
  apiURL: string;
  project: 'storybook' | 'frontend' | 'jest';
  sentryToken: string;
  sentryRelease: string;
  sentryOrg: string;
  sentryProject: string;
}
