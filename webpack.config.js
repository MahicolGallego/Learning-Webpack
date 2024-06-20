//Llamar los modulos-plugins, sino lo hacemos no funcionan en los plugins: []
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        type: "asset",
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        // use: ["file-loader?name=assets/[name].[ext]"],
      },
      {
        type: "asset",
        test: /\.(woff|ttf)$/i,
        // use: ["file-loader"],
        // include: path.resolve(__dirname, "src/assets/"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
