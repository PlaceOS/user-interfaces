import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { subMinutes } from 'date-fns';

import { BookingPanelSelectComponent } from '../app/panel-select.component';
import { BookingPanelComponent } from '../app/panel/panel.component';
import { setMockBookingStartDatetime } from '@placeos/events';
import { BindingDirective, IconComponent } from '@placeos/components';

describe('BookingPanelSelectComponent', () => {
    let spectator: SpectatorRouting<BookingPanelSelectComponent>;
    const createComponent = createRoutingFactory({
        component: BookingPanelSelectComponent,
        declarations: [
            MockComponent(BookingPanelComponent),
            MockDirective(BindingDirective),
            MockComponent(IconComponent),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        setMockBookingStartDatetime(subMinutes(new Date(), 30).valueOf());
    });

    it('should display an array of panel options', () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0,sys-A2');
        spectator.detectChanges();
        expect('.item').toHaveLength(2);
    });

    it('should display loading before options have initialised', () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0,sys-A2');
        spectator.detectChanges();
        expect('mat-spinner').toHaveLength(2);
    });

    it("should show the system's status", () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        expect('[state]').not.toHaveClass('test');
        spectator.component.system_status['sys-A0'] = 'test';
        spectator.detectChanges();
        expect('[state]').toHaveClass('test');
    });

    it('should allow for selecting one panel', () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        expect('app-booking-panel').not.toExist();
        spectator.click('.item');
        spectator.detectChanges();
        expect('app-booking-panel').toExist();
    });

    it('should close open panel after time', () => {
        jest.useFakeTimers();
        spectator.setRouteQueryParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        spectator.component.system_name['sys-A0'] = 'Test System';
        spectator.click('.item');
        spectator.detectChanges();
        expect('app-booking-panel').toExist();
        jest.runAllTimers();
        spectator.detectChanges();
        expect('app-booking-panel').not.toExist();
        jest.useRealTimers();
    });
});
