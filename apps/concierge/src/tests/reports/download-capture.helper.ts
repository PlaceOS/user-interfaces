import { vi } from 'vitest';

/**
 * `downloadFile` (from `@placeos/common`) is a workspace-lib export that the
 * bundling test builder cannot spy on. Instead of asserting on the function,
 * capture the anchor element it creates: the `download` attribute gives the
 * produced filename (and its absence flags the "no download" case), and the
 * `href` (a `data:` URL — see below) carries the exported file contents.
 *
 * `URL.createObjectURL` is temporarily removed so `downloadFile` takes its
 * `data:` URL branch, which keeps the file contents inspectable on the anchor.
 */
export function captureDownloads() {
    const state: { last: HTMLAnchorElement | null } = { last: null };
    const real_create = Document.prototype.createElement;
    const create_spy = vi
        .spyOn(document, 'createElement')
        .mockImplementation(function (this: any, tag: any, opts?: any) {
            const element = real_create.call(document, tag, opts);
            if (String(tag).toLowerCase() === 'a') {
                state.last = element as HTMLAnchorElement;
            }
            return element;
        });

    const url_any = URL as any;
    const had_create = 'createObjectURL' in url_any;
    const prev_create = url_any.createObjectURL;
    url_any.createObjectURL = undefined;

    return {
        /** The most recently created anchor element (i.e. a download), if any */
        get last(): HTMLAnchorElement | null {
            return state.last;
        },
        /** Filename of the most recent download (the anchor `download` attr) */
        get filename(): string | null {
            return state.last?.getAttribute('download') ?? null;
        },
        /** Text contents of the most recent download */
        async text(): Promise<string> {
            const href = state.last?.getAttribute('href') ?? '';
            const comma = href.indexOf(',');
            if (comma < 0) return '';
            return decodeURIComponent(href.slice(comma + 1));
        },
        reset() {
            state.last = null;
        },
        restore() {
            create_spy.mockRestore();
            if (had_create) url_any.createObjectURL = prev_create;
            else delete url_any.createObjectURL;
        },
    };
}
