export const SIGNAGE_MEDIA_FILE_ACCEPT = [
    '.png',
    '.jpg',
    '.jpeg',
    '.webp',
    '.svg',
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/svg+xml',
    '.webm',
    'video/webm',
    '.mp4',
    'video/mp4',
    '.mov',
    'video/quicktime',
].join(',');
export const SIGNAGE_MEDIA_PICKER_ACCEPT = [
    'image/*',
    '.heic',
    '.heif',
    '.webm',
    'video/webm',
    '.mp4',
    'video/mp4',
    '.mov',
    'video/quicktime',
].join(',');
const SIGNAGE_MEDIA_MAX_WIDTH = 3840;
const SIGNAGE_MEDIA_MAX_HEIGHT = 2160;

const IMAGE_MIME_TYPES = new Set([
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/svg+xml',
]);
const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp', 'svg']);
const IMAGE_SOURCE_EXTENSIONS = new Set([
    ...IMAGE_EXTENSIONS,
    'avif',
    'bmp',
    'gif',
    'heic',
    'heif',
    'tif',
    'tiff',
]);
const VIDEO_MIME_TYPES = new Set([
    'video/webm',
    'video/mp4',
    'video/quicktime',
]);
const VIDEO_EXTENSIONS = new Set(['webm', 'mp4', 'mov']);

const MP4_ALLOWED_VIDEO_CODECS = new Set(['avc1', 'avc3']);
const MP4_ALLOWED_AUDIO_CODECS = new Set(['mp4a']);
const MP4_VIDEO_CODECS = new Set([
    'avc1',
    'avc3',
    'hev1',
    'hvc1',
    'av01',
    'vp09',
    'mp4v',
    'encv',
]);
const MP4_AUDIO_CODECS = new Set([
    'mp4a',
    'ac-3',
    'ec-3',
    'Opus',
    'fLaC',
    'alac',
    '.mp3',
    'enca',
]);

const WEBM_ALLOWED_VIDEO_CODECS = new Set(['V_VP8', 'V_VP9']);
const WEBM_ALLOWED_AUDIO_CODECS = new Set(['A_VORBIS', 'A_OPUS']);
const WEBM_VIDEO_CODECS = new Set(['V_VP8', 'V_VP9', 'V_AV1']);
const WEBM_AUDIO_CODECS = new Set([
    'A_VORBIS',
    'A_OPUS',
    'A_AAC',
    'A_FLAC',
    'A_MPEG/L3',
]);

const MP4_CONTAINER_BOXES = new Set([
    'dinf',
    'edts',
    'mdia',
    'meta',
    'minf',
    'moof',
    'moov',
    'mvex',
    'stbl',
    'traf',
    'trak',
    'udta',
]);

const SUPPORTED_FORMATS_ERROR =
    'Supported image formats: PNG, JPEG, WEBP, SVG. Supported video formats: WEBM, MP4, and MOV.';
const VIDEO_CODEC_ERROR =
    'Unsupported video codec. Use MP4 or MOV with H.264 video and AAC audio, or WEBM with VP8/VP9 video and Vorbis/Opus audio for broad browser support.';
const MEDIA_DIMENSIONS_ERROR = `Maximum supported resolution is ${SIGNAGE_MEDIA_MAX_WIDTH}x${SIGNAGE_MEDIA_MAX_HEIGHT} (4K).`;

type VideoContainer = 'mp4' | 'mov' | 'webm';

export interface SignageMediaValidationOptions {
    allow_extended_video_codecs?: boolean;
}

export interface UploadValidationResult {
    valid: boolean;
    error?: string;
    media_type?: 'image' | 'video';
}

export interface SignageMediaDimensions {
    width: number;
    height: number;
}

export interface SignageMediaMetadata extends SignageMediaDimensions {
    is_landscape: boolean;
    duration: number;
}

export async function validateSignageMediaFile(
    file: File,
    options: SignageMediaValidationOptions = {},
): Promise<UploadValidationResult> {
    if (isSupportedImageFile(file)) {
        return { valid: true, media_type: 'image' };
    }
    const container = getVideoContainer(file);
    if (!container) {
        return { valid: false, error: SUPPORTED_FORMATS_ERROR };
    }
    const is_valid_codec = await validateVideoCodecs(file, container, options);
    if (!is_valid_codec) {
        return { valid: false, error: VIDEO_CODEC_ERROR };
    }
    return { valid: true, media_type: 'video' };
}

export function isSupportedImageFile(file: File) {
    return matchesAllowedType(file, IMAGE_MIME_TYPES, IMAGE_EXTENSIONS);
}

export function isImageSourceFile(file: File) {
    return (
        file.type.toLowerCase().startsWith('image/') ||
        IMAGE_SOURCE_EXTENSIONS.has(getFileExtension(file.name))
    );
}

export function validateSignageMediaDimensions(
    dimensions: SignageMediaDimensions,
): UploadValidationResult {
    return dimensions.width <= SIGNAGE_MEDIA_MAX_WIDTH &&
        dimensions.height <= SIGNAGE_MEDIA_MAX_HEIGHT
        ? { valid: true }
        : { valid: false, error: MEDIA_DIMENSIONS_ERROR };
}

export function getVideoContainer(file: File): VideoContainer | null {
    if (matchesAllowedType(file, new Set(['video/mp4']), new Set(['mp4']))) {
        return 'mp4';
    }
    if (
        matchesAllowedType(file, new Set(['video/quicktime']), new Set(['mov']))
    ) {
        return 'mov';
    }
    if (matchesAllowedType(file, new Set(['video/webm']), new Set(['webm']))) {
        return 'webm';
    }
    return null;
}

async function validateVideoCodecs(
    file: File,
    container: VideoContainer,
    options: SignageMediaValidationOptions,
) {
    const data = await readFileAsArrayBuffer(file);
    return container === 'webm'
        ? validateWebmCodecs(data, options)
        : validateMp4Codecs(data, options);
}

function matchesAllowedType(
    file: File,
    mime_types: Set<string>,
    extensions: Set<string>,
) {
    const mime_type = file.type.toLowerCase();
    const extension = getFileExtension(file.name);
    return mime_types.has(mime_type) || extensions.has(extension);
}

function getFileExtension(file_name = '') {
    const parts = file_name.toLowerCase().split('.');
    return parts.length > 1 ? parts.pop() || '' : '';
}

function validateMp4Codecs(
    data: ArrayBuffer,
    options: SignageMediaValidationOptions,
) {
    const sample_entries = getMp4SampleEntryTypes(data);
    const allowed_video_codecs = options.allow_extended_video_codecs
        ? new Set([...MP4_ALLOWED_VIDEO_CODECS, 'av01', 'hev1', 'hvc1'])
        : MP4_ALLOWED_VIDEO_CODECS;
    const video_codecs = sample_entries.filter((codec) =>
        MP4_VIDEO_CODECS.has(codec),
    );
    const audio_codecs = sample_entries.filter((codec) =>
        MP4_AUDIO_CODECS.has(codec),
    );
    return (
        video_codecs.length > 0 &&
        video_codecs.every((codec) => allowed_video_codecs.has(codec)) &&
        audio_codecs.every((codec) => MP4_ALLOWED_AUDIO_CODECS.has(codec))
    );
}

function validateWebmCodecs(
    data: ArrayBuffer,
    options: SignageMediaValidationOptions,
) {
    const bytes = new Uint8Array(data);
    const allowed_video_codecs = options.allow_extended_video_codecs
        ? new Set([...WEBM_ALLOWED_VIDEO_CODECS, 'V_AV1'])
        : WEBM_ALLOWED_VIDEO_CODECS;
    const video_codecs = [...WEBM_VIDEO_CODECS].filter((codec) =>
        containsAscii(bytes, codec),
    );
    const audio_codecs = [...WEBM_AUDIO_CODECS].filter((codec) =>
        containsAscii(bytes, codec),
    );
    return (
        video_codecs.length > 0 &&
        video_codecs.every((codec) => allowed_video_codecs.has(codec)) &&
        audio_codecs.every((codec) => WEBM_ALLOWED_AUDIO_CODECS.has(codec))
    );
}

function getMp4SampleEntryTypes(data: ArrayBuffer) {
    const view = new DataView(data);
    const codecs: string[] = [];
    parseMp4Boxes(view, 0, view.byteLength, codecs);
    return [...new Set(codecs)];
}

function parseMp4Boxes(
    view: DataView,
    start: number,
    end: number,
    codecs: string[],
) {
    let offset = start;
    while (offset + 8 <= end) {
        const box = readMp4Box(view, offset, end);
        if (!box) break;
        if (box.type === 'stsd') {
            readMp4SampleEntries(view, box.content_start, box.end, codecs);
        } else if (MP4_CONTAINER_BOXES.has(box.type)) {
            const child_start =
                box.type === 'meta' ? box.content_start + 4 : box.content_start;
            if (child_start < box.end) {
                parseMp4Boxes(view, child_start, box.end, codecs);
            }
        }
        offset = box.end;
    }
}

function readMp4SampleEntries(
    view: DataView,
    start: number,
    end: number,
    codecs: string[],
) {
    if (start + 8 > end) return;
    const entry_count = view.getUint32(start + 4);
    let offset = start + 8;
    for (let i = 0; i < entry_count && offset + 8 <= end; i++) {
        const box = readMp4Box(view, offset, end);
        if (!box) break;
        codecs.push(box.type);
        offset = box.end;
    }
}

function readMp4Box(view: DataView, offset: number, end: number) {
    if (offset + 8 > end) return null;
    let size = view.getUint32(offset);
    let header_size = 8;
    if (size === 1) {
        if (offset + 16 > end) return null;
        size = Number(view.getBigUint64(offset + 8));
        header_size = 16;
    } else if (size === 0) {
        size = end - offset;
    }
    if (size < header_size || offset + size > end) return null;
    return {
        type: readAscii(view, offset + 4, 4),
        content_start: offset + header_size,
        end: offset + size,
    };
}

function readAscii(view: DataView, start: number, length: number) {
    let value = '';
    for (let i = 0; i < length; i++) {
        value += String.fromCharCode(view.getUint8(start + i));
    }
    return value;
}

function containsAscii(bytes: Uint8Array, value: string) {
    const pattern = Array.from(value).map((char) => char.charCodeAt(0));
    for (let i = 0; i <= bytes.length - pattern.length; i++) {
        let matches = true;
        for (let j = 0; j < pattern.length; j++) {
            if (bytes[i + j] !== pattern[j]) {
                matches = false;
                break;
            }
        }
        if (matches) return true;
    }
    return false;
}

function readFileAsArrayBuffer(file: File) {
    if (typeof file.arrayBuffer === 'function') {
        return file.arrayBuffer();
    }
    return new Promise<ArrayBuffer>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = () =>
            reject(reader.error || new Error('Failed to read upload'));
        reader.readAsArrayBuffer(file);
    });
}
