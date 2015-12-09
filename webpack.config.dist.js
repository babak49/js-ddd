const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

config.entry = path.resolve(__dirname, 'src/ddd.js');
config.output = {
  path: path.resolve(__dirname),
  filename: 'index.js'
};

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
    },
    mangle: {
      except: ['dd', 'ddd']
    }
  })
);

module.exports = config;