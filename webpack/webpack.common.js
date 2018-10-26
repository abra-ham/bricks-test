const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    app: path.resolve(__dirname, '../src/js/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,    
              modules: true,
              localIdentName: '[sha1:hash:hex:4]'
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: 'expanded',
              data: '@import "variables";',
              includePaths: [
                path.resolve(__dirname, '../src/sass'),
              ],
            },
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
          },
        },
      }      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
    })
  ],
};
