const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: 'pk_test_51HBib5H3UCpAVYYre8z7a5yGAXKT1n654LSeO55IQVFrug5V4m9JrcrGjokMdRAuLUE1zwyTYVqmceUGTWG7KbxX00X6dJvsuz',
    // API_URL: 'http://localhost:4000/shop/graphql',
    API_URL: 'http://backend-marketplace.ml/graphql',
    MEDIA_URL: 'http://backend-marketplace.ml/media/',
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
