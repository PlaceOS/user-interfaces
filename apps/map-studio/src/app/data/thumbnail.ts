/** Longest edge of a stored preview, in pixels */
const THUMBNAIL_SIZE = 480;

/**
 * Small PNG copy of `image` for previews. Decodes the full image once, so
 * later previews read a few hundred kilobytes, not the full plan. Falls back
 * to the original image if it cannot be drawn.
 */
export async function makeThumbnail(image: Blob): Promise<Blob> {
    const url = URL.createObjectURL(image);
    try {
        const element = new Image();
        element.src = url;
        await element.decode();
        const width = element.naturalWidth;
        const height = element.naturalHeight;
        if (!width || !height) return image;
        const scale = Math.min(1, THUMBNAIL_SIZE / Math.max(width, height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(width * scale));
        canvas.height = Math.max(1, Math.round(height * scale));
        const context = canvas.getContext('2d');
        if (!context) return image;
        context.drawImage(element, 0, 0, canvas.width, canvas.height);
        const thumbnail = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/png'),
        );
        return thumbnail ?? image;
    } catch {
        return image;
    } finally {
        URL.revokeObjectURL(url);
    }
}
