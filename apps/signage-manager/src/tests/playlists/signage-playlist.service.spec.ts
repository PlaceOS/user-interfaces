import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import {
    playlist as playlist_v7,
    type PlaylistRevision,
} from '@placeos/ts-client';
import {
    fromV1Mock,
    MediaAnimation,
    mockReply,
} from '@placeos/ts-client/compat';
import { NEVER, of } from 'rxjs';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { PlaylistItemScheduleModalComponent } from '../../app/shared/playlist-item-schedule-modal.component';
import { SignageSharedWithComponent } from '../../app/shared/signage-shared-with.component';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageInventoryService } from '../../app/signage-inventory.service';
import {
    playlistItemSchedule,
    playlistRevision,
    signageMedia,
    signagePlaylist,
    signageSystem,
} from '../../app/signage-models';
import { signageGroup } from '../signage-test-models';

type SignagePlaylistServiceTestAccess = SignagePlaylistService &
    Record<string, unknown>;

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignagePlaylistService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: unknown) =>
            signal(default_value),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        settings.get.mockReturnValue(false);
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: [],
                media: [],
            }),
        );
        (playlist_v7.scheduleMedia as any).mockResolvedValue(mockReply({}));
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() => handler(undefined));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(SignagePlaylistService);
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'requirePermission',
        ).mockReturnValue(true);
        return service;
    }

    function confirmNextDialog() {
        dialog.open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        });
    }

    it('loads playlist thumbnails a few at a time', async () => {
        const service = createService();
        const finish: (() => void)[] = [];
        vi.mocked(playlist_v7.media).mockImplementation(
            fromV1Mock(
                () =>
                    new Promise((resolve) =>
                        finish.push(() =>
                            resolve({ items: [], media: [] } as never),
                        ),
                    ),
                ['id'],
            ),
        );
        const playlists = Array.from({ length: 6 }, (_, index) =>
            signagePlaylist({ id: `meta-${index}`, updated_at: 1 }),
        );

        service.queuePlaylistMeta(playlists);
        expect(playlist_v7.media).toHaveBeenCalledTimes(4);

        // Each finished load starts the next queued one
        await vi.waitFor(() => {
            finish.shift()?.();
            expect(playlist_v7.media).toHaveBeenCalledTimes(6);
        });
    });

    it('requires schedules before adding media to distribution playlists', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignagePlaylistServiceTestAccess;
        test_service['_playlist_cache'].set({
            'playlist-1': signagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        });

        await service.addMediaToPlaylist('playlist-1', 'media-1');

        expect(dialog.open).toHaveBeenCalledWith(
            PlaylistItemScheduleModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    item: expect.objectContaining({ item_id: 'media-1' }),
                    save: expect.any(Function),
                }),
            }),
        );
        expect(playlist_v7.scheduleMedia).not.toHaveBeenCalled();

        const save = dialog.open.mock.calls[0][1].data.save;
        await save('media-1', [{ play_cron: '0 9 * * *', play_period: 30 }]);

        expect(playlist_v7.scheduleMedia).toHaveBeenCalledWith({
            id: 'playlist-1',
            body: {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        });
    });

    it('keeps the loaded playlist list after adding media', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignagePlaylistServiceTestAccess;
        TestBed.flushEffects();
        TestBed.inject(SignageContextService)['_change'].set(0);
        TestBed.flushEffects();
        const loaded_playlists = Array.from({ length: 250 }, (_, index) =>
            signagePlaylist({
                id: `playlist-${index}`,
                name: `Playlist ${index}`,
            }),
        );
        test_service['_playlist_list'].update(() => loaded_playlists);
        vi.mocked(playlist_v7.show).mockResolvedValue(
            mockReply(loaded_playlists[200]),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));

        await service.addMediaToPlaylist('playlist-200', 'media-1');
        TestBed.flushEffects();

        expect(service.filtered_playlists()).toHaveLength(250);
    });

    it('updates distribution playlist item schedules by schedule id', async () => {
        const service = createService();
        service.selected_playlist.set(
            signagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        );
        (playlist_v7.updateSchedule as any).mockResolvedValue(mockReply({}));

        await service.editPlaylistItemSchedules([
            {
                id: 'schedule-1',
                item_id: 'media-1',
                schedules: [],
            } as any,
        ]);

        const save = dialog.open.mock.calls[0][1].data.save;
        await save('schedule-1', [{ play_cron: '0 9 * * *', play_period: 30 }]);

        expect(playlist_v7.updateSchedule).toHaveBeenCalledWith({
            id: 'playlist-1',
            item_id: 'schedule-1',
            body: {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        });
    });

    it('applies one schedule to multiple distribution playlist items', async () => {
        const service = createService();
        service.selected_playlist.set(
            signagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        );
        (playlist_v7.updateSchedule as any).mockResolvedValue(mockReply({}));

        await service.editPlaylistItemSchedules([
            playlistItemSchedule({
                id: 'schedule-1',
                item_id: 'media-1',
                schedules: [
                    {
                        play_cron: '0 8 * * *',
                        play_period: 30,
                        play_takeover: false,
                    },
                ],
            }),
            playlistItemSchedule({
                id: 'schedule-2',
                item_id: 'media-2',
                schedules: [],
            }),
        ]);

        const modal_data = dialog.open.mock.calls[0][1].data;
        expect(modal_data.item.id).toBe('schedule-1');
        await modal_data.save('schedule-1', [
            { play_cron: '0 9 * * *', play_period: 30 },
        ]);

        expect(playlist_v7.updateSchedule).toHaveBeenNthCalledWith(1, {
            id: 'playlist-1',
            item_id: 'schedule-1',
            body: {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        });
        expect(playlist_v7.updateSchedule).toHaveBeenNthCalledWith(2, {
            id: 'playlist-1',
            item_id: 'schedule-2',
            body: {
                item_id: 'media-2',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        });
    });

    it('saves the failed item schedules again and reloads after a partial save', async () => {
        const service = createService();
        service.selected_playlist.set(
            new SignagePlaylist({ id: 'playlist-1', distribution: true }),
        );
        let close: (value?: unknown) => void = () => {};
        dialog.open.mockReturnValueOnce({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    close = handler;
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        (updateSignagePlaylistMediaSchedule as any)
            .mockResolvedValueOnce({})
            .mockRejectedValueOnce(new Error('500'))
            .mockResolvedValue({});
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );
        const editing = service.editPlaylistItemSchedules([
            new SignagePlaylistItemSchedule({ id: 's-1', item_id: 'm-1' }),
            new SignagePlaylistItemSchedule({ id: 's-2', item_id: 'm-2' }),
        ]);
        await vi.waitFor(() => expect(dialog.open).toHaveBeenCalled());
        const { save } = dialog.open.mock.calls[0][1].data;
        const schedules = [{ play_cron: '0 9 * * *', play_period: 30 }];

        await expect(save('s-1', schedules)).rejects.toThrow();
        await save('s-1', schedules);

        const ids = (updateSignagePlaylistMediaSchedule as any).mock.calls.map(
            (call: unknown[]) => call[1],
        );
        expect(ids).toEqual(['s-1', 's-2', 's-2']);
        close(true);
        await editing;
        expect(changed).toHaveBeenCalled();
    });

    it('reloads the playlist items when a write ends after the modal closes', async () => {
        const service = createService();
        service.selected_playlist.set(
            new SignagePlaylist({ id: 'playlist-1', distribution: true }),
        );
        let close: (value?: unknown) => void = () => {};
        dialog.open.mockReturnValueOnce({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    close = handler;
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        let finish: () => void = () => {};
        (updateSignagePlaylistMediaSchedule as any).mockImplementationOnce(
            () => new Promise<void>((resolve) => (finish = resolve)),
        );
        const reloads = () =>
            (service as unknown as { _playlist_change: () => number })[
                '_playlist_change'
            ]();
        const editing = service.editPlaylistItemSchedules([
            new SignagePlaylistItemSchedule({ id: 's-1', item_id: 'm-1' }),
        ]);
        await vi.waitFor(() => expect(dialog.open).toHaveBeenCalled());
        const { save } = dialog.open.mock.calls[0][1].data;
        const saving = save('s-1', [{ play_cron: '0 9 * * *' }]);
        const before = reloads();

        // Back closes the modal while the write runs
        close(undefined);
        await editing;
        expect(reloads()).toBe(before);
        finish();
        await saving;

        expect(reloads()).toBe(before + 1);
    });

    it('reloads the playlist items when the modal closes after a partial save', async () => {
        const service = createService();
        service.selected_playlist.set(
            new SignagePlaylist({ id: 'playlist-1', distribution: true }),
        );
        let close: (value?: unknown) => void = () => {};
        dialog.open.mockReturnValueOnce({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    close = handler;
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        (updateSignagePlaylistMediaSchedule as any)
            .mockResolvedValueOnce({})
            .mockRejectedValueOnce(new Error('500'));
        const reloads = () =>
            (service as unknown as { _playlist_change: () => number })[
                '_playlist_change'
            ]();
        const editing = service.editPlaylistItemSchedules([
            new SignagePlaylistItemSchedule({ id: 's-1', item_id: 'm-1' }),
            new SignagePlaylistItemSchedule({ id: 's-2', item_id: 'm-2' }),
        ]);
        await vi.waitFor(() => expect(dialog.open).toHaveBeenCalled());
        const { save } = dialog.open.mock.calls[0][1].data;
        await expect(
            save('s-1', [{ play_cron: '0 9 * * *', play_period: 30 }]),
        ).rejects.toThrow();
        const before = reloads();

        // The user cancels after the error
        close(undefined);
        await editing;

        expect(reloads()).toBe(before + 1);
    });

    it('removes a distribution schedule from the playlist items', async () => {
        const service = createService();
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['schedule-1', 'schedule-2'],
                schedules: [],
            }),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));

        await service.removeMediaFromPlaylist('playlist-1', 'schedule-1', 0);

        expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
            id: 'playlist-1',
            body: ['schedule-2'],
        });
    });

    it('removes selected playlist occurrences with one update', async () => {
        const service = createService();
        service.selected_playlist_item.set(signageMedia({ id: 'media-1' }));
        service.selected_playlist_item_index.set(2);
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['media-1', 'media-2', 'media-1', 'media-3'],
                schedules: [],
            }),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));
        confirmNextDialog();

        const removed = await service.removeMediaItemsFromPlaylist(
            'playlist-1',
            [
                { id: 'media-1', index: 0 },
                { id: 'media-1', index: 2 },
            ],
        );

        expect(removed).toBe(true);
        expect(playlist_v7.updateMedia).toHaveBeenCalledOnce();
        expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
            id: 'playlist-1',
            body: ['media-2', 'media-3'],
        });
        expect(service.selected_playlist_item()).toBeNull();
        expect(service.selected_playlist_item_index()).toBeNull();
    });

    /** Show a media list as the loaded list of the selected playlist */
    function showPlaylistMedia(
        service: SignagePlaylistService,
        playlist_id: string,
        list: Partial<PlaylistRevision>,
    ) {
        Object.defineProperty(service, '_selected_playlist_id', {
            value: () => playlist_id,
        });
        (service as SignagePlaylistServiceTestAccess)[
            '_playlist_media_items'
        ].set(playlistRevision(list));
    }

    function playlistMediaIdsShown(service: SignagePlaylistService) {
        return service.playlist_media_items().map(({ id }) => id);
    }

    describe('playlist item order', () => {
        const media = ['a', 'b', 'c'].map((id) =>
            signageMedia({ id, name: id }),
        );

        it('shows the new order at once and keeps items without media', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'missing', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({
                    items: ['a', 'missing', 'b', 'c'],
                    media,
                }),
            );
            let saved: (value: unknown) => void = () => {};
            (playlist_v7.updateMedia as any).mockImplementation(
                fromV1Mock(
                    () => new Promise((resolve) => (saved = resolve)),
                    ['id', 'body'],
                ),
            );

            const saving = service.reorderPlaylistMedia('pl-1', [
                'c',
                'a',
                'b',
            ]);

            expect(playlistMediaIdsShown(service)).toEqual(['c', 'a', 'b']);
            await vi.waitFor(() =>
                expect(updateSignagePlaylistMedia).toHaveBeenCalledWith(
                    'pl-1',
                    ['c', 'missing', 'a', 'b'],
                ),
            );
            saved({});
            await saving;
            expect(playlistMediaIdsShown(service)).toEqual(['c', 'a', 'b']);
        });

        it('keeps items that another user changed since the list loaded', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            // Another user added d and removed b
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({
                    items: ['a', 'c', 'd'],
                    media: [media[0], media[2]],
                }),
            );
            (updateSignagePlaylistMedia as any).mockResolvedValue({});

            await service.reorderPlaylistMedia('pl-1', ['c', 'b', 'a']);

            expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('pl-1', [
                'c',
                'a',
                'd',
            ]);
        });

        it('saves one order at a time', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockImplementation(
                async () =>
                    new SignagePlaylistMedia({
                        items: [...saved_items],
                        media,
                    }),
            );
            let saved_items = ['a', 'b', 'c'];
            let finish_first: () => void = () => {};
            (updateSignagePlaylistMedia as any)
                .mockImplementationOnce(
                    (_: string, items: string[]) =>
                        new Promise<void>((resolve) => {
                            finish_first = () => {
                                saved_items = items;
                                resolve();
                            };
                        }),
                )
                .mockImplementation(async (_: string, items: string[]) => {
                    saved_items = items;
                });

            const first = service.reorderPlaylistMedia('pl-1', ['b', 'a', 'c']);
            const second = service.reorderPlaylistMedia('pl-1', [
                'b',
                'c',
                'a',
            ]);
            await vi.waitFor(() =>
                expect(updateSignagePlaylistMedia).toHaveBeenCalledTimes(1),
            );
            finish_first();
            await Promise.all([first, second]);

            expect(updateSignagePlaylistMedia).toHaveBeenCalledTimes(2);
            expect(saved_items).toEqual(['b', 'c', 'a']);
        });

        it('shows the last saved list when every queued save fails', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
            );
            (updateSignagePlaylistMedia as any).mockRejectedValue(
                new Error('Forbidden'),
            );

            const first = service.reorderPlaylistMedia('pl-1', ['b', 'a', 'c']);
            const second = service.reorderPlaylistMedia('pl-1', [
                'c',
                'b',
                'a',
            ]);
            expect(playlistMediaIdsShown(service)).toEqual(['c', 'b', 'a']);
            await first;
            // The first result does not replace the newer order
            expect(playlistMediaIdsShown(service)).toEqual(['c', 'b', 'a']);
            await second;

            expect(playlistMediaIdsShown(service)).toEqual(['a', 'b', 'c']);
        });

        it('rolls back to a list that loaded while an earlier save was waiting', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            // The second save cannot read the list again
            vi.mocked(listSignagePlaylistMedia)
                .mockResolvedValueOnce(
                    new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
                )
                .mockRejectedValue(new Error('Offline'));
            let fail_first: () => void = () => {};
            (updateSignagePlaylistMedia as any)
                .mockImplementationOnce(
                    () =>
                        new Promise((_, reject) => {
                            fail_first = () => reject(new Error('Forbidden'));
                        }),
                )
                .mockRejectedValue(new Error('Forbidden'));

            const first = service.reorderPlaylistMedia('pl-1', ['b', 'a', 'c']);
            await vi.waitFor(() =>
                expect(updateSignagePlaylistMedia).toHaveBeenCalledTimes(1),
            );
            // The playlist loads again, then the user drags once more
            showPlaylistMedia(service, 'pl-1', {
                items: ['c', 'b', 'a'],
                media,
            });
            const second = service.reorderPlaylistMedia('pl-1', [
                'b',
                'c',
                'a',
            ]);
            fail_first();
            await Promise.all([first, second]);

            expect(playlistMediaIdsShown(service)).toEqual(['c', 'b', 'a']);
        });

        it('keeps the next save waiting until a slow write ends', async () => {
            vi.useFakeTimers();
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
            );
            let finish_first: () => void = () => {};
            (updateSignagePlaylistMedia as any)
                .mockImplementationOnce(
                    () =>
                        new Promise<void>(
                            (resolve) => (finish_first = resolve),
                        ),
                )
                .mockResolvedValue({});

            const first = service.reorderPlaylistMedia('pl-1', ['b', 'a', 'c']);
            const second = service.reorderPlaylistMedia('pl-1', [
                'c',
                'b',
                'a',
            ]);
            await vi.advanceTimersByTimeAsync(31_000);
            // The first write timed out, but the second waits for it
            expect(notify_open).toHaveBeenCalled();
            expect(updateSignagePlaylistMedia).toHaveBeenCalledTimes(1);

            finish_first();
            await vi.advanceTimersByTimeAsync(0);
            await Promise.all([first, second]);
            expect(updateSignagePlaylistMedia).toHaveBeenCalledTimes(2);
            vi.useRealTimers();
        });

        it('rolls back to the list that the server sent before a failed write', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({
                    items: ['b', 'a', 'c'],
                    media,
                }),
            );
            (updateSignagePlaylistMedia as any).mockRejectedValue(
                new Error('Forbidden'),
            );

            await service.reorderPlaylistMedia('pl-1', ['c', 'a', 'b']);

            expect(playlistMediaIdsShown(service)).toEqual(['b', 'a', 'c']);
        });

        it('shows a write that ends after the timeout', async () => {
            vi.useFakeTimers();
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
            );
            let finish: () => void = () => {};
            (updateSignagePlaylistMedia as any).mockImplementationOnce(
                () => new Promise<void>((resolve) => (finish = resolve)),
            );

            const saving = service.reorderPlaylistMedia('pl-1', [
                'c',
                'a',
                'b',
            ]);
            await vi.advanceTimersByTimeAsync(31_000);
            expect(notify_open).toHaveBeenCalled();
            finish();
            await saving;

            expect(playlistMediaIdsShown(service)).toEqual(['c', 'a', 'b']);
            vi.useRealTimers();
        });

        it('leaves a list that loaded again during the save', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
            );
            (updateSignagePlaylistMedia as any).mockRejectedValue(
                new Error('Forbidden'),
            );

            const saving = service.reorderPlaylistMedia('pl-1', [
                'c',
                'a',
                'b',
            ]);
            // The user opens the playlist again and it loads
            showPlaylistMedia(service, 'pl-1', {
                items: ['b', 'c', 'a'],
                media,
            });
            await saving;

            expect(playlistMediaIdsShown(service)).toEqual(['b', 'c', 'a']);
        });

        it('restores the old order and reports an error when the save fails', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
            vi.mocked(listSignagePlaylistMedia).mockResolvedValue(
                new SignagePlaylistMedia({ items: ['a', 'b', 'c'], media }),
            );
            (updateSignagePlaylistMedia as any).mockRejectedValue(
                new Error('Forbidden'),
            );

            await service.reorderPlaylistMedia('pl-1', ['c', 'a', 'b']);

            expect(playlistMediaIdsShown(service)).toEqual(['a', 'b', 'c']);
            expect(notify_open).toHaveBeenCalledWith(
                'Error saving the playlist order',
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
        });
    });

    it('closes the confirm modal and reports an error when removing a playlist fails', async () => {
        const service = createService();
        confirmNextDialog();
        vi.mocked(playlist_v7.destroy).mockRejectedValue(
            new Error('Forbidden'),
        );

        await service.removePlaylist(
            signagePlaylist({ id: 'pl-1', name: 'Lobby' }),
        );

        expect(dialog.open.mock.results[0].value.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Error removing playlist',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('restores the approved media after the user confirms the undo', async () => {
        const service = createService();
        const refresh = vi.spyOn(service, 'refreshPlaylist');
        confirmNextDialog();
        vi.mocked(playlist_v7.updateMedia).mockResolvedValue(
            mockReply({} as never),
        );

        const undone = await service.undoPlaylistChanges(
            signagePlaylist({ id: 'pl-1', name: 'Lobby' }),
            playlistRevision({ items: ['media-1'] }),
        );

        expect(undone).toBe(true);
        expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
            id: 'pl-1',
            body: ['media-1'],
        });
        expect(refresh).toHaveBeenCalledWith('pl-1');
        expect(dialog.open.mock.results[0].value.close).toHaveBeenCalled();
    });

    it('keeps the playlist media when the user cancels the undo', async () => {
        const service = createService();
        dialog.open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of(undefined),
            close: vi.fn(),
        });

        const undone = await service.undoPlaylistChanges(
            signagePlaylist({ id: 'pl-1', name: 'Lobby' }),
            playlistRevision({ items: ['media-1'] }),
        );

        expect(undone).toBe(false);
        expect(playlist_v7.updateMedia).not.toHaveBeenCalled();
    });

    it('closes the confirm modal and restores the items when removing them fails', async () => {
        const service = createService();
        showPlaylistMedia(service, 'playlist-1', {
            items: ['media-1', 'media-2'],
            media: [
                signageMedia({ id: 'media-1' }),
                signageMedia({ id: 'media-2' }),
            ],
        });
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['media-1', 'media-2'],
                schedules: [],
            }),
        );
        (playlist_v7.updateMedia as any).mockRejectedValue(
            new Error('Server error'),
        );
        confirmNextDialog();

        const removed = await service.removeMediaItemsFromPlaylist(
            'playlist-1',
            [{ id: 'media-1', index: 0 }],
        );

        expect(removed).toBe(false);
        expect(dialog.open.mock.results[0].value.close).toHaveBeenCalled();
        expect(playlistMediaIdsShown(service)).toEqual(['media-1', 'media-2']);
        expect(notify_open).toHaveBeenCalledWith(
            'Error removing playlist items',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('removes deleted media from distribution playlists by schedule item', async () => {
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['sched-1', 'sched-2'],
                schedules: [
                    {
                        id: 'sched-1',
                        item_id: 'media-1',
                        media: { id: 'media-1' },
                    },
                    {
                        id: 'sched-2',
                        item_id: 'media-2',
                        media: { id: 'media-2' },
                    },
                ],
            }),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));
        const service = createService();

        await service.removeMediaFromPlaylists(['media-1'], ['pl-1']);

        expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
            id: 'pl-1',
            body: ['sched-2'],
        });
    });

    it('lists a new playlist before the search index returns it', async () => {
        const created = signagePlaylist({ id: 'pl-new', name: 'New' });
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() => handler(created));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        const service = createService();
        TestBed.tick();

        const playlist = await service.addPlaylist();

        expect(playlist?.id).toBe('pl-new');
        expect(service.filtered_playlists().map(({ id }) => id)).toContain(
            'pl-new',
        );
        expect(service.playlists().map(({ id }) => id)).toContain('pl-new');
    });

    it('duplicates a playlist with its items and item schedules', async () => {
        const schedules = [{ play_cron: '0 9 * * *', play_period: 30 }];
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['media-1', 'media-2'],
                schedules: [{ item_id: 'media-2', schedules }],
            }),
        );
        vi.mocked(playlist_v7.create).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'copy-1' })),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));
        (playlist_v7.updateSchedule as any).mockResolvedValue(mockReply({}));
        const service = createService();

        const copy = await service.duplicatePlaylist(
            signagePlaylist({ id: 'pl-1', name: 'Lobby', random: true }),
        );

        expect(copy?.id).toBe('copy-1');
        expect(
            vi.mocked(playlist_v7.create).mock.calls[0][0].body,
        ).toMatchObject({
            name: 'Lobby (copy)',
            random: true,
        });
        expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
            id: 'copy-1',
            body: ['media-1', 'media-2'],
        });
        expect(playlist_v7.updateSchedule).toHaveBeenCalledWith({
            id: 'copy-1',
            item_id: 'media-2',
            body: { item_id: 'media-2', schedules },
        });
    });

    it('keeps the default animation on a copy', async () => {
        vi.mocked(playlist_v7.create).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'copy-1' })),
        );
        vi.mocked(playlist_v7.updateMedia).mockResolvedValue(
            mockReply(playlistRevision({})),
        );
        const service = createService();

        // ts-client turns the saved index 0 into `cut`
        await service.duplicatePlaylist(
            signagePlaylist({
                id: 'pl-1',
                default_animation: 0 as unknown as MediaAnimation,
            }),
        );

        expect(
            vi.mocked(playlist_v7.create).mock.calls[0][0].body,
        ).toMatchObject({
            default_animation: MediaAnimation.Default,
        });
    });

    it('ignores a second duplicate request while the first runs', async () => {
        let listed: (value: unknown) => void = () => {};
        (playlist_v7.media as any).mockImplementation(
            fromV1Mock(
                () => new Promise((resolve) => (listed = resolve)),
                ['id'],
            ),
        );
        vi.mocked(playlist_v7.create).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'copy-1' })),
        );
        (playlist_v7.updateMedia as any).mockResolvedValue(mockReply({}));
        const service = createService();
        const playlist = signagePlaylist({ id: 'pl-1', name: 'Lobby' });

        const first = service.duplicatePlaylist(playlist);
        const second = await service.duplicatePlaylist(playlist);

        expect(second).toBeNull();
        expect(service.playlist_duplicating()).toBe(true);
        listed({ items: ['media-1'], schedules: [] });
        expect((await first)?.id).toBe('copy-1');
        expect(playlist_v7.create).toHaveBeenCalledOnce();
        expect(service.playlist_duplicating()).toBe(false);
    });

    it('removes the partial copy when duplicating a playlist fails', async () => {
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['media-1'],
                schedules: [],
            }),
        );
        vi.mocked(playlist_v7.create).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'copy-1' })),
        );
        (playlist_v7.updateMedia as any).mockRejectedValue(
            new Error('Server error'),
        );
        vi.mocked(playlist_v7.destroy).mockResolvedValue(mockReply(''));
        const service = createService();

        const copy = await service.duplicatePlaylist(
            signagePlaylist({ id: 'pl-1', name: 'Lobby' }),
        );

        expect(copy).toBeNull();
        expect(playlist_v7.destroy).toHaveBeenCalledWith({ id: 'copy-1' });
        expect(service.playlist_duplicating()).toBe(false);
    });

    it('duplicates a distribution playlist by scheduling the same media in order', async () => {
        (playlist_v7.media as any).mockResolvedValue(
            mockReply({
                items: ['sched-2', 'sched-1'],
                schedules: [
                    { id: 'sched-1', item_id: 'media-1', schedules: [] },
                    { id: 'sched-2', item_id: 'media-2', schedules: [] },
                ],
            }),
        );
        vi.mocked(playlist_v7.create).mockResolvedValue(
            mockReply(signagePlaylist({ id: 'copy-1' })),
        );
        const service = createService();

        await service.duplicatePlaylist(
            signagePlaylist({
                id: 'pl-1',
                name: 'Rota',
                distribution: true,
            }),
        );

        expect(
            vi
                .mocked(playlist_v7.scheduleMedia)
                .mock.calls.map(([input]) => [input.id, input.body.item_id]),
        ).toEqual([
            ['copy-1', 'media-2'],
            ['copy-1', 'media-1'],
        ]);
        expect(playlist_v7.updateMedia).not.toHaveBeenCalled();
    });

    describe('takeover conflicts', () => {
        const takeover = (id: string, play_cron: string) =>
            signagePlaylist({
                id,
                name: id,
                schedules: [
                    { play_cron, play_period: 60, play_takeover: true },
                ],
            });
        const inventory = {
            displays: [
                signageSystem({
                    id: 'd1',
                    name: 'Lobby',
                    playlists: ['a'],
                }),
                signageSystem({ id: 'd2', name: 'Cafe' }),
            ],
            zones: [],
            playlists: [
                takeover('a', '0 9 * * *'),
                takeover('b', '30 9 * * *'),
                signagePlaylist({ id: 'c', name: 'Old', valid_until: 1 }),
            ],
        };

        it('skips the check for a playlist without a takeover', async () => {
            const service = createService();
            const load = vi.spyOn(
                TestBed.inject(SignageInventoryService),
                'loadSignageInventory',
            );

            const ok = await service.confirmTakeoverChange({
                playlist_id: 'c',
                playlist: signagePlaylist({ id: 'c', name: 'Plain' }),
                display_id: 'd1',
            });

            expect(ok).toBe(true);
            expect(load).not.toHaveBeenCalled();
        });

        it('asks before a change that overlaps another takeover', async () => {
            dialog.open.mockReturnValue({
                componentInstance: { event: NEVER, loading: { set: vi.fn() } },
                afterClosed: () => of({ reason: '' }),
                close: vi.fn(),
            });
            const service = createService();
            vi.spyOn(
                TestBed.inject(SignageInventoryService),
                'loadSignageInventory',
            ).mockResolvedValue(inventory);

            const ok = await service.confirmTakeoverChange({
                playlist_id: 'b',
                display_id: 'd1',
            });

            expect(ok).toBe(false);
            const content = dialog.open.mock.calls.at(-1)[1].data.content;
            expect(content).toContain('Lobby');
            expect(content).toContain('a');
        });

        it('allows a change that does not overlap', async () => {
            const service = createService();
            vi.spyOn(
                TestBed.inject(SignageInventoryService),
                'loadSignageInventory',
            ).mockResolvedValue(inventory);

            const ok = await service.confirmTakeoverChange({
                playlist_id: 'b',
                display_id: 'd2',
            });

            expect(ok).toBe(true);
            expect(dialog.open).not.toHaveBeenCalled();
        });
    });

    it('refreshes the shared groups after sharing a playlist', async () => {
        const service = createService();
        const context = TestBed.inject(SignageContextService);
        const current_group = signageGroup({ id: 'group-1', name: 'Current' });
        const target_group = signageGroup({ id: 'group-2', name: 'Target' });
        vi.mocked(playlist_v7.show).mockResolvedValue(
            mockReply(
                signagePlaylist({
                    id: 'playlist-1',
                    shared_with: [current_group],
                }),
            ),
        );
        vi.mocked(playlist_v7.share).mockResolvedValue(
            mockReply({
                linked: ['playlist-1'],
                already_present: [],
            }),
        );
        Object.defineProperty(context, 'can_share', {
            value: () => true,
        });
        Object.defineProperty(context, 'selected_group', {
            value: () => ({ group: current_group }),
        });
        Object.defineProperty(context, 'signage_groups', {
            value: () => [{ group: current_group }, { group: target_group }],
        });
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: string) => void) => {
                    Promise.resolve().then(() => handler(target_group.id));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        const fixture = TestBed.createComponent(SignageSharedWithComponent);
        fixture.componentRef.setInput('type', 'playlists');
        fixture.componentRef.setInput('item_id', 'playlist-1');
        fixture.componentRef.setInput('group_id', current_group.id);
        fixture.detectChanges();
        await vi.waitFor(() => {
            expect(fixture.componentInstance.shared_groups()).toEqual([
                current_group,
            ]);
        });

        vi.mocked(playlist_v7.show).mockResolvedValue(
            mockReply(
                signagePlaylist({
                    id: 'playlist-1',
                    shared_with: [current_group, target_group],
                }),
            ),
        );
        await service.sharePlaylist(
            signagePlaylist({ id: 'playlist-1', name: 'Lobby' }),
        );

        await vi.waitFor(() => {
            expect(fixture.componentInstance.shared_groups()).toEqual([
                current_group,
                target_group,
            ]);
        });
    });

    describe('adding media', () => {
        it('checks a playlist outside the loaded pages for distribution', async () => {
            const service = createService();
            vi.mocked(playlist_v7.show).mockResolvedValue(
                mockReply(
                    signagePlaylist({ id: 'found-1', distribution: true }),
                ),
            );

            await service.addMediaToPlaylist('found-1', 'media-1');

            expect(playlist_v7.show).toHaveBeenCalledWith({ id: 'found-1' });
            expect(dialog.open).toHaveBeenCalledWith(
                PlaylistItemScheduleModalComponent,
                expect.anything(),
            );
            expect(playlist_v7.updateMedia).not.toHaveBeenCalled();
        });

        it('adds the media picked from the library to the playlist', async () => {
            const picked = [
                signageMedia({ id: 'media-1' }),
                signageMedia({ id: 'media-2' }),
            ];
            dialog.open.mockReturnValue({
                afterClosed: () => ({
                    subscribe: (handler: (value?: unknown) => void) => {
                        Promise.resolve().then(() => handler(picked));
                        return { unsubscribe: vi.fn() };
                    },
                }),
            });
            vi.mocked(playlist_v7.show).mockResolvedValue(
                mockReply(signagePlaylist({ id: 'pl-1' })),
            );
            vi.mocked(playlist_v7.media).mockResolvedValue(
                mockReply(playlistRevision({ items: ['media-1'] })),
            );
            vi.mocked(playlist_v7.updateMedia).mockResolvedValue(
                mockReply(playlistRevision({})),
            );
            const service = createService();

            const added = await service.pickMediaForPlaylist(
                signagePlaylist({ id: 'pl-1' }),
            );

            expect(added).toBe(true);
            expect(dialog.open.mock.calls[0][1].data).toMatchObject({
                multiple: true,
            });
            expect(playlist_v7.updateMedia).toHaveBeenCalledWith({
                id: 'pl-1',
                body: ['media-1', 'media-2'],
            });
        });

        it('skips media that a distribution playlist already schedules', async () => {
            vi.mocked(playlist_v7.show).mockResolvedValue(
                mockReply(signagePlaylist({ id: 'pl-1', distribution: true })),
            );
            vi.mocked(playlist_v7.media).mockResolvedValue(
                mockReply(
                    playlistRevision({
                        items: ['schedule-1'],
                        schedules: [{ id: 'schedule-1', item_id: 'media-1' }],
                    } as any),
                ),
            );
            const service = createService();

            const added = await service.addMediaItemsToPlaylist('pl-1', [
                'media-1',
            ]);

            expect(added).toBe(false);
            expect(dialog.open).not.toHaveBeenCalled();
        });

        it('reports an error, not a rejection, when adding media fails', async () => {
            const service = createService();
            vi.mocked(playlist_v7.show).mockResolvedValue(
                mockReply(signagePlaylist({ id: 'pl-1' })),
            );
            vi.mocked(playlist_v7.media).mockRejectedValue(
                new Error('Offline'),
            );

            await service.addMediaToPlaylist('pl-1', 'media-1');
            const added = await service.addMediaItemsToPlaylist('pl-1', [
                'media-2',
            ]);

            expect(added).toBe(false);
            expect(playlist_v7.updateMedia).not.toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalledTimes(2);
            expect(notify_open).toHaveBeenCalledWith(
                'Error adding media to the playlist',
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
        });
    });

    describe('selected playlist items', () => {
        /** Select a playlist by ID without the selection debounce */
        function selectPlaylistId(service: SignagePlaylistService) {
            const id = signal('');
            Object.defineProperty(service, '_selected_playlist_id', {
                value: id,
            });
            return async (playlist_id: string) => {
                id.set(playlist_id);
                TestBed.tick();
                await TestBed.inject(ApplicationRef).whenStable();
            };
        }

        it('keeps a pending approval request when the items load', async () => {
            const service = createService();
            const select = selectPlaylistId(service);
            vi.mocked(playlist_v7.media).mockResolvedValue(
                mockReply(
                    playlistRevision({
                        items: ['media-1'],
                        approved: false,
                        approval_requested: true,
                    }),
                ),
            );

            await select('pl-1');

            expect(service.playlist_approval_status()['pl-1']).toBe(false);
            expect(service.playlist_approval_requested_status()['pl-1']).toBe(
                true,
            );
        });

        it('shows a load error and loads the items again on retry', async () => {
            const service = createService();
            const select = selectPlaylistId(service);
            vi.mocked(playlist_v7.media).mockRejectedValue(
                new Error('Offline'),
            );

            await select('pl-1');

            expect(service.playlist_media_error()).toBe(true);
            expect(service.playlist_media_loading()).toBe(false);
            expect(service.playlist_media_items()).toEqual([]);

            vi.mocked(playlist_v7.media).mockResolvedValue(
                mockReply(
                    playlistRevision({
                        items: ['media-1'],
                        media: [signageMedia({ id: 'media-1' })],
                    }),
                ),
            );
            service.reloadPlaylistMedia();
            TestBed.tick();
            await TestBed.inject(ApplicationRef).whenStable();

            expect(service.playlist_media_error()).toBe(false);
            expect(playlistMediaIdsShown(service)).toEqual(['media-1']);
        });

        it('shows only the load of the playlist that is selected now', async () => {
            const service = createService();
            const select = selectPlaylistId(service);
            let resolveFirst: (value: PlaylistRevision) => void = () => {};
            vi.mocked(playlist_v7.media)
                .mockImplementationOnce(
                    fromV1Mock(
                        () =>
                            new Promise((resolve) => (resolveFirst = resolve)),
                        ['id'],
                    ),
                )
                .mockImplementationOnce(
                    fromV1Mock(() => new Promise(() => {}), ['id']),
                );

            void select('pl-1');
            void select('pl-2');
            resolveFirst(playlistRevision({ items: [] }));
            await new Promise((resolve) => setTimeout(resolve));
            TestBed.tick();

            expect(service.playlist_media_loading()).toBe(true);
        });
    });
});
