import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SpacesService } from '@placeos/spaces';
import { BehaviorSubject, of, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import {
    endOfDay,
    endOfWeek,
    endOfMonth,
    getUnixTime,
    startOfMonth,
    startOfWeek,
    startOfDay,
} from 'date-fns';
import { EventsStateService } from '../../app/day-view/events-state.service';

jest.mock('@placeos/events');

import * as events_mod from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Building } from 'libs/organisation/src/lib/building.class';
import { Region } from 'libs/organisation/src/lib/region.class';

describe('EventsStateService', () => {
    let spectator: SpectatorService<EventsStateService>;
    const createService = createServiceFactory({
        service: EventsStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building(),
                region: new Region({}),
                active_region: new BehaviorSubject({}),
                active_building: new BehaviorSubject({}),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(SpacesService, { find: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list events', async () => {
        spectator.service.setZones(['bld-123']);
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator.service.startPolling('day', 2);
        await timer(4).toPromise();
        spectator.service.stopPolling();
        await timer(301).toPromise();
        let events = await spectator.service.events.pipe(take(1)).toPromise();
        expect(events).toHaveLength(0);
        (events_mod as any).queryEvents = jest.fn(() =>
            of([
                { resources: [{ email: '1' }] },
                { resources: [{ email: '2' }] },
            ])
        );
        spectator.service.setZones(['bld-234']);
        await timer(301).toPromise();
        events = await spectator.service.events.pipe(take(1)).toPromise();
        expect(events).toHaveLength(2);
    });

    it('should allow filtering of listed events', async () => {
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator.service.events.subscribe();
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day', 2);
        await timer(5).toPromise();
        spectator.service.stopPolling();
        await timer(305).toPromise();
        let events = await spectator.service.filtered.pipe(take(1)).toPromise();
        expect(events).toHaveLength(0);
        (events_mod as any).queryEvents = jest.fn(() =>
            of([
                {},
                {
                    date: Date.now(),
                    resources: [{ email: '1', zones: ['bld-234'] }],
                },
            ])
        );
        spectator.service.setZones([]);
        await timer(305).toPromise();
        events = await spectator.service.filtered.pipe(take(1)).toPromise();
        // expect(events).toHaveLength(1);
    });

    it('should allow polling of events for day', async () => {
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.events.subscribe();
        spectator.service.filtered.subscribe();
        spectator.service.startPolling('day', 2);
        await timer(5).toPromise();
        spectator.service.stopPolling();
        await timer(305).toPromise();
        expect(events_mod.queryEvents).toBeCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
        });
    });

    it('should allow polling of events for week', async () => {
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.events.subscribe();
        spectator.service.filtered.subscribe();
        spectator.service.startPolling('week', 2);
        await timer(5).toPromise();
        spectator.service.stopPolling();
        await timer(305).toPromise();
        expect(events_mod.queryEvents).toBeCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfWeek(Date.now())),
            period_end: getUnixTime(endOfWeek(Date.now())),
        });
    });

    it('should allow polling of events for month', async () => {
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.events.subscribe();
        spectator.service.filtered.subscribe();
        spectator.service.startPolling('month', 2);
        await timer(5).toPromise();
        spectator.service.stopPolling();
        await timer(305).toPromise();
        expect(events_mod.queryEvents).toBeCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfMonth(Date.now())),
            period_end: getUnixTime(endOfMonth(Date.now())),
        });
    });

    it.todo('should allow adding new events');
    it.todo('should allow updating existing events');
    it.todo('should allow removing existing events');
});
