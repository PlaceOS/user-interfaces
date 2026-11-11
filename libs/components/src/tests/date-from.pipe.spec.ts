import { createPipeFactory } from '@ngneat/spectator/vitest';
import { DateFromPipe } from '../lib/date-from.pipe';

describe('DateFromPipe', () => {
    const createPipe = createPipeFactory(DateFromPipe);
    const NOW = new Date(2026, 0, 14, 12).valueOf();
    const MINUTE = 60 * 1000;

    afterEach(() => vi.restoreAllMocks());

    it('shows minutes and hours with the direction of the time', () => {
        vi.spyOn(Date, 'now').mockReturnValue(NOW);
        const pipe = new DateFromPipe();

        expect(pipe.transform(NOW + 30 * 1000)).toBe('Soon');
        expect(pipe.transform(NOW - MINUTE)).toBe('1 min');
        expect(pipe.transform(NOW + MINUTE)).toBe('In 1 min');
        expect(pipe.transform(NOW + 59 * MINUTE)).toBe('In 59 min');
        expect(pipe.transform(NOW + 60 * MINUTE)).toBe('In 1 hour');
        expect(pipe.transform(NOW + 150 * MINUTE)).toBe('In 2 hours');
        // Past times in the last day show the time they happened
        expect(pipe.transform(NOW - 150 * MINUTE)).toBe('9:30');
    });

    it('shows the day for past times and the date for future times', () => {
        vi.spyOn(Date, 'now').mockReturnValue(NOW);
        const pipe = new DateFromPipe();
        const days = (count: number) => NOW + count * 24 * 60 * MINUTE;

        expect(pipe.transform(days(-2))).toBe('Mon 12:00');
        expect(pipe.transform(days(2))).toBe('16 Jan 2026');
        expect(pipe.transform(days(-30))).toBe('Dec 15 12:00');
        expect(pipe.transform(days(30))).toBe('13 Feb 2026');
        expect(pipe.transform(new Date(2020, 0, 2).valueOf())).toBe(
            '02 Jan 2020',
        );
    });

    it('updates the text as time passes', () => {
        const sent = new Date(2026, 0, 1, 12).valueOf();
        const now = vi.spyOn(Date, 'now').mockReturnValue(sent);
        const spectator = createPipe(`{{ sent | dateFrom }}`, {
            hostProps: { sent },
        });
        expect(spectator.element).toHaveText('Now');

        // Any later change detection, such as from an event, shows the new text
        now.mockReturnValue(sent + 5 * MINUTE);
        spectator.fixture.componentRef.changeDetectorRef.markForCheck();
        spectator.detectChanges();
        expect(spectator.element).toHaveText('5 min');
    });
});
