const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    assetModuleFilename: "static/[hash][ext][query]",
    publicPath: "/",
  },
  module: {
    rules: [
      // JavaScript 외의 파일을 번들링하기 위해 loader 사용.
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // ES5 이하 버전의 JavaScript로 트랜스파일함.
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webm|mp4|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(), // 빌드했을 시에 이전 빌드내용을 삭제함.
    new HTMLWebpackPlugin({ template: "./public/index.html" }), // 번들링된 파일을 사용하는 html 파일로 만들어줌.
    new ForkTsCheckerWebpackPlugin(), // TypeScript를 빌드할 때의 성능을 향상시킴.
  ],
};
