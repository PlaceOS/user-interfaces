/**
 * Encoders for animated images. The browser encodes single WebP frames with
 * `canvas.toBlob`. These functions put the frames in an animated WebP file,
 * or encode GIF frames for browsers that cannot encode WebP.
 */

/** One frame of an animated WebP. `file` is a WebP file of the frame */
export interface WebpFrame {
    file: Uint8Array;
    /** Milliseconds that the frame shows */
    duration: number;
}

/** Most milliseconds in a WebP frame duration (24 bits) */
const MAX_WEBP_DURATION = 0xffffff;

/**
 * Image chunks of a WebP file: `ALPH`, `VP8 ` and `VP8L`. The chunks are
 * views into `file`. Other chunks, such as `VP8X` and metadata, are not
 * kept. Throws when the file is not WebP.
 */
export function webpImageChunks(file: Uint8Array): {
    chunks: Uint8Array[];
    alpha: boolean;
} {
    if (ascii(file, 0, 4) !== 'RIFF' || ascii(file, 8, 4) !== 'WEBP') {
        throw new Error('The frame is not a WebP file');
    }
    const chunks: Uint8Array[] = [];
    let alpha = false;
    // Each step moves past one chunk, so the loop ends at the end of the file
    for (let offset = 12; offset + 8 <= file.length; ) {
        const type = ascii(file, offset, 4);
        const size = readUint32(file, offset + 4);
        const end = offset + 8 + size + (size % 2);
        if (type === 'ALPH' || type === 'VP8 ' || type === 'VP8L') {
            chunks.push(file.subarray(offset, Math.min(end, file.length)));
            if (type !== 'VP8 ') alpha = true;
        }
        offset = end;
    }
    if (!chunks.length) throw new Error('The WebP file has no image');
    return { chunks, alpha };
}

/**
 * Animated WebP file of the frames. Each frame covers the full canvas and
 * does not blend with the frame before it. The animation loops forever. The
 * image data of the frames is copied one time, into the file.
 */
export function animatedWebp(
    frames: readonly WebpFrame[],
    width: number,
    height: number,
): Uint8Array<ArrayBuffer> {
    const images = frames.map((frame) => {
        const { chunks, alpha } = webpImageChunks(frame.file);
        return {
            chunks,
            alpha,
            size: chunks.reduce((sum, _) => sum + _.length, 0),
            duration: Math.min(
                Math.max(Math.round(frame.duration), 1),
                MAX_WEBP_DURATION,
            ),
        };
    });
    // The RIFF header, `VP8X`, `ANIM`, and one `ANMF` for each frame
    const length =
        12 +
        (8 + 10) +
        (8 + 6) +
        images.reduce((sum, _) => sum + 8 + 16 + _.size + (_.size % 2), 0);
    const file = new Uint8Array(length);
    let offset = 0;
    const write = (bytes: Uint8Array) => {
        file.set(bytes, offset);
        offset += bytes.length;
    };
    /** Type and size of a chunk. Its payload follows */
    const header = (type: string, size: number) => {
        write(bytesOf(type));
        writeUint32(file, offset, size);
        offset += 4;
    };
    header('RIFF', length - 8);
    write(bytesOf('WEBP'));
    header('VP8X', 10);
    // Animation flag, and the alpha flag when a frame has alpha
    file[offset] = 0x02 | (images.some((_) => _.alpha) ? 0x10 : 0);
    writeUint24(file, offset + 4, width - 1);
    writeUint24(file, offset + 7, height - 1);
    offset += 10;
    header('ANIM', 6);
    // White background, loop forever
    write(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0, 0]));
    for (const image of images) {
        header('ANMF', 16 + image.size);
        writeUint24(file, offset + 6, width - 1);
        writeUint24(file, offset + 9, height - 1);
        writeUint24(file, offset + 12, image.duration);
        // Do not blend with the frame before, do not dispose
        file[offset + 15] = 0x02;
        offset += 16;
        image.chunks.forEach(write);
        // A chunk with an odd size has one byte of padding
        offset += image.size % 2;
    }
    return file;
}

/** Colours of the GIF palette that come from the most common colours of the first frame */
const GIF_COMMON_COLOURS = 192;
/** Levels of each colour in the cube that fills the rest of the GIF palette: 4 x 4 x 4 = 64 */
const GIF_CUBE_LEVELS = 4;
/** Most codes in the GIF LZW table */
const GIF_MAX_CODES = 4096;

/**
 * One palette for all frames of a GIF. It holds the most common colours of
 * the first frame, so the flat colours of an app screen stay exact, and a
 * small colour cube for colours that show later. Colours are compared at 5
 * bits each, and each 5-bit colour finds its nearest entry one time.
 */
export class GifPalette {
    /** RGB values of the 256 entries */
    public readonly colours = new Uint8Array(256 * 3);
    /** Palette index of each 5-bit colour. `-1` until it is first used */
    private readonly _nearest = new Int16Array(1 << 15).fill(-1);

    constructor(first_frame: Uint8ClampedArray | Uint8Array) {
        const counts = new Uint32Array(1 << 15);
        for (let p = 0; p < first_frame.length; p += 4) {
            counts[colourKey(first_frame, p)]++;
        }
        const common = Array.from(counts.keys())
            .filter((key) => counts[key])
            .sort((a, b) => counts[b] - counts[a])
            .slice(0, GIF_COMMON_COLOURS);
        let entry = 0;
        for (const key of common) {
            this._set(
                entry++,
                expand(key >> 10),
                expand(key >> 5),
                expand(key),
            );
        }
        const step = 255 / (GIF_CUBE_LEVELS - 1);
        for (let r = 0; r < GIF_CUBE_LEVELS; r++) {
            for (let g = 0; g < GIF_CUBE_LEVELS; g++) {
                for (let b = 0; b < GIF_CUBE_LEVELS && entry < 256; b++) {
                    this._set(entry++, r * step, g * step, b * step);
                }
            }
        }
    }

    /** Palette indexes of RGBA pixels. Alpha is ignored */
    public indexes(rgba: Uint8ClampedArray | Uint8Array): Uint8Array {
        const indexes = new Uint8Array(rgba.length / 4);
        for (let i = 0, p = 0; i < indexes.length; i++, p += 4) {
            const key = colourKey(rgba, p);
            let index = this._nearest[key];
            if (index < 0) index = this._nearest[key] = this._closest(key);
            indexes[i] = index;
        }
        return indexes;
    }

    private _set(entry: number, r: number, g: number, b: number) {
        this.colours[entry * 3] = Math.round(r);
        this.colours[entry * 3 + 1] = Math.round(g);
        this.colours[entry * 3 + 2] = Math.round(b);
    }

    private _closest(key: number) {
        const r = expand(key >> 10);
        const g = expand(key >> 5);
        const b = expand(key);
        let best = 0;
        let best_distance = Infinity;
        for (let entry = 0; entry < 256; entry++) {
            const dr = this.colours[entry * 3] - r;
            const dg = this.colours[entry * 3 + 1] - g;
            const db = this.colours[entry * 3 + 2] - b;
            const distance = dr * dr + dg * dg + db * db;
            if (distance < best_distance) {
                best = entry;
                best_distance = distance;
            }
        }
        return best;
    }
}

/** 15-bit key of the colour at `offset`: 5 bits each of red, green and blue */
function colourKey(rgba: Uint8ClampedArray | Uint8Array, offset: number) {
    return (
        ((rgba[offset] >> 3) << 10) |
        ((rgba[offset + 1] >> 3) << 5) |
        (rgba[offset + 2] >> 3)
    );
}

/** 8-bit value of the low 5 bits of `value` */
function expand(value: number) {
    const five = value & 0x1f;
    return (five << 3) | (five >> 2);
}

/**
 * Writes an animated GIF one frame at a time, so only the encoded bytes stay
 * in memory. Call `add` for each frame, then `finish`.
 */
export class GifWriter {
    private readonly _parts: Uint8Array[] = [];
    private _length = 0;
    private _frames = 0;

    constructor(
        private readonly _width: number,
        private readonly _height: number,
        palette: GifPalette,
    ) {
        const screen = new Uint8Array(13);
        screen.set(bytesOf('GIF89a'), 0);
        writeUint16(screen, 6, _width);
        writeUint16(screen, 8, _height);
        // Global colour table of 256 entries, 8 bits of colour resolution
        screen[10] = 0xf7;
        this._push(screen, palette.colours);
        // NETSCAPE2.0 extension: loop forever
        this._push(
            new Uint8Array([0x21, 0xff, 0x0b]),
            bytesOf('NETSCAPE2.0'),
            new Uint8Array([0x03, 0x01, 0x00, 0x00, 0x00]),
        );
    }

    /** Bytes written so far */
    public get length() {
        return this._length;
    }

    public get frames() {
        return this._frames;
    }

    /**
     * Add a frame of palette indexes, from `GifPalette.indexes`. The frame is
     * not added, and the result is `false`, when the finished file would be
     * larger than `max_bytes`.
     */
    public add(indexes: Uint8Array, duration_ms: number, max_bytes = Infinity) {
        if (indexes.length !== this._width * this._height) {
            throw new Error('The frame size does not match the GIF size');
        }
        const delay = Math.min(
            Math.max(Math.round(duration_ms / 10), 1),
            0xffff,
        );
        const control = new Uint8Array([
            0x21, 0xf9, 0x04, 0x00, 0, 0, 0x00, 0x00,
        ]);
        writeUint16(control, 4, delay);
        const descriptor = new Uint8Array(10);
        descriptor[0] = 0x2c;
        writeUint16(descriptor, 5, this._width);
        writeUint16(descriptor, 7, this._height);
        const parts = [
            control,
            descriptor,
            new Uint8Array([8]),
            subBlocks(lzw(indexes)),
        ];
        const size = parts.reduce((sum, _) => sum + _.length, 0);
        // One byte for the trailer that `finish` adds
        if (this._length + size + 1 > max_bytes) return false;
        this._push(...parts);
        this._frames++;
        return true;
    }

    /** The GIF file. Add no frames after this call */
    public finish(): Uint8Array<ArrayBuffer> {
        this._push(new Uint8Array([0x3b]));
        return concat(this._parts);
    }

    private _push(...parts: Uint8Array[]) {
        for (const part of parts) {
            this._parts.push(part);
            this._length += part.length;
        }
    }
}

/** GIF LZW codes of 8-bit palette indexes, packed least significant bit first */
function lzw(indexes: Uint8Array): Uint8Array {
    const clear = 256;
    const end = 257;
    const out: number[] = [];
    let buffer = 0;
    let bits = 0;
    let size = 9;
    let next = end + 1;
    let table = new Map<number, number>();
    const emit = (code: number) => {
        buffer |= code << bits;
        bits += size;
        while (bits >= 8) {
            out.push(buffer & 0xff);
            buffer >>>= 8;
            bits -= 8;
        }
    };
    emit(clear);
    let code = indexes[0];
    for (let i = 1; i < indexes.length; i++) {
        const value = indexes[i];
        const key = (code << 8) | value;
        const found = table.get(key);
        if (found !== undefined) {
            code = found;
            continue;
        }
        emit(code);
        if (next === GIF_MAX_CODES) {
            // The table is full: start a new table
            emit(clear);
            table = new Map();
            next = end + 1;
            size = 9;
        } else {
            if (next >= 1 << size) size++;
            table.set(key, next++);
        }
        code = value;
    }
    emit(code);
    emit(end);
    if (bits) out.push(buffer & 0xff);
    return Uint8Array.from(out);
}

/** GIF data sub-blocks of 255 bytes maximum, then the block terminator */
function subBlocks(data: Uint8Array): Uint8Array {
    const blocks = Math.ceil(data.length / 255);
    const out = new Uint8Array(data.length + blocks + 1);
    let offset = 0;
    for (let i = 0; i < blocks; i++) {
        const part = data.subarray(i * 255, (i + 1) * 255);
        out[offset++] = part.length;
        out.set(part, offset);
        offset += part.length;
    }
    out[offset] = 0;
    return out;
}

/** One array with the bytes of the parts, in order */
function concat(parts: readonly Uint8Array[]): Uint8Array<ArrayBuffer> {
    const out = new Uint8Array(parts.reduce((sum, _) => sum + _.length, 0));
    let offset = 0;
    for (const part of parts) {
        out.set(part, offset);
        offset += part.length;
    }
    return out;
}

function bytesOf(text: string) {
    return Uint8Array.from(text, (_) => _.charCodeAt(0));
}

function ascii(data: Uint8Array, offset: number, length: number) {
    return String.fromCharCode(...data.subarray(offset, offset + length));
}

function readUint32(data: Uint8Array, offset: number) {
    return (
        (data[offset] |
            (data[offset + 1] << 8) |
            (data[offset + 2] << 16) |
            (data[offset + 3] << 24)) >>>
        0
    );
}

function writeUint16(data: Uint8Array, offset: number, value: number) {
    data[offset] = value & 0xff;
    data[offset + 1] = (value >> 8) & 0xff;
}

function writeUint24(data: Uint8Array, offset: number, value: number) {
    writeUint16(data, offset, value);
    data[offset + 2] = (value >> 16) & 0xff;
}

function writeUint32(data: Uint8Array, offset: number, value: number) {
    writeUint24(data, offset, value);
    data[offset + 3] = (value >>> 24) & 0xff;
}
