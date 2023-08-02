export const buildFileLoader = () => ({
  test: /\.(png|jpe?g|gif|webp|ico|pdf)$/i,
  use: ['file-loader?name=[name].[ext]'],
});
