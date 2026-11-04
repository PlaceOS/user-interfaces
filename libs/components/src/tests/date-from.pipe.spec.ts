import { DateFromPipe } from '../lib/date-from.pipe';

describe('DateFromPipe', () => {
    it('shows the date for times more than a year away', () => {
        const pipe = new DateFromPipe();
        const date = new Date(2020, 0, 2).valueOf();
        expect(pipe.transform(date)).toBe('02 Jan 2020');
    });
});
