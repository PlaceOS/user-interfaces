import { webPageFrameUrl } from '../../app/signage/signage.utilities';

describe('webPageFrameUrl', () => {
    it('should keep http and https URLs', () => {
        expect(webPageFrameUrl('https://example.com/a')).toBe(
            'https://example.com/a',
        );
        expect(webPageFrameUrl('http://example.com')).toBe(
            'http://example.com',
        );
    });

    it('should replace other schemes with a blank page', () => {
        expect(webPageFrameUrl('javascript:alert(1)')).toBe('about:blank');
        expect(webPageFrameUrl('data:text/html,<b>x</b>')).toBe('about:blank');
        expect(webPageFrameUrl('')).toBe('about:blank');
    });
});
