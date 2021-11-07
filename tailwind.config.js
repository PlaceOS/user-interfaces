const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    important: '#placeos',
    mode: 'jit',
    purge: {
        content: [
            './apps/**/*.{html,ts,css,scss,sass,less,styl}',
            './libs/**/*.{html,ts,css,scss,sass,less,styl}',
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-fore': '#fff',
                secondary: 'var(--secondary)',
                'secondary-fore': '#fff',
                ternary: 'var(--ternary)',
                'ternary-fore': '#fff',
                quaternary: 'var(--quaternary)',
                error: 'var(--error)',
                pending: 'var(--pending)',
                success: 'var(--success)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
