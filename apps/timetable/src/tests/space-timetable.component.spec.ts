import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { Space } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';

import { SpaceEventDetailsComponent } from '../app/space-event-details.component';
import { SpaceTimetableComponent } from '../app/space-timetable.component';

describe('SpaceTimetableComponent', () => {
    let spectator: SpectatorRouting<SpaceTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceTimetableComponent,
        declarations: [mockComponent(SpaceEventDetailsComponent)],
    });
    const day = new Date(2026, 0, 1).valueOf();
    /** Time on the test day. Supports fractional hours */
    const time = (hour: number) => day + hour * 60 * 60 * 1000;
    /** Booking from `start` to `end` hours on the test day */
    const booking = (id: string, start: number, end: number) => ({
        id,
        event_start: Math.floor(time(start) / 1000),
        event_end: Math.floor(time(end) / 1000),
    });

    /** Text of the element with whitespace collapsed */
    const text = (selector: string) =>
        spectator.query(selector).textContent.replace(/\s+/g, ' ').trim();

    beforeEach(() => (spectator = createComponent()));

    it('should clip bookings to the period and split overlaps into lanes', () => {
        spectator.setInput({ day, time_offset: 8, time_period: 10 });
        spectator.component.updateBookings([
            booking('early', 7, 9),
            booking('b', 10, 11),
            booking('a', 10, 12),
            booking('c', 11, 12),
            booking('d', 12, 13),
            booking('late', 17, 20),
            booking('tomorrow', 33, 34),
        ]);

        const layout = spectator.component
            .blocks()
            .map(({ event, top, height, left, width }) => [
                event.id,
                top,
                height,
                left,
                width,
            ]);
        // `c` reuses the lane `b` frees. `d` starts a new full-width group
        expect(layout).toEqual([
            ['early', 0, 10, 0, 100],
            ['a', 20, 20, 0, 50],
            ['b', 20, 10, 50, 50],
            ['c', 30, 10, 50, 50],
            ['d', 40, 10, 0, 100],
            ['late', 90, 10, 0, 100],
        ]);
    });

    it('should report when the room status changes today', () => {
        spectator.component.updateBookings([
            booking('a', 10, 11),
            booking('b', 11, 12),
            booking('c', 11.5, 12.5),
            booking('d', 14, 15),
            booking('tomorrow', 33, 34),
        ]);
        const statusAt = (hour: number) => {
            spectator.setInput({ day, now: time(hour) });
            return spectator.component.status();
        };

        expect(statusAt(9)).toEqual({ busy: false, until: time(10) });
        // Back-to-back and overlapping bookings make one busy period
        expect(statusAt(10.5)).toEqual({ busy: true, until: time(12.5) });
        expect(statusAt(13)).toEqual({ busy: false, until: time(14) });
        expect(statusAt(15)).toEqual({ busy: false, until: 0 });
    });

    it('should show the space name and its status', () => {
        spectator.setInput({
            space: new Space({ id: '1', name: 'R-01', display_name: 'Room 1' }),
            day,
            now: time(10.5),
        });
        spectator.component.updateBookings([booking('a', 10, 11)]);
        spectator.detectChanges();

        expect('.text-xl').toHaveText('Room 1');
        expect(text('[status]')).toBe('Busy until 11:00 AM');

        // Bindings send `null` before the module has a value
        spectator.component.updateBookings(null);
        spectator.detectChanges();
        expect(text('[status]')).toBe('Free');
    });
});
