const config = require('./webpack.config.js');
const path = require('path');

config.resolve.alias['rsg-components/Wrapper'] = 
  path.join(__dirname, 'styleguide/styleguide_wrapper.jsx');

module.exports = {
  webpackConfig: config,
  assetsDir: path.join(__dirname, '/public'),
  title: 'Style Guide',
  components: './client/components/**/*.jsx',
  serverPort: 5000,
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.md');
  }, 
};
