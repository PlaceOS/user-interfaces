import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    CalendarEvent,
    Organisation,
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import { CalendarService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { PlaceMetadata, PlaceUser } from '@placeos/ts-client';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const active_building = signal<any>(null);
    const filtered_bookings = signal<(Booking | CalendarEvent)[]>([]);
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
                filtered_bookings,
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
        filtered_bookings.set([]);
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
        // Contacts load users with `showUser`. The real call asks ts-client
        // for a token, which schedules a re-authorise timer that can fire
        // after this file's window is gone.
        vi.mocked(ts_client.showUser).mockImplementation(
            async (email: string) => new PlaceUser({ id: email, email }),
        );
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({
                bindThenSubscribe: vi.fn(() => vi.fn()),
            })),
        } as any);
    });

    // Root effects from a previous test's service stay alive on the shared
    // `active_building` signal unless the testing module is torn down, which
    // makes the leaked instance re-bind space statuses in later tests.
    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
    });

    it('should exclude inactive bookings from upcoming events', () => {
        const now = new Date().setHours(12, 0, 0, 0);
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(now);
        const date = now - 60 * 60 * 1000;
        filtered_bookings.set([
            new Booking({
                id: 'active',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                status: 'approved',
            } as any),
            new Booking({
                id: 'checked-out',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                status: 'approved',
                checked_out_at: Math.floor(Date.now() / 1000) - 60,
            } as any),
            new Booking({
                id: 'cancelled',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                status: 'cancelled',
            } as any),
            new Booking({
                id: 'deleted',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                deleted: true,
            } as any),
            new CalendarEvent({
                id: 'declined-event',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                status: 'cancelled',
            } as any),
            new CalendarEvent({
                id: 'deleted-event',
                date,
                duration: 24 * 60 - 1,
                all_day: true,
                deleted: true,
            }),
        ]);

        spectator = createService();
        TestBed.flushEffects();

        expect(spectator.service.upcoming_events().map((_) => _.id)).toEqual([
            'active',
        ]);
    });

    it('should keep current and upcoming bookings for a fresh account', async () => {
        const date = new Date().setHours(12, 0, 0, 0);
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(date);
        const current = new Booking({ date: date - 60_000, duration: 60 });
        const upcoming = new Booking({ date: date + 60_000, duration: 60 });
        const meeting = new CalendarEvent({
            date: date + 120_000,
            duration: 60,
        });
        filtered_bookings.set([
            new Booking({ date: date - 7_200_000, duration: 60 }),
            current,
            upcoming,
            meeting,
            new Booking({ date: date + 86_400_000, duration: 60 }),
        ]);
        spectator = createService();
        await flush();

        expect(spectator.service.upcoming_events()).toEqual([
            current,
            upcoming,
            meeting,
        ]);
    });

    it('should list the free spaces that the booking rules allow', async () => {
        // The live statuses have the order of the allowed spaces
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                { id: 'space-hidden', bookable: true, zones: ['lvl-a'] },
                { id: 'space-free', bookable: true, zones: ['lvl-b'] },
                { id: 'space-busy', bookable: true, zones: ['lvl-b'] },
            ],
        } as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [{ zone: 'lvl-a', rules: { hidden: true } }],
        } as any);
        vi.mocked(ts_client.getModule).mockImplementation(
            (id: string) =>
                ({
                    variable: () => ({
                        bindThenSubscribe: (
                            callback: (status: string) => void,
                        ) => {
                            callback(id === 'space-free' ? 'free' : 'busy');
                            return vi.fn();
                        },
                    }),
                }) as any,
        );

        active_building.set({ id: 'bld-rules' });
        spectator = createService();
        const release = spectator.service.watchSpaceStatuses();
        await flush();

        expect(
            spectator.service.free_space_list().map((space) => space.id),
        ).toEqual(['space-free']);
        release();
        await flush();
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
        const release = spectator.service.watchSpaceStatuses();
        await flush();

        // User-dependent booking rules may rebind when the current-user signal
        // settles. Assert stability after settling instead of an absolute
        // count: a status emission re-triggering the
        // binding effect would add calls on every flush round.
        const settled_count = bindThenSubscribe.mock.calls.length;
        expect(settled_count).toBeGreaterThanOrEqual(1);
        await flush();
        expect(bindThenSubscribe.mock.calls.length).toBe(settled_count);
        release();
        await flush();
    });

    it('should bind space statuses only while a screen watches them', async () => {
        // The effect can rebind when the booking rules settle, so count the
        // bindings that are open
        let open = 0;
        const bindThenSubscribe = vi.fn((callback) => {
            open++;
            callback('free');
            return () => open--;
        });
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                { id: 'space-1', bookable: true, zones: ['bld-watch'] },
                { id: 'space-2', bookable: true, zones: ['bld-watch'] },
            ],
        } as any);
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({ bindThenSubscribe })),
        } as any);

        active_building.set({ id: 'bld-watch' });
        spectator = createService();
        await flush();
        expect(bindThenSubscribe).not.toHaveBeenCalled();
        expect(spectator.service.space_list()).toHaveLength(2);

        const release_home = spectator.service.watchSpaceStatuses();
        const release_other = spectator.service.watchSpaceStatuses();
        await flush();
        expect(open).toBe(2);
        expect(spectator.service.free_space_list()).toHaveLength(2);

        // A second release of the same watcher does not end the other watch
        release_home();
        release_home();
        await flush();
        expect(open).toBe(2);

        release_other();
        await flush();
        expect(open).toBe(0);
        expect(spectator.service.free_space_list()).toEqual([]);
    });

    describe('colleague search', () => {
        type QueryResult = Awaited<ReturnType<typeof ts_client.queryUsers>>;
        const users = (...emails: string[]): QueryResult => ({
            total: emails.length,
            next: () => null,
            data: emails.map((email) => new PlaceUser({ id: email, email })),
        });
        const emails = () =>
            spectator.service.search_results().map((user) => user.email);

        beforeEach(() => {
            vi.useFakeTimers();
            spectator = createService();
        });

        it('should search after the user stops typing', async () => {
            vi.mocked(ts_client.queryUsers).mockResolvedValue(
                users('ann@example.com'),
            );
            spectator.service.setOptions({ search: 'a' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(300);
            spectator.service.setOptions({ search: 'an' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(499);
            expect(ts_client.queryUsers).not.toHaveBeenCalled();

            await vi.advanceTimersByTimeAsync(1);
            expect(ts_client.queryUsers).toHaveBeenCalledExactlyOnceWith(
                expect.objectContaining({ q: 'an' }),
            );
            expect(emails()).toEqual(['ann@example.com']);
            expect(spectator.service.loading()).toBe('');
        });

        it('should ignore the late response of a replaced search', async () => {
            let resolveOld: (result: QueryResult) => void;
            vi.mocked(ts_client.queryUsers)
                .mockReturnValueOnce(
                    new Promise((resolve) => (resolveOld = resolve)),
                )
                .mockResolvedValueOnce(users('new@example.com'));
            spectator.service.setOptions({ search: 'old' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(500);
            spectator.service.setOptions({ search: 'new' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(500);
            expect(emails()).toEqual(['new@example.com']);

            resolveOld(users('old@example.com'));
            await vi.advanceTimersByTimeAsync(0);
            expect(emails()).toEqual(['new@example.com']);
        });

        it('should flag a failed search and clear the results', async () => {
            vi.mocked(ts_client.queryUsers).mockResolvedValueOnce(
                users('ann@example.com'),
            );
            spectator.service.setOptions({ search: 'ann' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(500);
            expect(emails()).toEqual(['ann@example.com']);

            vi.mocked(ts_client.queryUsers).mockRejectedValueOnce(
                new Error('offline'),
            );
            spectator.service.setOptions({ search: 'bob' });
            TestBed.flushEffects();
            await vi.advanceTimersByTimeAsync(500);
            expect(spectator.service.search_failed()).toBe(true);
            expect(emails()).toEqual([]);
            expect(spectator.service.loading()).toBe('');
        });
    });

    describe('contacts', () => {
        const saved = () =>
            vi
                .mocked(ts_client.updateMetadata)
                .mock.lastCall?.[1].details.map(
                    (user: StaffUser) => user.email,
                );

        beforeEach(async () => {
            setCurrentUser(
                new StaffUser({ id: 'me', email: 'me@example.com' }),
            );
            vi.mocked(ts_client.showMetadata).mockResolvedValue(
                new PlaceMetadata({
                    name: 'contacts',
                    details: [{ email: 'ann@example.com' }],
                }),
            );
            vi.mocked(ts_client.updateMetadata).mockResolvedValue(
                new PlaceMetadata(),
            );
            spectator = createService();
            await flush();
        });

        afterEach(() => setCurrentUser(null));

        it('should save added contacts once per email', async () => {
            expect(spectator.service.contacts().map((_) => _.email)).toEqual([
                'ann@example.com',
            ]);

            await spectator.service.addContacts([
                new StaffUser({ email: 'ann@example.com' }),
                new StaffUser({ email: 'bob@example.com' }),
            ]);

            expect(ts_client.updateMetadata).toHaveBeenCalledWith(
                'me',
                expect.objectContaining({ name: 'contacts' }),
            );
            expect(saved()).toEqual(['ann@example.com', 'bob@example.com']);
        });

        it('should save the contacts without the removed user', async () => {
            await spectator.service.removeContact(
                new StaffUser({ email: 'ann@example.com' }),
            );

            expect(saved()).toEqual([]);
        });
    });
});
