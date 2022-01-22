const webpackConfig = require("./webpack.config");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
  },
  ...webpackConfig,
};
