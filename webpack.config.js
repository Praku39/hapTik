module.exports = {
  entry: './src/index.js',
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  paths: {
    '@': ['src/'],
    '@/*': ['src/*'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
