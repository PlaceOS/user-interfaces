import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    settingSignal,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { PaymentsService } from '@placeos/payments';
import { getUnixTime } from 'date-fns';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { CalendarService } from 'libs/events/src/lib/calendar.service';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { LandingAvailableNowComponent } from '../../app/landing-new/landing-available-now.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

const LEVELS = [
    { id: 'lvl-1', parent_id: 'bld-1', name: 'Level 1' },
    { id: 'lvl-2', parent_id: 'bld-1', name: 'Level 2' },
];

// The booking form service is real: only its dependencies and the requests
// to the API (`@placeos/ts-client`) are mocked.
describe('LandingAvailableNowComponent', () => {
    let spectator: SpectatorRouting<LandingAvailableNowComponent>;
    const features = settingSignal<string[]>('features', []);
    const hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    const hide_rooms = settingSignal<boolean>('hide_landing_rooms');
    const free_space_list = signal<{ id: string; zones: string[] }[]>([]);
    const release_statuses = vi.fn();
    const createComponent = createRoutingFactory({
        component: LandingAvailableNowComponent,
        stubsEnabled: false,
        detectChanges: false,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(LandingStateService, {
                level_occupancy: signal(LEVELS),
                free_space_list,
                watchSpaceStatuses: vi.fn(() => release_statuses),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                overrides: signal([]),
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                waitUntilInitialised: () => Promise.resolve(),
                active_region: signal(null),
                active_building: signal({ id: 'bld-1' }),
                active_building_loaded: signal(true),
                regions: [],
                settings: [],
                building_list: signal([{ id: 'bld-1' }]),
                organisation: { id: 'org-1' },
                building: { id: 'bld-1' },
                buildings: [{ id: 'bld-1', name: 'Building 1' }],
                levelWithID: (ids: string[]) =>
                    LEVELS.find((lvl) => ids?.includes(lvl.id)),
            } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(PaymentsService, {}),
            MockProvider(AssetStateService, {
                getOptions: vi.fn(() => ({ date: 0 })),
                setOptions: vi.fn(),
            } as any),
            MockProvider(CalendarService, { loadCalendars: vi.fn() } as any),
        ],
    });

    /** Wait for the availability query, then render the result */
    const settle = async () => {
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
    };
    const levelRows = () =>
        spectator
            .queryAll('[name="available-level"]')
            .map((row) => row.textContent.replace(/\s+/g, ' ').trim());

    beforeEach(() => {
        vi.clearAllMocks();
        features.set(['desks', 'spaces', 'lockers', 'explore']);
        hide_spaces.set(undefined);
        hide_rooms.set(undefined);
        free_space_list.set([]);
        setCurrentUser(new StaffUser({ id: 'me', groups: ['staff'] }));
        // Desk list of the building: one request for all levels
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([
            {
                zone: { id: 'lvl-1' },
                metadata: {
                    desks: {
                        details: [
                            { id: 'desk-1', bookable: true },
                            { id: 'desk-2', bookable: true },
                            { id: 'desk-3', bookable: false },
                            {
                                id: 'desk-4',
                                bookable: true,
                                groups: ['managers'],
                            },
                        ],
                    },
                },
            },
            {
                zone: { id: 'lvl-2' },
                metadata: {
                    desks: { details: [{ id: 'desk-5', bookable: true }] },
                },
            },
        ] as any);
        // Booking rules of the building
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        // Booked desk IDs for the time from now
        vi.mocked(ts_client.query).mockResolvedValue({
            data: ['desk-2'],
            next: null,
            total: 1,
        } as any);
        spectator = createComponent();
    });

    it('should count the desks that are free now on a first visit', async () => {
        const now = getUnixTime(Date.now());
        await settle();

        // desk-2 is booked, desk-3 is not bookable, desk-4 is for a group
        // that the user is not in.
        expect(spectator.component.free_by_level()).toEqual({
            'lvl-1': 1,
            'lvl-2': 1,
        });
        expect(levelRows()).toHaveLength(2);
        const { query_params } = vi.mocked(ts_client.query).mock.calls[0][0];
        expect(query_params).toMatchObject({ type: 'desk', zones: 'bld-1' });
        expect(Math.abs(query_params.period_start - now)).toBeLessThan(5);
        expect(query_params.period_end - query_params.period_start).toBe(3600);
    });

    it('should make one request each for the list, the rules and the booked desks', async () => {
        await settle();
        await settle();

        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(1);
        expect(ts_client.listChildMetadata).toHaveBeenCalledWith('bld-1', {
            name: 'desks',
        });
        expect(ts_client.showMetadata).toHaveBeenCalledTimes(1);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'desk_booking_rules',
        );
        expect(ts_client.query).toHaveBeenCalledTimes(1);
    });

    it('should open on the first enabled tab and make no desk request without the desks feature', async () => {
        features.set(['spaces', 'explore']);
        free_space_list.set([
            { id: 'space-1', zones: ['bld-1', 'lvl-2'] },
            { id: 'space-2', zones: ['bld-1', 'lvl-2'] },
        ]);
        await settle();

        expect(spectator.component.tabs()).toEqual(['rooms']);
        expect(spectator.component.active_tab()).toBe('rooms');
        expect(spectator.component.free_by_level()).toEqual({ 'lvl-2': 2 });
        expect(levelRows()).toHaveLength(1);
        expect(ts_client.listChildMetadata).not.toHaveBeenCalled();
        expect(ts_client.query).not.toHaveBeenCalled();
    });

    it('should watch live room statuses only while the rooms tab is open', async () => {
        const state = spectator.inject(LandingStateService);
        features.set(['desks', 'spaces']);
        await settle();
        expect(spectator.component.active_tab()).toBe('desks');
        expect(state.watchSpaceStatuses).not.toHaveBeenCalled();

        spectator.component.selected_tab.set('rooms');
        await settle();
        expect(state.watchSpaceStatuses).toHaveBeenCalledTimes(1);
        expect(release_statuses).not.toHaveBeenCalled();

        spectator.component.selected_tab.set('desks');
        await settle();
        expect(release_statuses).toHaveBeenCalledTimes(1);
    });

    it('should remove tabs with the landing settings', () => {
        hide_spaces.set(true);
        expect(spectator.component.tabs()).toEqual(['rooms']);

        hide_spaces.set(false);
        hide_rooms.set(true);
        expect(spectator.component.tabs()).toEqual(['desks', 'lockers']);
        expect(spectator.component.active_tab()).toBe('desks');
    });

    it('should link to the map only with the explore feature', async () => {
        await settle();
        expect(spectator.query('[name="view-map"]')).toBeTruthy();
        expect(
            spectator.query('[name="available-level"]').getAttribute('href'),
        ).toBe('/explore?zone=lvl-1');

        features.set(['desks']);
        await settle();
        expect(spectator.query('[name="view-map"]')).toBeFalsy();
        expect(
            spectator.query('[name="available-level"]').getAttribute('href'),
        ).toBeNull();
    });
});
