import nx from '@nx/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
import baseConfig, {
    angularPresetRuleOverrides,
    angularSelectorRules,
    basePresetRuleOverrides,
    specFileRuleOverrides,
} from '../../eslint.config.mjs';

export default [
    ...baseConfig,
    playwright.configs['flat/recommended'],
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
    specFileRuleOverrides,
    {
        files: ['**/*.{ts,js,tsx,jsx}'],
        // Keep the pre-migration Playwright rule set.
        rules: {
            'playwright/missing-playwright-await': 'off',
            'playwright/no-networkidle': 'off',
            'playwright/no-standalone-expect': 'off',
        },
    },
];
