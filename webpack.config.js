const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require("dotenv");
dotenv.config();

if (dev) {
    liveServer.start({
        file: "./client/src/index.html"
    })
}
const cssRulesModule =
{
    test: /\.css?$/i,
    use: ["style-loader",
        {
            loader: "css-loader",
            options: {
                modules: true,
            }
        }
    ],
}

const tsxRulesModule =
{
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
}
const loaderImgRulesModule =
{
    test: /\.svg$/,
    use: [
        {
            loader: 'svg-url-loader',
            options: {
                limit: 10000,
            },
        },
    ],
}

const styledComponents = {
    rules: [
        {
          test: /\.tsx?$/,
          loader: 'stylelint-custom-processor-loader',
          exclude: /node_modules/,
        },
      ],
}
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./client/src/index.html",
    filename: "./index.html"
  });
module.exports = {
    mode: "development",
    watch: dev,
    entry: "./client/src/index.tsx",
    plugins:[htmlPlugin],
    module: {
        rules: [
            tsxRulesModule,
            cssRulesModule,
            loaderImgRulesModule,
        ],

    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({/* options: see below */ })],
        extensions: [".tsx", ".ts", ".js"],

    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};