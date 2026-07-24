import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { EventStateService } from '../../app/events/event-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Count `get` calls that hit the events listing endpoint (queryEvents -> get) */
const eventQueryCount = () =>
    vi
        .mocked(ts_client.get)
        .mock.calls.filter((args) =>
            String(args[0]).includes('/api/staff/v1/events'),
        ).length;

describe('EventStateService', () => {
    let spectator: SpectatorService<EventStateService>;
    const createService = createServiceFactory({
        service: EventStateService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal(new Building({ id: 'bld-123' })),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) =>
                    key === 'app.group_events_calendar'
                        ? 'group-events@example.com'
                        : undefined,
                ),
            } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createService();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should not re-request events when options are unchanged', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const end = endOfDay(Date.now()).valueOf();
        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1'],
        });

        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(1);

        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1'],
        });
        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(1);
    });

    it('should re-request events when options change', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const end = endOfDay(Date.now()).valueOf();
        spectator.service.setOptions({ date, end, zone_ids: ['lvl-1'] });

        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(1);

        spectator.service.setOptions({
            date,
            end,
            zone_ids: ['lvl-1', 'lvl-2'],
        });
        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(2);
    });
});
