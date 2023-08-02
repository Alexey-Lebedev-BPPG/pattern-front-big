export const buildSvgLoader = () => ({
  exclude: /node_modules/,
  issuer: /\.[jt]sx?$/,
  resourceQuery: { not: [/url/] },
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [{ name: 'convertColors', params: { currentColor: true } }],
        },
      },
    },
  ],
});
