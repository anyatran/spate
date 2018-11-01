const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dest')
const SRC_DIR = path.resolve(__dirname, 'src')

const plugins = [
  new CleanWebpackPlugin([BUILD_DIR]),
  new CopyWebpackPlugin([{from: `${SRC_DIR}/assets/`, to: `${BUILD_DIR}/assets/`}]),
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: './index.html'
  }),
  new ExtractTextPlugin('style.css')
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true
  }))
}

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: BUILD_DIR
  },
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
  },
  entry: ['./src/js/main.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  plugins: plugins
}
