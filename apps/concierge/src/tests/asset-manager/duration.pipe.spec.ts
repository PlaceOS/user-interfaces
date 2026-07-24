import { DurationFormatPipe } from '../../app/asset-manager/duration.pipe';

describe('DurationFormatPipe', () => {
    let pipe: DurationFormatPipe;

    beforeEach(() => (pipe = new DurationFormatPipe()));

    it('should abbreviate units in short form by default', () => {
        const short = pipe.transform(90);

        expect(short).toContain('hr');
        expect(short).toContain('min');
        expect(short).not.toContain('hour');
        expect(short).not.toContain('minute');
    });

    it('should keep full unit names in long form', () => {
        const long = pipe.transform(90, false);

        expect(long).toContain('hour');
        expect(long).toContain('minute');
    });

    it('should include days when the duration exceeds a full day', () => {
        const value = pipe.transform(24 * 60 + 60, false);

        expect(value).toContain('day');
        expect(value).toContain('hour');
    });
});
