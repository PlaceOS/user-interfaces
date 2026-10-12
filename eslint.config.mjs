import tsParser from '@typescript-eslint/parser';
import angular from 'angular-eslint';

// ESLint checks Angular templates only. Oxlint has no template parser, so
// `.oxlintrc.json` has all the other rules.
export default [
    {
        // No TypeScript rules run here. ESLint parses each file only to
        // extract the inline templates.
        files: ['**/*.ts'],
        languageOptions: { parser: tsParser },
        processor: angular.processInlineTemplates,
    },
    {
        files: ['**/*.html'],
        languageOptions: { parser: angular.templateParser },
        plugins: { '@angular-eslint/template': angular.templatePlugin },
        rules: {
            '@angular-eslint/template/banana-in-box': 'error',
            '@angular-eslint/template/mouse-events-have-key-events': 'error',
            '@angular-eslint/template/no-autofocus': 'error',
            '@angular-eslint/template/no-distracting-elements': 'error',
            '@angular-eslint/template/role-has-required-aria': 'error',
            '@angular-eslint/template/table-scope': 'error',
            '@angular-eslint/template/valid-aria': 'error',
        },
    },
];
