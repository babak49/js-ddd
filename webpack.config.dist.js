const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

config.devtool = '';
config.entry = {
  ddd: path.resolve(__dirname, 'src/ddd.js')
};
config.output = {
  filename: 'index.js',
  library: 'ddd',
  libraryTarget: 'umd'
};
config.plugins = [];
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin()
);
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}));
 config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
 );

module.exports = config;