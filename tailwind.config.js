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
    },
    theme: {
        extend: {
            colors: {
                primary: '#C92366',
                secondary: '#0A0D2E',
                error: '#e53935',
                pending: '#ffb300',
                success: '#43a047',
            },
        },
    },
});
