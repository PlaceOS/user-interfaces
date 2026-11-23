import {
    captureSnapshot,
    encodedLength,
    readLimited,
} from '../lib/screen-capture';

describe('readLimited', () => {
    /** Response without a `Content-Length`, that sends `count` chunks of 1 KB */
    const streamed = (count: number) => {
        let sent = 0;
        const body = new ReadableStream<Uint8Array>({
            pull(controller) {
                if (sent++ < count) controller.enqueue(new Uint8Array(1024));
                else controller.close();
            },
        });
        return { response: new Response(body), sent: () => sent };
    };

    it('should stop reading a body at the limit', async () => {
        const { response, sent } = streamed(100);
        let size = 0;

        const blob = await readLimited(response, (bytes) => {
            size += bytes;
            return size <= 4 * 1024;
        });

        expect(blob).toBeNull();
        // The read stops at the chunk over the limit, and does not read the rest
        expect(sent()).toBeLessThan(10);
    });

    it('should give the body when it is in the limit', async () => {
        const { response } = streamed(3);

        const blob = await readLimited(response, () => true);

        expect(blob?.size).toBe(3 * 1024);
    });
});

describe('encodedLength', () => {
    it('should give the length of the encoded text', () => {
        for (const text of ['<svg a="1">', "a-_.!~*'()z", 'é', '€ 😀 ok']) {
            expect(encodedLength(text)).toBe(encodeURIComponent(text).length);
        }
    });
});

describe('captureSnapshot', () => {
    afterEach(() => {
        document.body.textContent = '';
        vi.restoreAllMocks();
    });

    it('should stop before it encodes markup that is over the memory limit', async () => {
        // Each character takes 2 bytes in the markup and 9 when encoded
        document.body.textContent = '€'.repeat(2_000_000);
        const encode = vi.spyOn(globalThis, 'encodeURIComponent');

        await expect(captureSnapshot(1280)).rejects.toThrow(
            'more memory than the limit',
        );
        expect(encode).not.toHaveBeenCalled();
    });
});
