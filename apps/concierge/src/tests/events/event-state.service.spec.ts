import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
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

    it('should re-request events only when the period range changes', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const end = endOfDay(Date.now()).valueOf();
        spectator.service.setOptions({ date, end });

        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(1);

        spectator.service.setOptions({ period: 'month', zone_ids: ['lvl-1'] });
        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(1);

        spectator.service.setOptions({ end: end + 1 });
        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(2);
    });

    it('should filter the loaded events by the selected zones', async () => {
        const date = startOfDay(Date.now()).valueOf();
        const event = (id: string, zone: string) => ({
            id,
            event_start: getUnixTime(date),
            event_end: getUnixTime(date) + 3600,
            system: { id: `sys-${id}`, zones: [zone] },
            attendees: [
                {
                    email: `${id}@example.com`,
                    resource: true,
                    zones: [zone],
                },
            ],
            extension_data: { shared_event: true },
        });
        vi.mocked(ts_client.get).mockResolvedValue([
            event('evt-1', 'lvl-1'),
            event('evt-2', 'lvl-2'),
        ] as any);
        spectator.service.setOptions({ date, end: endOfDay(date).valueOf() });
        TestBed.flushEffects();
        await wait(350);
        expect(spectator.service.event_list().map((_) => _.id)).toEqual([
            'evt-1',
            'evt-2',
        ]);

        spectator.service.setOptions({ zone_ids: ['lvl-2'] });
        expect(spectator.service.event_list().map((_) => _.id)).toEqual([
            'evt-2',
        ]);
    });

    it('should not request events before the period is set', async () => {
        spectator.service.setOptions({ period: 'month' });

        TestBed.flushEffects();
        await wait(350);
        expect(eventQueryCount()).toBe(0);
    });
    it('should clear the loading state and show an error when events fail to load', async () => {
        const open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open } as any, true);
        vi.mocked(ts_client.get).mockRejectedValueOnce(
            new Error('Server down'),
        );
        spectator.service.setOptions({
            date: startOfDay(Date.now()).valueOf(),
            end: endOfDay(Date.now()).valueOf(),
        });

        TestBed.flushEffects();
        await wait(350);
        expect(spectator.service.loading()).toBe('');
        expect(open).toHaveBeenCalled();
        setNotifyOutlet(null, true);
    });
});
