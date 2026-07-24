import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { format, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { EventMonthViewComponent } from '../../app/events/event-month-view.component';
import { EventStateService } from '../../app/events/event-state.service';

describe('EventMonthViewComponent', () => {
    let spectator: SpectatorRouting<EventMonthViewComponent>;
    const options = signal<any>({ period: 'month', date: Date.now() });
    const event_day_map = signal<any>({});
    const view_event = vi.fn();

    const createComponent = createRoutingFactory({
        component: EventMonthViewComponent,
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
            MockProvider(SettingsService, {
                get: vi.fn(() => 0),
            } as any),
        ],
    });

    beforeEach(() => {
        options.set({ period: 'month', date: Date.now() });
        event_day_map.set({});
        view_event.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should anchor the month to the start of the option date', () => {
        const date = startOfDay(Date.now()).valueOf();
        options.set({ period: 'month', date });
        expect(spectator.component.month()).toBe(date);
    });

    it('should expose seven weekday headings', () => {
        expect(spectator.component.weekdays()).toHaveLength(7);
    });

    it('should build a six-week grid marking today and month membership', () => {
        const days = spectator.component.month_days();
        expect(days).toHaveLength(42);
        const today = days.find((d) => d.is_today);
        expect(today).toBeTruthy();
        expect(days.some((d) => d.is_month)).toBe(true);
    });

    it('should format a date string', () => {
        const now = Date.now();
        expect(spectator.component.dateString(now)).toBe(
            format(now, 'yyyy-MM-dd'),
        );
        expect(spectator.component.dateString(0)).toBe('');
    });

    it('should delegate event viewing to the state service', () => {
        spectator.component.viewEvent({ id: 'e1' } as any);
        expect(view_event).toHaveBeenCalledWith({ id: 'e1' });
    });
});
