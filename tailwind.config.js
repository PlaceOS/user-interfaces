const colors = require('tailwindcss/colors');

module.exports = (isProd) => ({
    prefix: '',
    important: '#placeos',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: isProd,
        content: ['**/*.html', '**/*.ts'],
        options: {
            whitelistPatterns: [/^cdk-|mat-/],
        },
    },
    theme: {
        colors: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            primary: '#C92366',
            secondary: '#0A0D2E',
            ternary: '#0A0D2E',
            quaternary: '#0A0D2E',
            error: '#e53935',
            pending: '#ffb300',
            success: '#43a047',
        },
    },
});
