import { encodeQR } from 'qr';
import decodeQR from 'qr/decode.js';
import { defer, map, timer } from 'rxjs';

/** Generates a DataURL for QR code image */
export function generateQRCode(
    code: string,
    colorLight = '#fff0',
    colorDark = '#000',
) {
    let svg = encodeQR(code, 'svg', { ecc: 'low', border: 1 });
    if (colorLight && colorLight !== '#fff0' && colorLight !== '#0000') {
        svg = svg.replace(
            '>',
            `><rect width="100%" height="100%" style="fill:${colorLight};"/>`,
        );
    }
    svg = svg.replace('<path', `<path style="fill:${colorDark};"`);
    const encoded_svg = encodeURIComponent(svg);
    return `data:image/svg+xml,${encoded_svg}`;
}

export function scanForQRCode(
    video_el: HTMLVideoElement,
    delay_ms = 120,
    max_scan_dimension = 720,
) {
    return defer(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Unable to get 2D context for QR scanning');
        return timer(0, delay_ms).pipe(
            map(() => _scanFrame(video_el, canvas, ctx, max_scan_dimension)),
        );
    });
}

function _scanFrame(
    video_el: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    max_scan_dimension: number,
) {
    if (!video_el) return;
    if (video_el.videoWidth === 0 || video_el.videoHeight === 0) return;
    const source_width = video_el.videoWidth;
    const source_height = video_el.videoHeight;
    const scale = Math.min(
        1,
        max_scan_dimension / Math.max(source_width, source_height),
    );
    const target_width = Math.max(1, Math.floor(source_width * scale));
    const target_height = Math.max(1, Math.floor(source_height * scale));
    // Avoid resetting context state every frame unless dimensions changed
    if (canvas.width !== target_width || canvas.height !== target_height) {
        canvas.width = target_width;
        canvas.height = target_height;
    }
    // Draw current video frame to canvas
    ctx.drawImage(video_el, 0, 0, target_width, target_height);
    try {
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Create image object for qr library
        const image = {
            height: imageData.height,
            width: imageData.width,
            data: imageData.data,
        };

        // Try to decode QR code
        const result = decodeQR(image);
        if (result) return result;
    } catch (error) {
        // Ignore decoding errors - they're expected when no QR code is present
    }
}
