var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : __dirname + '/Tests/index'
  },
  output: {
    path: __dirname + '/Tests/dist',
    filename: '[name].[hash].bundle.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    }),
    new HtmlWebpackPlugin({
      title: 'Test app',
      chunks: ['index'],
      template:'index.test.template.html',
      inject: 'body',
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          },
        ],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader' },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};
