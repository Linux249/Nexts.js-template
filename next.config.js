const withSass = require('@zeit/next-sass');

const config = {
    pageExtensions: ['js', 'jsx'],
};

module.exports = withSass(config);
