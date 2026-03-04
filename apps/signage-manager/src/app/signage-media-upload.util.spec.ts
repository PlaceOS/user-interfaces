import {
    SIGNAGE_MEDIA_FILE_ACCEPT,
    SIGNAGE_MEDIA_PICKER_ACCEPT,
    isImageSourceFile,
    validateSignageMediaDimensions,
    validateSignageMediaFile,
} from './signage-media-upload.util';

describe('signage-media-upload util', () => {
    it('exposes the requested file picker formats', () => {
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.png');
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.jpeg');
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.webp');
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.svg');
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.webm');
        expect(SIGNAGE_MEDIA_FILE_ACCEPT).toContain('.mp4');
        expect(SIGNAGE_MEDIA_PICKER_ACCEPT).toContain('image/*');
        expect(SIGNAGE_MEDIA_PICKER_ACCEPT).toContain('.heic');
        expect(SIGNAGE_MEDIA_PICKER_ACCEPT).toContain('.heif');
    });

    it('accepts supported image formats by mime type', async () => {
        const file = new File(['image'], 'poster.png', { type: 'image/png' });

        await expect(validateSignageMediaFile(file)).resolves.toEqual({
            valid: true,
            media_type: 'image',
        });
    });

    it('accepts supported image formats by extension', async () => {
        const file = new File(['svg'], 'poster.svg');

        await expect(validateSignageMediaFile(file)).resolves.toEqual({
            valid: true,
            media_type: 'image',
        });
    });

    it('rejects unsupported image formats', async () => {
        const file = new File(['gif'], 'poster.gif', { type: 'image/gif' });

        await expect(validateSignageMediaFile(file)).resolves.toMatchObject({
            valid: false,
        });
    });

    it('treats browser-decodable source images as convertible inputs', () => {
        expect(isImageSourceFile(new File(['heic'], 'poster.heic'))).toBe(true);
        expect(
            isImageSourceFile(
                new File(['image'], 'poster.gif', {
                    type: 'image/gif',
                }),
            ),
        ).toBe(true);
    });

    it('accepts media within 4K resolution', () => {
        expect(
            validateSignageMediaDimensions({ width: 3840, height: 2160 }),
        ).toEqual({ valid: true });
    });

    it('rejects media larger than 4K resolution', () => {
        expect(
            validateSignageMediaDimensions({ width: 3841, height: 2160 }),
        ).toMatchObject({ valid: false });
        expect(
            validateSignageMediaDimensions({ width: 3840, height: 2161 }),
        ).toMatchObject({ valid: false });
    });

    it('accepts MP4 uploads with H.264 video and AAC audio', async () => {
        const file = new File([createMp4File(['avc1', 'mp4a'])], 'clip.mp4', {
            type: 'video/mp4',
        });

        await expect(validateSignageMediaFile(file)).resolves.toEqual({
            valid: true,
            media_type: 'video',
        });
    });

    it('rejects MP4 uploads with unsupported codecs', async () => {
        const file = new File([createMp4File(['hvc1', 'mp4a'])], 'clip.mp4', {
            type: 'video/mp4',
        });

        await expect(validateSignageMediaFile(file)).resolves.toMatchObject({
            valid: false,
        });
    });

    it('accepts WEBM uploads with VP9 and Opus', async () => {
        const file = new File(
            [createWebmFile(['V_VP9', 'A_OPUS'])],
            'clip.webm',
            {
                type: 'video/webm',
            },
        );

        await expect(validateSignageMediaFile(file)).resolves.toEqual({
            valid: true,
            media_type: 'video',
        });
    });

    it('rejects WEBM uploads with unsupported codecs', async () => {
        const file = new File(
            [createWebmFile(['V_AV1', 'A_OPUS'])],
            'clip.webm',
            {
                type: 'video/webm',
            },
        );

        await expect(validateSignageMediaFile(file)).resolves.toMatchObject({
            valid: false,
        });
    });
});

function createMp4File(codecs: string[]) {
    return box(
        'moov',
        box(
            'trak',
            box('mdia', box('minf', box('stbl', createStsdBox(codecs)))),
        ),
    );
}

function createStsdBox(codecs: string[]) {
    return box(
        'stsd',
        new Uint8Array(4),
        uint32(codecs.length),
        ...codecs.map((codec) => box(codec)),
    );
}

function createWebmFile(codecs: string[]) {
    return concatUint8Arrays(
        Uint8Array.from([0x1a, 0x45, 0xdf, 0xa3]),
        ascii(codecs.join('|')),
    );
}

function box(type: string, ...payloads: Uint8Array[]) {
    const payload = concatUint8Arrays(...payloads);
    return concatUint8Arrays(uint32(payload.length + 8), ascii(type), payload);
}

function uint32(value: number) {
    const bytes = new Uint8Array(4);
    new DataView(bytes.buffer).setUint32(0, value);
    return bytes;
}

function ascii(value: string) {
    return Uint8Array.from(Array.from(value).map((char) => char.charCodeAt(0)));
}

function concatUint8Arrays(...arrays: Uint8Array[]) {
    const length = arrays.reduce((total, array) => total + array.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    for (const array of arrays) {
        result.set(array, offset);
        offset += array.length;
    }
    return result;
}
