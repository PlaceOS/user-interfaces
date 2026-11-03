import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';
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
            }),
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

    it('should keep the event details open when removal fails', async () => {
        setNotifyOutlet(
            {
                open: vi.fn(() => ({
                    onAction: () => ({ subscribe: () => undefined }),
                    dismiss: () => undefined,
                })),
            } as any,
            true,
        );
        const details = { close: vi.fn() };
        const confirm = {
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason: 'done' }),
            close: vi.fn(),
        };
        const open = vi.mocked(TestBed.inject(MatDialog).open);
        open.mockReturnValueOnce(details as any);
        open.mockReturnValueOnce(confirm as any);
        vi.mocked(ts_client.del).mockRejectedValueOnce(
            new Error('Server down'),
        );

        spectator.service.viewEvent({ id: 'evt-1', title: 'Event' } as any);
        const data = open.mock.calls[0][1].data as {
            remove_fn: () => Promise<void>;
        };
        await data.remove_fn();

        expect(confirm.close).toHaveBeenCalled();
        expect(details.close).not.toHaveBeenCalled();
        setNotifyOutlet(null, true);
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

    it('should not request events before the period is set', async () => {
        spectator.service.setOptions({ period: 'month' });

        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(0);
    });
});
