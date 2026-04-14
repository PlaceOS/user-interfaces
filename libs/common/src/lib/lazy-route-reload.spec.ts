import {
    isLazyRouteLoadError,
    LazyRouteReloadContext,
    reloadOnChunkLoadError,
} from './lazy-route-reload';

function createContext(
    state = new Map<string, string>(),
): LazyRouteReloadContext & {
    location: {
        hash: string;
        pathname: string;
        reload: jest.Mock;
        search: string;
    };
} {
    return {
        storage: {
            getItem: jest.fn((key: string) => state.get(key) || null),
            setItem: jest.fn((key: string, value: string) =>
                state.set(key, value),
            ),
        },
        location: {
            hash: '#/book',
            pathname: '/workplace',
            reload: jest.fn(),
            search: '?debug=true',
        },
        now: 1000,
        online: true,
    };
}

describe('lazy route reload', () => {
    beforeEach(() =>
        jest.spyOn(console, 'warn').mockImplementation(() => null),
    );

    afterEach(() => jest.restoreAllMocks());

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
});
