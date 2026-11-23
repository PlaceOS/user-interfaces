import { Clipboard } from '@angular/cdk/clipboard';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    setCurrentUser,
    settingSignal,
} from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import * as ts_client from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    events,
    Guest,
    PlaceCalendarEventAttendee,
} from '@placeos/ts-client/staff';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MockDirective, MockProvider } from 'ng-mocks';
import { AttendeeListComponent } from '../lib/attendee-list.component';
import { GroupEventDetailsModalComponent } from '../lib/group-event-details-modal.component';

// The real SpacePipe and events.fn wrappers run; only the ts-client API
// layers beneath them are stubbed.
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

/** Staff API attendee for the current user */
const me = () =>
    mockReply(
        mockData(PlaceCalendarEventAttendee, {
            name: 'Me',
            email: 'me@place.tech',
        }),
    );

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
        settingSignal('public_url_path', '/public').set('/public');
        setCurrentUser({
            email: 'me@place.tech',
            name: 'Me',
        } as any);
        // Real SpacePipe resolves spaces through these ts-client lookups.
        vi.mocked(ts_client.systems.show).mockResolvedValue(
            mockReply({
                id: 'space-1',
                name: 'Space One',
                zones: ['zone-1'],
            } as any),
        );
        vi.mocked(ts_client.systems.findByEmail).mockResolvedValue(
            mockPage({
                data: [
                    {
                        id: 'space-1',
                        email: 'calendar@place.tech',
                        zones: ['zone-1'],
                    },
                ],
            } as any),
        );
        spectator = createComponent();
    });

    it('should flag featured events', () =>
        expect(spectator.component.featured()).toBe(true));

    it('should derive onsite/online state from the attendance type', () => {
        expect(spectator.component.is_onsite()).toBe(true);
        expect(spectator.component.is_online()).toBe(false);
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                extension_data: { attendance_type: 'ANY' },
            }),
        );
        expect(spectator.component.is_onsite()).toBe(true);
        expect(spectator.component.is_online()).toBe(true);
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                extension_data: { attendance_type: 'ONLINE' },
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

    const publish = () =>
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                extension_data: {
                    ...event.extension_data,
                    view_access: 'PUBLIC',
                },
            }),
        );

    it('should generate a public link once the calendar space is known', async () => {
        publish();
        expect(spectator.component.public_event_link()).toBe('');
        await spectator.component.ngOnInit();
        expect(spectator.component.public_event_link()).toBe(
            `${window.location.origin}/public/#/event/space-1/event-1`,
        );
    });

    it.each(['@other.host', '.other.host'])(
        'should keep the public link on this origin when the path setting is %s',
        async (value) => {
            publish();
            settingSignal('public_url_path', '/public').set(value);
            await spectator.component.ngOnInit();
            expect(spectator.component.public_event_link()).toBe(
                `${window.location.origin}/public/#/event/space-1/event-1`,
            );
        },
    );

    it('should not generate a public link for events not published to the public', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.public_event_link()).toBe('');
    });

    it('should copy the public event link to the clipboard', async () => {
        publish();
        await spectator.component.ngOnInit();
        spectator.component.copyPublicEventLink();
        expect(spectator.inject(Clipboard).copy).toHaveBeenCalledWith(
            spectator.component.public_event_link(),
        );
    });

    it('should register interest for the current user', async () => {
        vi.mocked(events.addAttendee).mockResolvedValue(me());
        expect(spectator.component.is_interested()).toBe(false);
        await spectator.component.toggleInterest();
        expect(events.addAttendee).toHaveBeenCalledWith(
            expect.objectContaining({
                id: event.id,
                body: expect.objectContaining({ email: 'me@place.tech' }),
            }),
        );
        expect(spectator.component.is_interested()).toBe(true);
    });

    it('should remove interest when already interested', async () => {
        vi.mocked(events.deleteAttendee).mockResolvedValue(mockReply(''));
        spectator.component.event.set(
            new CalendarEvent({
                ...event,
                attendees: [{ email: 'me@place.tech' }] as any,
            }),
        );
        expect(spectator.component.is_interested()).toBe(true);
        await spectator.component.toggleInterest();
        expect(events.deleteAttendee).toHaveBeenCalledWith(
            expect.objectContaining({ id: event.id, email: 'me@place.tech' }),
        );
        expect(spectator.component.is_interested()).toBe(false);
    });

    it('should check in the current user when toggling attendance', async () => {
        vi.mocked(events.addAttendee).mockResolvedValue(me());
        vi.mocked(events.guestCheckin).mockResolvedValue(
            mockReply(mockData(Guest, { email: 'me@place.tech' })),
        );
        await spectator.component.toggleAttendance();
        expect(events.guestCheckin).toHaveBeenCalledWith(
            expect.objectContaining({
                id: event.id,
                guest_id: 'me@place.tech',
                state: true,
            }),
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
