import loadLibheif from './libheif-bundle.mjs';

self.onmessage = async ({ data: file }) => {
    try {
        self.postMessage(await convertHeifImage(file));
    } catch {
        self.postMessage(null);
    }
};

async function convertHeifImage(file) {
    const libheif = await loadLibheif();
    const decoder = new libheif.HeifDecoder();
    const images = decoder.decode(new Uint8Array(await file.arrayBuffer()));
    const image =
        images.find((candidate) => candidate.is_primary()) || images[0];
    if (!image) throw new Error('No image found in HEIF file');

    const canvas = new OffscreenCanvas(image.get_width(), image.get_height());
    const context = canvas.getContext('2d');
    const image_data = context.createImageData(canvas.width, canvas.height);
    const pixels = await new Promise((resolve, reject) => {
        image.display(image_data, (result) => {
            if (result) resolve(result);
            else reject(new Error('Could not decode HEIF pixels'));
        });
    });
    context.putImageData(pixels, 0, 0);

    // Canvas returns PNG when the requested encoder is unavailable.
    const probe_canvas = new OffscreenCanvas(1, 1);
    probe_canvas.getContext('2d');
    const probe = await probe_canvas.convertToBlob({ type: 'image/webp' });
    if (probe.type === 'image/webp') {
        return canvas.convertToBlob({ type: 'image/webp', quality: 0.92 });
    }

    // JPEG has no alpha channel. Composite any transparent pixels onto white.
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas.convertToBlob({ type: 'image/jpeg', quality: 0.92 });
}
