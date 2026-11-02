/**
 * Loads an image from a URL or a blob. A blob's object URL is revoked once
 * the image loads or fails. Rejects when the image cannot be read.
 */
export function loadImage(source: string | Blob): Promise<HTMLImageElement> {
    const url =
        typeof source === 'string' ? source : URL.createObjectURL(source);
    const release = () => {
        if (url !== source) URL.revokeObjectURL(url);
    };
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            release();
            resolve(image);
        };
        image.onerror = () => {
            release();
            reject(new Error('Could not read source image'));
        };
        image.src = url;
    });
}
