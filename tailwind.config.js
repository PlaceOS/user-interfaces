const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
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
    variants: {
        extend: {},
    },
    plugins: [],
};
