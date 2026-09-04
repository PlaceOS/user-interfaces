import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    Building,
    BuildingLevel,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BuildingPipe, LevelPipe } from '@placeos/components';
import * as ts_client_mod from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { NewDeskFlowSuccessComponent } from '../../app/book/desk-flow-new/desk-flow-success.component';

vi.mock('@placeos/ts-client', { spy: true });

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

    const list_resources = vi.fn(async () => [
        { id: 'desk-1', name: 'Current Desk One' },
        { id: 'desk-2', name: 'Current Desk Two' },
    ]);

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
                listResources: list_resources,
                openBookingLinkModal: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                buildings: [],
                levelWithID: vi.fn(() => new BuildingLevel()),
                buildingWithID: vi.fn(() => new Building()),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => undefined),
                time_format: 'h:mm a',
            } as any),
            // The component uses inject(LevelPipe) and inject(BuildingPipe)
            // directly, so they must be provided in the test's injector.
            {
                provide: LevelPipe,
                useValue: { transform: vi.fn(() => new BuildingLevel()) },
            },
            {
                provide: BuildingPipe,
                useValue: { transform: vi.fn(() => new Building()) },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
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
        expect(spectator.component.group_size()).toBe(3);
    });

    it('should consider the booking a group booking when extension_data has group_members', () => {
        // The buggy code derives is_group from group_size > 1, but because
        // group_size reads from the wrong field (attendees), is_group is
        // always false for desk group bookings before the fix.
        expect(spectator.component.is_group()).toBe(true);
    });

    it('should include failed group members in the group booking list', () => {
        spectator.component.group_bookings.set([
            new Booking({
                id: 'booking-1',
                user_email: 'member.one@example.com',
                user_name: 'Member One',
                asset_id: 'desk-1',
                asset_name: 'Desk 1',
            }),
        ]);
        spectator.component.group_failures.set([
            {
                email: 'member.two@example.com',
                name: 'Member Two',
                asset_id: 'desk-2',
                asset_name: 'Desk 2',
                error: 'Save failed',
            },
        ]);

        expect(spectator.component.group_booking_items()).toEqual([
            expect.objectContaining({
                email: 'member.one@example.com',
                asset_name: 'desk-1',
                failed: false,
            }),
            expect.objectContaining({
                email: 'member.two@example.com',
                asset_name: 'desk-2',
                failed: true,
                error: 'Save failed',
            }),
        ]);
    });

    it('should use current desk names for group booking details', async () => {
        localStorage.setItem(
            'PLACEOS.last_group_booking_ids',
            JSON.stringify(['group-1', 'booking-1']),
        );
        localStorage.setItem(
            'PLACEOS.last_group_booking_errors',
            JSON.stringify([
                {
                    email: 'member.two@example.com',
                    name: 'Member Two',
                    asset_id: 'desk-2',
                    asset_name: 'Stale Desk Two',
                    error: 'Save failed',
                },
            ]),
        );
        vi.mocked(ts_client_mod.get).mockImplementation(async (url) => {
            const is_group = `${url}`.endsWith('/group-1');
            return {
                id: is_group ? 'group-1' : 'booking-1',
                booking_type: is_group ? 'group' : 'desk',
                user_email: 'member.one@example.com',
                user_name: 'Member One',
                asset_id: 'desk-1',
                asset_name: 'Stale Desk One',
            } as any;
        });

        await (spectator.component as any)._loadGroupBookings();

        expect(list_resources).toHaveBeenCalled();
        expect(spectator.component.group_booking_items()).toEqual([
            expect.objectContaining({
                email: 'member.one@example.com',
                asset_name: 'Current Desk One',
                failed: false,
            }),
            expect.objectContaining({
                email: 'member.two@example.com',
                asset_name: 'Current Desk Two',
                failed: true,
            }),
        ]);
    });
});
