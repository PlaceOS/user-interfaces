import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import {
    addSignagePlaylist,
    listSignagePlaylistMedia,
    PlaceSystem,
    removeSignagePlaylist,
    scheduleSignagePlaylistMedia,
    shareSignagePlaylists,
    showSignagePlaylist,
    SignageMedia,
    SignagePlaylist,
    SignagePlaylistItemSchedule,
    SignagePlaylistMedia,
    updateSignagePlaylistMedia,
    updateSignagePlaylistMediaSchedule,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { PlaylistItemScheduleModalComponent } from '../../app/shared/playlist-item-schedule-modal.component';
import { SignageSharedWithComponent } from '../../app/shared/signage-shared-with.component';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageInventoryService } from '../../app/signage-inventory.service';

type SignagePlaylistServiceTestAccess = SignagePlaylistService &
    Record<string, any>;

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignagePlaylistService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: any) => signal(default_value),
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
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: [],
            media: [],
        });
        (scheduleSignagePlaylistMedia as any).mockResolvedValue({});
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

    it('requires schedules before adding media to distribution playlists', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignagePlaylistServiceTestAccess;
        test_service['_playlist_cache'].set({
            'playlist-1': new SignagePlaylist({
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
        expect(scheduleSignagePlaylistMedia).not.toHaveBeenCalled();

        const save = dialog.open.mock.calls[0][1].data.save;
        await save('media-1', [{ play_cron: '0 9 * * *', play_period: 30 }]);

        expect(scheduleSignagePlaylistMedia).toHaveBeenCalledWith(
            'playlist-1',
            {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        );
    });

    it('keeps the loaded playlist list after adding media', async () => {
        const service = createService();
        const test_service =
            service as unknown as SignagePlaylistServiceTestAccess;
        TestBed.flushEffects();
        TestBed.inject(SignageContextService)['_change'].set(0);
        TestBed.flushEffects();
        const loaded_playlists = Array.from(
            { length: 250 },
            (_, index) =>
                new SignagePlaylist({
                    id: `playlist-${index}`,
                    name: `Playlist ${index}`,
                }),
        );
        test_service['_playlist_list'].update(() => loaded_playlists);
        (updateSignagePlaylistMedia as any).mockResolvedValue({});

        await service.addMediaToPlaylist('playlist-200', 'media-1');
        TestBed.flushEffects();

        expect(service.filtered_playlists()).toHaveLength(250);
    });

    it('updates distribution playlist item schedules by schedule id', async () => {
        const service = createService();
        service.selected_playlist.set(
            new SignagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        );
        (updateSignagePlaylistMediaSchedule as any).mockResolvedValue({});

        await service.editPlaylistItemSchedules([
            {
                id: 'schedule-1',
                item_id: 'media-1',
                schedules: [],
            } as any,
        ]);

        const save = dialog.open.mock.calls[0][1].data.save;
        await save('schedule-1', [{ play_cron: '0 9 * * *', play_period: 30 }]);

        expect(updateSignagePlaylistMediaSchedule).toHaveBeenCalledWith(
            'playlist-1',
            'schedule-1',
            {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        );
    });

    it('applies one schedule to multiple distribution playlist items', async () => {
        const service = createService();
        service.selected_playlist.set(
            new SignagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        );
        (updateSignagePlaylistMediaSchedule as any).mockResolvedValue({});

        await service.editPlaylistItemSchedules([
            new SignagePlaylistItemSchedule({
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
            new SignagePlaylistItemSchedule({
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

        expect(updateSignagePlaylistMediaSchedule).toHaveBeenNthCalledWith(
            1,
            'playlist-1',
            'schedule-1',
            {
                item_id: 'media-1',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        );
        expect(updateSignagePlaylistMediaSchedule).toHaveBeenNthCalledWith(
            2,
            'playlist-1',
            'schedule-2',
            {
                item_id: 'media-2',
                schedules: [{ play_cron: '0 9 * * *', play_period: 30 }],
            },
        );
    });

    it('removes a distribution schedule from the playlist items', async () => {
        const service = createService();
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['schedule-1', 'schedule-2'],
            schedules: [],
        });
        (updateSignagePlaylistMedia as any).mockResolvedValue({});

        await service.removeMediaFromPlaylist('playlist-1', 'schedule-1', 0);

        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('playlist-1', [
            'schedule-2',
        ]);
    });

    it('removes selected playlist occurrences with one update', async () => {
        const service = createService();
        service.selected_playlist_item.set(new SignageMedia({ id: 'media-1' }));
        service.selected_playlist_item_index.set(2);
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['media-1', 'media-2', 'media-1', 'media-3'],
            schedules: [],
        });
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        confirmNextDialog();

        const removed = await service.removeMediaItemsFromPlaylist(
            'playlist-1',
            [
                { id: 'media-1', index: 0 },
                { id: 'media-1', index: 2 },
            ],
        );

        expect(removed).toBe(true);
        expect(updateSignagePlaylistMedia).toHaveBeenCalledOnce();
        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('playlist-1', [
            'media-2',
            'media-3',
        ]);
        expect(service.selected_playlist_item()).toBeNull();
        expect(service.selected_playlist_item_index()).toBeNull();
    });

    /** Show a media list as the loaded list of the selected playlist */
    function showPlaylistMedia(
        service: SignagePlaylistService,
        playlist_id: string,
        list: Partial<SignagePlaylistMedia>,
    ) {
        Object.defineProperty(service, '_selected_playlist_id', {
            value: () => playlist_id,
        });
        (service as SignagePlaylistServiceTestAccess)[
            '_playlist_media_items'
        ].set(new SignagePlaylistMedia(list));
    }

    function playlistMediaIdsShown(service: SignagePlaylistService) {
        return service.playlist_media_items().map(({ id }) => id);
    }

    describe('playlist item order', () => {
        const media = ['a', 'b', 'c'].map(
            (id) => new SignageMedia({ id, name: id }),
        );

        it('shows the new order at once and keeps items without media', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'missing', 'b', 'c'],
                media,
            });
            let saved: (value: unknown) => void = () => {};
            (updateSignagePlaylistMedia as any).mockReturnValue(
                new Promise((resolve) => (saved = resolve)),
            );

            const saving = service.reorderPlaylistMedia('pl-1', [
                'c',
                'a',
                'b',
            ]);

            expect(playlistMediaIdsShown(service)).toEqual(['c', 'a', 'b']);
            expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('pl-1', [
                'c',
                'missing',
                'a',
                'b',
            ]);
            saved({});
            await saving;
            expect(playlistMediaIdsShown(service)).toEqual(['c', 'a', 'b']);
        });

        it('restores the old order and reports an error when the save fails', async () => {
            const service = createService();
            showPlaylistMedia(service, 'pl-1', {
                items: ['a', 'b', 'c'],
                media,
            });
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
        vi.mocked(removeSignagePlaylist).mockRejectedValue(
            new Error('Forbidden'),
        );

        await service.removePlaylist(
            new SignagePlaylist({ id: 'pl-1', name: 'Lobby' }),
        );

        expect(dialog.open.mock.results[0].value.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Error removing playlist',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('closes the confirm modal and restores the items when removing them fails', async () => {
        const service = createService();
        showPlaylistMedia(service, 'playlist-1', {
            items: ['media-1', 'media-2'],
            media: [
                new SignageMedia({ id: 'media-1' }),
                new SignageMedia({ id: 'media-2' }),
            ],
        });
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['media-1', 'media-2'],
            schedules: [],
        });
        (updateSignagePlaylistMedia as any).mockRejectedValue(
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
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['sched-1', 'sched-2'],
            schedules: [
                { id: 'sched-1', item_id: 'media-1', media: { id: 'media-1' } },
                { id: 'sched-2', item_id: 'media-2', media: { id: 'media-2' } },
            ],
        });
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        const service = createService();

        await service.removeMediaFromPlaylists(['media-1'], ['pl-1']);

        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('pl-1', [
            'sched-2',
        ]);
    });

    it('duplicates a playlist with its items and item schedules', async () => {
        const schedules = [{ play_cron: '0 9 * * *', play_period: 30 }];
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['media-1', 'media-2'],
            schedules: [{ item_id: 'media-2', schedules }],
        });
        vi.mocked(addSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({ id: 'copy-1' }),
        );
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        (updateSignagePlaylistMediaSchedule as any).mockResolvedValue({});
        const service = createService();

        const copy = await service.duplicatePlaylist(
            new SignagePlaylist({ id: 'pl-1', name: 'Lobby', random: true }),
        );

        expect(copy?.id).toBe('copy-1');
        expect(vi.mocked(addSignagePlaylist).mock.calls[0][0]).toMatchObject({
            name: 'Lobby (copy)',
            random: true,
        });
        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('copy-1', [
            'media-1',
            'media-2',
        ]);
        expect(updateSignagePlaylistMediaSchedule).toHaveBeenCalledWith(
            'copy-1',
            'media-2',
            { item_id: 'media-2', schedules },
        );
    });

    it('ignores a second duplicate request while the first runs', async () => {
        let listed: (value: unknown) => void = () => {};
        (listSignagePlaylistMedia as any).mockReturnValue(
            new Promise((resolve) => (listed = resolve)),
        );
        vi.mocked(addSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({ id: 'copy-1' }),
        );
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        const service = createService();
        const playlist = new SignagePlaylist({ id: 'pl-1', name: 'Lobby' });

        const first = service.duplicatePlaylist(playlist);
        const second = await service.duplicatePlaylist(playlist);

        expect(second).toBeNull();
        expect(service.playlist_duplicating()).toBe(true);
        listed({ items: ['media-1'], schedules: [] });
        expect((await first)?.id).toBe('copy-1');
        expect(addSignagePlaylist).toHaveBeenCalledOnce();
        expect(service.playlist_duplicating()).toBe(false);
    });

    it('removes the partial copy when duplicating a playlist fails', async () => {
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['media-1'],
            schedules: [],
        });
        vi.mocked(addSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({ id: 'copy-1' }),
        );
        (updateSignagePlaylistMedia as any).mockRejectedValue(
            new Error('Server error'),
        );
        vi.mocked(removeSignagePlaylist).mockResolvedValue({});
        const service = createService();

        const copy = await service.duplicatePlaylist(
            new SignagePlaylist({ id: 'pl-1', name: 'Lobby' }),
        );

        expect(copy).toBeNull();
        expect(removeSignagePlaylist).toHaveBeenCalledWith('copy-1');
        expect(service.playlist_duplicating()).toBe(false);
    });

    it('duplicates a distribution playlist by scheduling the same media in order', async () => {
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['sched-2', 'sched-1'],
            schedules: [
                { id: 'sched-1', item_id: 'media-1', schedules: [] },
                { id: 'sched-2', item_id: 'media-2', schedules: [] },
            ],
        });
        vi.mocked(addSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({ id: 'copy-1' }),
        );
        const service = createService();

        await service.duplicatePlaylist(
            new SignagePlaylist({
                id: 'pl-1',
                name: 'Rota',
                distribution: true,
            }),
        );

        expect(
            (scheduleSignagePlaylistMedia as any).mock.calls.map(
                ([id, data]) => [id, data.item_id],
            ),
        ).toEqual([
            ['copy-1', 'media-2'],
            ['copy-1', 'media-1'],
        ]);
        expect(updateSignagePlaylistMedia).not.toHaveBeenCalled();
    });

    describe('takeover conflicts', () => {
        const takeover = (id: string, play_cron: string) =>
            new SignagePlaylist({
                id,
                name: id,
                schedules: [
                    { play_cron, play_period: 60, play_takeover: true },
                ],
            } as any);
        const inventory = {
            displays: [
                new PlaceSystem({
                    id: 'd1',
                    name: 'Lobby',
                    playlists: ['a'],
                } as any),
                new PlaceSystem({ id: 'd2', name: 'Cafe' } as any),
            ],
            zones: [],
            playlists: [
                takeover('a', '0 9 * * *'),
                takeover('b', '30 9 * * *'),
                new SignagePlaylist({ id: 'c', name: 'Old', valid_until: 1 }),
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
                playlist: new SignagePlaylist({ id: 'c', name: 'Plain' }),
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
        const current_group = { id: 'group-1', name: 'Current' };
        const target_group = { id: 'group-2', name: 'Target' };
        vi.mocked(showSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({
                id: 'playlist-1',
                shared_with: [current_group],
            }),
        );
        vi.mocked(shareSignagePlaylists).mockResolvedValue({
            linked: ['playlist-1'],
            already_present: [],
        });
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

        vi.mocked(showSignagePlaylist).mockResolvedValue(
            new SignagePlaylist({
                id: 'playlist-1',
                shared_with: [current_group, target_group],
            }),
        );
        await service.sharePlaylist(
            new SignagePlaylist({ id: 'playlist-1', name: 'Lobby' }),
        );

        await vi.waitFor(() => {
            expect(fixture.componentInstance.shared_groups()).toEqual([
                current_group,
                target_group,
            ]);
        });
    });
});
