import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { addMinutes } from 'date-fns';

import { PanelViewTimelineComponent } from '../../app/new-panel/panel-view-timeline.component';
import { PanelStateService } from '../../app/panel-state.service';

/** Local time, so the timeline starts at 08:00 */
const NOW = new Date(2026, 6, 4, 9, 0).valueOf();
/** Size of the track in pixels. The track shows 12 hours. */
const TRACK = 1200;
/** Pixel offset on the track for `minutes` after the timeline start */
const at = (minutes: number) => (minutes / (12 * 60)) * TRACK;

describe('PanelViewTimelineComponent', () => {
    let spectator: Spectator<PanelViewTimelineComponent>;
    const bookings = signal<CalendarEvent[]>([]);
    const panel_settings = signal<Record<string, unknown>>({});
    let features: string[] = [];
    const newBooking = vi.fn();
    const createComponent = createComponentFactory({
        component: PanelViewTimelineComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    time_format: signal('h:mm a'),
                    bookings,
                    setting: (name: string) => panel_settings()[name],
                    hasFeature: (name: string) => features.includes(name),
                    newBooking,
                },
            },
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(NOW);
        bookings.set([]);
        panel_settings.set({});
        features = ['timeline_booking'];
        newBooking.mockClear();
        spectator = createComponent();
        const track = spectator.query('[timeline-track]');
        vi.spyOn(track, 'getBoundingClientRect').mockReturnValue({
            top: 0,
            left: 0,
            width: TRACK,
            height: TRACK,
        } as DOMRect);
    });

    afterEach(() => vi.useRealTimers());

    /** Tap the track at `offset` pixels along its axis */
    const tap = (offset: number, horizontal = false) => {
        const event = new MouseEvent('click', {
            bubbles: true,
            clientX: horizontal ? offset : 0,
            clientY: horizontal ? 0 : offset,
        });
        const stop = vi.spyOn(event, 'stopPropagation');
        spectator.query('[timeline-track]').dispatchEvent(event);
        return stop;
    };

    it.each([false, true])(
        'should book the tapped slot from its start (horizontal: %s)',
        (horizontal) => {
            spectator.setInput('horizontal', horizontal);
            // 2h06m after the 08:00 start snaps down to 10:00
            const stop = tap(at(126), horizontal);
            expect(newBooking).toHaveBeenCalledWith(
                addMinutes(NOW, 60).valueOf(),
                true,
                true,
            );
            expect(stop).toHaveBeenCalled();
        },
    );

    it('should not book a slot that is already booked', () => {
        bookings.set([
            new CalendarEvent({
                date: addMinutes(NOW, 60).valueOf(),
                duration: 30,
            }),
        ]);
        tap(at(126));
        expect(newBooking).not.toHaveBeenCalled();
    });

    it.each([
        ['the feature is off', () => (features = [])],
        [
            'booking is disabled',
            () => panel_settings.set({ disable_book_now: true }),
        ],
    ])('should pass the tap to the panel when %s', (_, arrange) => {
        arrange();
        const stop = tap(at(126));
        expect(newBooking).not.toHaveBeenCalled();
        expect(stop).not.toHaveBeenCalled();
    });
});
