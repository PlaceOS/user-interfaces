import nx from '@nx/eslint-plugin';

// ESLint 9 and the updated presets enable these rules by default. Keep the
// workspace's pre-migration rule set until each rule is adopted deliberately.
export const basePresetRuleOverrides = {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-wrapper-object-types': 'off',
        'no-case-declarations': 'off',
        'no-cond-assign': 'off',
        'no-constant-condition': 'off',
        'no-control-regex': 'off',
        'no-empty': 'off',
        'no-fallthrough': 'off',
        'no-misleading-character-class': 'off',
        'no-prototype-builtins': 'off',
        'no-self-assign': 'off',
        'no-sparse-arrays': 'off',
        'no-unsafe-optional-chaining': 'off',
        'no-unsafe-finally': 'off',
        'no-useless-catch': 'off',
        'no-useless-escape': 'off',
        'no-var': 'off',
        'prefer-const': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
    },
};

export const angularPresetRuleOverrides = [
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/no-empty-lifecycle-method': 'off',
            '@angular-eslint/no-input-rename': 'off',
            '@angular-eslint/no-output-native': 'off',
            '@angular-eslint/no-output-on-prefix': 'off',
            '@angular-eslint/no-output-rename': 'off',
            '@angular-eslint/prefer-on-push-component-change-detection': 'off',
            '@angular-eslint/use-pipe-transform-interface': 'off',
        },
    },
    {
        files: ['**/*.html'],
        rules: {
            '@angular-eslint/template/alt-text': 'off',
            '@angular-eslint/template/click-events-have-key-events': 'off',
            '@angular-eslint/template/elements-content': 'off',
            '@angular-eslint/template/eqeqeq': 'off',
            '@angular-eslint/template/interactive-supports-focus': 'off',
            '@angular-eslint/template/label-has-associated-control': 'off',
            '@angular-eslint/template/no-negated-async': 'off',
            '@angular-eslint/template/prefer-control-flow': 'off',
        },
    },
];

export default [
    ...nx.configs['flat/base'],
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    ...nx.configs['flat/typescript'],
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'no-extra-semi': 'off',
        },
    },
    ...nx.configs['flat/javascript'],
    {
        files: ['**/*.js', '**/*.jsx'],
        rules: {
            'no-extra-semi': 'off',
        },
    },
    basePresetRuleOverrides,
];
