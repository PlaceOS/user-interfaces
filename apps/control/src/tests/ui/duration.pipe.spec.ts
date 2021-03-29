
import { DurationPipe } from '../../app/ui/duration.pipe';

describe('DurationPipe', () => {

    let pipe: DurationPipe

    beforeEach(() => (pipe = new DurationPipe()));

    it('should create pipe', () => {
        expect(pipe).toBeTruthy();
    });

    it('should convert number into a duration value', () => {
        expect(pipe.transform(5)).toBe('00:05');
        expect(pipe.transform(30)).toBe('00:30');
        expect(pipe.transform(90)).toBe('01:30');
        expect(pipe.transform(650)).toBe('10:50');
        expect(pipe.transform(4230)).toBe('01:10:30');
        expect(pipe.transform(360000)).toBe('100:00:00');
    })
});
