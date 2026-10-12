import { i18n } from '@placeos/common';
import {
    getVideoContainer,
    isSupportedImageFile,
    SignageMediaMetadata,
} from '../signage-media-upload.util';

/** Point to seek to before capturing a video thumbnail, in seconds */
const VIDEO_THUMBNAIL_OFFSET = 0.1;
/** How long to wait for a paintable video frame, in milliseconds */
const VIDEO_THUMBNAIL_TIMEOUT = 15 * 1000;
/** How long to wait for the size and duration of a file, in milliseconds */
const MEDIA_METADATA_TIMEOUT = 15 * 1000;

/** File from a data URL, such as a generated thumbnail */
export function dataURLtoFile(data_url: string, filename: string) {
    const [prefix, data] = data_url.split(',');
    const mime_type = prefix.split(':')[1].split(';')[0];
    const byte_string = atob(data);
    const array_buffer = new ArrayBuffer(byte_string.length);
    const uint8_array = new Uint8Array(array_buffer);
    for (let i = 0; i < byte_string.length; i++) {
        uint8_array[i] = byte_string.charCodeAt(i);
    }
    return new File([uint8_array], filename, { type: mime_type });
}

/**
 * Orientation, size and duration of an image or video file. Rejects when the
 * browser cannot decode the file, or does not read it within the timeout.
 */
export function getMediaMetadata(file: File) {
    return new Promise<SignageMediaMetadata>((resolve, reject) => {
        const url = URL.createObjectURL(file);
        let settled = false;
        const settle = (metadata: SignageMediaMetadata | null) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            URL.revokeObjectURL(url);
            if (metadata) resolve(metadata);
            else reject(new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE')));
        };
        // A file the browser cannot read may never fire an event at all
        const timer = setTimeout(() => settle(null), MEDIA_METADATA_TIMEOUT);
        if (getVideoContainer(file)) {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = () =>
                settle({
                    is_landscape: video.videoWidth > video.videoHeight,
                    duration: video.duration,
                    width: video.videoWidth,
                    height: video.videoHeight,
                });
            video.onerror = () => settle(null);
            video.src = url;
        } else {
            const img = new Image();
            img.onload = () =>
                settle({
                    is_landscape: img.width > img.height,
                    duration: 0,
                    width: img.width,
                    height: img.height,
                });
            img.onerror = () => settle(null);
            img.src = url;
        }
    });
}

/**
 * JPEG data URL of a frame of a video, or of an image, scaled to fit the
 * bounds. Empty for other files.
 */
export async function generateThumbnail(
    file: File,
    max_width: number,
    max_height: number,
) {
    if (getVideoContainer(file)) {
        return generateVideoThumbnail(file, max_width, max_height);
    } else if (isSupportedImageFile(file)) {
        return generateImageThumbnail(file, max_width, max_height);
    }
    return '';
}

async function generateImageThumbnail(
    file: File,
    max_width: number,
    max_height: number,
) {
    const source = await decodeImageSource(file);
    const { width, height } = imageSourceSize(source, max_width, max_height);
    try {
        return generateThumbnailFromResource(
            source,
            width,
            height,
            max_width,
            max_height,
        );
    } finally {
        if (source instanceof ImageBitmap) source.close();
    }
}

/**
 * Decode the file completely before anything paints it. `load` on an
 * `<img>` only promises the bytes arrived, not that a frame is ready, and
 * browsers differ on when that becomes true.
 */
async function decodeImageSource(
    file: File,
): Promise<ImageBitmap | HTMLImageElement> {
    if (typeof createImageBitmap === 'function') {
        try {
            const bitmap = await createImageBitmap(file);
            if (bitmap.width > 0 && bitmap.height > 0) return bitmap;
            bitmap.close();
        } catch {
            // Firefox cannot decode SVG through createImageBitmap
        }
    }
    const image = await loadImage(file);
    if (typeof image.decode === 'function') {
        await image.decode().catch(() => undefined);
    }
    return image;
}

/**
 * An SVG carrying no intrinsic size reports zero dimensions in Firefox
 * while Chrome substitutes a default, which yields a zero sized canvas and
 * a blank thumbnail. Fall back to the target box in that case.
 */
export function imageSourceSize(
    source: ImageBitmap | HTMLImageElement,
    max_width: number,
    max_height: number,
) {
    const width =
        (source as HTMLImageElement).naturalWidth || source.width || 0;
    const height =
        (source as HTMLImageElement).naturalHeight || source.height || 0;
    if (width > 0 && height > 0) return { width, height };
    return { width: max_width, height: max_height };
}

/** Copy of an image file in WebP format */
export async function convertImageToWebp(file: File) {
    const image = await loadImage(file);
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE'));
    ctx.drawImage(image, 0, 0);
    const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/webp', 0.92),
    );
    if (!blob) throw new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE'));
    return new File([blob], replaceFileExtension(file.name, 'webp'), {
        type: 'image/webp',
        lastModified: file.lastModified,
    });
}

function loadImage(file: File) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        const url = URL.createObjectURL(file);
        image.onload = () => {
            URL.revokeObjectURL(url);
            resolve(image);
        };
        image.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE')));
        };
        image.src = url;
    });
}

function replaceFileExtension(file_name: string, next_extension: string) {
    return file_name.replace(/\.[^.]+$/, '') + `.${next_extension}`;
}

/** JPEG data URL of an early frame of a video, scaled to fit the bounds */
export function generateVideoThumbnail(
    file: File,
    max_width: number,
    max_height: number,
) {
    return new Promise<string>((resolve, reject) => {
        const video = document.createElement('video');
        const url = URL.createObjectURL(file);
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';
        let settled = false;
        const cleanup = () => {
            clearTimeout(timer);
            URL.revokeObjectURL(url);
            video.removeAttribute('src');
            video.load();
        };
        const capture = () => {
            if (settled) return;
            settled = true;
            const image = generateThumbnailFromResource(
                video,
                video.videoWidth,
                video.videoHeight,
                max_width,
                max_height,
            );
            cleanup();
            resolve(image);
        };
        const fail = (error: unknown) => {
            if (settled) return;
            settled = true;
            cleanup();
            reject(error);
        };
        // Never leave the caller waiting on a frame that will not arrive
        const timer = setTimeout(
            () => fail(new Error('Timed out generating video thumbnail')),
            VIDEO_THUMBNAIL_TIMEOUT,
        );
        video.onseeked = capture;
        video.onloadeddata = () => {
            // `loadeddata` only promises HAVE_CURRENT_DATA, and Firefox
            // reaches it before a frame can be painted, which renders the
            // thumbnail black. Seeking and waiting for `seeked` guarantees
            // a decoded frame is presented.
            const duration = Number.isFinite(video.duration)
                ? video.duration
                : 0;
            const target = duration
                ? Math.min(VIDEO_THUMBNAIL_OFFSET, duration / 2)
                : VIDEO_THUMBNAIL_OFFSET;
            if (video.currentTime === target) {
                capture();
                return;
            }
            // A seek to the current position emits no `seeked` event
            video.currentTime = target;
        };
        video.onerror = () =>
            fail(new Error(i18n('SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE')));
        video.src = url;
    });
}

/** JPEG data URL of an image source drawn on a white canvas, scaled to fit
 * the bounds */
export function generateThumbnailFromResource(
    data: CanvasImageSource,
    source_width: number,
    source_height: number,
    max_width: number,
    max_height: number,
) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let thumbnail_width = source_width;
    let thumbnail_height = source_height;
    const aspect_ratio = thumbnail_width / thumbnail_height;
    if (thumbnail_width > max_width) {
        thumbnail_width = max_width;
        thumbnail_height = thumbnail_width / aspect_ratio;
    }
    if (thumbnail_height > max_height) {
        thumbnail_height = max_height;
        thumbnail_width = thumbnail_height * aspect_ratio;
    }
    /* A fractional or zero sized canvas renders nothing at all */
    const width = Math.max(1, Math.round(thumbnail_width));
    const height = Math.max(1, Math.round(thumbnail_height));
    canvas.width = width;
    canvas.height = height;
    /* JPEG has no alpha channel, so anything transparent is written out as
     * black unless the canvas is given a background first. */
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(data, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg');
}
