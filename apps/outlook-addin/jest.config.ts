/* eslint-disable */
export default {
    displayName: 'outlook-addin',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
        },
    },
    coverageDirectory: '../../coverage/apps/outlook-addin',
    transform: {
        '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: [
        'node_modules/(?!.*\\.mjs$)' || '/node_modules' || '**/node_modules',
    ],

    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
};
