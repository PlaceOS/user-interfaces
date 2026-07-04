import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockerBookingsComponent } from '../../app/lockers/locker-bookings.component';
import { LockerStateService } from '../../app/lockers/locker-state.service';

describe('LockerBookingsComponent', () => {
    let spectator: Spectator<LockerBookingsComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: LockerBookingsComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        imports: [MatMenuModule],
        providers: [
            MockProvider(SettingsService, { time_format: 'h:mm a' } as any),
        ],
    });

    beforeEach(() => {
        state = {
            filters: signal({}),
            search: signal(''),
            has_more_pages: signal(false),
            filtered_bookings: signal([
                { id: 'bk-1', date: 1_000, duration: 30 },
            ]),
            nextPage: jest.fn(),
            checkinLocker: jest.fn(async () => null),
            approveLocker: jest.fn(async () => null),
            rejectLocker: jest.fn(async () => null),
        };
        spectator = createComponent({
            providers: [{ provide: LockerStateService, useValue: state }],
        });
    });

    it('should derive an end timestamp for each booking', () => {
        expect(spectator.component.bookings()).toEqual([
            { id: 'bk-1', date: 1_000, duration: 30, end: 1_000 + 30 * 60_000 },
        ]);
    });

    it('should request the next page when loading more', () => {
        spectator.component.loadMore();
        expect(state.nextPage).toHaveBeenCalledTimes(1);
    });

    it('should toggle loading state around an approve action', async () => {
        const booking = { id: 'bk-1' };
        const promise = spectator.component.approve(booking);
        expect(spectator.component.loading()).toBe('approve');

        await promise;

        expect(state.approveLocker).toHaveBeenCalledWith(booking);
        expect(spectator.component.loading()).toBe('');
    });

    it('should update the check-in flag on the booking after checkin', async () => {
        const booking: any = { id: 'bk-1' };
        await spectator.component.checkin(booking, true);

        expect(state.checkinLocker).toHaveBeenCalledWith(booking, true);
        expect(booking.checked_in).toBe(true);
        expect(spectator.component.loading()).toBe('');
    });
});
