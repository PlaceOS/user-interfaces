import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, MAP_FEATURE_DATA } from '@placeos/common';
import { ngMocks } from 'ng-mocks';

import { ExploreDeskInfoComponent } from '../lib/explore-desk-info.component';

describe('ExploreDeskInfoComponent', () => {
    let spectator: Spectator<ExploreDeskInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeskInfoComponent,
        ...ngMocks.guts(null),
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should show free until for the next booking', () => {
        const start = new Date();
        start.setHours(10, 0, 0, 0);
        const end = new Date();
        end.setHours(11, 0, 0, 0);
        const selected = new Date();
        selected.setHours(9, 0, 0, 0);
        const booking = new Booking({
            asset_id: 'desk-1',
            user_name: 'Taylor',
            booking_start: Math.floor(start.getTime() / 1000),
            booking_end: Math.floor(end.getTime() / 1000),
        });
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        id: 'desk-1',
                        map_id: 'desk-1',
                        name: 'Desk 1',
                        user: signal(''),
                        status: signal('free'),
                        bookings: signal([booking]),
                        date: selected.valueOf(),
                    },
                },
            ],
        });
        spectator.component.now.set(selected.valueOf());

        expect(spectator.component.display_user()).toBe('Taylor');
        expect(spectator.component.current_booking()).toBeFalsy();
        expect(spectator.component.next_booking()?.date).toBe(booking.date);
    });

    it('should show free at for the current booking', () => {
        const start = new Date();
        start.setHours(9, 0, 0, 0);
        const end = new Date();
        end.setHours(10, 0, 0, 0);
        const current = new Date();
        current.setHours(9, 30, 0, 0);
        const booking = new Booking({
            asset_id: 'desk-1',
            user_name: 'Taylor',
            booking_start: Math.floor(start.getTime() / 1000),
            booking_end: Math.floor(end.getTime() / 1000),
        });
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        id: 'desk-1',
                        map_id: 'desk-1',
                        name: 'Desk 1',
                        user: signal(''),
                        status: signal('busy'),
                        bookings: signal([booking]),
                        date: current.valueOf(),
                    },
                },
            ],
        });
        spectator.component.now.set(current.valueOf());

        expect(spectator.component.current_booking()).toBeTruthy();
        expect(spectator.component.current_booking()?.date_end).toBe(
            booking.date_end,
        );
    });
});
