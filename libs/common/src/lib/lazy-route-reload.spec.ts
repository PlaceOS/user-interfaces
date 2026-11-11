import type { Mock } from 'vitest';

import type { MatSnackBar } from '@angular/material/snack-bar';
import {
    isLazyRouteLoadError,
    LazyRouteReloadContext,
    loadLazyChunk,
    reloadOnChunkLoadError,
} from './lazy-route-reload';
import { setNotifyOutlet } from './notifications';

function createContext(
    state = new Map<string, string>(),
): LazyRouteReloadContext & {
    location: {
        hash: string;
        pathname: string;
        reload: Mock;
        search: string;
    };
} {
    return {
        storage: {
            getItem: vi.fn((key: string) => state.get(key) || null),
            setItem: vi.fn((key: string, value: string) =>
                state.set(key, value),
            ),
        },
        location: {
            hash: '#/book',
            pathname: '/workplace',
            reload: vi.fn(),
            search: '?debug=true',
        },
        now: 1000,
        online: true,
    };
}

describe('lazy route reload', () => {
    beforeEach(() => vi.spyOn(console, 'warn').mockImplementation(() => null));

    afterEach(() => vi.restoreAllMocks());

    it('detects chunk load failures', () => {
        expect(
            isLazyRouteLoadError(
                new Error('ChunkLoadError: Loading chunk 211 failed.'),
            ),
        ).toBe(true);
        expect(
            isLazyRouteLoadError(
                new Error(
                    'Failed to fetch dynamically imported module: https://example.com/chunk.js',
                ),
            ),
        ).toBe(true);
        // Firefox wording, from Sentry issue PLACEOS-DEV-MK
        expect(
            isLazyRouteLoadError(
                new TypeError(
                    'error loading dynamically imported module: https://example.com/chunk.js',
                ),
            ),
        ).toBe(true);
        expect(isLazyRouteLoadError(new Error('Plain router failure'))).toBe(
            false,
        );
    });

    it('reloads once for a matching lazy route error', () => {
        const state = new Map<string, string>();
        const context = createContext(state);

        reloadOnChunkLoadError(
            new Error('ChunkLoadError: Loading chunk 211 failed.'),
            context,
        );

        expect(context.location.reload).toHaveBeenCalledTimes(1);
        expect(state.get('placeos.lazy_route_reload')).toContain(
            '/workplace?debug=true#/book',
        );
    });

    it('does not loop on the same failure within the throttle window', () => {
        const state = new Map<string, string>();
        const error = new Error('ChunkLoadError: Loading chunk 211 failed.');

        reloadOnChunkLoadError(error, createContext(state));

        expect(() =>
            reloadOnChunkLoadError(error, {
                ...createContext(state),
                now: 2000,
            }),
        ).toThrow(error);
    });

    it('skips reload when the browser is offline', () => {
        const context = createContext();
        const error = new Error(
            'Failed to fetch dynamically imported module: https://example.com/chunk.js',
        );

        expect(() =>
            reloadOnChunkLoadError(error, { ...context, online: false }),
        ).toThrow(error);
        expect(context.location.reload).not.toHaveBeenCalled();
    });

    describe('loadLazyChunk', () => {
        const stale_chunk = new TypeError(
            'error loading dynamically imported module: https://example.com/chunk.js',
        );
        let on_action: () => void;
        let open: Mock;

        beforeEach(() => {
            open = vi.fn(() => ({
                onAction: () => ({
                    subscribe: (fn: () => void) => (on_action = fn),
                }),
                dismiss: vi.fn(),
            }));
            setNotifyOutlet({ open } as unknown as MatSnackBar, true);
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('resolves the loaded chunk', async () => {
            const chunk = { Component: class {} };

            await expect(
                loadLazyChunk(() => Promise.resolve(chunk)),
            ).resolves.toBe(chunk);
            expect(open).not.toHaveBeenCalled();
        });

        it('shows a Reload error for a stale chunk instead of throwing', async () => {
            const reload = vi.fn();

            await expect(
                loadLazyChunk(() => Promise.reject(stale_chunk), reload),
            ).resolves.toBeUndefined();

            expect(open).toHaveBeenCalledWith(
                'COMMON.CHUNK_LOAD_ERROR',
                'COMMON.RELOAD',
                expect.objectContaining({ panelClass: ['error'], duration: 0 }),
            );
            expect(reload).not.toHaveBeenCalled();
            on_action();
            expect(reload).toHaveBeenCalledOnce();
        });

        it('throws errors that are not chunk load failures', async () => {
            const error = new Error('Plain failure');

            await expect(
                loadLazyChunk(() => Promise.reject(error)),
            ).rejects.toBe(error);
            expect(open).not.toHaveBeenCalled();
        });
    });
});
