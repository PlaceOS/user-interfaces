import { MediaDurationPipe } from '../lib/media-duration.pipe';

describe('MediaDurationPipe', () => {
    const pipe = new MediaDurationPipe();

    it('shows minutes and seconds, and hours only from one hour', () => {
        expect(pipe.transform(0)).toBe('00:00');
        expect(pipe.transform(65)).toBe('01:05');
        expect(pipe.transform(3599)).toBe('59:59');
        expect(pipe.transform(3725)).toBe('01:02:05');
    });

    it('shows milliseconds when asked', () => {
        expect(pipe.transform(65.25, true)).toBe('01:05.250');
        expect(pipe.transform(3725.5, true)).toBe('01:02:05.500');
    });

    it('keeps the exact milliseconds of a time given in ms / 1000', () => {
        // 1.001 * 1000 is 1000.9999999999999 in floating point
        expect(pipe.transform(1001 / 1000, true)).toBe('00:01.001');
        expect(pipe.transform(59999 / 1000, true)).toBe('00:59.999');
    });
});
