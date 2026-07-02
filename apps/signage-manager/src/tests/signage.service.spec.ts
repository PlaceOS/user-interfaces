import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    notifyWarn,
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import {
    addSignageMedia,
    listSignagePlaylistMedia,
    scheduleSignagePlaylistMedia,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { PlaylistItemScheduleModalComponent } from '../app/shared/playlist-item-schedule-modal.component';
import { SignageService } from '../app/signage.service';

type SignageServiceTestAccess = SignageService & Record<string, jest.Mock>;

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyWarn: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    addSignageMedia: jest.fn(),
    listSignagePlaylistMedia: jest.fn(),
    scheduleSignagePlaylistMedia: jest.fn(),
}));

describe('SignageService media uploads', () => {
    const uploads = {
        uploadFileWithPermissionsToCompletion: jest.fn(),
        uploadFileToCompletion: jest.fn(),
    };
    const settings = {
        get: jest.fn(),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
        uploads.uploadFileWithPermissionsToCompletion.mockResolvedValue(
            'media-upload-1',
        );
        uploads.uploadFileToCompletion.mockResolvedValue('thumbnail-upload-1');
        settings.get.mockReturnValue(false);
        (addSignageMedia as jest.Mock).mockImplementation((data) =>
            Promise.resolve(new SignageMedia({ id: 'media-1', ...data })),
        );
        (listSignagePlaylistMedia as jest.Mock).mockResolvedValue({
            items: [],
            media: [],
        });
        (scheduleSignagePlaylistMedia as jest.Mock).mockResolvedValue({});
        dialog.open.mockReturnValue({
            afterClosed: () => ({
                subscribe: (handler: (value?: unknown) => void) => {
                    Promise.resolve().then(() => handler(undefined));
                    return { unsubscribe: jest.fn() };
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
        test_service['_requirePermission'] = jest.fn(() => true);
        test_service['_generateThumbnail'] = jest.fn().mockResolvedValue('');
        return service;
    }

    it('requires schedules before adding media to distribution playlists', async () => {
        const service = createService();
        const test_service = service as unknown as SignageServiceTestAccess;
        test_service['_playlist_items'].set([
            new SignagePlaylist({
                id: 'playlist-1',
                distribution: true,
            }),
        ]);

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
        (test_service['_generateThumbnail'] as jest.Mock).mockResolvedValue(
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

        expect(notifyWarn).toHaveBeenCalledWith(
            'Media uploaded, but its thumbnail could not be saved.',
        );
        expect(addSignageMedia).toHaveBeenCalledWith(
            expect.not.objectContaining({ thumbnail_id: expect.anything() }),
        );
    });
});
