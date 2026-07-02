import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CalendarEvent,
    OrganisationService,
    settingSignal,
    Space,
} from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockDirective, MockProvider } from 'ng-mocks';
import { GroupEventCardComponent } from '../lib/group-event-card.component';
import { GroupEventDetailsModalComponent } from '../lib/group-event-details-modal.component';

jest.mock('../lib/space.pipe', () => ({
    updateSpaceList: jest.fn(),
    SpacePipe: jest.fn().mockImplementation(() => ({
        org: null,
        transform: jest.fn(async () =>
            new (jest.requireActual('@placeos/common').Space)({
                id: 'space-1',
                name: 'Space One',
            }),
        ),
    })),
}));

describe('GroupEventCardComponent', () => {
    let spectator: Spectator<GroupEventCardComponent>;
    const event = new CalendarEvent({
        title: 'Group Event',
        date: Date.now(),
        duration: 60,
        body: '<p>Hello <b>World</b></p>',
        attendees: [
            { email: 'person@place.tech' },
            { email: 'calendar@place.tech' },
        ] as any,
        resources: [{ id: 'sys-1', email: 'room@place.tech' }] as any,
        extension_data: { attendance_type: 'OFFLINE' } as any,
    });
    const createComponent = createComponentFactory({
        component: GroupEventCardComponent,
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
        declarations: [
            mockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        settingSignal('group_events_calendar').set('calendar@place.tech');
        spectator = createComponent({ props: { event } as any });
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should resolve the event space and strip HTML from the body', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.space().id).toBe('space-1');
        expect(spectator.component.raw_description()).toBe('Hello World');
    });

    it('should flag onsite events', () => {
        expect(spectator.component.is_onsite()).toBe(true);
        spectator.setInput({
            event: new CalendarEvent({
                ...event,
                extension_data: { attendance_type: 'ONLINE' } as any,
            }),
        });
        expect(spectator.component.is_onsite()).toBe(false);
    });

    it('should exclude the group calendar from the attendee count', () => {
        expect(spectator.component.attendee_count()).toBe(1);
    });

    it('should open the details modal on view details', () => {
        spectator.component.viewDetails();
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            GroupEventDetailsModalComponent,
            { data: { event: spectator.component.event(), concierge: false } },
        );
    });

    it('should format time based on the 24 hour setting', () => {
        settingSignal('use_24_hour_time').set(false);
        expect(spectator.component.time_format()).toBe('h:mm a');
        settingSignal('use_24_hour_time').set(true);
        expect(spectator.component.time_format()).toBe('HH:mm');
        settingSignal('use_24_hour_time').set(false);
    });
});
