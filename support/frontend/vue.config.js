const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../static/frontend'),
  assetsDir: 'static',
  publicPath: '/static/frontend/',
  indexPath: path.resolve(__dirname, '../templates/frontend/index.html'),
};
