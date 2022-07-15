const path = require('path');

module.exports = {
  webpack: function (config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@': path.resolve('src'),
        },
      },
    };
  },
};
