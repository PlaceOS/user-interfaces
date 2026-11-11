import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';

import { SpaceEventDetailsComponent } from '../app/space-event-details.component';

describe('SpaceEventDetailsComponent', () => {
    let spectator: SpectatorRouting<SpaceEventDetailsComponent>;
    const createComponent = createRoutingFactory(SpaceEventDetailsComponent);
    const day = new Date(2026, 0, 1).valueOf();
    /** Time on the test day. Supports fractional hours */
    const time = (hour: number) => day + hour * 60 * 60 * 1000;
    const event = (data: Partial<CalendarEvent> = {}) =>
        new CalendarEvent({
            title: 'Standup',
            event_start: time(10) / 1000,
            event_end: time(11) / 1000,
            ...data,
        });

    beforeEach(() => (spectator = createComponent()));

    it('should hide the title of private events and when titles are hidden', () => {
        expect('[event]').not.toExist();

        spectator.setInput({ event: event() });
        expect('h2').toHaveText('Standup');

        spectator.setInput({ hide_title: true });
        expect('h2').toHaveExactTrimmedText('Booked');

        spectator.setInput({
            hide_title: false,
            event: event({ private: true }),
        });
        expect('h2').toHaveExactTrimmedText('Booked');
    });

    it('should mark the booking in progress and fade it when done', () => {
        spectator.setInput({ event: event(), now: time(9) });
        expect('[event]').toHaveClass('border-base-300');
        expect('[event]').not.toHaveClass('opacity-30!');

        spectator.setInput({ now: time(10.5) });
        expect('[event]').toHaveClass('border-info');
        expect('[event]').not.toHaveClass('border-base-300');

        // A booking is done the moment it ends
        spectator.setInput({ now: time(11) });
        expect('[event]').toHaveClass('opacity-30!');
        expect('[event]').not.toHaveClass('border-info');
    });
});
