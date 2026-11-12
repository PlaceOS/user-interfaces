import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { set } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { MockComponent, MockProvider } from 'ng-mocks';
import { EventCardComponent } from '../lib/event-card.component';
import { EventDetailsModalComponent } from '../lib/event-details-modal.component';
import { GroupEventDetailsModalComponent } from '../lib/group-event-details-modal.component';

describe('EventCardComponent', () => {
    let spectator: SpectatorRouting<EventCardComponent>;
    const createComponent = createRoutingFactory({
        component: EventCardComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(StatusPillComponent),
        ],
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(),
                buildings: [],
                active_building: signal(null),
            }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        componentProviders: [MockProvider(SpacePipe)],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should show event details', () => {
        expect('[details]').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({
                date: set(Date.now(), { hours: 8, minutes: 0 }).valueOf(),
            }),
        });
        spectator.detectChanges();
        expect('[name="view-event-details"]').toExist();
        expect('[day]').not.toExist();
        spectator.setInput({ show_day: true });
        spectator.detectChanges();
        expect('[day]').toExist();
    });

    it.each([
        { shared_event: false, modal: EventDetailsModalComponent },
        { shared_event: true, modal: GroupEventDetailsModalComponent },
    ])(
        'should open $modal.name when shared_event is $shared_event',
        async ({ shared_event, modal }) => {
            const event = new CalendarEvent({
                id: 'event-1',
                extension_data: { shared_event },
            });
            spectator.setInput({ event });
            spectator.component.viewDetails();
            const dialog = spectator.inject(MatDialog);
            await vi.waitFor(() =>
                expect(dialog.open).toHaveBeenCalledWith(modal, {
                    data: expect.objectContaining({ event }),
                }),
            );
            expect(dialog.open).toHaveBeenCalledTimes(1);
        },
    );

    it.each([
        { room: 'accepted', date_offset: 60, pill: 'success' },
        { room: 'tentative', date_offset: 60, pill: 'warning' },
        { room: 'declined', date_offset: 60, pill: 'error' },
        { room: 'accepted', date_offset: -120, pill: 'neutral' },
    ] as const)(
        'should show a $pill pill when the room is $room and the event starts in $date_offset minutes',
        ({ room, date_offset, pill }) => {
            spectator.setInput({
                event: new CalendarEvent({
                    date: Date.now() + date_offset * 60 * 1000,
                    duration: 60,
                    resources: [
                        new Space({
                            email: 'room@place.tech',
                            response_status: room,
                        }),
                    ],
                }),
            });
            expect(spectator.component.status()).toBe(pill);
        },
    );
});
