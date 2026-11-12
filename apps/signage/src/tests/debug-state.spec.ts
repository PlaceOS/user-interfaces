import { isDebugEnabled, isDebugMode } from '../app/debug-state';

describe('debug state', () => {
    const set_hash = (hash: string) =>
        Object.defineProperty(globalThis, 'location', {
            configurable: true,
            value: { hash, search: '' },
        });

    beforeEach(() => {
        sessionStorage.clear();
        set_hash('#/signage/display-1');
    });

    it('should be off by default', () => {
        expect(isDebugMode()).toBe(false);
    });

    it('should treat a debug parameter as on unless explicitly false', () => {
        expect(isDebugEnabled('')).toBe(true);
        expect(isDebugEnabled('true')).toBe(true);
        expect(isDebugEnabled('false')).toBe(false);
        expect(isDebugEnabled(null)).toBe(false);
    });

    it('should read the debug parameter from the routed url', () => {
        set_hash('#/signage/display-1?debug=true');
        expect(isDebugMode()).toBe(true);

        set_hash('#/signage/display-1?debug=false');
        expect(isDebugMode()).toBe(false);
    });

    it('should let the url override the remembered session value', () => {
        sessionStorage.setItem('SIGNAGE.debug', 'true');
        set_hash('#/signage/display-1?debug=false');

        expect(isDebugMode()).toBe(false);
    });

    it('should read the debug parameter from the search string without a routed query', () => {
        Object.defineProperty(globalThis, 'location', {
            configurable: true,
            value: { hash: '#/signage/display-1', search: '?debug' },
        });

        expect(isDebugMode()).toBe(true);
    });

    it('should remember debug mode for the session', () => {
        sessionStorage.setItem('SIGNAGE.debug', 'true');
        expect(isDebugMode()).toBe(true);

        sessionStorage.setItem('SIGNAGE.debug', 'false');
        expect(isDebugMode()).toBe(false);
    });
});
