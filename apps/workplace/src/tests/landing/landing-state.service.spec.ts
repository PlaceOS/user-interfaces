import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import {
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { CalendarService, requestSpacesForZone } from '@placeos/events';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/events', () => ({
    ...jest.requireActual('@placeos/events'),
    requestSpacesForZone: jest.fn(() => of([])),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    getModule: jest.fn(),
    showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
}));

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const active_building = signal<any>(null);
    const flush = async () => {
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            await Promise.resolve();
        }
    };
    const createService = createServiceFactory({
        service: LandingStateService,
        providers: [
            MockProvider(CalendarService, {
                freeBusy: jest.fn(() => of([])),
            }),
            MockProvider(ScheduleStateService, {
                filtered_bookings: signal([]),
            }),
            MockProvider(OrganisationService, {
                levels: [],
                binding: jest.fn(() => null),
                active_building,
                active_levels: signal([]),
                organisation: new Organisation(),
                initialised: signal(true),
                levelWithID: jest.fn(),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => {
        active_building.set(null);
        jest.clearAllMocks();
        (requestSpacesForZone as jest.Mock).mockReturnValue(of([]));
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({ details: [] });
        (ts_client.getModule as jest.Mock).mockReturnValue({
            variable: jest.fn(() => ({
                bindThenSubscribe: jest.fn(() => jest.fn()),
            })),
        });
    });

    it('should create service', () => {
        spectator = createService();
        expect(spectator.service).toBeTruthy();
    });

    it('should not rebind space status when a status value is received', async () => {
        const bindThenSubscribe = jest.fn((callback) => {
            callback('free');
            return jest.fn();
        });
        (requestSpacesForZone as jest.Mock).mockReturnValue(
            of([
                {
                    id: 'space-1',
                    bookable: true,
                    capacity: 2,
                    zones: ['bld-1'],
                },
            ]),
        );
        (ts_client.getModule as jest.Mock).mockReturnValue({
            variable: jest.fn(() => ({ bindThenSubscribe })),
        });

        active_building.set({ id: 'bld-1' });
        spectator = createService();
        await flush();

        expect(bindThenSubscribe).toHaveBeenCalledTimes(1);
    });
});
