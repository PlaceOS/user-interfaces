import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    currentUser: jest.fn(() => ({ email: 'me@example.com' })),
}));

jest.mock('@placeos/events', () => ({
    ...jest.requireActual('@placeos/events'),
    queryEvents: jest.fn(() => Promise.resolve([])),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    querySystemsWithEmails: jest.fn(() =>
        Promise.resolve({ data: [{ id: 'sys-1' }] }),
    ),
}));

import { OrganisationService, SettingsService } from '@placeos/common';
import { queryEvents } from '@placeos/events';
import { querySystemsWithEmails } from '@placeos/ts-client';
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
    const active_building = signal<any>({ id: 'bld-1' });
    const settings_get = jest.fn((key: string) =>
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
        jest.clearAllMocks();
        active_building.set({ id: 'bld-1' });
        (querySystemsWithEmails as jest.Mock).mockResolvedValue({
            data: [{ id: 'sys-1' }],
        });
        (queryEvents as jest.Mock).mockResolvedValue([]);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should clear events when no building is active', async () => {
        active_building.set(null);
        TestBed.flushEffects();
        await wait(10);

        expect(queryEvents).not.toHaveBeenCalled();
        expect(spectator.service.events()).toEqual([]);
    });

    it('should clear events when no matching system exists', async () => {
        (querySystemsWithEmails as jest.Mock).mockResolvedValue({ data: [] });
        TestBed.flushEffects();
        await wait(10);

        expect(queryEvents).not.toHaveBeenCalled();
        expect(spectator.service.events()).toEqual([]);
    });

    it('should keep only shared, visible events and collect their tags', async () => {
        (queryEvents as jest.Mock).mockResolvedValue([
            buildEvent({ id: 'shared', extension_data: { shared_event: true, tags: ['music'] } }),
            buildEvent({ id: 'not-shared', extension_data: { shared_event: false, tags: ['x'] } }),
            buildEvent({
                id: 'private-hidden',
                permission: 'private',
                creator: 'someone@example.com',
                host: 'someone@example.com',
                mailbox: 'someone@example.com',
                extension_data: { shared_event: true, tags: ['secret'] },
            }),
        ]);

        TestBed.flushEffects();
        await wait(10);

        expect(queryEvents).toHaveBeenCalled();
        expect(spectator.service.events().map((_) => _.id)).toEqual(['shared']);
        expect(spectator.service.tags()).toEqual(['music']);
    });

    it('should include private events owned by the current user', async () => {
        (queryEvents as jest.Mock).mockResolvedValue([
            buildEvent({
                id: 'mine',
                permission: 'private',
                creator: 'me@example.com',
                host: 'other@example.com',
                mailbox: 'other@example.com',
                extension_data: { shared_event: true, tags: [] },
            }),
        ]);

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.events().map((_) => _.id)).toEqual(['mine']);
    });

    it('should filter events by selected tags and future end date', async () => {
        (queryEvents as jest.Mock).mockResolvedValue([
            buildEvent({ id: 'music-future', extension_data: { shared_event: true, tags: ['Music'] } }),
            buildEvent({ id: 'music-past', date_end: Date.now() - 1000, extension_data: { shared_event: true, tags: ['Music'] } }),
            buildEvent({ id: 'no-tag', extension_data: { shared_event: true, tags: [] } }),
        ]);

        TestBed.flushEffects();
        await wait(10);

        spectator.service.setFilters({ tags: ['music'] });

        expect(spectator.service.filtered_events().map((_) => _.id)).toEqual([
            'music-future',
        ]);
    });

    it('should merge option updates', () => {
        spectator.service.setOptions({ date: 123, end: 456 });
        expect(spectator.service.options()).toEqual({ date: 123, end: 456 });

        spectator.service.setOptions({ end: 789 });
        expect(spectator.service.options()).toEqual({ date: 123, end: 789 });
    });

    it('should merge filter updates', () => {
        spectator.service.setFilters({ tags: ['a'] });
        expect(spectator.service.filters().tags).toEqual(['a']);

        spectator.service.setFilters({ categories: ['cat'] });
        expect(spectator.service.filters()).toEqual({
            categories: ['cat'],
            tags: ['a'],
        });
    });
});
