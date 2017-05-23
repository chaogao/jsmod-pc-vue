var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'jsmod-mobile': './src/index.js'
  },

  module: {
    rules: (utils.styleLoaders({ sourceMap: config.npm.cssSourceMap })).concat([
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            sourceMap: config.npm.cssSourceMap
          })
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ])
  },

  output: {
    path: config.npm.assetsRoot,
    library: 'jsmod-mobile',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.npm.env
    })
  ],

  devtool: '#source-map',

  resolve: {
    extensions: ['.js', '.vue', '.json'],

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'website': resolve('website')
    }
  },

  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
};
