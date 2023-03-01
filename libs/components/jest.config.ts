/* eslint-disable */
export default {
    displayName: 'components',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {},
    coverageDirectory: '../../coverage/libs/components',
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
    transform: {
        '^.+.(ts|mjs|js|html)$': [
            'jest-preset-angular',
            {
                stringifyContentPathRegex: '\\.(html|svg)$',

                tsconfig: '<rootDir>/tsconfig.spec.json',
            },
        ],
    },
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
};
