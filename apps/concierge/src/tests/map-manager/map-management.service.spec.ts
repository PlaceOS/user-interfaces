import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    BuildingLevel,
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';

import {
    MAP_HISTORY_KEY,
    MapManagementService,
} from '../../app/map-manager/map-management.service';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('MapManagementService', () => {
    let spectator: SpectatorService<MapManagementService>;
    let org: any;
    let settings: any;
    let uploads: any;
    const level = new BuildingLevel({
        id: 'l1',
        parent_id: 'b1',
        name: 'Level 1',
        display_name: 'L1',
        map_id: '/maps/old.svg',
        tags: ['level'],
    });

    const createService = createServiceFactory({
        service: MapManagementService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            { provide: OrganisationService, useValue: {} },
            { provide: SettingsService, useValue: {} },
            { provide: UploadsService, useValue: {} },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        org = {
            level_list: signal<unknown[]>([
                level,
                new BuildingLevel({
                    id: 'l2',
                    parent_id: 'b1',
                    name: 'Level 2',
                }),
            ]),
            building_list: signal<unknown[]>([{ id: 'b1', name: 'Alpha' }]),
            organisation: { id: 'org-1' },
            addZone: vi.fn(),
        };
        settings = { get: vi.fn(() => undefined) };
        uploads = { uploadFileToCompletion: vi.fn(async () => 'upload-9') };
        vi.mocked(ts_client.updateZone).mockImplementation(
            async (id: string, form: any) =>
                ({ id, ...form, tags: ['level'] }) as any,
        );
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [
                { upload_id: 'u1', map_id: '/m/1', at: 1, by: '', summary: '' },
            ],
        } as any);
        vi.mocked(ts_client.updateMetadata).mockResolvedValue({} as any);
        vi.mocked(ts_client.showZone).mockResolvedValue({
            map_id: '/maps/elsewhere.svg',
        } as any);
        spectator = createService({
            providers: [
                { provide: OrganisationService, useValue: org },
                { provide: SettingsService, useValue: settings },
                { provide: UploadsService, useValue: uploads },
            ],
        });
    });

    it('lists the levels with a map and applies the filters', () => {
        expect(spectator.service.rows().map((row) => row.id)).toEqual(['l1']);
        spectator.service.setSearchString('nothing');
        expect(spectator.service.rows()).toEqual([]);
        spectator.service.setSearchString('');
        spectator.service.setFilters({ building: 'b2' });
        expect(spectator.service.rows()).toEqual([]);
        spectator.service.setFilters({ building: undefined });
        expect(spectator.service.level('l1')).toBe(level);
        expect(spectator.service.building(level)?.name).toBe('Alpha');
    });

    it('uploads the map, points the level at it and records the version', async () => {
        const saved = await spectator.service.saveLevelMap(
            level,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/>',
            'Recolour',
        );
        const file: File = uploads.uploadFileToCompletion.mock.calls[0][0];
        expect(file.name).toBe('old.svg');
        expect(
            spectator.service.mapName('/api/engine/v2/uploads/upload-9/url'),
        ).toBe('old.svg');
        expect(file.type).toBe('image/svg+xml');
        expect(saved.upload_id).toBe('upload-9');
        expect(saved.map_id).toBe('/api/engine/v2/uploads/upload-9/url');
        expect(ts_client.updateZone).toHaveBeenCalledWith('l1', {
            id: 'l1',
            display_name: 'L1',
            parent_id: 'b1',
            map_id: '/api/engine/v2/uploads/upload-9/url',
            name: 'Level 1',
            tags: ['level'],
        });
        expect(org.addZone).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'l1',
                map_id: '/api/engine/v2/uploads/upload-9/url',
                tags: ['level'],
            }),
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'l1',
            MAP_HISTORY_KEY,
        );
        const [metadata_id, metadata] = vi.mocked(ts_client.updateMetadata).mock
            .calls[0] as any[];
        expect(metadata_id).toBe('l1');
        expect(metadata.name).toBe(MAP_HISTORY_KEY);
        expect(metadata.details[0]).toMatchObject({
            upload_id: 'upload-9',
            map_id: '/api/engine/v2/uploads/upload-9/url',
            summary: 'Recolour',
            file_name: 'old.svg',
        });
        expect(metadata.details[1].upload_id).toBe('u1');
    });

    it('still saves when the history write fails', async () => {
        vi.mocked(ts_client.updateMetadata).mockRejectedValue(new Error('403'));
        const warn = vi
            .spyOn(console, 'warn')
            .mockImplementation(() => undefined);
        const saved = await spectator.service.saveLevelMap(level, '<svg/>', '');
        expect(saved.map_id).toBe('/api/engine/v2/uploads/upload-9/url');
        expect(org.addZone).toHaveBeenCalled();
        expect(warn).toHaveBeenCalled();
        warn.mockRestore();
    });

    it('fails the save when the upload fails and leaves the level alone', async () => {
        uploads.uploadFileToCompletion.mockRejectedValue(
            new Error('no storage'),
        );
        await expect(
            spectator.service.saveLevelMap(level, '<svg/>', ''),
        ).rejects.toThrow('no storage');
        expect(ts_client.updateZone).not.toHaveBeenCalled();
        expect(org.addZone).not.toHaveBeenCalled();
    });

    it('reads the current map url and the studio link from settings', async () => {
        expect(await spectator.service.currentMapId('l1')).toBe(
            '/maps/elsewhere.svg',
        );
        expect(spectator.service.studioUrl()).toBe('/map-studio/');
        settings.get.mockImplementation((key: string) =>
            key === 'app.map_studio_url'
                ? 'https://studio.example.com'
                : undefined,
        );
        expect(spectator.service.studioUrl()).toBe(
            'https://studio.example.com/',
        );
    });

    it('stores an AI snapshot as a file and answers with the upload id', async () => {
        const blob = new Blob(['png'], { type: 'image/png' });
        await expect(
            spectator.service.uploadMapSnapshot(blob, 'map-snapshot.png'),
        ).resolves.toBe('upload-9');
        const file: File = uploads.uploadFileToCompletion.mock.calls[0][0];
        expect(file.name).toBe('map-snapshot.png');
        expect(file.type).toBe('image/png');
        expect(file.size).toBe(3);
    });
});
