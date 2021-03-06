const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root: __dirname})
    )
  }

  return {

    entry: {
      "home": path.resolve(__dirname, 'src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ssr/[name].js', //ServerSideRendering
      publicPath: "/",
      chunkFilename: 'js/[id].[chunkhash].js',
      libraryTarget: 'commonjs2',
    },
    devServer: {
      port: 9000,
    },
    target: 'node',
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                }
              }
            ]
          })
        },
      ]
    },
    plugins
  }
}
