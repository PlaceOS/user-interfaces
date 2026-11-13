import { flipLightness, inkIsLight } from '../../app/branding/logo-variant';

/** RGBA value of one pixel */
type Pixel = [number, number, number, number];

describe('logo variants', () => {
    let pixels: Uint8ClampedArray;
    let written: Uint8ClampedArray | null;

    /** Serve `logo` as the decoded image, one row of pixels */
    function withLogo(logo: Pixel[]) {
        pixels = new Uint8ClampedArray(logo.flat());
        vi.stubGlobal(
            'Image',
            class {
                public naturalWidth = logo.length;
                public naturalHeight = 1;
                public onload?: () => void;
                public set src(_url: string) {
                    setTimeout(() => this.onload?.());
                }
            },
        );
    }

    beforeEach(() => {
        written = null;
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
            drawImage: vi.fn(),
            getImageData: () => ({ data: pixels }),
            putImageData: (image: { data: Uint8ClampedArray }) => {
                written = new Uint8ClampedArray(image.data);
            },
        } as never);
        vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation(
            (done) => done(new Blob(['png'], { type: 'image/png' })),
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    describe('inkIsLight', () => {
        it('reads light and dark ink', async () => {
            withLogo([[255, 255, 255, 255]]);
            await expect(inkIsLight('logo.png')).resolves.toBe(true);

            withLogo([[20, 20, 20, 255]]);
            await expect(inkIsLight('logo.png')).resolves.toBe(false);
        });

        it('ignores pixels that are almost transparent', async () => {
            withLogo([[255, 255, 255, 20]]);

            await expect(inkIsLight('logo.png')).resolves.toBe(false);
        });

        it('reads a fully transparent logo as dark ink', async () => {
            withLogo([[255, 255, 255, 0]]);

            await expect(inkIsLight('logo.png')).resolves.toBe(false);
        });
    });

    describe('flipLightness', () => {
        it('flips lightness, keeps hue and alpha, and skips transparent pixels', async () => {
            withLogo([
                [0, 0, 0, 255],
                [64, 64, 64, 128],
                [0, 0, 128, 255],
                [10, 20, 30, 0],
            ]);

            const file = await flipLightness('logo.png', 'logo-on-dark.png');

            expect(Array.from(written ?? [])).toEqual([
                ...[255, 255, 255, 255],
                ...[191, 191, 191, 128],
                // Dark blue turns light blue
                ...[127, 127, 255, 255],
                ...[10, 20, 30, 0],
            ]);
            expect(file.name).toBe('logo-on-dark.png');
            expect(file.type).toBe('image/png');
        });

        it('rejects when the logo cannot be decoded', async () => {
            vi.stubGlobal(
                'Image',
                class {
                    public onerror?: () => void;
                    public set src(_url: string) {
                        setTimeout(() => this.onerror?.());
                    }
                },
            );

            await expect(flipLightness('logo.png', 'x.png')).rejects.toThrow(
                'logo could not be read',
            );
        });
    });
});
