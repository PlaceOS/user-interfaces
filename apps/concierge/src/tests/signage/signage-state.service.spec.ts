import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    UploadsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageStateService } from '../../app/signage/signage-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageStateService', () => {
    let spectator: SpectatorService<SignageStateService>;
    let dialog_open: any;
    let dialog_close: ReturnType<typeof vi.fn>;
    let notify_open: ReturnType<typeof vi.fn>;
    // Controls the outcome that the real `openConfirmModal` resolves to, driven
    // entirely through the injected `MatDialog` fake below.
    let confirm_reason: 'done' | 'cancel';

    const organisation_service: any = {
        active_building: signal({ id: 'bld-1' }),
        active_region: signal({ id: 'region-1' }),
    };

    const createService = createServiceFactory({
        service: SignageStateService,
        providers: [
            MockProvider(OrganisationService, organisation_service),
            MockProvider(SettingsService, { get: vi.fn(() => false) } as any),
            MockProvider(UploadsService, {
                upload_list: signal([]),
                uploadFile: vi.fn(),
                uploadFileWithPermissions: vi.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        confirm_reason = 'done';
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_close = vi.fn();
        dialog_open = vi.fn(() => ({
            componentInstance: {
                event: confirm_reason === 'done' ? of({ reason: 'done' }) : NEVER,
                loading: { set: vi.fn() },
            },
            afterClosed: () =>
                confirm_reason === 'done'
                    ? NEVER
                    : of({ reason: confirm_reason }),
            close: dialog_close,
        }));
        // `spy: true` keeps the real ts-client implementations, which would try
        // to make live HTTP calls and hang. Stub every call these tests touch so
        // the awaited paths resolve.
        (ts_client_mod.addSignagePlaylist as any).mockResolvedValue({});
        (ts_client_mod.updateSignagePlaylist as any).mockResolvedValue({});
        (ts_client_mod.removeSignagePlaylist as any).mockResolvedValue(
            undefined,
        );
        (ts_client_mod.updateSignagePlaylistMedia as any).mockResolvedValue(
            undefined,
        );
        (ts_client_mod.listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['a', 'b'],
        });
        (ts_client_mod.addSignageMedia as any).mockResolvedValue({});
        (ts_client_mod.removeSignageMedia as any).mockResolvedValue(undefined);
        (ts_client_mod.updateSignageMedia as any).mockResolvedValue({});
        (ts_client_mod.updateSystem as any).mockResolvedValue({});
        (ts_client_mod.removeSystem as any).mockResolvedValue(undefined);
        (ts_client_mod.querySignageMedia as any).mockResolvedValue({ data: [] });
        (ts_client_mod.querySignagePlaylists as any).mockResolvedValue({
            data: [],
        });
        (ts_client_mod.querySystems as any).mockResolvedValue({ data: [] });
        (ts_client_mod.queryZones as any).mockResolvedValue({ data: [] });
        spectator = createService({
            providers: [MockProvider(MatDialog, { open: dialog_open })],
        });
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should mark state as changed with a fresh timestamp', () => {
        const now = 1_700_000_000_000;
        vi.spyOn(Date, 'now').mockReturnValue(now);

        spectator.service.changed();

        expect(spectator.service.has_changed()).toBe(now);
    });

    it('should create a new playlist when no id is provided', async () => {
        await spectator.service.savePlaylist({ name: 'My Playlist' });

        expect(ts_client_mod.addSignagePlaylist).toHaveBeenCalledWith({
            name: 'My Playlist',
        });
        expect(ts_client_mod.updateSignagePlaylist).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
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
        confirm_reason = 'done';

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
        confirm_reason = 'done';

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
        confirm_reason = 'cancel';

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

        expect(dialog_open).not.toHaveBeenCalled();
        expect(ts_client_mod.removeSignagePlaylist).not.toHaveBeenCalled();
    });

    it('should remove a playlist after confirmation', async () => {
        confirm_reason = 'done';

        await spectator.service.removePlaylist({
            id: 'pl-3',
            name: 'Ads',
        } as any);

        expect(ts_client_mod.removeSignagePlaylist).toHaveBeenCalledWith(
            'pl-3',
        );
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should persist playlist media ordering and flag changes', async () => {
        await spectator.service.updatePlaylistMedia('pl-4', ['m1', 'm2']);

        expect(ts_client_mod.updateSignagePlaylistMedia).toHaveBeenCalledWith(
            'pl-4',
            ['m1', 'm2'],
        );
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should open the media modal for supported dropped files', async () => {
        const editMedia = vi
            .spyOn(spectator.service, 'editMedia')
            .mockResolvedValue(null as any);
        const file = new File([''], 'clip.mp4', { type: 'video/mp4' });

        spectator.service.previewFileFromInput({
            target: { files: [file] },
        } as any);

        expect(editMedia).toHaveBeenCalledWith(undefined, file, '');
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should reject dropped files that are not images or videos', () => {
        const editMedia = vi
            .spyOn(spectator.service, 'editMedia')
            .mockResolvedValue(null as any);
        const file = new File([''], 'notes.txt', { type: 'text/plain' });

        spectator.service.previewFileFromInput({
            target: { files: [file] },
        } as any);

        expect(editMedia).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should open the approve playlist modal', async () => {
        await spectator.service.approvePlaylist({ id: 'pl-8' } as any);

        expect(dialog_open).toHaveBeenCalledWith(expect.anything(), {
            data: { id: 'pl-8' },
        });
    });
});
