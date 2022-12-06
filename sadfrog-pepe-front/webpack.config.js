const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 4000;
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, 'src', 'main.jsx') },
  output: {
    filename: 'bunndle.[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.jsx', '.tsx', '.js', '.ts', '.wasm'],
  },
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
