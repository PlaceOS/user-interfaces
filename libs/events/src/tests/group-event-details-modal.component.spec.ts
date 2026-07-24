import { Clipboard } from '@angular/cdk/clipboard';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    setCurrentUser,
    settingSignal,
} from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MockDirective, MockProvider } from 'ng-mocks';
import * as ts_client from '@placeos/ts-client';
import { AttendeeListComponent } from '../lib/attendee-list.component';
import { GroupEventDetailsModalComponent } from '../lib/group-event-details-modal.component';

// The real SpacePipe and events.fn wrappers run; only the ts-client API layer
// beneath them is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

describe('GroupEventDetailsModalComponent', () => {
    let spectator: Spectator<GroupEventDetailsModalComponent>;
    const remove_fn = vi.fn();
    const event = new CalendarEvent({
        id: 'event-1',
        title: 'Group Event',
        date: Date.now(),
        duration: 60,
        body: '<p>About the event</p>',
        attendees: [
            { email: 'other@place.tech', checked_in: true },
            { email: 'calendar@place.tech' },
        ] as any,
        resources: [{ id: 'sys-1', email: 'room@place.tech' }] as any,
        extension_data: { attendance_type: 'OFFLINE', featured: true } as any,
    });
    const createComponent = createComponentFactory({
        component: GroupEventDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                event,
                remove_fn,
                concierge: false,
            }),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
                buildings: [],
                building: { id: 'bld-1' } as any,
            }),
        ],
        declarations: [
            mockComponent(IconComponent),
            mockComponent(InteractiveMapComponent),
            mockComponent(AttendeeListComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        settingSignal('group_events_calendar', '').set('calendar@place.tech');
        setCurrentUser({
            email: 'me@place.tech',
            name: 'Me',
        } as any);
        // Real SpacePipe resolves spaces through these ts-client lookups.
        vi.mocked(ts_client.showSystem).mockResolvedValue({
            id: 'space-1',
            name: 'Space One',
            zones: ['zone-1'],
        } as any);
        vi.mocked(ts_client.querySystemsWithEmails).mockResolvedValue({
            data: [
                {
                    id: 'space-1',
                    email: 'calendar@place.tech',
                    zones: ['zone-1'],
                },
            ],
        } as any);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should flag featured events', () =>
        expect(spectator.component.featured()).toBe(true));

    it('should derive onsite/online state from the attendance type', () => {
        expect(spectator.component.is_onsite()).toBe(true);
        expect(spectator.component.is_online()).toBe(false);
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                extension_data: { attendance_type: 'ANY' } as any,
            }),
        );
        expect(spectator.component.is_onsite()).toBe(true);
        expect(spectator.component.is_online()).toBe(true);
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                extension_data: { attendance_type: 'ONLINE' } as any,
            }),
        );
        expect(spectator.component.is_onsite()).toBe(false);
        expect(spectator.component.is_online()).toBe(true);
    });

    it('should count attendees excluding the group calendar', () =>
        expect(spectator.component.attendees()).toBe(1));

    it('should count checked in attendees as attendance', () =>
        expect(spectator.component.attendance()).toBe(1));

    it('should resolve the space and description on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.space().id).toBe('space-1');
        expect(spectator.component.raw_description()).toBe('About the event');
    });

    it('should generate a public link once the calendar space is known', async () => {
        expect(spectator.component.public_event_link()).toBe('');
        await spectator.component.ngOnInit();
        expect(spectator.component.public_event_link()).toBe(
            `${window.location.origin}/public/#/event/space-1/event-1`,
        );
    });

    it('should copy the public event link to the clipboard', async () => {
        await spectator.component.ngOnInit();
        spectator.component.copyPublicEventLink();
        expect(spectator.inject(Clipboard).copy).toHaveBeenCalledWith(
            spectator.component.public_event_link(),
        );
    });

    it('should register interest for the current user', async () => {
        // addEventGuest runs for real; its POST returns the added guest.
        vi.mocked(ts_client.post).mockResolvedValue({
            email: 'me@place.tech',
        } as any);
        expect(spectator.component.is_interested()).toBe(false);
        await spectator.component.toggleInterest();
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('/attendee'),
            expect.anything(),
        );
        expect(spectator.component.is_interested()).toBe(true);
    });

    it('should remove interest when already interested', async () => {
        // removeEventGuest runs for real; its DELETE resolves the removed guest.
        vi.mocked(ts_client.del).mockResolvedValue({
            email: 'me@place.tech',
        } as any);
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                attendees: [{ email: 'me@place.tech' }] as any,
            }),
        );
        expect(spectator.component.is_interested()).toBe(true);
        await spectator.component.toggleInterest();
        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringContaining('/attendee/'),
        );
        expect(spectator.component.is_interested()).toBe(false);
    });

    it('should check in the current user when toggling attendance', async () => {
        // addEventGuest + checkinEventGuest both run for real; the POST beneath
        // them returns the current user as the guest.
        vi.mocked(ts_client.post).mockResolvedValue({
            email: 'me@place.tech',
        } as any);
        await spectator.component.toggleAttendance();
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringMatching(
                /\/guests\/me@place\.tech\/checkin\?.*state=true/,
            ),
            '',
        );
        expect(spectator.component.is_going()).toBe(true);
    });

    it('should not remove completed events', () => {
        const done_event = new CalendarEvent({
            date: Date.now() - 3 * 60 * 60 * 1000,
            duration: 60,
        });
        expect(done_event.state).toBe('done');
        spectator.component.remove(done_event);
        expect(remove_fn).not.toHaveBeenCalled();
        spectator.component.remove(event);
        expect(remove_fn).toHaveBeenCalledWith(event, undefined);
    });

    it('should not open the locate modal without a map location', () => {
        spectator.component.viewLocation();
        expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        expect(spectator.component.showing_map()).toBe(false);
    });
});
