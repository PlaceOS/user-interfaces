import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { startOfDay } from 'date-fns';

import { EventWeekViewComponent } from '../../app/events/event-week-view.component';
import { EventStateService } from '../../app/events/event-state.service';

describe('EventWeekViewComponent', () => {
    let spectator: SpectatorRouting<EventWeekViewComponent>;
    const options = signal<any>({ period: 'week', date: 0 });
    const event_day_map = signal<any>({});
    const view_event = vi.fn();

    const createComponent = createRoutingFactory({
        component: EventWeekViewComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            {
                provide: EventStateService,
                useValue: {
                    options,
                    event_day_map,
                    viewEvent: view_event,
                },
            },
        ],
    });

    beforeEach(() => {
        options.set({ period: 'week', date: 0 });
        event_day_map.set({});
        view_event.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should fall back to placeholder days without a date', () => {
        expect(spectator.component.days()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should generate seven consecutive days from the option date', () => {
        const start = startOfDay(Date.now()).valueOf();
        options.set({ period: 'week', date: start });
        const days = spectator.component.days();
        expect(days).toHaveLength(7);
        expect(days[0]).toBe(start);
        expect(days[6]).toBeGreaterThan(days[0]);
    });

    it('should expose 24 hourly labels', () => {
        expect(spectator.component.hours).toHaveLength(24);
        expect(spectator.component.hours[0]).toBe(12);
    });

    it('should detect the current day', () => {
        expect(spectator.component.isCurrentDay(Date.now())).toBe(true);
        expect(
            spectator.component.isCurrentDay(startOfDay(0).valueOf()),
        ).toBe(false);
        expect(spectator.component.isCurrentDay(0)).toBe(false);
    });

    it('should compute a fractional now offset within the day', () => {
        const offset = spectator.component.now_offset;
        expect(offset).toBeGreaterThanOrEqual(0);
        expect(offset).toBeLessThan(1);
    });

    it('should delegate event viewing to the state service', () => {
        spectator.component.viewEvent({ id: 'e1' } as any);
        expect(view_event).toHaveBeenCalledWith({ id: 'e1' });
    });
});
