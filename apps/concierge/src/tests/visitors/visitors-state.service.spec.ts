import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { addDays, addMinutes, getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import {
    Booking,
    getTimezoneDifferenceInHours,
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';

import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('VisitorStateService', () => {
    let spectator: SpectatorService<VisitorsStateService>;
    const createService = createServiceFactory({
        service: VisitorsStateService,
        providers: [
            MockProvider(MatDialog, {
                open: vi.fn(() => ({
                    afterClosed: vi.fn(() => of(true)),
                })),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({
                    id: 'bld-1',
                    timezone: 'Australia/Sydney',
                }),
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
            MockProvider(SettingsService, {
                time_format: 'h:mm a',
                get: ((name: string) =>
                    name === 'app.bookings.use_building_timezone'
                        ? true
                        : undefined) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        });
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        vi.mocked(ts_client.patch).mockResolvedValue({} as any);
        vi.mocked(ts_client.put).mockResolvedValue({} as any);
        setNotifyOutlet(null, true);
        spectator = createService();
        spectator.service.activate();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should list visitor events', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [{ guests: [{}], attendees: [{}, {}] }],
            total: 1,
            next: null,
        });
        expect(ts_client.query).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.bookings()).toHaveLength(1);
        expect(ts_client.query).toHaveBeenCalledWith(
            expect.objectContaining({
                query_params: expect.objectContaining({
                    include_checked_out: true,
                    include_deleted: true,
                    limit: 200,
                }),
            }),
        );
    });

    it('should not load while the visitors view is closed', async () => {
        spectator.service.deactivate();
        TestBed.flushEffects();
        await wait(10);
        expect(ts_client.query).not.toHaveBeenCalled();
    });

    it('should not publish a load that a newer load replaced', async () => {
        let resolveFirst: (value: unknown) => void = () => null;
        vi.mocked(ts_client.query)
            .mockImplementationOnce(
                () => new Promise((resolve) => (resolveFirst = resolve)) as any,
            )
            .mockResolvedValueOnce({
                data: [new Booking({ id: 'new' })],
                total: 1,
                next: null,
            });
        const building = { id: 'bld-1' } as any;
        const first = (spectator.service as any)._load(building, {});
        await (spectator.service as any)._load(building, {});
        resolveFirst({ data: [new Booking({ id: 'old' })], total: 1, next: null });
        await first;

        expect(spectator.service.bookings().map((_) => _.id)).toEqual(['new']);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should hide removed visitors but keep ordinary cancellations and failed removals', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [
                new Booking({ id: 'retained', booking_type: 'visitor' }),
                new Booking({
                    id: 'cancelled',
                    booking_type: 'visitor',
                    deleted: true,
                }),
                new Booking({
                    id: 'removed',
                    booking_type: 'visitor',
                    deleted: true,
                    extension_data: { removed_from_group: true },
                }),
                new Booking({
                    id: 'failed-removal',
                    booking_type: 'visitor',
                    extension_data: { removed_from_group: true },
                }),
            ],
            total: 4,
            next: null,
        });
        TestBed.flushEffects();
        await wait(10);

        expect(
            spectator.service.bookings().map((booking) => booking.id),
        ).toEqual(['retained', 'cancelled', 'failed-removal']);
    });

    it('should apply building timezone to visitor listing requests', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [{ extension_data: {} }],
            total: 1,
            next: null,
        });
        const date = new Date('2026-06-15T12:00:00').valueOf();

        spectator.service.setFilters({ date, period: 1 });
        TestBed.flushEffects();
        await wait(10);

        // The service applies the building timezone offset via the real
        // `getTimezoneDifferenceInHours` helper (workspace fn cannot be mocked
        // under this builder), so compute the same offset here.
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = getTimezoneDifferenceInHours(
            current_tz,
            'Australia/Sydney',
        );
        const start = addMinutes(startOfDay(new Date(date)), offset * 60);
        const end = addDays(start, 1);

        expect(ts_client.query).toHaveBeenLastCalledWith(
            expect.objectContaining({
                query_params: expect.objectContaining({
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                }),
            }),
        );
    });

    it('should allow filtering of visitor events', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [{ asset_name: 'true', extension_data: {} }],
            total: 1,
            next: null,
        });
        expect(ts_client.query).not.toHaveBeenCalled();
        TestBed.flushEffects();
        await wait(10);
        expect(spectator.service.filtered_bookings()).toHaveLength(1);
        spectator.service.setSearchString('test');
        expect(spectator.service.filtered_bookings()).toHaveLength(0);
    });

    it('should poll no more often than every 3 minutes', () => {
        vi.useFakeTimers();
        try {
            const poll = vi.spyOn(spectator.service, 'poll');
            spectator.service.startPolling(1000);

            vi.advanceTimersByTime(3 * 60 * 1000 - 1);
            expect(poll).not.toHaveBeenCalled();
            vi.advanceTimersByTime(1);
            expect(poll).toHaveBeenCalledTimes(1);

            spectator.service.stopPolling();
            vi.advanceTimersByTime(3 * 60 * 1000);
            expect(poll).toHaveBeenCalledTimes(1);
        } finally {
            vi.useRealTimers();
        }
    });

    it('should allow checking in visitors', async () => {
        expect(ts_client.post).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any);

        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('/1/check_in?state=true'),
            '',
        );
    });

    it('should not check in a visitor for a rejected meeting', async () => {
        await expect(
            spectator.service.setCheckinState(
                new Booking({ id: '1', rejected: true }),
            ),
        ).rejects.toBe('You cannot check-in a rejected meeting');
        expect(ts_client.post).not.toHaveBeenCalled();
    });

    it('should approve an unapproved visitor before checking them in', async () => {
        await spectator.service.setCheckinState(
            new Booking({ id: '1', approved: false }),
        );

        const urls = vi.mocked(ts_client.post).mock.calls.map(([url]) => url);
        expect(urls).toEqual([
            expect.stringContaining('/1/approve'),
            expect.stringContaining('/1/check_in?state=true'),
        ]);
    });

    it('should not approve an approved visitor again on check-in', async () => {
        await spectator.service.setCheckinState(
            new Booking({ id: '1', approved: true }),
        );

        expect(ts_client.post).toHaveBeenCalledTimes(1);
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('/1/check_in?state=true'),
            '',
        );
    });

    it('should allow checking out visitors', async () => {
        expect(ts_client.post).not.toHaveBeenCalled();
        await spectator.service.setCheckinState({ id: '1' } as any, false);
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('/1/check_in?state=false'),
            '',
        );
    });

    it('should allow checking in all visitors', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [{ parent_id: '1', extension_data: {} }],
            total: 1,
            next: null,
        });
        TestBed.flushEffects();
        await wait(10);
        vi.mocked(ts_client.post).mockClear();
        expect(ts_client.post).not.toHaveBeenCalled();
        await spectator.service.setCheckinStateForEvent('1');
        expect(ts_client.post).toHaveBeenCalledWith(
            expect.stringContaining('/check_in?state=true'),
            '',
        );
    });

    it('should check out all visitors of an event after the user confirms', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [
                { id: 'g1', parent_id: '1', extension_data: {} },
                { id: 'g2', parent_id: '1', extension_data: {} },
                { id: 'other', parent_id: '2', extension_data: {} },
            ],
            total: 3,
            next: null,
        });
        TestBed.flushEffects();
        await wait(10);
        const confirm_ref = {
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        };
        vi.mocked(spectator.inject(MatDialog).open).mockReturnValue(
            confirm_ref as unknown as MatDialogRef<unknown>,
        );

        await spectator.service.setCheckinStateForEvent('1', false);

        expect(confirm_ref.close).toHaveBeenCalled();
        const urls = vi.mocked(ts_client.post).mock.calls.map(([url]) => url);
        expect(urls).toEqual([
            expect.stringContaining('/g1/check_in?state=false'),
            expect.stringContaining('/g2/check_in?state=false'),
        ]);
    });

    it('should not check out visitors when the user cancels', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [{ id: 'g1', parent_id: '1', extension_data: {} }],
            total: 1,
            next: null,
        });
        TestBed.flushEffects();
        await wait(10);
        vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason: 'cancel' }),
            close: vi.fn(),
        } as unknown as MatDialogRef<unknown>);

        await spectator.service.setCheckinStateForEvent('1', false);

        expect(ts_client.post).not.toHaveBeenCalled();
    });
});
