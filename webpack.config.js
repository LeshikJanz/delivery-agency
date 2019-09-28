const { resolve } = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./client/index.tsx"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      assets: resolve(__dirname, "client/assets"),
      api: resolve(__dirname, "client/api"),
      actions: resolve(__dirname, "client/actions"),
      constants: resolve(__dirname, "client/constants"),
      components: resolve(__dirname, "client/components"),
      modules: resolve(__dirname, "client/modules"),
      hocs: resolve(__dirname, "client/hocs"),
      reducers: resolve(__dirname, "client/reducers"),
      sagas: resolve(__dirname, "client/sagas"),
      types: resolve(__dirname, "client/types"),
      utils: resolve(__dirname, "client/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Delivery agency",
      template: "client/index.html"
    })
  ]
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()]
  };
} else {
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true
  };
}

module.exports = config;
