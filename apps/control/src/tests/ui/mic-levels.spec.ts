import { MIC_LEVEL_BARS, MicLevels } from '../../app/ui/mic-levels';

describe('MicLevels', () => {
    let stop_track: ReturnType<typeof vi.fn>;
    let resolve_stream: (stream: unknown) => void;
    let context_state: AudioContextState;
    let frequency_data: number[];

    beforeEach(() => {
        stop_track = vi.fn();
        context_state = 'running';
        frequency_data = [];
        Object.defineProperty(navigator, 'mediaDevices', {
            configurable: true,
            value: {
                getUserMedia: vi.fn(
                    () => new Promise((resolve) => (resolve_stream = resolve)),
                ),
            },
        });
        (window as any).AudioContext = function () {
            this.state = context_state;
            this.sampleRate = 48000;
            this.resume = vi.fn(() => Promise.resolve());
            this.close = vi.fn(() => Promise.resolve());
            this.createMediaStreamSource = () => ({ connect: vi.fn() });
            this.createAnalyser = () => ({
                fftSize: 0,
                frequencyBinCount: 256,
                getByteFrequencyData: (bytes: Uint8Array) =>
                    bytes.set(frequency_data.slice(0, bytes.length)),
            });
        };
    });

    afterEach(() => {
        delete (window as any).AudioContext;
        delete (navigator as any).mediaDevices;
    });

    const stream = () => ({ getTracks: () => [{ stop: stop_track }] });

    it('should be ready once the stream opens and release it on close', async () => {
        const levels = new MicLevels();
        const opening = levels.open();
        resolve_stream(stream());
        await opening;
        expect(levels.ready()).toBe(true);
        levels.close();
        expect(levels.ready()).toBe(false);
        expect(stop_track).toHaveBeenCalled();
    });

    it('should stop a stream that opens after close', async () => {
        const levels = new MicLevels();
        const opening = levels.open();
        levels.close();
        resolve_stream(stream());
        await opening;
        expect(stop_track).toHaveBeenCalled();
        expect(levels.ready()).toBe(false);
    });

    it('should not be ready while the audio context is suspended', async () => {
        context_state = 'suspended';
        const levels = new MicLevels();
        const opening = levels.open();
        resolve_stream(stream());
        await opening;
        expect(levels.ready()).toBe(false);
    });

    it('should average speech frequencies into bars from 0 to 1', async () => {
        const levels = new MicLevels();
        expect(Array.from(levels.read())).toEqual(
            new Array(MIC_LEVEL_BARS).fill(0),
        );
        const opening = levels.open();
        resolve_stream(stream());
        await opening;
        // 93.75 Hz bins: the lowest band (100-197 Hz) is bin 1
        frequency_data = new Array(256)
            .fill(0)
            .map((_, i) => (i === 1 ? 255 : 0));
        const result = Array.from(levels.read());
        expect(result[0]).toBe(1);
        expect(result.slice(1).every((_) => _ === 0)).toBe(true);
    });
});
