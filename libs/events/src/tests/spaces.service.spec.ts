import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

import { SpacesService } from '../lib/spaces.service';

describe('SpacesService', () => {
    let spectator: SpectatorService<SpacesService>;
    const settings_get = vi.fn();
    const createService = createServiceFactory({
        service: SpacesService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
                organisation: { id: 'org-1' },
                building: { id: 'bld-1' },
                levelWithID: vi.fn(),
            } as unknown as Partial<OrganisationService>),
            MockProvider(SettingsService, { get: settings_get }),
        ],
    });
    const systems = [
        {
            id: 'room-1',
            email: 'Room1@Test.com',
            map_id: 'area-1',
            zones: ['bld-1'],
        },
        {
            id: 'room-2',
            email: 'room2@test.com',
            map_id: 'area-2',
            zones: ['bld-2'],
        },
        { id: 'room-3', email: 'room3@test.com', map_id: '', zones: ['bld-1'] },
    ];

    /** Create the service and wait for the space list to load. */
    const loadService = async () => {
        spectator = createService();
        TestBed.tick();
        await vi.waitFor(() =>
            expect(spectator.service.initialised()).toBe(true),
        );
    };

    beforeEach(() => {
        vi.clearAllMocks();
        settings_get.mockReturnValue(undefined);
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: systems,
        } as never);
    });

    it('should list only the organisation spaces that are on a map', async () => {
        await loadService();
        expect(ts_client.querySystems).toHaveBeenCalledWith({
            zone_id: 'org-1',
            limit: 5000,
        });
        expect(spectator.service.all_spaces()).toHaveLength(3);
        expect(spectator.service.list().map((_) => _.id)).toEqual([
            'room-1',
            'room-2',
        ]);
    });

    it('should find listed spaces by ID or email', async () => {
        await loadService();
        expect(spectator.service.find('room-2')?.email).toBe('room2@test.com');
        // Space emails are stored in lower case
        expect(spectator.service.find('room1@test.com')?.id).toBe('room-1');
        expect(spectator.service.find('room-3')).toBeUndefined();
    });

    it('should list each feature of the mapped spaces once and leave out blank ones', async () => {
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                { ...systems[0], features: ['tv', ' ', 'whiteboard'] },
                { ...systems[1], features: ['tv', ''] },
                // Spaces without a map ID are not listed
                { ...systems[2], features: ['phone'] },
            ],
        } as never);

        await loadService();

        expect(spectator.service.features()).toEqual(['tv', 'whiteboard']);
    });

    it('should filter to the active building by default', async () => {
        await loadService();
        expect(spectator.service.filter().map((_) => _.id)).toEqual(['room-1']);
    });

    it('should not load spaces when space init is prevented', async () => {
        settings_get.mockImplementation(
            (key: string) => key === 'app.prevent_space_init',
        );
        await loadService();
        expect(ts_client.querySystems).not.toHaveBeenCalled();
        expect(spectator.service.list()).toEqual([]);
    });

    it('should log a failed space load and keep the service uninitialised', async () => {
        const error = new TypeError('Load failed');
        vi.mocked(ts_client.querySystems).mockRejectedValue(error);
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
        spectator = createService();
        TestBed.tick();
        await vi.waitFor(() =>
            expect(warn).toHaveBeenCalledWith('Failed to load spaces.', error),
        );
        expect(spectator.service.initialised()).toBe(false);
        expect(spectator.service.list()).toEqual([]);
        warn.mockRestore();
    });
});
