import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';

import { CheckinTimetableComponent } from '../../app/checkin/checkin-timetable.component';
import { CheckinViewComponent } from '../../app/checkin/checkin-view.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('CheckinViewComponent', () => {
    let spectator: SpectatorRouting<CheckinViewComponent>;

    const status = signal<string>('free');
    const space = signal<any>(null);
    const bookings = signal<any[]>([]);
    const current = signal<any>(null);
    const next = signal<any>(null);
    const setting = vi.fn<(key: string) => any>();
    const start_meeting = vi.fn();
    const new_booking = vi.fn();

    const state_service: any = {
        status,
        space,
        bookings,
        current,
        next,
        setting,
        startMeeting: start_meeting,
        newBooking: new_booking,
        system: '',
    };

    const createComponent = createRoutingFactory({
        component: CheckinViewComponent,
        detectChanges: false,
        params: { system_id: 'sys-42' },
        declarations: [
            mockComponent(CheckinTimetableComponent),
            mockComponent(IconComponent),
        ],
        componentProviders: [
            { provide: PanelStateService, useValue: state_service },
        ],
    });

    beforeEach(() => {
        status.set('free');
        space.set(null);
        bookings.set([]);
        current.set(null);
        next.set(null);
        setting.mockReset();
        setting.mockReturnValue(undefined);
        start_meeting.mockReset();
        new_booking.mockReset();
        state_service.system = '';
        spectator = createComponent();
    });

    it('should create component', () => {
        spectator.detectChanges();
        expect(spectator.component).toBeTruthy();
    });

    it('should display the space name', () => {
        space.set({ display_name: 'Meeting Room A' });
        spectator.detectChanges();
        expect('[name]').toContainText('Meeting Room A');
    });

    it('should fall back to a placeholder when the space is unknown', () => {
        space.set(null);
        spectator.detectChanges();
        expect('[name]').toContainText('Unknown Space');
    });

    it('should read the system id from the route on init', () => {
        spectator.detectChanges();
        expect(state_service.system).toBe('sys-42');
    });

    it('should treat missing user query param as having a user', () => {
        spectator.detectChanges();
        expect(spectator.component.has_user()).toBe(true);
    });

    it('should clear the user flag when user=false query param is set', () => {
        spectator.setRouteQueryParam('user', 'false');
        spectator.component.ngOnInit();
        spectator.detectChanges();
        expect(spectator.component.has_user()).toBe(false);
    });

    it('should render the room image background when configured', () => {
        setting.mockImplementation((k) =>
            k === 'room_image' ? 'https://img/room.png' : undefined,
        );
        spectator.detectChanges();
        const bg = spectator.query('div.bg-cover');
        expect(bg).toBeTruthy();
        expect((bg as HTMLElement).style.backgroundImage).toContain(
            'https://img/room.png',
        );
    });

    it('should check in the current meeting when the checkin button is used', () => {
        status.set('pending');
        // hide the book buttons so only the checkin button remains
        setting.mockReturnValue(true);
        spectator.detectChanges();
        spectator.click('button.w-24');
        expect(start_meeting).toHaveBeenCalledTimes(1);
    });

    it('should show the checkin button only while pending', () => {
        status.set('free');
        setting.mockReturnValue(true); // disable book -> no book buttons
        spectator.detectChanges();
        expect('button.w-24').not.toExist();
    });

    it('should start a new booking when the book button is used', () => {
        status.set('free');
        setting.mockReturnValue(undefined); // book allowed
        // a future "next" event hides the second (no-upcoming) book button
        next.set({ date: Date.now() + 2 * 60 * 60 * 1000, duration: 30 });
        spectator.detectChanges();
        spectator.click('button.w-24');
        expect(new_booking).toHaveBeenCalledTimes(1);
        const args = new_booking.mock.calls[0];
        expect(args[1]).toBe(true); // has_user
        expect(args[2]).toBe(false); // not future
        expect(args[3]).toBe(true); // force api
    });

    it('should not offer booking when book now is disabled', () => {
        status.set('free');
        setting.mockReturnValue(true); // disable_book_now
        spectator.detectChanges();
        expect(spectator.component.can_book()).toBe(false);
        expect('button.w-24').not.toExist();
    });

    it('should ignore new booking requests when booking is disabled', () => {
        setting.mockReturnValue(true);
        spectator.detectChanges();
        spectator.component.newBooking(Date.now(), false);
        expect(new_booking).not.toHaveBeenCalled();
    });

    it('should treat slots in the future as future bookings', () => {
        setting.mockReturnValue(undefined);
        spectator.detectChanges();
        const future = Date.now() + 60 * 60 * 1000;
        spectator.component.bookSlot(future);
        expect(new_booking).toHaveBeenCalledWith(future, true, true, true);
    });

    it('should treat slots at or before now as immediate bookings', () => {
        setting.mockReturnValue(undefined);
        spectator.detectChanges();
        const past = Date.now() - 60 * 1000;
        spectator.component.bookSlot(past);
        expect(new_booking).toHaveBeenCalledWith(past, true, false, true);
    });

    it('should describe the next period when an upcoming event exists', () => {
        next.set({ date: Date.now() + 90 * 60 * 1000, duration: 30 });
        spectator.detectChanges();
        expect(spectator.component.event_state().next).toBeTruthy();
    });

    it('should have no next description when there is no upcoming event', () => {
        next.set(null);
        spectator.detectChanges();
        expect(spectator.component.event_state().next).toBe('');
    });
});
