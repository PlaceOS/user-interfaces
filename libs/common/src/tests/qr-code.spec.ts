import { generateQRCode } from '../lib/qr-code';

describe('generateQRCode', () => {
    it('should generate an SVG data URL', () => {
        const url = generateQRCode('https://place.technology');
        expect(url.startsWith('data:image/svg+xml,')).toBe(true);
        const svg = decodeURIComponent(
            url.replace('data:image/svg+xml,', ''),
        );
        expect(svg).toContain('<svg');
        expect(svg).toContain('<path');
    });

    it('should apply the dark colour to the QR path', () => {
        const svg = decodeURIComponent(
            generateQRCode('test', '#fff0', '#123456'),
        );
        expect(svg).toContain('style="fill:#123456;"');
    });

    it('should only add a background for non-transparent light colours', () => {
        const with_background = decodeURIComponent(
            generateQRCode('test', '#ffffff'),
        );
        expect(with_background).toContain('fill:#ffffff');
        const transparent = decodeURIComponent(generateQRCode('test', '#fff0'));
        expect(transparent).not.toContain('<rect');
    });
});
