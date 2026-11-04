import { DurationPipe } from '../lib/duration.pipe';

describe('DurationPipe', () => {
    it('shortens English units without removing other letters', () => {
        const pipe = new DurationPipe();
        expect(pipe.transform(150, true)).toBe('2h 30m');
        expect(pipe.transform(61, true)).toBe('1h 1m');
    });
});
