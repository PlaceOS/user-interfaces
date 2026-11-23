import {
    animatedWebp,
    GifPalette,
    GifWriter,
    webpImageChunks,
} from '../lib/image-encoders';

const text = (value: string) => Uint8Array.from(value, (_) => _.charCodeAt(0));
const ascii = (data: Uint8Array, offset: number, length: number) =>
    String.fromCharCode(...data.subarray(offset, offset + length));
const uint = (data: Uint8Array, offset: number, bytes: number) =>
    Array.from(data.subarray(offset, offset + bytes)).reduceRight(
        (value, byte) => value * 256 + byte,
        0,
    );

/** RIFF chunk with its header and padding */
function chunk(type: string, payload: number[]) {
    const out = [...text(type), payload.length, 0, 0, 0, ...payload];
    if (payload.length % 2) out.push(0);
    return out;
}

/** WebP file of the chunks */
function webp(...chunks: number[][]) {
    const body = chunks.flat();
    const size = 4 + body.length;
    return Uint8Array.from([
        ...text('RIFF'),
        size & 0xff,
        (size >> 8) & 0xff,
        0,
        0,
        ...text('WEBP'),
        ...body,
    ]);
}

/** Chunks of a RIFF file after the `WEBP` header: type and payload offset */
function riffChunks(file: Uint8Array) {
    const chunks: { type: string; offset: number; size: number }[] = [];
    for (let offset = 12; offset + 8 <= file.length; ) {
        const size = uint(file, offset + 4, 4);
        chunks.push({ type: ascii(file, offset, 4), offset: offset + 8, size });
        offset += 8 + size + (size % 2);
    }
    return chunks;
}

describe('animatedWebp', () => {
    it('should keep only the image chunks of a frame', () => {
        const file = webp(
            chunk('VP8X', [0x10, 0, 0, 0, 1, 0, 0, 1, 0, 0]),
            chunk('ALPH', [7]),
            chunk('VP8 ', [1, 2, 3]),
            chunk('EXIF', [9, 9]),
        );

        const { chunks, alpha } = webpImageChunks(file);

        expect(alpha).toBe(true);
        expect(chunks.flatMap((_) => Array.from(_))).toEqual([
            ...chunk('ALPH', [7]),
            ...chunk('VP8 ', [1, 2, 3]),
        ]);
    });

    it('should put the frames in an animation with their durations', () => {
        const frames = [
            { file: webp(chunk('VP8 ', [1, 2, 3])), duration: 500 },
            { file: webp(chunk('VP8 ', [4, 5])), duration: 250.4 },
        ];

        const file = animatedWebp(frames, 640, 360);
        const chunks = riffChunks(file);

        expect(ascii(file, 0, 4)).toBe('RIFF');
        expect(uint(file, 4, 4)).toBe(file.length - 8);
        expect(ascii(file, 8, 4)).toBe('WEBP');
        expect(chunks.map((_) => _.type)).toEqual([
            'VP8X',
            'ANIM',
            'ANMF',
            'ANMF',
        ]);
        const [vp8x, , first, second] = chunks;
        // Animation flag only, as the frames have no alpha
        expect(file[vp8x.offset]).toBe(0x02);
        expect(uint(file, vp8x.offset + 4, 3)).toBe(639);
        expect(uint(file, vp8x.offset + 7, 3)).toBe(359);
        expect(uint(file, first.offset + 12, 3)).toBe(500);
        expect(uint(file, second.offset + 12, 3)).toBe(250);
        expect(ascii(file, first.offset + 16, 4)).toBe('VP8 ');
    });

    it('should reject a file that is not WebP', () => {
        expect(() => webpImageChunks(text('GIF89a......'))).toThrow();
    });
});

/** Decoded frames of a GIF from `GifWriter`: delays and palette indexes */
function decodeGif(file: Uint8Array) {
    expect(ascii(file, 0, 6)).toBe('GIF89a');
    const width = uint(file, 6, 2);
    const height = uint(file, 8, 2);
    // Header, screen descriptor, global palette, NETSCAPE extension
    let offset = 13 + 768 + 19;
    const frames: { delay: number; indexes: number[] }[] = [];
    // Each step reads one frame, so the loop ends at the trailer
    while (file[offset] === 0x21 && file[offset + 1] === 0xf9) {
        const delay = uint(file, offset + 4, 2);
        offset += 8;
        expect(file[offset]).toBe(0x2c);
        offset += 10;
        const min_size = file[offset++];
        const data: number[] = [];
        for (let size = file[offset++]; size; size = file[offset++]) {
            data.push(...file.subarray(offset, offset + size));
            offset += size;
        }
        frames.push({ delay, indexes: lzwDecode(data, min_size) });
    }
    expect(file[offset]).toBe(0x3b);
    return { width, height, frames };
}

/** Standard GIF LZW decoder */
function lzwDecode(data: number[], min_size: number) {
    const clear = 1 << min_size;
    const end = clear + 1;
    let size = min_size + 1;
    let table: number[][] = [];
    const reset = () => {
        table = Array.from({ length: clear + 2 }, (_, i) => [i]);
        size = min_size + 1;
    };
    reset();
    const out: number[] = [];
    let previous: number[] | null = null;
    let bit = 0;
    while (bit + size <= data.length * 8) {
        let code = 0;
        for (let i = 0; i < size; i++, bit++) {
            code |= ((data[bit >> 3] >> (bit & 7)) & 1) << i;
        }
        if (code === clear) {
            reset();
            previous = null;
            continue;
        }
        if (code === end) break;
        const entry: number[] =
            code < table.length ? table[code] : [...previous!, previous![0]];
        out.push(...entry);
        if (previous) table.push([...previous, entry[0]]);
        previous = entry;
        if (table.length === 1 << size && size < 12) size++;
    }
    return out;
}

describe('GifWriter', () => {
    it('should encode frames that decode to the same indexes and delays', () => {
        const small = Uint8Array.from([0, 1, 1, 2, 2, 2]);
        const flat = new Uint8Array(6);
        const writer = new GifWriter(3, 2, new GifPalette(new Uint8Array(4)));
        writer.add(small, 500);
        writer.add(flat, 1234);

        const gif = decodeGif(writer.finish());

        expect(gif).toEqual({
            width: 3,
            height: 2,
            frames: [
                { delay: 50, indexes: Array.from(small) },
                { delay: 123, indexes: Array.from(flat) },
            ],
        });
    });

    it('should start a new code table when it is full', () => {
        let seed = 7;
        const random = () =>
            (seed = (seed * 1103515245 + 12345) % 2 ** 31) % 252;
        const indexes = Uint8Array.from({ length: 200 * 100 }, random);
        const writer = new GifWriter(
            200,
            100,
            new GifPalette(new Uint8Array(4)),
        );
        writer.add(indexes, 100);

        const gif = decodeGif(writer.finish());

        expect(gif.frames[0].indexes).toEqual(Array.from(indexes));
    });

    it('should not add a frame that makes the file larger than the limit', () => {
        const writer = new GifWriter(10, 10, new GifPalette(new Uint8Array(4)));
        const frame = new Uint8Array(100);
        expect(writer.add(frame, 100, Infinity)).toBe(true);
        const limit = writer.length + 1;

        expect(writer.add(frame, 100, limit)).toBe(false);

        expect(writer.frames).toBe(1);
        expect(writer.finish().length).toBe(limit);
    });

    it('should keep the common colours of the first frame exact', () => {
        // Light grey, as an app background, and a navy header
        const grey = [232, 232, 232, 255];
        const navy = [32, 32, 72, 255];
        const frame = Uint8Array.from([...grey, ...grey, ...grey, ...navy]);
        const palette = new GifPalette(frame);
        const colour = (index: number) =>
            Array.from(palette.colours.subarray(index * 3, index * 3 + 3));

        const [a, , , b] = palette.indexes(frame);
        // A colour that is not in the first frame uses the nearest entry
        const [red] = palette.indexes(Uint8Array.from([250, 10, 5, 255]));

        // Colours are kept at 5 bits each
        expect(colour(a)).toEqual([239, 239, 239]);
        expect(colour(b)).toEqual([33, 33, 74]);
        expect(colour(red)).toEqual([255, 0, 0]);
    });
});
