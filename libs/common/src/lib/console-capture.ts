/** Console methods that the apps capture */
export const CAPTURED_CONSOLE_METHODS = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
] as const;

export type CapturedConsoleMethod = (typeof CAPTURED_CONSOLE_METHODS)[number];

/** Receives the arguments of each call to a captured console method */
export type ConsoleListener = (
    method: CapturedConsoleMethod,
    args: unknown[],
) => void;

const _listeners = new Set<ConsoleListener>();
/** Wrapper that is installed on each console method */
const _wrappers = new Map<CapturedConsoleMethod, Console['log']>();
/**
 * True while a wrapped console call runs. Console calls from a listener, and
 * calls that pass through a second wrapper (for example when Sentry wraps the
 * first wrapper and a later patch wraps Sentry), are not sent again.
 */
let _dispatching = false;

/**
 * Call `listener` for each call to a captured console method. The console
 * methods are patched one time and share the patch between listeners.
 * Returns a function that removes the listener.
 */
export function listenToConsole(listener: ConsoleListener): () => void {
    patchConsole();
    _listeners.add(listener);
    return () => _listeners.delete(listener);
}

/** Install the wrappers. A method that something else replaced is patched again. */
function patchConsole() {
    for (const method of CAPTURED_CONSOLE_METHODS) {
        if (console[method] === _wrappers.get(method)) continue;
        const original = console[method];
        const wrapper = (...args: unknown[]) => {
            if (_dispatching) return original.apply(console, args);
            _dispatching = true;
            try {
                notify(method, args);
                original.apply(console, args);
            } finally {
                _dispatching = false;
            }
        };
        _wrappers.set(method, wrapper);
        console[method] = wrapper;
    }
}

function notify(method: CapturedConsoleMethod, args: unknown[]) {
    for (const listener of _listeners) {
        try {
            listener(method, args);
        } catch {
            // A failed listener must not stop the console call.
        }
    }
}
