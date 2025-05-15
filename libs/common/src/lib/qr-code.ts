import { encodeQR } from 'qr';

/** Generates a DataURL for QR code image */
export function generateQRCode(
    code: string,
    colorLight = '#fff0',
    colorDark = '#000',
) {
    let svg = encodeQR(code, 'svg', { ecc: 'low', border: 1 });
    svg = svg.replace('<path', `<path style="fill:${colorDark};"`);
    const encoded_svg = encodeURIComponent(svg);
    return `data:image/svg+xml,${encoded_svg}`;
}
