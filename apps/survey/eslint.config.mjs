import nx from '@nx/eslint-plugin';
import baseConfig, {
    angularPresetRuleOverrides,
    angularSelectorRules,
    basePresetRuleOverrides,
    specFileRuleOverrides,
} from '../../eslint.config.mjs';

export default [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    angularSelectorRules,
    ...nx.configs['flat/angular-template'],
    basePresetRuleOverrides,
    ...angularPresetRuleOverrides,
    specFileRuleOverrides,
];
