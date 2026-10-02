import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';

import { SpaceEventDetailsComponent } from '../app/space-event-details.component';
import { SpaceTimetableComponent } from '../app/space-timetable.component';

describe('SpaceTimetableComponent', () => {
    let spectator: SpectatorRouting<SpaceTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceTimetableComponent,
        declarations: [mockComponent(SpaceEventDetailsComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show space column', () => {
        expect('[space]').not.toExist();
        spectator.setInput({
            space: { id: '1', display_name: 'Room 1' } as any,
        });
        spectator.detectChanges();
        expect('[space]').toExist();
    });

    it('should clip bookings to the period and split overlaps into lanes', () => {
        const day = new Date(2026, 0, 1).valueOf();
        const at = (hour: number) =>
            Math.floor(new Date(2026, 0, 1, hour).valueOf() / 1000);
        spectator.setInput({ day, time_offset: 8, time_period: 10 });
        spectator.component.updateBookings([
            { id: 'early', event_start: at(7), event_end: at(9) },
            { id: 'a', event_start: at(10), event_end: at(12) },
            { id: 'b', event_start: at(11), event_end: at(13) },
            { id: 'tomorrow', event_start: at(33), event_end: at(34) },
        ]);

        const blocks = spectator.component.blocks();
        const layout = blocks.map(({ event, top, height, left, width }) => [
            event.id,
            top,
            height,
            left,
            width,
        ]);
        expect(layout).toEqual([
            ['early', 0, 10, 0, 100],
            ['a', 20, 20, 0, 50],
            ['b', 30, 20, 50, 50],
        ]);
    });

    it('should report when the room status changes today', () => {
        const day = new Date(2026, 0, 1).valueOf();
        const time = (hour: number) => new Date(2026, 0, 1, hour).valueOf();
        const at = (hour: number) => Math.floor(time(hour) / 1000);
        spectator.component.updateBookings([
            { id: 'a', event_start: at(10), event_end: at(11) },
            { id: 'b', event_start: at(11), event_end: at(12) },
            { id: 'tomorrow', event_start: at(33), event_end: at(34) },
        ]);
        const statusAt = (hour: number) => {
            spectator.setInput({ day, now: time(hour) });
            return spectator.component.status();
        };

        expect(statusAt(9)).toEqual({ busy: false, until: time(10) });
        expect(statusAt(10.5)).toEqual({ busy: true, until: time(12) });
        expect(statusAt(13)).toEqual({ busy: false, until: 0 });
    });
});
