import { createPipeFactory } from '@ngneat/spectator/vitest';
import { DateFromPipe } from '../lib/date-from.pipe';

describe('DateFromPipe', () => {
    const createPipe = createPipeFactory(DateFromPipe);

    afterEach(() => vi.restoreAllMocks());

    it('shows the date for times more than a year away', () => {
        const pipe = new DateFromPipe();
        const date = new Date(2020, 0, 2).valueOf();
        expect(pipe.transform(date)).toBe('02 Jan 2020');
    });

    it('updates the text as time passes', () => {
        const sent = new Date(2026, 0, 1, 12).valueOf();
        const now = vi.spyOn(Date, 'now').mockReturnValue(sent);
        const spectator = createPipe(`{{ sent | dateFrom }}`, {
            hostProps: { sent },
        });
        expect(spectator.element).toHaveText('Now');

        // Any later change detection, such as from an event, shows the new text
        now.mockReturnValue(sent + 5 * 60 * 1000);
        spectator.fixture.componentRef.changeDetectorRef.markForCheck();
        spectator.detectChanges();
        expect(spectator.element).toHaveText('5 min');
    });
});
