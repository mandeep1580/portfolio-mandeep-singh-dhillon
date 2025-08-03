const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or "production"
  entry: './src/index.js', // your app entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
//   resolve: {
//     extensions: ['.js', '.jsx'], // if you use JSX
//     fallback: {
//       fs: false, // if you want to exclude fs module
//       path: require.resolve('path-browserify'),
//       os: require.resolve('os-browserify/browser'),
//     },
   resolve: {
    extensions: ['.js', '.jsx'], // if you use JSX
    fallback: {
      os: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // add loaders for CSS, images, etc., as needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // your HTML template path
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3000,
  },
};
