import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import { CalendarService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const active_building = signal<any>(null);
    const flush = async () => {
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            // Macrotask so the effect's await chain (showMetadata → rxjs
            // from().toPromise()) fully drains between rounds.
            await new Promise((resolve) => setTimeout(resolve));
        }
    };
    const createService = createServiceFactory({
        service: LandingStateService,
        providers: [
            MockProvider(CalendarService, {
                freeBusy: vi.fn(() => of([])),
            } as any),
            MockProvider(ScheduleStateService, {
                filtered_bookings: signal([]),
            }),
            MockProvider(OrganisationService, {
                levels: [],
                binding: vi.fn(() => null),
                active_building,
                active_levels: signal([]),
                organisation: new Organisation(),
                initialised: signal(true),
                levelWithID: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        active_building.set(null);
        vi.clearAllMocks();
        // `requestSpacesForZone` (a workspace fn that can't be spied) calls
        // ts-client `querySystems` under the hood, so control the space list
        // one layer down.
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({
                bindThenSubscribe: vi.fn(() => vi.fn()),
            })),
        } as any);
    });

    // Root effects from a previous test's service stay alive on the shared
    // `active_building` signal unless the testing module is torn down, which
    // makes the leaked instance re-bind space statuses in later tests.
    afterEach(() => TestBed.resetTestingModule());

    it('should create service', () => {
        spectator = createService();
        expect(spectator.service).toBeTruthy();
    });

    it('should not rebind space status when a status value is received', async () => {
        const bindThenSubscribe = vi.fn((callback) => {
            callback('free');
            return vi.fn();
        });
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                {
                    id: 'space-1',
                    bookable: true,
                    capacity: 2,
                    zones: ['bld-1'],
                },
            ],
        } as any);
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({ bindThenSubscribe })),
        } as any);

        active_building.set({ id: 'bld-1' });
        spectator = createService();
        await flush();

        // User-dependent booking rules may rebind when the current-user signal
        // settles. Assert stability after settling instead of an absolute
        // count: a status emission re-triggering the
        // binding effect would add calls on every flush round.
        const settled_count = bindThenSubscribe.mock.calls.length;
        expect(settled_count).toBeGreaterThanOrEqual(1);
        await flush();
        expect(bindThenSubscribe.mock.calls.length).toBe(settled_count);
    });
});
