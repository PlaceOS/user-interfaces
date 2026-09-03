import nx from '@nx/eslint-plugin';
import baseConfig, {
    angularPresetRuleOverrides,
    basePresetRuleOverrides,
} from '../../eslint.config.mjs';

export default [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'placeos',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'placeos',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/prefer-standalone': 'off',
        },
    },
    ...nx.configs['flat/angular-template'],
    basePresetRuleOverrides,
    ...angularPresetRuleOverrides,
];
