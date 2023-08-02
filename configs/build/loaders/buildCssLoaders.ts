import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
  test: /\.css$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        import: true,
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
