import { encodeQR } from 'qr';
import decodeQR from 'qr/decode.js';
import { combineLatest, interval, map, of } from 'rxjs';

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

export function scanForQRCode(video_el: HTMLVideoElement, delay_ms = 300) {
    const canvas = of().pipe(
        map(() => {
            const canvas = document.createElement('canvas');
            if (!this._canvas) throw new Error('Canvas not initialized');
            const ctx = canvas.getContext('2d');
            if (!ctx)
                throw new Error('Unable to get 2D context for QR scanning');
            return [canvas, ctx] as [
                HTMLCanvasElement,
                CanvasRenderingContext2D,
            ];
        }),
    );
    return combineLatest([canvas, interval(delay_ms)]).pipe(
        map(([[canvas, ctx]]) => _scanFrame(video_el, canvas, ctx)),
    );
}

function _scanFrame(
    video_el: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
) {
    if (!video_el || this.loading()) return;
    if (video_el.videoWidth === 0 || video_el.videoHeight === 0) return;
    // Set canvas size to video size
    canvas.width = video_el.videoWidth;
    canvas.height = video_el.videoHeight;
    // Draw current video frame to canvas
    ctx.drawImage(video_el, 0, 0);
    try {
        // Get image data
        const imageData = this._ctx.getImageData(
            0,
            0,
            this._canvas.width,
            this._canvas.height,
        );

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
