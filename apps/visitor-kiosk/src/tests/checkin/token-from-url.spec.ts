import { parseTokenFromUrl } from '../../app/checkin/token-from-url';

describe('parseTokenFromUrl', () => {
    it('should return an empty string for empty input', () => {
        expect(parseTokenFromUrl('')).toBe('');
        expect(parseTokenFromUrl(undefined as unknown as string)).toBe('');
    });

    it('should return an empty string when no token is present', () => {
        expect(parseTokenFromUrl('http://localhost/checkin?foo=bar')).toBe('');
    });

    it('should extract an access_token query parameter', () => {
        expect(
            parseTokenFromUrl('http://localhost/checkin?access_token=abc123'),
        ).toBe('abc123');
    });

    it('should extract a jwt query parameter', () => {
        expect(parseTokenFromUrl('http://localhost/checkin?jwt=jwt-token')).toBe(
            'jwt-token',
        );
    });

    it('should extract a token query parameter', () => {
        expect(
            parseTokenFromUrl('http://localhost/checkin?token=plain-token'),
        ).toBe('plain-token');
    });

    it('should prefer access_token over jwt and token', () => {
        expect(
            parseTokenFromUrl(
                'http://localhost/checkin?token=t&jwt=j&access_token=a',
            ),
        ).toBe('a');
    });

    it('should prefer jwt over token when access_token is absent', () => {
        expect(
            parseTokenFromUrl('http://localhost/checkin?token=t&jwt=j'),
        ).toBe('j');
    });

    it('should URL-decode query parameter values', () => {
        expect(
            parseTokenFromUrl('http://localhost/checkin?token=a%20b'),
        ).toBe('a b');
    });

    it('should extract a token from a hash route with a query string', () => {
        expect(
            parseTokenFromUrl('http://localhost/#/checkin?jwt=hash-jwt'),
        ).toBe('hash-jwt');
    });

    it('should extract a token from a hash without a query separator', () => {
        expect(
            parseTokenFromUrl('http://localhost/#access_token=hash-tok'),
        ).toBe('hash-tok');
    });

    it('should prefer query parameters over hash parameters', () => {
        expect(
            parseTokenFromUrl(
                'http://localhost/checkin?access_token=query#access_token=hash',
            ),
        ).toBe('query');
    });

    it('should fall back to regex extraction for malformed URLs', () => {
        expect(parseTokenFromUrl('http://?token=fallback')).toBe('fallback');
    });

    it('should URL-decode values found via the regex fallback', () => {
        expect(parseTokenFromUrl('http://?token=a%20b')).toBe('a b');
    });
});
