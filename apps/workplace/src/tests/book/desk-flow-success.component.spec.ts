import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    Building,
    BuildingLevel,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BuildingPipe, LevelPipe } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { NewDeskFlowSuccessComponent } from '../../app/book/desk-flow/desk-flow-success.component';

describe('NewDeskFlowSuccessComponent', () => {
    const group_members = [
        {
            id: 'user-1',
            email: 'member.one@example.com',
            name: 'Member One',
            company: '',
            phone: '',
            international: false,
        },
        {
            id: 'user-2',
            email: 'member.two@example.com',
            name: 'Member Two',
            company: '',
            phone: '',
            international: false,
        },
        {
            id: 'user-3',
            email: 'member.three@example.com',
            name: 'Member Three',
            company: '',
            phone: '',
            international: false,
        },
    ];

    const group_booking = new Booking({
        id: 'booking-group-1',
        booking_type: 'desk',
        user_email: 'member.one@example.com',
        asset_id: 'desk-1',
        asset_name: 'Desk 1',
        date: Date.now() + 60 * 60 * 1000,
        duration: 60,
        zones: ['org-1', 'bld-1', 'lvl-1'],
        extension_data: {
            group_members,
        },
    });

    let spectator: SpectatorRouting<NewDeskFlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowSuccessComponent,
        providers: [
            MockProvider(BookingFormService, {
                last_success: group_booking,
                openBookingLinkModal: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                initialised: of(true),
                buildings: [],
                levelWithID: jest.fn(() => new BuildingLevel()),
                buildingWithID: jest.fn(() => new Building()),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => undefined),
                time_format: 'h:mm a',
            } as any),
            // The component uses inject(LevelPipe) and inject(BuildingPipe)
            // directly, so they must be provided in the test's injector.
            {
                provide: LevelPipe,
                useValue: { transform: jest.fn(() => new BuildingLevel()) },
            },
            {
                provide: BuildingPipe,
                useValue: { transform: jest.fn(() => new Building()) },
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should return the number of group_members from extension_data as group_size', () => {
        // The buggy code reads from `last_event.attendees` which is always
        // empty for desk bookings, so group_size incorrectly returns 1.
        // After the fix it should read extension_data.group_members.length
        // and return 3.
        expect(spectator.component.group_size).toBe(3);
    });

    it('should consider the booking a group booking when extension_data has group_members', () => {
        // The buggy code derives is_group from group_size > 1, but because
        // group_size reads from the wrong field (attendees), is_group is
        // always false for desk group bookings before the fix.
        expect(spectator.component.is_group).toBe(true);
    });
});
