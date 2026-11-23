import { scrubSecrets } from './sentry';

/** Most characters in the text of a log entry */
export const MAX_LOG_MESSAGE = 2000;
/** Most console arguments in one entry */
const MAX_ARGS = 20;
/** Most levels of nested objects in an entry */
const MAX_DEPTH = 4;
/** Console format directives. See https://console.spec.whatwg.org/#formatter */
const FORMAT_DIRECTIVE = /%[sdifoOc%]/g;
/** ANSI colour and style codes, such as `\x1b[31m` */
const ANSI_CODE = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;

/**
 * Plain text of the arguments of a console call. Applies the format
 * directives of the first argument, as the console does. Removes `%c` styles
 * and ANSI colour codes, and removes credentials. The text has
 * `MAX_LOG_MESSAGE` characters maximum.
 */
export function formatLogArgs(all_args: readonly unknown[]): string {
    try {
        const args = all_args.slice(0, MAX_ARGS);
        const parts: string[] = [];
        let next = 0;
        if (typeof args[0] === 'string') {
            next = 1;
            parts.push(
                args[0]
                    .slice(0, MAX_LOG_MESSAGE)
                    .replace(FORMAT_DIRECTIVE, (directive) => {
                        if (directive === '%%') return '%';
                        // The console prints a directive without an argument as text
                        if (next >= args.length) return directive;
                        const arg = args[next++];
                        if (directive === '%c') return '';
                        if (directive === '%d' || directive === '%i') {
                            return numberText(arg, (_) => parseInt(_, 10));
                        }
                        if (directive === '%f') {
                            return numberText(arg, parseFloat);
                        }
                        return argText(arg);
                    }),
            );
        }
        for (let i = next; i < args.length; i++) parts.push(argText(args[i]));
        return ownCopy(
            limitText(scrubSecrets(parts.join(' ').replace(ANSI_CODE, ''))),
        );
    } catch {
        return '[Log entry that cannot be read]';
    }
}

/** Number text of `%d`, `%i` and `%f`. Symbols give `NaN`, as in the console */
function numberText(value: unknown, parse: (text: string) => number) {
    return typeof value === 'symbol' ? 'NaN' : `${parse(String(value))}`;
}

/**
 * Copy of the text that does not share memory with a larger string. V8 can
 * make a slice of a string point into the original string, so a 2,000
 * character entry from a 1 MB log message would keep all of the 1 MB. The
 * slice copies the joined text to a new string first, and then points only
 * into that copy.
 */
function ownCopy(text: string) {
    return (' ' + text).slice(1);
}

function limitText(text: string) {
    return text.length > MAX_LOG_MESSAGE
        ? `${text.slice(0, MAX_LOG_MESSAGE - 1)}…`
        : text;
}

/** Text of one console argument. Strings stay as they are, objects become JSON */
function argText(value: unknown): string {
    if (typeof value === 'string') return value.slice(0, MAX_LOG_MESSAGE);
    if (value instanceof Error) return errorText(value);
    if (value && typeof value === 'object') return boundedJson(value);
    if (typeof value === 'function')
        return `[Function ${value.name || 'anonymous'}]`;
    return String(value);
}

/** Name, message and stack of an error. V8 stacks start with the name and message */
function errorText(error: Error) {
    const head = `${error.name}: ${error.message}`;
    const stack = typeof error.stack === 'string' ? error.stack : '';
    if (!stack) return head;
    return stack.startsWith(head) ? stack : `${head}\n${stack}`;
}

/**
 * JSON-like text of a value. Writing stops at `MAX_LOG_MESSAGE`
 * characters, so large objects cost little. Nested objects stop at
 * `MAX_DEPTH` levels, and circular references show as `[Circular]`.
 */
function boundedJson(root: object): string {
    let out = '';
    const parents = new Set<object>();
    /** Add text. Returns false when the text is full */
    const write = (text: string) => {
        out += text;
        return out.length < MAX_LOG_MESSAGE;
    };
    const visit = (value: unknown, depth: number): boolean => {
        if (typeof value === 'string') {
            // Remove ANSI codes before JSON encoding changes their escape character
            return write(
                JSON.stringify(
                    value.slice(0, MAX_LOG_MESSAGE).replace(ANSI_CODE, ''),
                ),
            );
        }
        if (!value || typeof value !== 'object') {
            return write(
                typeof value === 'function' ? '[Function]' : String(value),
            );
        }
        if (value instanceof Error)
            return write(JSON.stringify(errorText(value)));
        if (value instanceof Date) {
            return write(
                isNaN(value.getTime()) ? 'Invalid Date' : value.toISOString(),
            );
        }
        if (parents.has(value)) return write('[Circular]');
        const list = Array.isArray(value) ? (value as unknown[]) : null;
        if (depth >= MAX_DEPTH) return write(list ? '[Array]' : '[Object]');
        parents.add(value);
        const keys = list ? [] : Object.keys(value);
        const count = list ? list.length : keys.length;
        let open = write(list ? '[' : '{');
        // Each step writes text, so the loop stops when the text is full
        for (let i = 0; open && i < count; i++) {
            if (i > 0 && !write(',')) open = false;
            else if (!list && !write(`${JSON.stringify(keys[i])}:`))
                open = false;
            else {
                let item: unknown;
                try {
                    item = list
                        ? list[i]
                        : (value as Record<string, unknown>)[keys[i]];
                } catch {
                    item = '[Unreadable]';
                }
                open = visit(item, depth + 1);
            }
        }
        parents.delete(value);
        return open && write(list ? ']' : '}');
    };
    visit(root, 0);
    return out.slice(0, MAX_LOG_MESSAGE);
}
