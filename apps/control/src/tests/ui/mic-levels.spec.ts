import { MIC_LEVEL_BARS, MicLevels } from '../../app/ui/mic-levels';

describe('MicLevels', () => {
    let disconnect: ReturnType<typeof vi.fn>;
    let frequency_data: number[];

    beforeEach(() => {
        disconnect = vi.fn();
        frequency_data = [];
    });

    const context = (state: AudioContextState = 'running') =>
        ({
            state,
            sampleRate: 48000,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            createMediaStreamSource: () => ({ connect: vi.fn(), disconnect }),
            createAnalyser: () => ({
                fftSize: 0,
                frequencyBinCount: 256,
                getByteFrequencyData: (bytes: Uint8Array) =>
                    bytes.set(frequency_data.slice(0, bytes.length)),
            }),
        }) as unknown as AudioContext;
    const stream = {} as MediaStream;

    it('should be ready once open and disconnect on close', () => {
        const levels = new MicLevels();
        levels.open(context(), stream);
        expect(levels.ready()).toBe(true);
        levels.close();
        expect(levels.ready()).toBe(false);
        expect(disconnect).toHaveBeenCalled();
    });

    it('should not be ready while the audio context is suspended', () => {
        const levels = new MicLevels();
        levels.open(context('suspended'), stream);
        expect(levels.ready()).toBe(false);
    });

    it('should average speech frequencies into bars from 0 to 1', () => {
        const levels = new MicLevels();
        expect(Array.from(levels.read())).toEqual(
            new Array(MIC_LEVEL_BARS).fill(0),
        );
        levels.open(context(), stream);
        // 93.75 Hz bins: the lowest band (100-197 Hz) is bin 1
        frequency_data = new Array(256)
            .fill(0)
            .map((_, i) => (i === 1 ? 255 : 0));
        const result = Array.from(levels.read());
        expect(result[0]).toBe(1);
        expect(result.slice(1).every((_) => _ === 0)).toBe(true);
    });
});
