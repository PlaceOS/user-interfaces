import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

import {
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockPage } from '@placeos/ts-client/compat';
import { events as staff_events } from '@placeos/ts-client/staff';
import { GroupEventsStateService } from '../../app/events/group-events-state.service';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const buildEvent = (overrides: any = {}) => ({
    id: 'e1',
    date: Date.now(),
    date_end: Date.now() + 3600000,
    permission: 'public',
    creator: 'other@example.com',
    host: 'other@example.com',
    mailbox: 'other@example.com',
    extension_data: { shared_event: true, tags: [] },
    ...overrides,
});

describe('GroupEventsStateService', () => {
    let spectator: SpectatorService<GroupEventsStateService>;
    const active_building = signal<unknown>({ id: 'bld-1' });
    const settings_get = vi.fn((key: string) =>
        key === 'app.group_events_calendar' ? 'events@example.com' : undefined,
    );
    const createService = createServiceFactory({
        service: GroupEventsStateService,
        providers: [
            MockProvider(OrganisationService, { active_building } as any),
            MockProvider(SettingsService, { get: settings_get } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // Vitest skips the automatic user bootstrap, so seed the current user.
        setCurrentUser(
            new StaffUser({
                id: 'me',
                email: 'me@example.com',
                name: 'Me',
            }),
        );
        active_building.set({ id: 'bld-1' });
        vi.mocked(ts_client.systems.findByEmail).mockResolvedValue(
            mockPage({
                data: [{ id: 'sys-1' }],
            } as any),
        );
        // `queryEvents` (a workspace fn that can't be spied) fetches with
        // the staff `events.query` and wraps the result in CalendarEvent, so
        // control the event list one layer down.
        vi.mocked(staff_events.query).mockImplementation(
            fromV1Mock(() => [], ['...']),
        );
        spectator = createService();
    });

    afterEach(() => {
        setCurrentUser(null);
    });

    it('should clear events when no building is active', async () => {
        active_building.set(null);
        TestBed.flushEffects();
        await wait(10);

        expect(staff_events.query).not.toHaveBeenCalled();
        expect(spectator.service.events()).toEqual([]);
    });

    it('should clear events when no matching system exists', async () => {
        vi.mocked(ts_client.systems.findByEmail).mockResolvedValue(
            mockPage({
                data: [],
            } as any),
        );
        TestBed.flushEffects();
        await wait(10);

        expect(staff_events.query).not.toHaveBeenCalled();
        expect(spectator.service.events()).toEqual([]);
    });

    it('should keep only shared, visible events and collect their tags', async () => {
        vi.mocked(staff_events.query).mockImplementation(
            fromV1Mock(
                () => [
                    buildEvent({
                        id: 'shared',
                        extension_data: { shared_event: true, tags: ['music'] },
                    }),
                    buildEvent({
                        id: 'not-shared',
                        extension_data: { shared_event: false, tags: ['x'] },
                    }),
                    buildEvent({
                        id: 'private-hidden',
                        permission: 'private',
                        creator: 'someone@example.com',
                        host: 'someone@example.com',
                        mailbox: 'someone@example.com',
                        extension_data: {
                            shared_event: true,
                            tags: ['secret'],
                        },
                    }),
                ],
                ['...'],
            ),
        );

        TestBed.flushEffects();
        await wait(10);

        expect(staff_events.query).toHaveBeenCalled();
        expect(spectator.service.events().map((_) => _.id)).toEqual(['shared']);
        expect(spectator.service.tags()).toEqual(['music']);
    });

    it('should include private events the current user created or hosts', async () => {
        vi.mocked(staff_events.query).mockImplementation(
            fromV1Mock(
                () => [
                    buildEvent({
                        id: 'created',
                        permission: 'private',
                        creator: 'me@example.com',
                        host: 'other@example.com',
                    }),
                    buildEvent({
                        id: 'hosted',
                        permission: 'private',
                        creator: 'other@example.com',
                        host: 'me@example.com',
                    }),
                ],
                ['...'],
            ),
        );

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.events().map((_) => _.id)).toEqual([
            'created',
            'hosted',
        ]);
    });

    it('should hide private events when only the mailbox is the current user', async () => {
        // Staff API returns the viewer's email as the mailbox (PPT-2247)
        vi.mocked(staff_events.query).mockImplementation(
            fromV1Mock(
                () => [
                    buildEvent({
                        id: 'draft',
                        permission: 'private',
                        creator: 'other@example.com',
                        host: 'other@example.com',
                        mailbox: 'me@example.com',
                    }),
                ],
                ['...'],
            ),
        );

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.events()).toEqual([]);
    });

    it('should filter events by selected tags and future end date', async () => {
        vi.mocked(staff_events.query).mockImplementation(
            fromV1Mock(
                () => [
                    buildEvent({
                        id: 'music-future',
                        extension_data: { shared_event: true, tags: ['Music'] },
                    }),
                    buildEvent({
                        id: 'music-past',
                        date_end: Date.now() - 1000,
                        extension_data: { shared_event: true, tags: ['Music'] },
                    }),
                    buildEvent({
                        id: 'no-tag',
                        extension_data: { shared_event: true, tags: [] },
                    }),
                ],
                ['...'],
            ),
        );

        TestBed.flushEffects();
        await wait(10);

        spectator.service.setFilters({ tags: ['music'] });

        expect(spectator.service.filtered_events().map((_) => _.id)).toEqual([
            'music-future',
        ]);
    });

    it('should flag a failed load', async () => {
        vi.mocked(staff_events.query).mockRejectedValue(new Error('offline'));
        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.failed()).toBe(true);
        expect(spectator.service.loading()).toBe(false);
        expect(spectator.service.events()).toEqual([]);
    });

    it('should not show the events of a period that is no longer selected', async () => {
        let resolveOld: (value: unknown) => void = () => undefined;
        vi.mocked(staff_events.query)
            .mockImplementationOnce(
                fromV1Mock(
                    () => new Promise((resolve) => (resolveOld = resolve)),
                    ['...'],
                ),
            )
            .mockImplementation(
                fromV1Mock(() => [buildEvent({ id: 'new' })], ['...']),
            );
        TestBed.flushEffects();
        await wait(10);
        spectator.service.setOptions({ date: Date.now() + 86400000 });
        TestBed.flushEffects();
        await wait(10);

        resolveOld([buildEvent({ id: 'old' })]);
        await wait(10);

        expect(spectator.service.events().map((_) => _.id)).toEqual(['new']);
        expect(spectator.service.loading()).toBe(false);
    });
});
