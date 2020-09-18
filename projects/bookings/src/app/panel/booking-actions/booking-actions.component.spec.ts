
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator/jest';
import { subMinutes } from 'date-fns';

import { PanelBookingActionsComponent } from './booking-actions.component';
import { setMockBookingStartDatetime } from 'src/app/events/event.utilities';
import { PanelStateService } from '../panel-state.service';

describe('PanelBookingActionsComponent', () => {
    let spectator: Spectator<PanelBookingActionsComponent>;
    const createComponent = createComponentFactory({
        component: PanelBookingActionsComponent,
        providers: [mockProvider(PanelStateService, {})],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.component.no_booking = null;
        spectator.component.pending_timeout = 900;
        const state = spectator.inject(PanelStateService);
        state.system = 'test';
        spectator.detectChanges();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show booking button', () => {
        setMockBookingStartDatetime(new Date().valueOf());
        spectator.component.no_booking = false;
        spectator.detectChanges();
        expect(spectator.query('.book')).toBeTruthy();
        spectator.component.no_booking = true;
        spectator.detectChanges();
        expect(spectator.query('.book')).toBeFalsy();
    });

    it('should open confirm modal on start button press', () => {
        spectator.component.confirmStart();
        spectator.detectChanges();
        spectator.component.pending_timeout = 900;
        const start = subMinutes(new Date(), 2).valueOf();
        spectator.component.last_started = start - 3600;
        spectator.detectChanges();
        const state = spectator.inject(PanelStateService);
        expect(state.confirmStart).toHaveBeenCalled();
        spectator.detectChanges();
        const button: HTMLButtonElement = spectator.query('.start');
        expect(button).toBeTruthy();
        button.click();
        expect(state.confirmStart).toHaveBeenCalledTimes(2);
    });

    it('should open confirm modal on end button press', () => {
        spectator.component.confirmEnd();
        spectator.component.pending_timeout = 300;
        const start = subMinutes(new Date(), 20).valueOf();
        spectator.component.last_started = start;
        spectator.component.is_endable = 900;
        const state = spectator.inject(PanelStateService);
        expect(state.confirmEnd).toHaveBeenCalled();
        spectator.detectChanges();
        const button: HTMLButtonElement = spectator.query('.end');
        expect(button).toBeTruthy();
        button.click();
        expect(state.confirmEnd).toHaveBeenCalledTimes(2);
    });

    it('should open booking modal on booking button press', () => {
        spectator.component.book();
        spectator.detectChanges();
        const state = spectator.inject(PanelStateService);
        expect(state.newBooking).toHaveBeenCalled();
        spectator.detectChanges();
        const button: HTMLButtonElement = spectator.query('.book');
        expect(button).toBeTruthy();
        button.click();
        expect(state.newBooking).toHaveBeenCalledTimes(2);
    });

    it('should be able to start meeting', () => {
        spectator.component.startMeeting();
        const state = spectator.inject(PanelStateService);
        expect(state.startMeeting).toHaveBeenCalled();
    });

    it('should be able to end meeting', () => {
        spectator.component.endMeeting();
        const state = spectator.inject(PanelStateService);
        expect(state.endCurrent).toHaveBeenCalled();
    });

    it('should only show start for meetings with business hours', () => {
        // TODO: Add tests for business hour checks
    });
});
