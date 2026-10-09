import {
    generateThumbnailFromResource,
    generateVideoThumbnail,
    getMediaMetadata,
    imageSourceSize,
} from '../../app/media/media-file.util';

describe('media file thumbnails', () => {
    let context: Record<string, any>;
    let canvas: Record<string, any>;
    /** Order of drawing operations, so a fill after the draw is still caught */
    let operations: string[];

    beforeEach(() => {
        operations = [];
        context = {
            fillStyle: '',
            fillRect: vi.fn(() => operations.push('fillRect')),
            drawImage: vi.fn(() => operations.push('drawImage')),
        };
        canvas = {
            width: 0,
            height: 0,
            getContext: () => context,
            toDataURL: vi.fn(() => 'data:image/jpeg;base64,rendered'),
        };
        vi.spyOn(document, 'createElement').mockImplementation(
            (tag: string) =>
                (tag === 'canvas' ? canvas : {}) as HTMLElement as any,
        );
    });

    afterEach(() => vi.restoreAllMocks());

    const render = () => {
        return generateThumbnailFromResource(
            { width: 200, height: 100 } as any,
            200,
            100,
            1280,
            720,
        );
    };

    // JPEG carries no alpha, so a transparent source is written out as black
    // unless the canvas is given a background first.
    it('should fill an opaque background before drawing', () => {
        render();

        expect(context.fillRect).toHaveBeenCalled();
        expect(context.fillStyle).toBe('#ffffff');
        expect(operations).toEqual(['fillRect', 'drawImage']);
    });

    it('should cover the whole thumbnail with the background', () => {
        render();

        expect(context.fillRect).toHaveBeenCalledWith(0, 0, 200, 100);
    });

    it('should never size the canvas fractionally or to zero', () => {
        // 1000x333 scaled into a 500 wide box gives a fractional height
        generateThumbnailFromResource({} as any, 1000, 333, 500, 500);

        expect(Number.isInteger(canvas.width)).toBe(true);
        expect(Number.isInteger(canvas.height)).toBe(true);
        expect(canvas.width).toBeGreaterThan(0);
        expect(canvas.height).toBeGreaterThan(0);
    });

    describe('source dimensions', () => {
        const size = (source: any, max_w = 1280, max_h = 720) => {
            return imageSourceSize(source, max_w, max_h);
        };

        it('should prefer the intrinsic size of an image element', () => {
            expect(
                size({
                    naturalWidth: 800,
                    naturalHeight: 600,
                    width: 0,
                    height: 0,
                }),
            ).toEqual({ width: 800, height: 600 });
        });

        it('should use the bitmap size when there is no intrinsic size', () => {
            expect(size({ width: 640, height: 480 })).toEqual({
                width: 640,
                height: 480,
            });
        });

        // Firefox reports 0 for an SVG with no intrinsic size, which would
        // otherwise produce a zero sized canvas and a blank thumbnail
        it('should fall back to the target box for a zero sized source', () => {
            expect(size({ width: 0, height: 0 }, 1024, 720)).toEqual({
                width: 1024,
                height: 720,
            });
        });
    });

    describe('video frames', () => {
        // Firefox fires loadeddata before a frame can be painted, so capturing
        // there yields a black thumbnail. Seeking forces a decoded frame.
        function fakeVideo() {
            return {
                muted: false,
                playsInline: false,
                preload: '',
                src: '',
                currentTime: 0,
                duration: 12,
                videoWidth: 640,
                videoHeight: 360,
                onseeked: null as null | (() => void),
                onloadeddata: null as null | (() => void),
                onerror: null as null | (() => void),
                removeAttribute: vi.fn(),
                load: vi.fn(),
            };
        }

        it('should wait for a seek rather than capturing on loadeddata', async () => {
            const video = fakeVideo();
            vi.spyOn(document, 'createElement').mockImplementation(
                (tag: string) => (tag === 'video' ? video : canvas) as any,
            );

            const pending = generateVideoThumbnail(
                new File([], 'clip.mp4'),
                1280,
                720,
            );
            video.onloadeddata!();

            // Nothing drawn yet; the frame is not guaranteed to be paintable
            expect(context.drawImage).not.toHaveBeenCalled();
            expect(video.currentTime).toBeGreaterThan(0);

            video.onseeked!();
            await pending;

            expect(context.drawImage).toHaveBeenCalled();
        });

        it('should capture directly when already at the seek target', async () => {
            const video = fakeVideo();
            video.currentTime = 0.1;
            vi.spyOn(document, 'createElement').mockImplementation(
                (tag: string) => (tag === 'video' ? video : canvas) as any,
            );

            const pending = generateVideoThumbnail(
                new File([], 'clip.mp4'),
                1280,
                720,
            );
            video.onloadeddata!();
            await pending;

            expect(context.drawImage).toHaveBeenCalled();
        });
    });
});

describe('getMediaMetadata', () => {
    const create_url = URL.createObjectURL;
    const revoke_url = URL.revokeObjectURL;
    /** Element events the function listens to, fired by each test */
    let element: {
        onload?: () => void;
        onloadedmetadata?: () => void;
        onerror?: () => void;
        src?: string;
        preload?: string;
    };

    beforeEach(() => {
        element = {};
        URL.createObjectURL = vi.fn(() => 'blob:media');
        URL.revokeObjectURL = vi.fn();
        vi.spyOn(document, 'createElement').mockReturnValue(
            element as unknown as HTMLElement,
        );
        vi.stubGlobal(
            'Image',
            vi.fn(function () {
                return element;
            }),
        );
    });

    afterEach(() => {
        URL.createObjectURL = create_url;
        URL.revokeObjectURL = revoke_url;
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it.each([
        ['an image', new File(['x'], 'broken.png', { type: 'image/png' })],
        ['a video', new File(['x'], 'broken.mp4', { type: 'video/mp4' })],
    ])(
        'rejects and frees the file URL when %s cannot be decoded',
        async (_name, file) => {
            const pending = getMediaMetadata(file);
            element.onerror!();

            await expect(pending).rejects.toThrow();
            expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:media');
        },
    );

    it('rejects when the browser never reads the file', async () => {
        vi.useFakeTimers();
        const pending = getMediaMetadata(
            new File(['x'], 'clip.mp4', { type: 'video/mp4' }),
        );
        const result = expect(pending).rejects.toThrow();

        await vi.advanceTimersByTimeAsync(15 * 1000);

        await result;
        expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:media');
    });
});
