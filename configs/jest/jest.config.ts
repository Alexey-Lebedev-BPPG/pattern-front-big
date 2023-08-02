import path from 'path';

require('dotenv').config();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const isDevDebug = process.env.DEBUG ? JSON.parse(process.env.DEBUG) : false;

  return {
    clearMocks: true,
    coveragePathIgnorePatterns: ['/node_modules/'],
    globals: {
      __API__: 'https://test.com',
      __IS_DEV__: true,
      __IS_DEV_DEBUG__: isDevDebug,
      __PROJECT__: 'jest',
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.s?css$': 'identity-obj-proxy',
      '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: ['node_modules', '../../reports/unit'],
    modulePaths: ['<rootDir>src'],
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          filename: 'report.html',
          inlineSource: true,
          openReport: isDevDebug,
          publicPath: '<rootDir>/reports/unit',
        },
      ],
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>configs/jest/setupTests.ts'],
    snapshotResolver: '<rootDir>/configs/jest/snapshotResolve.ts',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  };
};
