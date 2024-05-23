const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    important: '#placeos',
    mode: 'jit',
    content: [
        './apps/**/*.{html,ts,css,scss,sass,less,styl}',
        './libs/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            primary: 'var(--p)',
            'primary-focus': 'var(--pf)',
            'primary-content': 'var(--pc)',
            secondary: 'var(--s)',
            'secondary-focus': 'var(--sf)',
            'secondary-content': 'var(--sc)',
            ternary: 'var(--t)',
            'ternary-focus': 'var(--tf)',
            'ternary-content': 'var(--tc)',
            accent: 'var(--a)',
            'accent-focus': 'var(--af)',
            'accent-content': 'var(--ac)',
            neutral: 'var(--n)',
            'neutral-focus': 'var(--nf)',
            'neutral-content': 'var(--nc)',
            'base-100': 'var(--b1)',
            'base-200': 'var(--b2)',
            'base-300': 'var(--b3)',
            'base-400': 'var(--b4)',
            'base-content': 'var(--bc)',
            info: 'var(--in)',
            'info-light': 'var(--inl)',
            'info-content': 'var(--inc)',
            success: 'var(--su)',
            'success-light': 'var(--sul)',
            'success-content': 'var(--suc)',
            warning: 'var(--wa)',
            'warning-light': 'var(--wal)',
            'warning-content': 'var(--wac)',
            error: 'var(--er)',
            'error-light': 'var(--erl)',
            'error-content': 'var(--erc)',
            white: '#fff',
            black: '#000',
        },
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
