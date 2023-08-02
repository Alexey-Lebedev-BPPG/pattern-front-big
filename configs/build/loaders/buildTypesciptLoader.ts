export const buildTypescriptLoader = () => ({
  exclude: /node_modules/,
  test: /\.tsx?$/,
  use: 'ts-loader',
});
