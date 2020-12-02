'use strict';

const merge = require('webpack-merge');

module.exports = (config) => {
    const purge = config.mode === 'production' || config.mode === 'staging';
    const tailwindConfig = require('./tailwind.config.js')(purge);

    return merge(config, {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            syntax: 'postcss-scss',
                            plugins: [
                                require('postcss-import'),
                                require('postcss-custom-properties'),
                                require('tailwindcss')(tailwindConfig),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
            ],
        },
    });
};
