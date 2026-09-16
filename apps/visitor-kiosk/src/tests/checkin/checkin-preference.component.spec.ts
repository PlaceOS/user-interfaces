import { parseTokenFromUrl } from '../../app/checkin/token-from-url';

describe('parseTokenFromUrl', () => {
    it('should parse token from hash route query', () => {
        const token = parseTokenFromUrl(
            'https://example.test/#/checkin/preferences?token=abc.123',
        );
        expect(token).toBe('abc.123');
    });

    it('should parse jwt from pre-hash URL query', () => {
        const token = parseTokenFromUrl(
            'https://example.test/?jwt=abc.123#/checkin/preferences',
        );
        expect(token).toBe('abc.123');
    });
});
