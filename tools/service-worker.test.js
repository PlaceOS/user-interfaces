const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

// shared/service-worker.js keeps media requests out of ngsw-worker.js, so
// Firefox does not block range responses for cross-origin video. Its fetch
// listener must be added before ngsw-worker's and stop the event for media.

const SCRIPT = readFileSync(
    path.resolve(__dirname, '..', 'shared', 'service-worker.js'),
    'utf8',
);

/** Runs the script in a stub worker scope with a stand-in ngsw listener */
function loadWorker() {
    const listeners = [];
    const handled = [];
    const scope = {
        addEventListener: (type, listener) => listeners.push({ type, listener }),
        importScripts: (url) => {
            assert.equal(url, './ngsw-worker.js');
            scope.addEventListener('fetch', (event) => handled.push(event));
        },
    };
    scope.self = scope;
    vm.runInNewContext(SCRIPT, scope);

    /** Dispatches like EventTarget, honouring stopImmediatePropagation */
    const dispatch = (destination) => {
        let stopped = false;
        const event = {
            request: { destination },
            stopImmediatePropagation: () => (stopped = true),
        };
        for (const { type, listener } of listeners) {
            if (type !== 'fetch') continue;
            listener(event);
            if (stopped) break;
        }
        return handled.includes(event);
    };
    return { dispatch };
}

test('media requests skip ngsw-worker', () => {
    const { dispatch } = loadWorker();
    for (const destination of ['video', 'audio', 'track']) {
        assert.equal(dispatch(destination), false, destination);
    }
});

test('other requests reach ngsw-worker', () => {
    const { dispatch } = loadWorker();
    for (const destination of ['', 'document', 'image', 'script', 'style']) {
        assert.equal(dispatch(destination), true, destination || 'fetch');
    }
});
