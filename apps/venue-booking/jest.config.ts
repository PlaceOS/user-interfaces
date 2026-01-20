export default {
    displayName: 'venue-booking',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    coverageDirectory: '../../coverage/apps/venue-booking',
    transform: {
        '^.+\\.(ts|mjs|js|html)$': [
            'jest-preset-angular',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                stringifyContentPathRegex: '\\.(html|svg)$',
            },
        ],
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|suneditor)'],
    moduleNameMapper: {
        '^suneditor$':
            '<rootDir>/../../node_modules/suneditor/dist/suneditor.min.js',
        '^suneditor/src/plugins$':
            '<rootDir>/../../node_modules/suneditor/src/plugins/index.js',
    },
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
};
