const nx = require('@nx/eslint-plugin');

module.exports = [
    ...nx.configs['flat/angular'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: ['app', 'placeos', 'mapStudio'],
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: ['app', 'placeos', 'map-studio'],
                    style: 'kebab-case',
                },
            ],
        },
    },
    ...nx.configs['flat/angular-template'],
];
