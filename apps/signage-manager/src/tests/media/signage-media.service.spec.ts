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
    post,
    querySignagePlugins,
    removeSignageMedia,
    removeSignageMediaTag,
    renameSignageMediaTag,
    scheduleSignagePlaylistMedia,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
    updateSignageMedia,
} from '@placeos/ts-client';
import { NEVER, of } from 'rxjs';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import type { BulkMediaUploadModalData } from '../../app/shared/bulk-media-upload-modal.component';
import { MediaPreviewModalComponent } from '../../app/shared/media-preview-modal.component';
import { MediaTagModalComponent } from '../../app/shared/media-tag-modal.component';
import { MediaTagsModalComponent } from '../../app/shared/media-tags-modal.component';
import { SignageContextService } from '../../app/signage-context.service';

type SignageMediaServiceTestAccess = SignageMediaService & Record<string, any>;

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('SignageMediaService', () => {
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
        vi.mocked(showSignageMedia).mockResolvedValue(new SignageMedia({}));
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
                { provide: UploadsService, useValue: uploads },
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        const service = TestBed.inject(SignageMediaService);
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
        vi.spyOn(
            TestBed.inject(SignageContextService),
            'requirePermission',
        ).mockReturnValue(true);
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

    function closeNextDialogWith(value: unknown) {
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (result: unknown) => void) => {
                    Promise.resolve().then(() => handler(value));
                    return { unsubscribe: vi.fn() };
                },
            }),
        });
    }

    function selectApiGroup(group_id: string) {
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'api_group_id',
            { value: () => group_id },
        );
    }

    /** Stub how the playlist service takes deleted media out of playlists */
    function stubRemoveMediaFromPlaylists(
        implementation: () => Promise<void> = async () => undefined,
    ) {
        return vi
            .spyOn(
                TestBed.inject(SignagePlaylistService),
                'removeMediaFromPlaylists',
            )
            .mockImplementation(implementation);
    }

    it('rejects widget plugins when adding media', async () => {
        const service = createService();
        const edit_media = vi.spyOn(service, 'editMedia');

        await service.addMediaFromPlugin(
            new SignagePlugin({ id: 'widget-1', plugin_type: 'widget' }),
        );

        expect(edit_media).not.toHaveBeenCalled();
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
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
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
            {},
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

    it('renames a media tag in the selected group', async () => {
        closeNextDialogWith({ action: 'rename', new_tag: 'updates' });
        (renameSignageMediaTag as any).mockResolvedValue(undefined);
        const service = createService();
        selectApiGroup('group-1');

        const renamed = await service.renameMediaTag('news', 4);

        expect(dialog.open).toHaveBeenCalledWith(MediaTagModalComponent, {
            data: {
                action: 'rename',
                tag: 'news',
                count: 4,
                can_delete_media: false,
            },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        expect(renameSignageMediaTag).toHaveBeenCalledWith({
            current_tag: 'news',
            new_tag: 'updates',
            group_id: 'group-1',
        });
        expect(renamed).toBe(true);
    });

    it('renames a media tag across all groups without a group option', async () => {
        closeNextDialogWith({ action: 'rename', new_tag: 'company news' });
        (renameSignageMediaTag as any).mockResolvedValue(undefined);
        const service = createService();
        selectApiGroup('');
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'can_update_media_tags',
            { value: () => true },
        );

        const renamed = await service.renameMediaTag('news', 4);

        expect(renameSignageMediaTag).toHaveBeenCalledWith({
            current_tag: 'news',
            new_tag: 'company news',
        });
        expect(renamed).toBe(true);
    });

    it('removes a media tag and its media in the selected group', async () => {
        closeNextDialogWith({ action: 'remove', remove_media: true });
        (removeSignageMediaTag as any).mockResolvedValue(undefined);
        const service = createService();
        selectApiGroup('group-1');
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'can_delete_tagged_media',
            { value: () => true },
        );

        const removed = await service.removeMediaTag('news', 4);

        expect(dialog.open).toHaveBeenCalledWith(MediaTagModalComponent, {
            data: {
                action: 'remove',
                tag: 'news',
                count: 4,
                can_delete_media: true,
            },
            width: 'min(28rem, calc(100vw - 2rem))',
        });
        expect(removeSignageMediaTag).toHaveBeenCalledWith({
            tag: 'news',
            remove_media: true,
            group_id: 'group-1',
        });
        expect(removed).toBe(true);
    });

    it('removes a media tag across all groups without deleting media', async () => {
        closeNextDialogWith({ action: 'remove', remove_media: false });
        (removeSignageMediaTag as any).mockResolvedValue(undefined);
        const service = createService();
        selectApiGroup('');
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'can_update_media_tags',
            { value: () => true },
        );

        const removed = await service.removeMediaTag('news', 4);

        expect(removeSignageMediaTag).toHaveBeenCalledWith({ tag: 'news' });
        expect(removed).toBe(true);
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
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
        test_service['_media_list'].update(() => [
            new SignageMedia({ id: 'media-old', name: 'Old', created_at: 100 }),
        ]);
        test_service['_media_list'].adjustTotal(223);

        await service.addMedia(
            new File(['image'], 'poster.png', { type: 'image/png' }),
            new SignageMedia({ name: 'Poster' }),
            { is_landscape: true, duration: 0, width: 1920, height: 1080 },
        );

        expect(service.media().map((item) => item.id)).toEqual([
            'media-new',
            'media-old',
        ]);
        expect(service.media_total()).toBe(224);
    });

    describe('creating the media record', () => {
        const addMediaFor = (service: SignageMediaService) =>
            service.addMedia(
                new File(['image'], 'poster.png', { type: 'image/png' }),
                new SignageMedia({ name: 'Poster' }),
                { is_landscape: true, duration: 0, width: 1920, height: 1080 },
            );

        it('retries a status that means the server did not process it', async () => {
            vi.useFakeTimers();
            const service = createService();
            (addSignageMedia as any)
                .mockRejectedValueOnce({ status: 429 })
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

        // The record can be committed before these fail, so a retry could
        // create a duplicate
        it.each([
            ['a gateway timeout', { status: 504 }],
            ['a server error', { status: 500 }],
            ['a dropped connection', new TypeError('Failed to fetch')],
        ])('does not retry %s', async (_name, error) => {
            const service = createService();
            (addSignageMedia as any).mockRejectedValue(error);

            await expect(addMediaFor(service)).rejects.toBe(error);
            expect(addSignageMedia).toHaveBeenCalledTimes(1);
        });

        it('gives up after exhausting the retries', async () => {
            vi.useFakeTimers();
            const service = createService();
            (addSignageMedia as any).mockRejectedValue({ status: 503 });

            const pending = addMediaFor(service);
            pending.catch(() => null);
            await vi.runAllTimersAsync();

            await expect(pending).rejects.toMatchObject({ status: 503 });
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

    describe('screenshot thumbnails', () => {
        // `post` is overloaded; mock the JSON form the service uses
        const screenshot_post = vi.mocked(
            post as (
                url: string,
                body: unknown,
            ) => Promise<Record<string, unknown>>,
        );
        const createObjectURL = URL.createObjectURL;
        let screenshot_count = 0;

        beforeEach(() => {
            screenshot_count += 1;
            screenshot_post.mockResolvedValue({
                id: `screenshot-${screenshot_count}`,
            });
            vi.stubGlobal(
                'fetch',
                vi.fn().mockResolvedValue({
                    ok: true,
                    blob: () =>
                        Promise.resolve(
                            new Blob(['jpeg'], { type: 'image/jpeg' }),
                        ),
                }),
            );
            URL.createObjectURL = vi.fn(() => 'blob:screenshot');
        });

        afterEach(() => {
            vi.unstubAllGlobals();
            URL.createObjectURL = createObjectURL;
        });

        const addLinkMedia = (
            service: SignageMediaService,
            media_uri: string,
            thumbnail?: string,
            media_type: 'webpage' | 'plugin' = 'webpage',
            fallback_thumbnail?: () => Promise<string>,
        ) => {
            const test_service =
                service as unknown as SignageMediaServiceTestAccess;
            test_service['_generateThumbnail'] = vi
                .fn()
                .mockResolvedValue('data:image/jpeg;base64,dGh1bWI=');
            return test_service['_addMedia'](
                undefined,
                new SignageMedia({
                    name: 'Dashboard',
                    media_type,
                    media_uri,
                }),
                undefined,
                thumbnail,
                undefined,
                fallback_thumbnail,
            );
        };

        it('stores a scaled screenshot as the thumbnail and deletes the original', async () => {
            const service = createService();

            await addLinkMedia(service, 'https://example.com/dashboard');

            expect(post).toHaveBeenCalledWith(
                expect.stringMatching(/\/uploads\/screenshot$/),
                expect.objectContaining({
                    url: 'https://example.com/dashboard',
                    width: 1920,
                    height: 1080,
                }),
            );
            expect(uploads.uploadFileToCompletion).toHaveBeenCalledTimes(1);
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.objectContaining({
                    thumbnail_id: 'thumbnail-upload-1',
                    media_uri: 'https://example.com/dashboard',
                }),
                {},
            );
            expect(
                vi.mocked(addSignageMedia).mock.calls[0][0],
            ).not.toHaveProperty('media_id');
            expect(del).toHaveBeenCalledWith(
                expect.stringMatching(
                    new RegExp(`/uploads/screenshot-${screenshot_count}$`),
                ),
            );
        });

        it('captures the plugin URI for a plugin item', async () => {
            const service = createService();
            const fallback_thumbnail = vi.fn();

            await addLinkMedia(
                service,
                'https://plugins.example.com/clock/',
                undefined,
                'plugin',
                fallback_thumbnail,
            );

            expect(fallback_thumbnail).not.toHaveBeenCalled();

            expect(screenshot_post).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    url: 'https://plugins.example.com/clock/',
                }),
            );
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.objectContaining({ thumbnail_id: 'thumbnail-upload-1' }),
                {},
            );
        });

        it('uses the fallback thumbnail when the screenshot fails', async () => {
            const service = createService();
            screenshot_post.mockRejectedValue({ status: 504 });

            await addLinkMedia(
                service,
                'https://plugins.example.com/clock/',
                undefined,
                'plugin',
                () => Promise.resolve('data:image/png;base64,cGx1Z2lu'),
            );

            expect(uploads.uploadFileToCompletion).toHaveBeenCalledTimes(1);
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.objectContaining({ thumbnail_id: 'thumbnail-upload-1' }),
                {},
            );
        });

        it('deletes the screenshot when the thumbnail cannot be made', async () => {
            const service = createService();
            vi.mocked(fetch).mockRejectedValue(
                new TypeError('Failed to fetch'),
            );

            await addLinkMedia(service, 'https://example.com/dashboard');

            expect(uploads.uploadFileToCompletion).not.toHaveBeenCalled();
            expect(del).toHaveBeenCalledWith(
                expect.stringMatching(
                    new RegExp(`/uploads/screenshot-${screenshot_count}$`),
                ),
            );
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.not.objectContaining({
                    thumbnail_id: expect.anything(),
                }),
                {},
            );
        });

        it('uses a supplied thumbnail instead of a screenshot', async () => {
            const service = createService();

            await addLinkMedia(
                service,
                'https://example.com/dashboard',
                'data:image/jpeg;base64,cGlja2Vk',
            );

            expect(post).not.toHaveBeenCalled();
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.objectContaining({ thumbnail_id: 'thumbnail-upload-1' }),
                {},
            );
        });

        it('does not ask for a screenshot of a page that is not https', async () => {
            const service = createService();

            await addLinkMedia(service, 'http://example.com/dashboard');

            expect(post).not.toHaveBeenCalled();
            expect(addSignageMedia).toHaveBeenCalledWith(
                expect.not.objectContaining({
                    thumbnail_id: expect.anything(),
                }),
                {},
            );
        });

        it('still saves the media when the screenshot fails', async () => {
            const service = createService();
            screenshot_post.mockRejectedValue({ status: 504 });

            const result = await addLinkMedia(
                service,
                'https://example.com/slow',
            );

            expect(result.id).toBe('media-1');
            expect(uploads.uploadFileToCompletion).not.toHaveBeenCalled();
            expect(del).not.toHaveBeenCalled();
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
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
        TestBed.flushEffects();
        test_service['_media_list'].update(() => [media]);

        await service.editMedia(media);

        expect(media.name).toBe('New name');
        expect(service.media()[0].name).toBe('New name');
    });

    it('passes the selected group to the media preview', async () => {
        const service = createService();
        selectApiGroup('group-1');
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
        selectApiGroup('group-1');
        stubRemoveMediaFromPlaylists();

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
        selectApiGroup('group-1');
        stubRemoveMediaFromPlaylists();

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

    it('lists the playlists that use media in the delete confirmation', async () => {
        confirmNextDialog();
        vi.mocked(showSignageMedia).mockResolvedValue(
            new SignageMedia({
                id: 'media-1',
                playlists: [
                    new SignagePlaylist({ id: 'pl-1', name: 'Lobby' }),
                    new SignagePlaylist({ id: 'pl-2', name: 'Cafe' }),
                ],
            }),
        );
        const service = createService();
        const remove_from_playlists = stubRemoveMediaFromPlaylists();

        await service.removeMedia(
            new SignageMedia({ id: 'media-1', name: 'Poster' }),
        );

        const content = dialog.open.mock.calls.at(-1)[1].data.content;
        expect(content).toContain('Lobby, Cafe');
        expect(remove_from_playlists).toHaveBeenCalledWith(
            ['media-1'],
            ['pl-1', 'pl-2'],
        );
    });

    it('deletes the media before it edits the playlists', async () => {
        confirmNextDialog();
        const service = createService();
        const steps: string[] = [];
        vi.mocked(removeSignageMedia).mockImplementation(async () => {
            steps.push('delete');
            return {};
        });
        stubRemoveMediaFromPlaylists(async () => {
            steps.push('playlists');
        });

        await service.removeMedia(
            new SignageMedia({ id: 'media-1', name: 'Poster' }),
        );

        expect(steps).toEqual(['delete', 'playlists']);
    });

    // The search index can still return deleted media, so no refetch
    it('removes deleted media from the list and its total in place', async () => {
        confirmNextDialog();
        const service = createService();
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
        stubRemoveMediaFromPlaylists();
        TestBed.flushEffects();
        test_service['_media_list'].update(() => [
            new SignageMedia({ id: 'media-1' }),
            new SignageMedia({ id: 'media-2' }),
        ]);
        test_service['_media_list'].adjustTotal(10);
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );

        await service.removeMediaItems(service.media());
        TestBed.flushEffects();

        expect(service.media()).toEqual([]);
        expect(service.media_total()).toBe(8);
        expect(changed).not.toHaveBeenCalled();
    });

    it('closes the confirmation with an error when the delete fails', async () => {
        confirmNextDialog();
        vi.mocked(removeSignageMedia).mockRejectedValue({ status: 500 });
        const service = createService();
        const remove_from_playlists = stubRemoveMediaFromPlaylists();
        const changed = vi.spyOn(
            TestBed.inject(SignageContextService),
            'changed',
        );

        await service.removeMedia(
            new SignageMedia({ id: 'media-1', name: 'Poster' }),
        );

        const confirm_ref = dialog.open.mock.results.at(-1).value;
        expect(confirm_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            'Removing media...',
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Error removing media',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(remove_from_playlists).not.toHaveBeenCalled();
        expect(changed).not.toHaveBeenCalled();
    });

    it('keeps the tags that saved and reports the items that failed', async () => {
        closeNextDialogWith(['lobby']);
        vi.mocked(updateSignageMedia).mockImplementation(async (id) => {
            if (id === 'media-2') throw { status: 500 };
            return new SignageMedia({ id });
        });
        const service = createService();
        const test_service =
            service as unknown as SignageMediaServiceTestAccess;
        TestBed.flushEffects();
        test_service['_media_list'].update(() => [
            new SignageMedia({ id: 'media-1', tags: [] }),
            new SignageMedia({ id: 'media-2', tags: [] }),
        ]);
        const tagsOf = (id: string) =>
            service.media().find((item) => item.id === id)?.tags;

        const saved = await service.addMediaTags(service.media());

        expect(saved).toBe(false);
        expect(tagsOf('media-1')).toEqual(['lobby']);
        expect(tagsOf('media-2')).toEqual([]);
        expect(notify_open).toHaveBeenCalledWith(
            'Could not add tags to 1 media item.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    describe('bulk upload', () => {
        const pickedFiles = () => [
            new File(['one'], 'one.png', { type: 'image/png' }),
            new File(['two'], 'two.png', { type: 'image/png' }),
        ];

        function createBulkService() {
            const service = createService();
            const test_service =
                service as unknown as SignageMediaServiceTestAccess;
            test_service['_getMediaMetadata'] = vi.fn().mockResolvedValue({
                is_landscape: true,
                duration: 0,
                width: 1920,
                height: 1080,
            });
            return service;
        }

        beforeEach(() => {
            let created = 0;
            vi.mocked(addSignageMedia).mockImplementation(async (data) => {
                created += 1;
                return new SignageMedia({
                    ...data,
                    id: `media-new-${created}`,
                    created_at: 200 + created,
                });
            });
        });

        // The search index lags new records, so a refetch would drop them
        it('keeps the uploaded items in the list after the modal closes', async () => {
            dialog.open.mockImplementation((_component, config) => ({
                afterClosed: () => ({
                    subscribe: (handler: (value?: unknown) => void) => {
                        const data: BulkMediaUploadModalData = config.data;
                        (async () => {
                            for (const item of data.items) {
                                await data.onUpload(item, 'none', () => {});
                            }
                            handler(data.items.length);
                        })();
                        return { unsubscribe: vi.fn() };
                    },
                }),
            }));
            const service = createBulkService();
            const test_service =
                service as unknown as SignageMediaServiceTestAccess;
            TestBed.flushEffects();
            test_service['_media_list'].update(() => [
                new SignageMedia({ id: 'media-old', created_at: 100 }),
            ]);
            const changed = vi.spyOn(
                TestBed.inject(SignageContextService),
                'changed',
            );

            await service.bulkUploadMedia(pickedFiles());
            TestBed.flushEffects();

            expect(changed).not.toHaveBeenCalled();
            expect(service.media().map((item) => item.id)).toEqual([
                'media-new-2',
                'media-new-1',
                'media-old',
            ]);
        });

        it('retries only the record create when that step failed', async () => {
            uploads.uploadFileToCompletion.mockResolvedValue('upload-1');
            vi.mocked(addSignageMedia).mockRejectedValueOnce({ status: 422 });
            let data: BulkMediaUploadModalData | undefined;
            dialog.open.mockImplementation((_component, config) => {
                data = config.data;
                return { afterClosed: () => NEVER };
            });
            const service = createBulkService();

            void service.bulkUploadMedia(pickedFiles());
            await vi.waitFor(() => expect(data).toBeDefined());
            const [item] = data.items;
            await expect(
                data.onUpload(item, 'none', () => {}),
            ).rejects.toMatchObject({ status: 422 });
            await data.onUpload(item, 'none', () => {});

            expect(uploads.uploadFileToCompletion).toHaveBeenCalledOnce();
            expect(addSignageMedia).toHaveBeenCalledTimes(2);
            expect(addSignageMedia).toHaveBeenLastCalledWith(
                expect.objectContaining({ media_id: 'upload-1' }),
                {},
            );
        });
    });

    it.each([
        ['generation', {}, ['ai-editing']],
        ['editing', { source_upload_id: 'upload-1' }, ['ai-generation']],
    ])(
        'does not open the AI modal when AI %s is off',
        async (_name, options, features) => {
            const service = createService();
            const context = TestBed.inject(SignageContextService);
            vi.spyOn(context, 'requirePermission').mockImplementation(
                (allowed: boolean) => allowed,
            );
            Object.defineProperty(context, 'can_create', {
                value: () => true,
            });
            Object.defineProperty(context, 'features', {
                value: () => features,
            });

            await service.generateMediaWithAI(options);

            expect(dialog.open).not.toHaveBeenCalled();
        },
    );
});
