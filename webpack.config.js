const env = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
// set to 'production' or 'development' in your env

module.exports = {
  mode: env,
  entry: ['./src'], // this is where our app lives
  devtool: 'source-map', // this enables debugging with source in chrome devtools
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ //this is the part you want to add
            { loader: 'babel-loader'}
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        favicon: './src/favicon.png',
      }),
  ],
};