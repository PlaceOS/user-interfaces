import {
    animatedWebp,
    GifPalette,
    GifWriter,
    type WebpFrame,
} from './image-encoders';

/**
 * Screen capture for remote debugging. A web page cannot read the pixels of
 * the screen without a permission prompt, so the capture draws the page
 * again from the DOM: it copies the page and its styles into an SVG
 * `foreignObject` and draws the SVG on a canvas.
 *
 * The copy inlines images, fonts and canvases as data URLs, because an SVG
 * image cannot load other files. Content that the page cannot read shows as
 * an empty area: cross-origin images without CORS, tainted canvases and
 * videos. All iframes show as an empty area. Scroll positions inside the
 * page are not kept.
 *
 * `remote-debug.ts` loads this file on first use.
 */

/** Captured image or animation */
export interface CapturedMedia {
    mime: 'image/webp' | 'image/png' | 'image/gif';
    bytes: Uint8Array<ArrayBuffer>;
    width: number;
    height: number;
    frames: number;
    /** Milliseconds of the animation. `0` for a snapshot */
    duration: number;
}

export interface AnimationOptions {
    width: number;
    duration: number;
    fps: number;
    /** `webp` falls back to `gif` when the browser cannot encode WebP */
    format: 'webp' | 'gif';
}

/** Most bytes of one captured image or animation */
export const MAX_MEDIA_BYTES = 4 * 1024 * 1024;
/**
 * Most memory that a capture keeps while it runs. Remote debugging has 32 MB
 * on a device: 10 MB for logs, and this for a capture. The capture counts the
 * inlined files, the canvas and video images, the SVG markup and its encoded
 * copy, the canvas pixels and the file that it makes. It fails when a frame
 * needs more. The memory that the browser uses to draw the SVG is not known
 * to the page, so it is not counted.
 */
export const MAX_CAPTURE_BYTES = 22 * 1024 * 1024;
/** Most bytes of fonts and images that one capture inlines */
const MAX_INLINE_BYTES = 4 * 1024 * 1024;
/** Most characters of canvas and video images in one frame */
const MAX_GENERATED_CHARS = 2 * 1024 * 1024;
/** Bytes of a GIF frame for each pixel, other than the canvas: the RGBA copy and the palette index */
const GIF_PIXEL_BYTES = 5;
/** Most bytes of one inlined file */
const MAX_INLINE_FILE_BYTES = 2 * 1024 * 1024;
/**
 * Most characters of CSS text after its files are inlined: the style sheets,
 * and the `style` attributes with a `url()` of one frame, together
 */
const MAX_INLINED_CSS_CHARS = 8 * 1024 * 1024;
const STYLES_ERROR =
    'The page styles are too large to capture. They use too many large images';
/** 1 for each ASCII character that `encodeURIComponent` keeps */
const URI_KEPT = Uint8Array.from({ length: 128 }, (_, code) =>
    /[A-Za-z0-9\-_.!~*'()]/.test(String.fromCharCode(code)) ? 1 : 0,
);
const MEMORY_ERROR =
    'The capture needs more memory than the limit. Use a smaller width';
/** Time that the browser can take to draw one frame */
const RENDER_TIMEOUT_MS = 15 * 1000;
/** Time that reading one style sheet, font or image can take */
const FETCH_TIMEOUT_MS = 10 * 1000;
/** Bytes of an animated WebP outside its frames: RIFF header, `VP8X` and `ANIM` */
const WEBP_HEADER_BYTES = 12 + 18 + 14;
/** Bytes of the `ANMF` header of each animated WebP frame */
const WEBP_FRAME_HEADER_BYTES = 24;
const SNAPSHOT_QUALITY = 0.85;
const FRAME_QUALITY = 0.7;
const SVG_NS = 'http://www.w3.org/2000/svg';
const XHTML_NS = 'http://www.w3.org/1999/xhtml';
const URL_PATTERN = /url\(\s*(['"]?)([^'")]+?)\1\s*\)/g;
/** Elements whose content the DOM copy does not hold */
const LIVE_ELEMENTS =
    'img, image, canvas, video, iframe, input, textarea, select';
const EMPTY_IMAGE =
    'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

/** Snapshot of the screen, `width` pixels wide */
export async function captureSnapshot(width: number): Promise<CapturedMedia> {
    const render = await pageRenderer();
    const canvas = await render(width, 0);
    const mime = canEncodeWebp() ? 'image/webp' : 'image/png';
    const bytes = await canvasBytes(canvas, mime, SNAPSHOT_QUALITY);
    if (bytes.length > MAX_MEDIA_BYTES) {
        throw new Error('The snapshot is too large. Use a smaller width');
    }
    return {
        mime,
        bytes,
        width: canvas.width,
        height: canvas.height,
        frames: 1,
        duration: 0,
    };
}

/**
 * Short animation of the screen. Frames are taken at `fps` for `duration`
 * milliseconds. A frame that takes longer to draw makes the next frame
 * later, so a slow device gives fewer frames. Frame durations come from the
 * real capture times. Capture stops early at `MAX_MEDIA_BYTES`.
 */
export async function captureAnimation(
    options: AnimationOptions,
): Promise<CapturedMedia> {
    const render = await pageRenderer();
    const webp = options.format === 'webp' && canEncodeWebp();
    const interval = 1000 / options.fps;
    const max_frames = Math.max(
        1,
        Math.ceil((options.duration * options.fps) / 1000),
    );
    const start = performance.now();
    /** End of the animation. Each frame shows until the next frame, the last until the end */
    const end = start + options.duration;
    /** WebP files of the frames, and the time when each frame was taken */
    const files: Uint8Array[] = [];
    const times: number[] = [];
    let gif: GifWriter | null = null;
    let palette: GifPalette | null = null;
    /** GIF frame that waits for the time of the next frame, its duration */
    let pending: { indexes: Uint8Array; time: number } | null = null;
    /** End of the last GIF frame that was added */
    let gif_end = start;
    let bytes = WEBP_HEADER_BYTES;
    let width = 0;
    let height = 0;
    for (let i = 0; i < max_frames; i++) {
        const time = performance.now();
        if (i > 0 && time >= end) break;
        const canvas = await render(options.width, webp ? 0 : GIF_PIXEL_BYTES);
        if (!width) {
            width = canvas.width;
            height = canvas.height;
        }
        // All frames must have the size of the first frame. A resized window ends the capture
        if (canvas.width !== width || canvas.height !== height) break;
        if (webp) {
            const file = await canvasBytes(canvas, 'image/webp', FRAME_QUALITY);
            const size = file.length + WEBP_FRAME_HEADER_BYTES;
            if (bytes + size > MAX_MEDIA_BYTES) break;
            files.push(file);
            times.push(time);
            bytes += size;
        } else {
            const context = canvas.getContext('2d');
            if (!context) throw new Error('The canvas has no 2D context');
            const pixels = context.getImageData(0, 0, width, height).data;
            // The palette comes from the first frame
            palette ??= new GifPalette(pixels);
            gif ??= new GifWriter(width, height, palette);
            if (pending) {
                const added = gif.add(
                    pending.indexes,
                    time - pending.time,
                    MAX_MEDIA_BYTES,
                );
                pending = null;
                if (!added) break;
                gif_end = time;
            }
            pending = { indexes: palette.indexes(pixels), time };
        }
        const wait = time + interval - performance.now();
        if (wait > 0 && i < max_frames - 1) await sleep(wait);
    }
    if (webp) {
        if (!files.length) throw new Error('The first frame is too large');
        const frames: WebpFrame[] = files.map((file, i) => ({
            file,
            duration: (times[i + 1] ?? end) - times[i],
        }));
        return {
            mime: 'image/webp',
            bytes: animatedWebp(frames, width, height),
            width,
            height,
            frames: frames.length,
            duration: options.duration,
        };
    }
    if (
        pending &&
        gif?.add(pending.indexes, end - pending.time, MAX_MEDIA_BYTES)
    ) {
        gif_end = end;
    }
    if (!gif?.frames) throw new Error('The first frame is too large');
    return {
        mime: 'image/gif',
        bytes: gif.finish(),
        width,
        height,
        frames: gif.frames,
        // Shorter than requested when the size limit stopped the capture
        duration: Math.round(gif_end - start),
    };
}

/** Whether the browser can encode WebP images. Safari cannot */
export function canEncodeWebp() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    return canvas.toDataURL('image/webp').startsWith('data:image/webp');
}

/**
 * Function that draws the screen on a canvas. The styles and fonts are read
 * one time, so each frame of an animation copies only the DOM. Each frame
 * checks `MAX_CAPTURE_BYTES`, with `MAX_MEDIA_BYTES` kept for the file and
 * `pixel_bytes` for each pixel that the caller copies from the canvas.
 */
async function pageRenderer() {
    const inliner = new Inliner();
    const { styles, css_left } = await pageStyles(inliner);
    return async (max_width: number, pixel_bytes: number) => {
        const view_width = document.documentElement.clientWidth || innerWidth;
        const view_height =
            document.documentElement.clientHeight || innerHeight;
        const scale = Math.min(1, max_width / view_width);
        const width = Math.max(1, Math.round(view_width * scale));
        const height = Math.max(1, Math.round(view_height * scale));
        const { copy, generated, inlined } = await copyBody(
            inliner,
            scale,
            css_left,
        );
        /** Memory that the capture keeps other than the markup */
        const kept =
            inliner.chars +
            generated +
            width * height * (4 + pixel_bytes) +
            MAX_MEDIA_BYTES;
        const check = (markup_bytes: number) => {
            if (kept + markup_bytes > MAX_CAPTURE_BYTES) {
                throw new Error(MEMORY_ERROR);
            }
        };
        // The markup holds each inlined file one time for each use, and its
        // encoded copy holds them again. Check before the strings are made
        check(2 * (styles.length + inlined + generated));
        const svg = svgMarkup(styles, copy, view_width, view_height);
        // A string with a character above U+00FF takes 2 bytes per character
        const svg_bytes = svg.length * (/[^\u0000-\u00ff]/.test(svg) ? 2 : 1);
        check(svg_bytes + encodedLength(svg));
        const source = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        const image = await loadImage(source);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        if (!context) throw new Error('The canvas has no 2D context');
        context.fillStyle = pageBackground();
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        return canvas;
    };
}

/** SVG of the page copy. `:root` styles apply to the copied `html` element */
function svgMarkup(
    styles: string,
    body: HTMLElement,
    width: number,
    height: number,
) {
    const root = document.createElementNS(XHTML_NS, 'html');
    for (const attribute of Array.from(document.documentElement.attributes)) {
        root.setAttribute(attribute.name, attribute.value);
    }
    const head = document.createElementNS(XHTML_NS, 'head');
    const style = document.createElementNS(XHTML_NS, 'style');
    style.textContent = styles;
    head.append(style);
    root.append(head, body);
    const html = new XMLSerializer().serializeToString(root);
    return (
        `<svg xmlns="${SVG_NS}" width="${width}" height="${height}">` +
        `<foreignObject x="0" y="0" width="100%" height="100%">${html}</foreignObject></svg>`
    );
}

/**
 * Text of the style sheets with their files inlined. A sheet from another
 * origin is read again with `fetch`. Only font faces that the page loaded
 * are inlined, as icon fonts are large. `css_left` is what is left of
 * `MAX_INLINED_CSS_CHARS` for the `style` attributes of each frame.
 */
async function pageStyles(
    inliner: Inliner,
): Promise<{ styles: string; css_left: number }> {
    const budget = { left: MAX_INLINED_CSS_CHARS };
    const loaded = new Set<string>();
    document.fonts?.forEach((font) => {
        if (font.status === 'loaded') loaded.add(unquote(font.family));
    });
    const sheets = [
        ...Array.from(document.styleSheets),
        ...(document.adoptedStyleSheets ?? []),
    ];
    const parts: string[] = [];
    for (const sheet of sheets) {
        let css = '';
        try {
            css = rulesText(sheet.cssRules, loaded);
        } catch {
            const text = sheet.href
                ? ((await fetchBody(sheet.href, async (response) => {
                      let size = 0;
                      const blob = await readLimited(
                          response,
                          (bytes) => (size += bytes) <= MAX_INLINE_FILE_BYTES,
                      );
                      return blob ? blob.text() : null;
                  })) ?? '')
                : '';
            css = parsedRulesText(text, loaded);
        }
        parts.push(
            await inliner.css(css, sheet.href || document.baseURI, budget),
        );
    }
    return {
        styles: parts.join('\n').replace(/:root\b/g, 'html'),
        css_left: budget.left,
    };
}

/** Text of the rules. Font faces of fonts that the page did not load are left out */
function rulesText(rules: CSSRuleList, loaded: ReadonlySet<string>) {
    return Array.from(rules)
        .filter(
            (rule) =>
                !(rule instanceof CSSFontFaceRule) ||
                loaded.has(unquote(rule.style.getPropertyValue('font-family'))),
        )
        .map((rule) => rule.cssText)
        .join('\n');
}

/** `rulesText` of fetched CSS. Browsers without constructable sheets keep all of it */
function parsedRulesText(text: string, loaded: ReadonlySet<string>) {
    // `replaceSync` drops `@import` rules, so keep such a sheet as it is
    if (text.includes('@import')) return text;
    try {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(text);
        return rulesText(sheet.cssRules, loaded);
    } catch {
        return text;
    }
}

/**
 * Copy of the body with the content of live elements and inlined files.
 * `generated` counts the characters of canvas and video images. `inlined`
 * counts the characters of inlined files for each use, and all of each
 * `style` attribute that has a `url()`. Video frames are drawn at the size
 * that the capture `scale` needs.
 */
async function copyBody(
    inliner: Inliner,
    scale: number,
    css_left: number,
): Promise<{ copy: HTMLElement; generated: number; inlined: number }> {
    const copy = document.body.cloneNode(true) as HTMLElement;
    freezeAnimations(document.body, copy);
    const originals = Array.from(document.body.querySelectorAll(LIVE_ELEMENTS));
    const copies = Array.from(copy.querySelectorAll(LIVE_ELEMENTS));
    /** Characters of canvas and video images that this frame can still add */
    const budget = { left: MAX_GENERATED_CHARS, inlined: 0, scale };
    // The copy has the same tree, so the lists have the same order
    await Promise.all(
        originals.map((original, i) =>
            copyLiveElement(original, copies[i], inliner, budget),
        ),
    );
    const styled = Array.from(
        copy.querySelectorAll<HTMLElement>('[style*="url("]'),
    );
    const css_budget = { left: css_left };
    // Wait for all reads, so no read runs after a failed capture ends
    const results = await Promise.allSettled(
        styled.map(async (element) => {
            const style = await inliner.css(
                element.getAttribute('style') ?? '',
                document.baseURI,
                css_budget,
            );
            budget.inlined += style.length;
            element.setAttribute('style', style);
        }),
    );
    const failed = results.find((_) => _.status === 'rejected');
    if (failed) throw failed.reason;
    copy.querySelectorAll('script, noscript, template').forEach((_) =>
        _.remove(),
    );
    return {
        copy,
        generated: MAX_GENERATED_CHARS - budget.left,
        inlined: budget.inlined,
    };
}

/**
 * Copy the current values of CSS animations and transitions to the copy, and
 * stop them there. The copy would start its animations again, so an element
 * that fades in would show at its first frame.
 */
function freezeAnimations(body: HTMLElement, copy: HTMLElement) {
    const animations = document.getAnimations?.() ?? [];
    if (!animations.length) return;
    const originals = Array.from(body.getElementsByTagName('*'));
    const copies = copy.getElementsByTagName('*');
    // The copy has the same tree, so both lists have the same order
    const positions = new Map(originals.map((element, i) => [element, i]));
    for (const animation of animations) {
        const effect = animation.effect;
        if (!(effect instanceof KeyframeEffect) || effect.pseudoElement)
            continue;
        const position = effect.target
            ? positions.get(effect.target)
            : undefined;
        const target = position === undefined ? null : copies[position];
        if (
            !effect.target ||
            !(target instanceof HTMLElement || target instanceof SVGElement)
        ) {
            continue;
        }
        const computed = getComputedStyle(effect.target);
        for (const keyframe of effect.getKeyframes()) {
            for (const property of Object.keys(keyframe)) {
                if (KEYFRAME_FIELDS.has(property)) continue;
                const name = property.startsWith('--')
                    ? property
                    : property.replace(/[A-Z]/g, (_) => `-${_.toLowerCase()}`);
                target.style.setProperty(name, computed.getPropertyValue(name));
            }
        }
        target.style.setProperty('animation', 'none');
        target.style.setProperty('transition', 'none');
    }
}

/** Fields of a keyframe that are not CSS properties */
const KEYFRAME_FIELDS = new Set([
    'offset',
    'computedOffset',
    'easing',
    'composite',
]);

async function copyLiveElement(
    original: Element,
    copy: Element,
    inliner: Inliner,
    budget: { left: number; inlined: number; scale: number },
) {
    /** Data URL of an inlined file, counted for each use */
    const inline = async (url: string) => {
        const data = url ? await inliner.file(url) : null;
        budget.inlined += data?.length ?? 0;
        return data;
    };
    /** Keep a generated data URL only while the frame has budget for it */
    const charge = (data: string | null) => {
        if (!data || data.length > budget.left) return null;
        budget.left -= data.length;
        return data;
    };
    if (original instanceof HTMLImageElement) {
        const source = original.currentSrc || original.src;
        copy.removeAttribute('srcset');
        copy.removeAttribute('loading');
        copy.setAttribute('src', (await inline(source)) || EMPTY_IMAGE);
    } else if (original instanceof SVGImageElement) {
        const source = original.href.baseVal;
        const url = source ? new URL(source, document.baseURI).href : '';
        copy.removeAttribute('xlink:href');
        copy.setAttribute('href', (await inline(url)) || EMPTY_IMAGE);
    } else if (original instanceof HTMLCanvasElement) {
        copy.replaceWith(
            imageLike(
                original,
                copy,
                charge(dataUrlOf(() => original.toDataURL())),
            ),
        );
    } else if (original instanceof HTMLVideoElement) {
        copy.replaceWith(
            imageLike(
                original,
                copy,
                charge(videoFrame(original, budget.scale)),
            ),
        );
    } else if (original instanceof HTMLIFrameElement) {
        copy.replaceWith(imageLike(original, copy, null));
    } else if (original instanceof HTMLInputElement) {
        if (original.type === 'checkbox' || original.type === 'radio') {
            copy.toggleAttribute('checked', original.checked);
        } else {
            // Passwords stay hidden
            copy.setAttribute(
                'value',
                original.type === 'password' ? '' : original.value,
            );
        }
    } else if (original instanceof HTMLTextAreaElement) {
        copy.textContent = original.value;
    } else if (original instanceof HTMLSelectElement) {
        Array.from(copy.querySelectorAll('option')).forEach((option, i) =>
            option.toggleAttribute('selected', i === original.selectedIndex),
        );
    }
}

/**
 * Image with the size and classes of `element`, for its `copy`. The style of
 * the copy is kept, as it holds frozen animation values. `null` shows an
 * empty grey area.
 */
function imageLike(element: HTMLElement, copy: Element, source: string | null) {
    const image = document.createElementNS(XHTML_NS, 'img') as HTMLImageElement;
    // The size before transforms, as the copy's style keeps the transform
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const style = getComputedStyle(element);
    image.setAttribute('class', element.getAttribute('class') ?? '');
    image.setAttribute(
        'style',
        `${copy.getAttribute('style') ?? ''};width:${width}px;height:${height}px;` +
            `object-fit:${style.objectFit};${source ? '' : 'background:#cbd5e1;'}`,
    );
    image.setAttribute('src', source || EMPTY_IMAGE);
    return image;
}

/**
 * Current frame of a video, at the size that the element shows in a capture
 * at `scale`, so a 4K video does not need a 4K canvas. The frame fits in the
 * element, so its pixels are not more than the element's pixels. `null`
 * when the page cannot read it.
 */
function videoFrame(video: HTMLVideoElement, scale: number) {
    const { videoWidth, videoHeight } = video;
    if (!videoWidth || !videoHeight) return null;
    const ratio = Math.min(
        1,
        (video.offsetWidth * scale) / videoWidth,
        (video.offsetHeight * scale) / videoHeight,
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(videoWidth * ratio));
    canvas.height = Math.max(1, Math.round(videoHeight * ratio));
    return dataUrlOf(() => {
        canvas
            .getContext('2d')
            ?.drawImage(video, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/jpeg', 0.8);
    });
}

/** Data URL from `read`. `null` when the content is cross-origin */
function dataUrlOf(read: () => string) {
    try {
        return read();
    } catch {
        return null;
    }
}

/** Background colour of the page, under the drawn copy */
function pageBackground() {
    for (const element of [document.body, document.documentElement]) {
        const colour = getComputedStyle(element).backgroundColor;
        if (
            colour &&
            colour !== 'transparent' &&
            colour !== 'rgba(0, 0, 0, 0)'
        ) {
            return colour;
        }
    }
    return '#ffffff';
}

/**
 * Reads files as data URLs for one capture. Each address is read one time.
 * All reads together stop at `MAX_INLINE_BYTES`, and each read stops at
 * `MAX_INLINE_FILE_BYTES`. A file that a read stops is not inlined.
 */
class Inliner {
    private readonly _files = new Map<string, Promise<string | null>>();
    private _bytes = 0;
    private _chars = 0;

    /** Characters of the data URLs that the inliner keeps. Each is 1 byte */
    public get chars() {
        return this._chars;
    }

    /** Data URL of a file. `null` when the file cannot be read or is too large */
    public file(url: string): Promise<string | null> {
        if (url.startsWith('data:')) return Promise.resolve(url);
        let file = this._files.get(url);
        if (!file) {
            file = this._read(url);
            this._files.set(url, file);
        }
        return file;
    }

    /**
     * CSS text with each `url()` changed to a data URL. The text is charged
     * to `budget`. Throws when the budget is too small.
     */
    public async css(
        css: string,
        base: string,
        budget: { left: number },
    ): Promise<string> {
        const urls = new Map<string, string | null>();
        /** Number of uses of each address */
        const uses = new Map<string, number>();
        for (const match of css.matchAll(URL_PATTERN)) {
            const address = match[2];
            if (address.startsWith('data:') || address.startsWith('#'))
                continue;
            urls.set(address, null);
            uses.set(address, (uses.get(address) ?? 0) + 1);
        }
        await Promise.all(
            Array.from(urls.keys()).map(async (address) => {
                const absolute = safeUrl(address, base);
                urls.set(address, absolute ? await this.file(absolute) : null);
            }),
        );
        // Each use adds a copy of the file, so check before the text is made
        let length = css.length;
        for (const [address, data] of urls) {
            length += (data?.length ?? 0) * (uses.get(address) ?? 0);
        }
        // The budget changes before the text is made, so CSS texts that are
        // made at the same time share it
        if (length > budget.left) throw new Error(STYLES_ERROR);
        budget.left -= length;
        return css.replace(URL_PATTERN, (text, _quote, address: string) => {
            const data = urls.get(address);
            return data ? `url("${data}")` : text;
        });
    }

    private async _read(url: string): Promise<string | null> {
        let size = 0;
        const blob = await fetchBody(url, async (response) => {
            // Skip a file that is too large before its body is read
            const length = Number(response.headers.get('content-length'));
            if (length > MAX_INLINE_FILE_BYTES) return null;
            // Bytes count as they arrive, so reads that run at the same
            // time share the limit
            return readLimited(response, (bytes) => {
                size += bytes;
                this._bytes += bytes;
                return (
                    size <= MAX_INLINE_FILE_BYTES &&
                    this._bytes <= MAX_INLINE_BYTES
                );
            });
        });
        if (!blob) {
            this._bytes -= size;
            return null;
        }
        const data = await blobDataUrl(blob).catch(() => null);
        this._chars += data?.length ?? 0;
        return data;
    }
}

/**
 * Body of a file from `read`. `null` when the file cannot be read, or when
 * the request and `read` take longer than `FETCH_TIMEOUT_MS`, so a stalled
 * request cannot stop the capture.
 */
async function fetchBody<T>(
    url: string,
    read: (response: Response) => Promise<T | null>,
): Promise<T | null> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
        const response = await fetch(url, { signal: controller.signal });
        return response.ok ? await read(response) : null;
    } catch {
        return null;
    } finally {
        clearTimeout(timer);
        // Also cancels a body that was not read, such as a file that is too large
        controller.abort();
    }
}

/**
 * Body of a response. Before it keeps each chunk, the read calls `take` with
 * the size of the chunk. When `take` returns false, the read stops and gives
 * `null`, so a body without a `Content-Length` cannot be larger than the limit.
 */
export async function readLimited(
    response: Response,
    take: (bytes: number) => boolean,
): Promise<Blob | null> {
    const reader = response.body?.getReader();
    if (!reader) return null;
    const chunks: Uint8Array<ArrayBuffer>[] = [];
    // `take` stops a long body, and `fetchBody` stops a body that stalls
    for (;;) {
        const { done, value } = await reader.read();
        if (done) {
            const type = response.headers.get('content-type') ?? '';
            return new Blob(chunks, { type });
        }
        if (!take(value.byteLength)) {
            void reader.cancel().catch(() => undefined);
            return null;
        }
        chunks.push(value);
    }
}

/**
 * Length of `encodeURIComponent(text)`, without making the string. The
 * characters that the function keeps take 1 character, other ASCII
 * characters take 3, and other characters take 3 for each UTF-8 byte.
 */
export function encodedLength(text: string) {
    let length = 0;
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code < 0x80) length += URI_KEPT[code] ? 1 : 3;
        else if (code < 0x800) length += 6;
        // A surrogate pair is one character of 4 UTF-8 bytes: 6 for each half
        else if (code >= 0xd800 && code <= 0xdfff) length += 6;
        else length += 9;
    }
    return length;
}

function safeUrl(address: string, base: string) {
    try {
        return new URL(address, base).href;
    } catch {
        return '';
    }
}

function unquote(text: string) {
    return text.trim().replace(/^(['"])(.*)\1$/, '$2');
}

function blobDataUrl(blob: Blob) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(`${reader.result}`);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}

function loadImage(source: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        const timer = setTimeout(
            () => reject(new Error('The page did not finish drawing in time')),
            RENDER_TIMEOUT_MS,
        );
        image.onload = () => {
            clearTimeout(timer);
            resolve(image);
        };
        image.onerror = () => {
            clearTimeout(timer);
            reject(new Error('The browser could not draw the page'));
        };
        image.src = source;
    });
}

async function canvasBytes(
    canvas: HTMLCanvasElement,
    mime: string,
    quality: number,
): Promise<Uint8Array<ArrayBuffer>> {
    const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, mime, quality),
    );
    if (!blob) throw new Error('The browser could not encode the image');
    return new Uint8Array(await blob.arrayBuffer());
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
