import { toQueryString } from '../lib/api';

describe('toQueryString', () => {
    it('should convert a map into a query string', () => {
        expect(toQueryString({ a: 1, b: 'two' })).toBe('a=1&b=two');
    });

    it('should ignore empty values', () => {
        expect(
            toQueryString({ a: undefined, b: null, c: '', d: 'keep' }),
        ).toBe('d=keep');
    });

    it('should keep falsy but meaningful values', () => {
        expect(toQueryString({ a: 0, b: false })).toBe('a=0&b=false');
    });

    it('should URI encode values', () => {
        expect(toQueryString({ q: 'a b&c' })).toBe('q=a%20b%26c');
    });

    it('should handle empty or missing maps', () => {
        expect(toQueryString({})).toBe('');
        expect(toQueryString(null as any)).toBe('');
    });
});
