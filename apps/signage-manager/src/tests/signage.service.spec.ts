import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    addSignageMedia,
    del,
    listSignagePlaylistMedia,
    listSignageTemplateApprovers,
    querySignagePlugins,
    removeSignageMedia,
    requestApprovalSignageTemplate,
    scheduleSignagePlaylistMedia,
    shareSignagePlaylists,
    shareSignageTemplates,
    showSignagePlaylist,
    SignageMedia,
    SignagePlaylist,
    SignagePlaylistItemSchedule,
    SignagePlugin,
    SignageTemplate,
    updateSignageMedia,
    updateSignagePlaylistMedia,
    updateSignagePlaylistMediaSchedule,
    updateSignageTemplate,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { MediaPreviewModalComponent } from '../app/shared/media-preview-modal.component';
import { MediaTagsModalComponent } from '../app/shared/media-tags-modal.component';
import { PlaylistItemScheduleModalComponent } from '../app/shared/playlist-item-schedule-modal.component';
import { SignageSharedWithComponent } from '../app/shared/signage-shared-with.component';
import { TemplateApproveModalComponent } from '../app/shared/template-approve-modal.component';
import { TemplateRequestApprovalModalComponent } from '../app/shared/template-request-approval-modal.component';
import { SignageService } from '../app/signage.service';

type SignageServiceTestAccess = SignageService & Record<string, any>;

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageService media uploads', () => {
    const uploads = {
        uploadFileWithPermissionsToCompletion: vi.fn(),
        uploadFileToCompletion: vi.fn(),
    };
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
        uploads.uploadFileWithPermissionsToCompletion.mockResolvedValue(
            'media-upload-1',
        );
        uploads.uploadFileToCompletion.mockResolvedValue('thumbnail-upload-1');
        settings.get.mockReturnValue(false);
        (addSignageMedia as any).mockImplementation((data) =>
            Promise.resolve(new SignageMedia({ id: 'media-1', ...data })),
        );
        (listSignagePlaylistMedia as any).mockResolvedValue({
            items: [],
            media: [],
        });
        (scheduleSignagePlaylistMedia as any).mockResolvedValue({});
        (del as any).mockResolvedValue({});
        (removeSignageMedia as any).mockResolvedValue({});
        vi.mocked(querySignagePlugins).mockResolvedValue({
            data: [],
        } as Awaited<ReturnType<typeof querySignagePlugins>>);
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
                SignageService,
                { provide: UploadsService, useValue: uploads },
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(SignageService);
        const test_service = service as unknown as SignageServiceTestAccess;
        test_service['_requirePermission'] = vi.fn(() => true);
        test_service['_generateThumbnail'] = vi.fn().mockResolvedValue('');
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

    function selectApiGroup(service: SignageService, group_id: string) {
        Object.defineProperty(service, '_api_group_id', {
            value: () => group_id,
        });
    }

    it('requests plugins and widgets separately', async () => {
        vi.mocked(querySignagePlugins).mockImplementation(async (options) => {
            const plugin_type = options.plugin_type || 'plugin';
            return {
                data: [
                    new SignagePlugin({
                        id: `${plugin_type}-1`,
                        name: plugin_type,
                        plugin_type,
                    }),
                ],
            } as Awaited<ReturnType<typeof querySignagePlugins>>;
        });
        const service = createService();
        TestBed.flushEffects();

        await vi.waitFor(() => {
            expect(service.plugins()[0]?.id).toBe('plugin-1');
            expect(service.widgets()[0]?.id).toBe('widget-1');
        });
        expect(querySignagePlugins).toHaveBeenCalledWith(
            expect.objectContaining({ plugin_type: 'plugin' }),
        );
        expect(querySignagePlugins).toHaveBeenCalledWith(
            expect.objectContaining({ plugin_type: 'widget' }),
        );
    });

    it('rejects widget plugins when adding media', async () => {
        const service = createService();
        const edit_media = vi.spyOn(service, 'editMedia');

        await service.addMediaFromPlugin(
            new SignagePlugin({ id: 'widget-1', plugin_type: 'widget' }),
        );

        expect(edit_media).not.toHaveBeenCalled();
    });

    it('requires schedules before adding media to distribution playlists', async () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
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
        const test_service = service as unknown as SignageServiceTestAccess;
        TestBed.flushEffects();
        test_service['_change'].set(0);
        TestBed.flushEffects();
        const loaded_playlists = Array.from(
            { length: 250 },
            (_, index) =>
                new SignagePlaylist({
                    id: `playlist-${index}`,
                    name: `Playlist ${index}`,
                }),
        );
        test_service['_playlist_items'].set(loaded_playlists);
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

        await service.editPlaylistItemSchedule({
            id: 'schedule-1',
            item_id: 'media-1',
            schedules: [],
        } as any);

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

    it('does not create signage media when the media upload fails', async () => {
        uploads.uploadFileWithPermissionsToCompletion.mockRejectedValue({
            error: 'Upload failed',
        });
        const service = createService();

        await expect(
            service.addMedia(
                new File(['image'], 'poster.png', { type: 'image/png' }),
                new SignageMedia({ name: 'Poster' }),
                {
                    is_landscape: true,
                    duration: 0,
                    width: 1920,
                    height: 1080,
                },
            ),
        ).rejects.toMatchObject({ error: 'Upload failed' });

        expect(addSignageMedia).not.toHaveBeenCalled();
    });

    it('saves media without a thumbnail when the thumbnail upload fails', async () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        (test_service['_generateThumbnail'] as any).mockResolvedValue(
            'data:image/jpeg;base64,aW1hZ2U=',
        );
        uploads.uploadFileToCompletion.mockRejectedValue({
            error: 'Thumbnail failed',
        });

        await service.addMedia(
            new File(['image'], 'poster.png', { type: 'image/png' }),
            new SignageMedia({ name: 'Poster' }),
            {
                is_landscape: true,
                duration: 0,
                width: 1920,
                height: 1080,
            },
        );

        expect(notify_open).toHaveBeenCalledWith(
            'Media uploaded, but its thumbnail could not be saved.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['warn'] }),
        );
        expect(addSignageMedia).toHaveBeenCalledWith(
            expect.not.objectContaining({ thumbnail_id: expect.anything() }),
        );
    });

    it('adds tags to media without replacing existing tags', async () => {
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: string[]) => void) => {
                    Promise.resolve().then(() => handler(['news', 'lobby']));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
        (updateSignageMedia as any).mockResolvedValue({});
        const service = createService();

        await service.addMediaTags([
            new SignageMedia({ id: 'media-1', tags: ['existing', 'news'] }),
            new SignageMedia({ id: 'media-2', tags: [] }),
        ]);

        expect(dialog.open).toHaveBeenCalledWith(MediaTagsModalComponent, {
            data: { tags: [] },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        expect(updateSignageMedia).toHaveBeenCalledWith('media-1', {
            tags: ['existing', 'news', 'lobby'],
        });
        expect(updateSignageMedia).toHaveBeenCalledWith('media-2', {
            tags: ['news', 'lobby'],
        });
    });

    it('waits for the upload to commit before creating the media record', async () => {
        const service = createService();
        let settle_upload: (id: string) => void;
        const progress: number[] = [];
        uploads.uploadFileToCompletion.mockImplementation(
            (_file, _pub, _permissions, on_progress) => {
                // Report a completed transfer, but do not resolve: the commit
                // has not happened yet.
                on_progress?.(100);
                return new Promise<string>((resolve) => {
                    settle_upload = resolve;
                });
            },
        );

        const pending = service.addMedia(
            new File(['image'], 'poster.png', { type: 'image/png' }),
            new SignageMedia({ name: 'Poster' }),
            { is_landscape: true, duration: 0, width: 1920, height: 1080 },
            { permissions: 'none', on_progress: (p) => progress.push(p) },
        );
        // Let the file validation and thumbnail steps settle
        for (
            let i = 0;
            i < 20 && !uploads.uploadFileToCompletion.mock.calls.length;
            i++
        ) {
            await new Promise((resolve) => setTimeout(resolve));
        }

        expect(progress).toContain(100);
        expect(addSignageMedia).not.toHaveBeenCalled();

        settle_upload('media-upload-1');
        await pending;

        expect(addSignageMedia).toHaveBeenCalled();
    });

    it('reports a commit failure instead of creating the media record', async () => {
        const service = createService();
        uploads.uploadFileToCompletion.mockRejectedValue(
            new Error('Committing upload up-1 failed with status 401'),
        );

        await expect(
            service.addMedia(
                new File(['image'], 'poster.png', { type: 'image/png' }),
                new SignageMedia({ name: 'Poster' }),
                { is_landscape: true, duration: 0, width: 1920, height: 1080 },
                { permissions: 'none' },
            ),
        ).rejects.toThrow(/status 401/);

        expect(addSignageMedia).not.toHaveBeenCalled();
    });

    it('adds the created media to the library from the create response', async () => {
        const service = createService();
        (addSignageMedia as any).mockResolvedValue(
            new SignageMedia({
                id: 'media-new',
                name: 'Poster',
                created_at: 200,
            }),
        );
        const test_service = service as unknown as SignageServiceTestAccess;
        test_service['_media_items'].set([
            new SignageMedia({ id: 'media-old', name: 'Old', created_at: 100 }),
        ]);

        await service.addMedia(
            new File(['image'], 'poster.png', { type: 'image/png' }),
            new SignageMedia({ name: 'Poster' }),
            { is_landscape: true, duration: 0, width: 1920, height: 1080 },
        );

        expect(service.media().map((item) => item.id)).toEqual([
            'media-new',
            'media-old',
        ]);
    });

    describe('creating the media record', () => {
        const addMediaFor = (service: SignageService) =>
            service.addMedia(
                new File(['image'], 'poster.png', { type: 'image/png' }),
                new SignageMedia({ name: 'Poster' }),
                { is_landscape: true, duration: 0, width: 1920, height: 1080 },
            );

        it('retries a server error and then succeeds', async () => {
            vi.useFakeTimers();
            const service = createService();
            (addSignageMedia as any)
                .mockRejectedValueOnce({ status: 500 })
                .mockRejectedValueOnce({ status: 503 })
                .mockResolvedValueOnce(
                    new SignageMedia({ id: 'media-retried' }),
                );

            const pending = addMediaFor(service);
            await vi.runAllTimersAsync();
            const result = await pending;

            expect(addSignageMedia).toHaveBeenCalledTimes(3);
            expect(result.id).toBe('media-retried');
            vi.useRealTimers();
        });

        it('retries a transport failure with no status', async () => {
            vi.useFakeTimers();
            const service = createService();
            (addSignageMedia as any)
                .mockRejectedValueOnce(new TypeError('Failed to fetch'))
                .mockResolvedValueOnce(new SignageMedia({ id: 'media-net' }));

            const pending = addMediaFor(service);
            await vi.runAllTimersAsync();
            await pending;

            expect(addSignageMedia).toHaveBeenCalledTimes(2);
            vi.useRealTimers();
        });

        it('gives up after exhausting the retries', async () => {
            vi.useFakeTimers();
            const service = createService();
            (addSignageMedia as any).mockRejectedValue({ status: 500 });

            const pending = addMediaFor(service);
            pending.catch(() => null);
            await vi.runAllTimersAsync();

            await expect(pending).rejects.toMatchObject({ status: 500 });
            // Initial attempt plus one per backoff delay
            expect(addSignageMedia).toHaveBeenCalledTimes(4);
            vi.useRealTimers();
        });

        it('does not retry a client error', async () => {
            const service = createService();
            (addSignageMedia as any).mockRejectedValue({ status: 422 });

            await expect(addMediaFor(service)).rejects.toMatchObject({
                status: 422,
            });
            expect(addSignageMedia).toHaveBeenCalledTimes(1);
        });

        it('leaves a 401 to the api client rather than retrying again', async () => {
            const service = createService();
            (addSignageMedia as any).mockRejectedValue({ status: 401 });

            await expect(addMediaFor(service)).rejects.toMatchObject({
                status: 401,
            });
            expect(addSignageMedia).toHaveBeenCalledTimes(1);
        });
    });

    it('updates the displayed media item after editing it', async () => {
        const media = new SignageMedia({ id: 'media-1', name: 'Old name' });
        const updated_media = new SignageMedia({
            id: 'media-1',
            name: 'New name',
        });
        (updateSignageMedia as any).mockResolvedValue(updated_media);
        dialog.open.mockImplementation((_component, config) => ({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve()
                        .then(() => config.data.onEdit(media.id, updated_media))
                        .then(() => handler(undefined));
                    return { unsubscribe: vi.fn() };
                },
            }),
        }));
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        test_service['_media_items'].set([media]);

        await service.editMedia(media);

        expect(media.name).toBe('New name');
        expect(service.media()[0].name).toBe('New name');
    });

    it('passes the selected group to the media preview', async () => {
        const service = createService();
        selectApiGroup(service, 'group-1');
        const media = new SignageMedia({ id: 'media-1', media_type: 'image' });

        await service.previewMedia(media);

        expect(dialog.open).toHaveBeenCalledWith(MediaPreviewModalComponent, {
            data: { media, plugin: undefined, group_id: 'group-1' },
            panelClass: 'fullscreen-dialog',
        });
    });

    it('unshares deleted media from the selected group', async () => {
        confirmNextDialog();
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        selectApiGroup(service, 'group-1');
        test_service['_removeMediaFromCachedPlaylists'] = vi
            .fn()
            .mockResolvedValue(undefined);

        await service.removeMedia(
            new SignageMedia({ id: 'media-1', name: 'Poster' }),
        );

        expect(removeSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'group-1',
        });
    });

    it('unshares each bulk-deleted media item from the selected group', async () => {
        confirmNextDialog();
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        selectApiGroup(service, 'group-1');
        test_service['_removeMediaFromCachedPlaylists'] = vi
            .fn()
            .mockResolvedValue(undefined);

        await service.removeMediaItems([
            new SignageMedia({ id: 'media-1' }),
            new SignageMedia({ id: 'media-2' }),
        ]);

        expect(removeSignageMedia).toHaveBeenCalledWith('media-1', {
            group_id: 'group-1',
        });
        expect(removeSignageMedia).toHaveBeenCalledWith('media-2', {
            group_id: 'group-1',
        });
    });

    it('unshares deleted templates from the selected group', async () => {
        confirmNextDialog();
        const service = createService();
        selectApiGroup(service, 'group/1');

        await service.removeTemplate(
            new SignageTemplate({ id: 'template/1', name: 'Welcome' }),
        );

        expect(del).toHaveBeenCalledWith(
            expect.stringMatching(
                /\/signage\/templates\/template%2F1\?group_id=group%2F1$/,
            ),
        );
    });
    it('shares templates with the selected signage group', async () => {
        const service = createService();
        (shareSignageTemplates as any).mockResolvedValue({});
        Object.defineProperty(service, 'can_share', {
            value: () => true,
        });
        Object.defineProperty(service, 'selected_group', {
            value: () => ({ group: { id: 'group-1' } }),
        });
        Object.defineProperty(service, 'signage_groups', {
            value: () => [
                { group: { id: 'group-1', name: 'Current' } },
                { group: { id: 'group-2', name: 'Target' } },
            ],
        });
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value: string) => void) => {
                    Promise.resolve().then(() => handler('group-2'));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });

        await service.shareTemplate(
            new SignageTemplate({ id: 'template-1', name: 'Welcome' }),
        );

        expect(shareSignageTemplates).toHaveBeenCalledWith({
            items: 'template-1',
            to: 'group-2',
        });
    });

    it('refreshes the shared groups after sharing a playlist', async () => {
        const service = createService();
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
        Object.defineProperty(service, 'can_share', {
            value: () => true,
        });
        Object.defineProperty(service, 'selected_group', {
            value: () => ({ group: current_group }),
        });
        Object.defineProperty(service, 'signage_groups', {
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

    it('opens template approval for users with approval permission', () => {
        const service = createService();
        const template = new SignageTemplate({ id: 'template-1' });

        service.approveTemplate(template);

        expect(dialog.open).toHaveBeenCalledWith(
            TemplateApproveModalComponent,
            {
                data: { template },
                panelClass: 'mobile-fullscreen',
            },
        );
    });

    it('requests template approval and updates the cached status', async () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        const template = new SignageTemplate({
            id: 'template-1',
            approved: false,
        });
        test_service['_template_items'].set([template]);
        Object.defineProperty(service, 'can_approve', {
            value: () => false,
        });
        test_service['_templateApprovalGroups'] = vi
            .fn()
            .mockResolvedValue([{ group: { id: 'group-1' } }]);
        vi.mocked(listSignageTemplateApprovers).mockResolvedValue([
            { id: 'user-1', name: 'Reviewer' },
        ]);
        (requestApprovalSignageTemplate as any).mockResolvedValue({});
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() =>
                        handler({ approver_id: 'user-1', message: 'Review' }),
                    );
                    return { unsubscribe: vi.fn() };
                },
            }),
        });

        await service.requestTemplateApproval(template);

        expect(dialog.open).toHaveBeenCalledWith(
            TemplateRequestApprovalModalComponent,
            expect.objectContaining({
                data: {
                    template,
                    approvers: [{ id: 'user-1', name: 'Reviewer' }],
                },
            }),
        );
        expect(requestApprovalSignageTemplate).toHaveBeenCalledWith(
            'template-1',
            'group-1',
            'Review',
            'user-1',
        );
        expect(service.templates()[0].approval_requested).toBe(true);
    });

    it('updates template approval state in the list and selection', () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        const template = new SignageTemplate({
            id: 'template-1',
            approved: false,
        });
        test_service['_template_items'].set([template]);
        service.selected_template.set(template);

        service.setTemplateApprovalStatus('template-1', true);

        expect(service.templates()[0].approved).toBe(true);
        expect(service.selected_template()?.approved).toBe(true);
        expect(service.selected_template_requires_approval()).toBe(false);
    });

    it('replaces an approved template with its new draft ID', () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
        });
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        test_service['_template_items'].set([approved]);
        service.selected_template.set(approved);

        service.updateCachedTemplate(draft);

        expect(service.templates()).toEqual([draft]);
        expect(service.selected_template()).toBe(draft);
    });

    it('replaces a draft with its approved template', () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        const draft = new SignageTemplate({
            id: 'template-draft',
            live_template_id: 'template-live',
        });
        const approved = new SignageTemplate({
            id: 'template-live',
            approved: true,
        });
        test_service['_template_items'].set([draft]);
        service.selected_template.set(draft);

        service.updateCachedTemplate(approved);

        expect(service.templates()).toEqual([approved]);
        expect(service.selected_template()).toBe(approved);
    });

    it('sends displayed layout position defaults when saving', async () => {
        const service = createService();
        service.selected_template.set(
            new SignageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            { position: 'top', plugin_params: {} },
            { position: 'left', plugin_params: {} },
            { position: 'floating', plugin_params: {} },
        ]);
        (updateSignageTemplate as any).mockImplementation((_id, data) =>
            Promise.resolve(new SignageTemplate({ id: 'template-1', ...data })),
        );

        await service.saveTemplateLayouts();

        expect(updateSignageTemplate).toHaveBeenCalledWith('template-1', {
            layouts: [
                { position: 'top', plugin_params: {}, y_pos: 0.15 },
                { position: 'left', plugin_params: {}, x_pos: 0.2 },
                {
                    position: 'floating',
                    plugin_params: {},
                    x_pos: 0.5,
                    y_pos: 0.5,
                },
            ],
        });
    });

    it('keeps saved plugin details when the update response omits them', async () => {
        const service = createService();
        service.selected_template.set(
            new SignageTemplate({ id: 'template-1', layouts: [] }),
        );
        service.template_layout_draft.set([
            {
                position: 'top',
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            },
        ]);
        vi.mocked(updateSignageTemplate).mockResolvedValue(
            new SignageTemplate({
                id: 'template-1',
                layouts: [
                    {
                        position: 'top',
                        y_pos: 0.15,
                        plugin_params: {},
                    },
                ],
            }),
        );

        await service.saveTemplateLayouts();

        expect(service.selected_template()?.layouts).toEqual([
            {
                position: 'top',
                y_pos: 0.15,
                plugin_id: 'clock-widget',
                plugin_params: { display: { format: '24h' } },
            },
        ]);
        expect(service.template_layout_draft()).toEqual(
            service.selected_template()?.layouts,
        );
        expect(service.template_layout_dirty()).toBe(false);
    });
});
