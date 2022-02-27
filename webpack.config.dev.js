const webpackConfig = require("./webpack.config");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true, // react-router를 사용하는 경우 새로고침 시 404 에러 해결
  },
  ...webpackConfig,
};
