const path = require("path");
const sass = require('sass');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve("style-loader"),
            options: {
              injectType: "singletonStyleTag",
              esModule: false,
            },
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true,
              modules: "global",
            },
          },
          require.resolve("resolve-url-loader"),
          {
            loader: require.resolve("sass-loader"),
            options: {
              sourceMap: true,
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devServer: {
    hot: true,
  },
};
