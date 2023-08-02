import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoaders = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
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
