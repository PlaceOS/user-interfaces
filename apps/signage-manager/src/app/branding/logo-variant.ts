import { perceivedLightness } from '../ai/ai-image.util';

/**
 * Making the other version of a logo.
 *
 * A brand almost always has two: dark ink for light backgrounds, light ink for
 * dark ones. Only one usually turns up, and a poster is as likely to be one as
 * the other, so the missing one is made here rather than asked for.
 *
 * This is pixel work, not a model call. A logo is the one part of a poster that
 * has to come back identical, and an image model asked to recolour a wordmark
 * will quietly redraw the letters. Flipping lightness while keeping hue and
 * saturation turns black ink white and leaves a brand colour recognisably
 * itself, exactly, every time, in a few milliseconds and for nothing.
 */

/** anything past this reads as light ink */
const LIGHT_INK = 0.55;

/** enough to judge colour and to redraw from; logos are not photographs */
const MAX_EDGE = 1024;

export async function loadBitmap(
    source: Blob | string,
): Promise<HTMLImageElement> {
    const url =
        typeof source === 'string' ? source : URL.createObjectURL(source);
    try {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        await new Promise<void>((resolve, reject) => {
            image.onload = () => resolve();
            image.onerror = () => reject(new Error('logo could not be read'));
            image.src = url;
        });
        return image;
    } finally {
        if (typeof source !== 'string') {
            // the element holds its own copy once decoded
            setTimeout(() => URL.revokeObjectURL(url), 0);
        }
    }
}

function toCanvas(image: HTMLImageElement) {
    // an SVG with no intrinsic size decodes as 0x0 or 300x150; give it a box
    const natural_width = image.naturalWidth || 512;
    const natural_height = image.naturalHeight || 512;
    const scale = Math.min(
        1,
        MAX_EDGE / Math.max(natural_width, natural_height),
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(natural_width * scale));
    canvas.height = Math.max(1, Math.round(natural_height * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('logo could not be read');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return { canvas, context };
}

/**
 * Whether the logo's own ink is light.
 *
 * Weighted by how opaque each pixel is, so a mark's anti-aliased edges and any
 * transparent surround do not drag the answer toward the middle.
 */
export async function inkIsLight(source: Blob | string): Promise<boolean> {
    const image = await loadBitmap(source);
    const { canvas, context } = toCanvas(image);
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    let weight = 0;
    let total = 0;
    for (let index = 0; index < data.length; index += 4) {
        const alpha = data[index + 3] / 255;
        if (alpha < 0.1) continue;
        const lightness =
            perceivedLightness(data[index], data[index + 1], data[index + 2]) /
            255;
        total += lightness * alpha;
        weight += alpha;
    }
    if (!weight) return false;
    return total / weight > LIGHT_INK;
}

/** the same logo with its lightness flipped, hue and saturation left alone */
export async function flipLightness(
    source: Blob | string,
    name: string,
): Promise<File> {
    const image = await loadBitmap(source);
    const { canvas, context } = toCanvas(image);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = pixels;
    for (let index = 0; index < data.length; index += 4) {
        if (data[index + 3] === 0) continue;
        const [hue, saturation, lightness] = toHsl(
            data[index],
            data[index + 1],
            data[index + 2],
        );
        const [red, green, blue] = toRgb(hue, saturation, 1 - lightness);
        data[index] = red;
        data[index + 1] = green;
        data[index + 2] = blue;
    }
    context.putImageData(pixels, 0, 0);
    const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((result) => resolve(result), 'image/png'),
    );
    if (!blob) throw new Error('logo could not be converted');
    return new File([blob], name, { type: 'image/png' });
}

function toHsl(red: number, green: number, blue: number) {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    if (max === min) return [0, 0, lightness];
    const span = max - min;
    const saturation =
        lightness > 0.5 ? span / (2 - max - min) : span / (max + min);
    let hue = 0;
    if (max === r) hue = (g - b) / span + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / span + 2;
    else hue = (r - g) / span + 4;
    return [hue / 6, saturation, lightness];
}

function toRgb(hue: number, saturation: number, lightness: number) {
    if (!saturation) {
        const value = Math.round(lightness * 255);
        return [value, value, value];
    }
    const q =
        lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    return [
        Math.round(channel(p, q, hue + 1 / 3) * 255),
        Math.round(channel(p, q, hue) * 255),
        Math.round(channel(p, q, hue - 1 / 3) * 255),
    ];
}

function channel(p: number, q: number, t: number) {
    let value = t;
    if (value < 0) value += 1;
    if (value > 1) value -= 1;
    if (value < 1 / 6) return p + (q - p) * 6 * value;
    if (value < 1 / 2) return q;
    if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
    return p;
}
