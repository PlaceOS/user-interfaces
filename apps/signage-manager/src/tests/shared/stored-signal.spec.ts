import { storedSignal } from '../../app/shared/stored-signal';

const KEY = 'test:stored-signal';

/** Parse a stored number list. Throws on text that is not JSON. */
function parseIds(stored: string | null): number[] {
    return stored === null ? [] : JSON.parse(stored);
}

describe('storedSignal', () => {
    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
    });

    afterEach(() => vi.restoreAllMocks());

    it('starts from the stored value and stores each change', () => {
        localStorage.setItem(KEY, '[1]');
        const ids = storedSignal(KEY, parseIds, {
            serialise: (value) => JSON.stringify(value),
        });

        expect(ids()).toEqual([1]);

        ids.update((value) => [...value, 2]);

        expect(ids()).toEqual([1, 2]);
        expect(localStorage.getItem(KEY)).toBe('[1,2]');
    });

    it('starts from the empty value when the stored text cannot be read', () => {
        localStorage.setItem(KEY, '{not json');

        expect(storedSignal(KEY, parseIds)()).toEqual([]);
    });

    it('removes the key when the value serialises to null', () => {
        sessionStorage.setItem(KEY, 'g1');
        const group = storedSignal(KEY, (stored) => stored || '', {
            storage: 'session',
            serialise: (value) => value || null,
        });

        group.set('');

        expect(sessionStorage.getItem(KEY)).toBeNull();
        expect(localStorage.getItem(KEY)).toBeNull();
    });

    // Private browsing can refuse writes, e.g. with a quota error
    it('keeps the value in memory when storage refuses the write', () => {
        vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
            throw new DOMException('full', 'QuotaExceededError');
        });
        const name = storedSignal(KEY, (stored) => stored || '');

        expect(() => name.set('lobby')).not.toThrow();
        expect(name()).toBe('lobby');
    });
});
