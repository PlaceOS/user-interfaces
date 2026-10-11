import nx from '@nx/eslint-plugin';
import baseConfig, {
    angularPresetRuleOverrides,
    angularSelectorRules,
    basePresetRuleOverrides,
} from '../../eslint.config.mjs';

export default [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    angularSelectorRules,
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/prefer-standalone': 'off',
        },
    },
    ...nx.configs['flat/angular-template'],
    basePresetRuleOverrides,
    ...angularPresetRuleOverrides,
];
