const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Compiles images
        use: [ {
          loader: 'file-loader',
          options: {
            minimize: true,
            name: 'assets/img/[name].[ext]'
          },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Compiles fonts
        use: [{
          loader: 'file-loader',
          options: {
            minimize: true,
          },
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // Extract css in separate file
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
};