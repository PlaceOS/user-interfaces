'use strict';

const { merge } = require('webpack-merge');

module.exports = (config) => {
    const tailwindConfig = require('./tailwind.config.js');

    return merge(config, {
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            syntax: 'postcss-scss',
                            plugins: [
                                require('postcss-import'),
                                require('@tailwindcss/jit')(tailwindConfig),
                                require('postcss-nested'),
                                require('postcss-custom-properties'),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
            ],
        },
    });
};
