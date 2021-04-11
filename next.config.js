module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  target: "experimental-serverless-trace",
}
