// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = {
  env: {
    mongodb_username: 'dbjowett',
    mongodb_password: '0C5n4gDn2knocz2o',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-blog'
  },
  reactStrictMode: true,
  future: {
    webpack5: true // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false // the solution
    };
    return config;
  }
};
