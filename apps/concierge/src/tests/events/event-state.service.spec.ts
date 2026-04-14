import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { BehaviorSubject, of, timer } from 'rxjs';
import { MockProvider } from 'ng-mocks';
import { EventStateService } from '../../app/events/event-state.service';

jest.mock('@placeos/events');
import * as events_mod from '@placeos/events';

describe('EventStateService', () => {
    let spectator: SpectatorService<EventStateService>;
    const createService = createServiceFactory({
        service: EventStateService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: new BehaviorSubject(
                    new Building({ id: 'bld-123' }),
                ),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) =>
                    key === 'app.group_events_calendar'
                        ? 'group-events@example.com'
                        : undefined,
                ),
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (events_mod as any).queryEvents = jest.fn(() => of([]));
        spectator = createService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should not re-request events when options are unchanged', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const end = endOfDay(Date.now()).valueOf();
        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1'],
        });

        const subscription = spectator.service.event_list.subscribe();
        await timer(350).toPromise();
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(1);

        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1'],
        });
        await timer(350).toPromise();
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(1);
        subscription.unsubscribe();
    });

    it('should re-request events when options change', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const end = endOfDay(Date.now()).valueOf();
        spectator.service.setOptions({ date, end, zone_ids: ['lvl-1'] });

        const subscription = spectator.service.event_list.subscribe();
        await timer(350).toPromise();
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(1);

        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1', 'lvl-2'],
        });
        await timer(350).toPromise();
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(2);
        subscription.unsubscribe();
    });
});
