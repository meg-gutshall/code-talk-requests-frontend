const commonConfig = require('./webpack.common.js');
const productionConfig = require('./webpack.prod.js');
const developmentConfig = require('./webpack.dev.js');

module.exports = env => {
  const sharedConfig = Object.assign({}, commonConfig);
  switch(env) {
    case 'dev':
      return Object.assign(sharedConfig, developmentConfig);
    case 'prod':;
      return Object.assign(sharedConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}