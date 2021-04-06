

module.exports = {
    mode: 'jit',
    important: '#placeos',
    darkMode: 'class',
    purge: ['**/*.html', '**/*.ts'],
    theme: {
        extend: {
            colors: {
                primary: '#C92366',
                secondary: '#0A0D2E',
                ternary: '#0A0D2E',
                quaternary: '#0A0D2E',
                error: '#e53935',
                pending: '#ffb300',
                success: '#43a047',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
    corePlugins: {
        preflight: false
    }
};
