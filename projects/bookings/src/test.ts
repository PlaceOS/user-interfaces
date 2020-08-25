import 'jest-preset-angular';
import '@angular/localize/init';

// Error.stackTraceLimit = 2;

window.HTMLElement.prototype.scrollIntoView = () => {};
window.HTMLElement.prototype.scrollTo = (_: any) => {};

const makeStore = () => {
    let store = {};

    return {
        length: 0,
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
            this.length = Object.keys(store).length;
        },
        removeItem: (key) => {
            delete store[key];
            this.length = Object.keys(store).length;
        },
        clear: () => {
            store = {};
        },
        key: (index) => Object.keys(store)[index],
    };
};

Object.defineProperty(window, 'localStorage', {
    value: makeStore(),
});

Object.defineProperty(window, 'sessionStorage', {
    value: makeStore(),
});
