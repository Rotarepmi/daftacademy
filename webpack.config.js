var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var buildDir = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: buildDir
  },
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: buildDir
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: "style-loader", options: { sourceMap: false } },
          { loader: "css-loader", options: { sourceMap: false } },
          { loader: "postcss-loader", options: { sourceMap: false } },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}