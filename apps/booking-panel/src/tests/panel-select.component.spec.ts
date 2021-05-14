import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import {
    startOfMinute,
    addMinutes,
    isAfter,
    isBefore,
    subMinutes,
} from 'date-fns';

import { BookingPanelSelectComponent } from '../app/panel-select.component';
import { BookingPanelComponent } from '../app/panel/panel.component';
import { setMockBookingStartDatetime } from '@placeos/events';

describe('BookingPanelSelectComponent', () => {
    let spectator: SpectatorRouting<BookingPanelSelectComponent>;
    const createComponent = createRoutingFactory({
        component: BookingPanelSelectComponent,
        declarations: [MockComponent(BookingPanelComponent)],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        setMockBookingStartDatetime(subMinutes(new Date(), 30).valueOf());
    });

    it('should display an array of panel options', () => {
        spectator.setRouteParam('system_ids', 'sys-A0,sys-A2');
        spectator.detectChanges();
        expect('.item').toHaveLength(2);
    });

    it('should display loading before options have initialised', () => {
        spectator.setRouteParam('system_ids', 'sys-A0,sys-A2');
        spectator.detectChanges();
        expect('mat-spinner').toHaveLength(2);
    });

    it("should show the system's status", () => {
        spectator.setRouteParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        expect('.icon').not.toHaveClass('test');
        spectator.component.system_status['sys-A0'] = 'test';
        spectator.detectChanges();
        expect('.icon').toHaveClass('test');
    });

    it("should update the system's status", () => {
        const bookings = [];
        spectator.component.updateStatus('test', bookings);
        const now = startOfMinute(new Date());
        const current = bookings.find((i) => {
            const date = startOfMinute(new Date(i.date));
            const end = addMinutes(date, i.duration);
            return isAfter(now, date) || isBefore(now, end);
        });
        expect(spectator.component.system_status.test).toBe(
            current ? 'unavailable' : 'available'
        );
    });

    it('should allow for selecting one panel', () => {
        spectator.setRouteParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        // Check that panel can't be opened until system name has loaded
        expect('.item').toBeTruthy();
        spectator.click('.item');
        spectator.detectChanges();
        expect('app-booking-panel').not.toExist();
        spectator.component.system_name['sys-A0'] = 'Test System';
        spectator.detectChanges();
        spectator.click('.item');
        spectator.detectChanges();
        expect('app-booking-panel').toExist();
    });

    it('should close open panel after time', () => {
        jest.useFakeTimers();
        spectator.setRouteParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        spectator.component.system_name['sys-A0'] = 'Test System';
        spectator.click('.item');
        spectator.detectChanges();
        expect('app-booking-panel').toExist();
        jest.runOnlyPendingTimers();
        spectator.detectChanges();
        expect('app-booking-panel').not.toExist();
        jest.useRealTimers();
    });
});
