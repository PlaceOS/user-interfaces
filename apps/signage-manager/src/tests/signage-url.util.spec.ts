import {
    isWebPageUrl,
    parseWebUrl,
    webPageFrameUrl,
} from '../app/signage-url.util';

describe('signage url util', () => {
    const unsafe_urls = [
        'javascript:alert(document.cookie)',
        ' JavaScript:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'vbscript:msgbox(1)',
        'file:///etc/passwd',
        'not a url',
        '',
    ];

    it('accepts absolute http and https URLs', () => {
        expect(isWebPageUrl('http://example.com')).toBe(true);
        expect(isWebPageUrl('https://example.com/page?q=1')).toBe(true);
    });

    it.each(unsafe_urls)('rejects %j as a webpage URL', (url) => {
        expect(isWebPageUrl(url)).toBe(false);
    });

    it('rejects relative URLs without a base', () => {
        expect(isWebPageUrl('/signage')).toBe(false);
    });

    it('resolves relative URLs against a base', () => {
        expect(parseWebUrl('/signage', 'https://placeos.test/app/')?.href).toBe(
            'https://placeos.test/signage',
        );
        expect(
            parseWebUrl('javascript:alert(1)', 'https://placeos.test/'),
        ).toBeNull();
    });

    it('replaces unsafe iframe URLs with a blank page', () => {
        expect(webPageFrameUrl('https://example.com')).toBe(
            'https://example.com',
        );
        for (const url of unsafe_urls) {
            expect(webPageFrameUrl(url)).toBe('about:blank');
        }
    });
});
