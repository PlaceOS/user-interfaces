import { VanillaQR } from './vanillaqr.min';

/** Generates a DataURL for QR code image */
export function generateQRCode(code: string) {
    const qr = new VanillaQR({
        url: code || 'Hello',
        size: 360,
        colorLight: '#ffffff',
        colorDark: '#000000',
        toTable: false,
        ecclevel: 1,
        noBorder: true,
        borderSize: 0,
    });
    return qr?.toImage('svg+xml')?.src;
}
