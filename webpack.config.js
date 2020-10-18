'use strict';

const helpers = require('./helpers');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        syntax: 'postcss-scss',
                        plugins: [
                            require('tailwindcss')(
                                helpers.root('tailwind.config.js')
                            ), // We use the helper to ensure that the path is always relative to the workspace root
                            require('autoprefixer'),
                        ],
                    }
                },
            },
        ],
    },
};
