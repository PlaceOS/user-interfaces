import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    notifyWarn,
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { addSignageMedia, SignageMedia } from '@placeos/ts-client';
import { SignageService } from '../app/signage.service';

type SignageServiceTestAccess = SignageService & Record<string, jest.Mock>;

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyWarn: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    addSignageMedia: jest.fn(),
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
        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: uploads },
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: { open: jest.fn() } },
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
