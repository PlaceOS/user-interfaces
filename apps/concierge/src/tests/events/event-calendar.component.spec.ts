import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { addWeeks, startOfDay } from 'date-fns';

import { EventCalendarComponent } from '../../app/events/event-calendar.component';
import { EventStateService } from '../../app/events/event-state.service';

describe('EventCalendarComponent', () => {
    let spectator: SpectatorRouting<EventCalendarComponent>;
    const options = signal<any>({ period: 'week' });
    const set_options = jest.fn();

    const createComponent = createRoutingFactory({
        component: EventCalendarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            {
                provide: EventStateService,
                useValue: { options, setOptions: set_options },
            },
        ],
    });

    beforeEach(() => {
        options.set({ period: 'week' });
        set_options.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should reflect the configured period', () => {
        expect(spectator.component.period()).toBe('week');
        options.set({ period: 'month' });
        expect(spectator.component.period()).toBe('month');
    });

    it('should report today when now falls within the range', () => {
        options.set({
            period: 'week',
            date: startOfDay(Date.now()).valueOf(),
            end: Date.now() + 60_000,
        });
        expect(spectator.component.is_today()).toBe(true);
        options.set({ period: 'week', date: 0, end: 1 });
        expect(spectator.component.is_today()).toBe(false);
    });

    it('should set the period and update the route', () => {
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.setPeriod('month');
        expect(set_options).toHaveBeenCalledWith({ period: 'month' });
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { period: 'month' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should navigate to the next weekly range', () => {
        const date = startOfDay(Date.now()).valueOf();
        options.set({ period: 'week', date, end: date });
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.nextPeriod();
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { range: addWeeks(date, 1).valueOf() },
            }),
        );
    });

    it('should navigate to the previous weekly range', () => {
        const date = startOfDay(Date.now()).valueOf();
        options.set({ period: 'week', date, end: date });
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.previousPeriod();
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { range: addWeeks(date, -1).valueOf() },
            }),
        );
    });
});
