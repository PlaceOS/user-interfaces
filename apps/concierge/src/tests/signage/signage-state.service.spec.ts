import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import {
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';
import * as ts_client_mod from '@placeos/ts-client';
import { SignageStateService } from '../../app/signage/signage-state.service';

jest.mock('@placeos/components', () => ({
    openConfirmModal: jest.fn(),
}));

jest.mock('@placeos/cloud-uploads', () => ({
    SignedRequest: { setToken: jest.fn() },
}));

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySignageMedia: jest.fn(async () => ({ data: [] })),
        querySignagePlaylists: jest.fn(async () => ({ data: [] })),
        querySystems: jest.fn(async () => ({ data: [] })),
        queryZones: jest.fn(async () => ({ data: [] })),
        addSignageMedia: jest.fn(async () => ({ id: 'media-1' })),
        addSignagePlaylist: jest.fn(async () => ({ id: 'pl-1' })),
        updateSignagePlaylist: jest.fn(async () => ({ id: 'pl-1' })),
        removeSignagePlaylist: jest.fn(async () => undefined),
        updateSignageMedia: jest.fn(async () => ({})),
        removeSignageMedia: jest.fn(async () => undefined),
        updateSignagePlaylistMedia: jest.fn(async () => undefined),
        listSignagePlaylistMedia: jest.fn(async () => ({ items: ['a', 'b'] })),
        updateSystem: jest.fn(async () => ({})),
        removeSystem: jest.fn(async () => undefined),
        token: jest.fn(() => 'token-value'),
    };
});

describe('SignageStateService', () => {
    let spectator: SpectatorService<SignageStateService>;
    let dialog_open: jest.Mock;

    const organisation_service: any = {
        active_building: signal({ id: 'bld-1' }),
        active_region: signal({ id: 'region-1' }),
    };

    const createService = createServiceFactory({
        service: SignageStateService,
        providers: [
            MockProvider(OrganisationService, organisation_service),
            MockProvider(SettingsService, { get: jest.fn(() => false) } as any),
            MockProvider(UploadsService, {
                upload_list: signal([]),
                uploadFile: jest.fn(),
                uploadFileWithPermissions: jest.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        dialog_open = jest.fn(() => ({
            afterClosed: () => of(null),
            componentInstance: {},
            close: jest.fn(),
        }));
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open })],
        });
    });

    it('should mark state as changed with a fresh timestamp', () => {
        const now = 1_700_000_000_000;
        jest.spyOn(Date, 'now').mockReturnValue(now);

        spectator.service.changed();

        expect(spectator.service.has_changed()).toBe(now);
    });

    it('should create a new playlist when no id is provided', async () => {
        await spectator.service.savePlaylist({ name: 'My Playlist' });

        expect(ts_client_mod.addSignagePlaylist).toHaveBeenCalledWith({
            name: 'My Playlist',
        });
        expect(ts_client_mod.updateSignagePlaylist).not.toHaveBeenCalled();
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should update an existing playlist and strip blank fields', async () => {
        await spectator.service.savePlaylist({
            id: 'pl-9',
            name: 'Renamed',
            description: '',
            orientation: null as any,
        });

        expect(ts_client_mod.updateSignagePlaylist).toHaveBeenCalledWith(
            'pl-9',
            { id: 'pl-9', name: 'Renamed' },
            'put',
        );
        expect(ts_client_mod.addSignagePlaylist).not.toHaveBeenCalled();
    });

    it('should soft-disable displays that still have linked resources', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeDisplay({
            id: 'sys-1',
            display_name: 'Foyer',
            map_id: 'map-1',
            module_list: [],
        } as any);

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith('sys-1', {
            signage: false,
        });
        expect(ts_client_mod.removeSystem).not.toHaveBeenCalled();
    });

    it('should fully remove displays with no linked resources', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeDisplay({
            id: 'sys-2',
            display_name: 'Lobby',
            map_id: '',
            email: '',
            module_list: [],
        } as any);

        expect(ts_client_mod.removeSystem).toHaveBeenCalledWith('sys-2');
        expect(ts_client_mod.updateSystem).not.toHaveBeenCalled();
    });

    it('should not remove a display when the confirmation is cancelled', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'cancel',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeDisplay({
            id: 'sys-3',
            display_name: 'X',
            module_list: [],
        } as any);

        expect(ts_client_mod.removeSystem).not.toHaveBeenCalled();
        expect(ts_client_mod.updateSystem).not.toHaveBeenCalled();
    });

    it('should ignore playlist removal when there is no id', async () => {
        await spectator.service.removePlaylist({} as any);

        expect(component_mod.openConfirmModal).not.toHaveBeenCalled();
        expect(ts_client_mod.removeSignagePlaylist).not.toHaveBeenCalled();
    });

    it('should remove a playlist after confirmation', async () => {
        const close = jest.fn();
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            loading: jest.fn(),
            close,
        });

        await spectator.service.removePlaylist({
            id: 'pl-3',
            name: 'Ads',
        } as any);

        expect(ts_client_mod.removeSignagePlaylist).toHaveBeenCalledWith(
            'pl-3',
        );
        expect(close).toHaveBeenCalled();
    });

    it('should persist playlist media ordering and flag changes', async () => {
        await spectator.service.updatePlaylistMedia('pl-4', ['m1', 'm2']);

        expect(ts_client_mod.updateSignagePlaylistMedia).toHaveBeenCalledWith(
            'pl-4',
            ['m1', 'm2'],
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should return the media items for a playlist', async () => {
        const items = await spectator.service.getPlaylistMedia('pl-5');

        expect(ts_client_mod.listSignagePlaylistMedia).toHaveBeenCalledWith(
            'pl-5',
        );
        expect(items).toEqual(['a', 'b']);
    });

    it('should add media from a link with derived defaults', async () => {
        await spectator.service.addMediaFromLink('https://example.com/page');

        expect(ts_client_mod.addSignageMedia).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'example.com',
                media_uri: 'https://example.com/page',
                media_type: 'webpage',
                orientation: 'landscape',
            }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should open the media modal for supported dropped files', async () => {
        const editMedia = jest
            .spyOn(spectator.service, 'editMedia')
            .mockResolvedValue(null as any);
        const file = new File([''], 'clip.mp4', { type: 'video/mp4' });

        spectator.service.previewFileFromInput({
            target: { files: [file] },
        } as any);

        expect(editMedia).toHaveBeenCalledWith(undefined, file, '');
        expect(common_mod.notifyError).not.toHaveBeenCalled();
    });

    it('should reject dropped files that are not images or videos', () => {
        const editMedia = jest
            .spyOn(spectator.service, 'editMedia')
            .mockResolvedValue(null as any);
        const file = new File([''], 'notes.txt', { type: 'text/plain' });

        spectator.service.previewFileFromInput({
            target: { files: [file] },
        } as any);

        expect(editMedia).not.toHaveBeenCalled();
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should open the approve playlist modal', async () => {
        await spectator.service.approvePlaylist({ id: 'pl-8' } as any);

        expect(dialog_open).toHaveBeenCalledWith(expect.anything(), {
            data: { id: 'pl-8' },
        });
    });
});
