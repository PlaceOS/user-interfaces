
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective } from 'ng-mocks';
import { format, subHours } from 'date-fns';

import { BookingPanelComponent } from './panel.component';
import { PanelTimelineComponent } from './timeline/timeline.component';
import { PanelSpaceDetailsComponent } from './space-details/space-details.component';
import { PanelBookingActionsComponent } from './booking-actions/booking-actions.component';
import { PanelCustomActionsComponent } from './custom-actions/custom-actions.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { BindingDirective } from 'src/app/ui/binding/binding.directive';
import { setMockBookingStartDatetime } from 'src/app/bookings/booking.utilities';

describe('BookingPanelComponent', () => {
    let spectator: SpectatorRouting<BookingPanelComponent>;
    const createComponent = createRoutingFactory({
        component: BookingPanelComponent,
        declarations: [
            MockComponent(PanelTimelineComponent),
            MockComponent(PanelSpaceDetailsComponent),
            MockComponent(PanelBookingActionsComponent),
            MockComponent(PanelCustomActionsComponent),
            MockComponent(IconComponent),
            MockDirective(BindingDirective),
        ],
    });
    let mod: any;

    beforeEach(() => {
        jest.useFakeTimers();
        spectator = createComponent();
        mod = {
            execute: jest.fn(),
        };
        mod.execute.mockReturnValue(Promise.resolve());
        setMockBookingStartDatetime(subHours(new Date, 1).valueOf());
        spectator.component.websocket_connected = true;
        spectator.setRouteParam('system_id', 'sys-A0');
        spectator.detectChanges();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should initialise', () => {
        jest.runOnlyPendingTimers();
        expect(spectator.component.display_time).toBeTruthy();
        expect(spectator.component.system_id).toBe('sys-A0');
    });

    it('should show time', () => {
        const date = format(new Date(), 'h:mm a');
        spectator.component.show_time = true;
        spectator.detectChanges();
        expect(spectator.query('.status .time-display')).toBeTruthy();
        expect(spectator.query('.status .time-display').textContent).toContain(date);
        spectator.component.show_time = false;
        spectator.detectChanges();
        expect(spectator.query('.status .time-display')).toBeFalsy();
    });

    it('should show space name', () => {
        const name = 'Test Space Name';
        expect(spectator.query('.title')).toBeTruthy();
        expect(spectator.query('.title')).not.toHaveText(name);
        spectator.component.space_name = name;
        spectator.detectChanges();
        expect(spectator.query('.title')).toHaveText(name);
    });

    it('should show status', () => {

    });

    it('should show timeline', () => {
        expect(spectator.query('panel-timeline')).toBeTruthy();
    });

});
