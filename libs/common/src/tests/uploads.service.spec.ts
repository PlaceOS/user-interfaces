jest.mock('@placeos/ts-client', () => ({
    token: jest.fn(),
    authorise: jest.fn(),
}));
jest.mock('@placeos/cloud-uploads', () => ({
    initUploads: jest.fn(),
    uploadFile: jest.fn(),
    humanReadableByteCount: jest.fn(() => '1 KB'),
}));

import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import { initUploads, uploadFile } from '@placeos/cloud-uploads';
import { authorise, token } from '@placeos/ts-client';
import { UploadsService } from '../lib/uploads.service';

describe('UploadsService', () => {
    let spectator: SpectatorService<UploadsService>;
    const createService = createServiceFactory({
        service: UploadsService,
        mocks: [MatDialog],
    });

    let state: BehaviorSubject<any>;
    let mock_upload: any;

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createService();
        state = new BehaviorSubject({ status: 'UPLOADING', progress: 0 });
        mock_upload = { id: 'up-1', state, resume: jest.fn() };
        (uploadFile as jest.Mock).mockResolvedValue(mock_upload);
        (token as jest.Mock).mockReturnValue('valid-token');
        (authorise as jest.Mock).mockResolvedValue('new-token');
    });

    const flush = () => new Promise((resolve) => setTimeout(resolve));

    it('should upload files', async () => {
        const promise = spectator.service.uploadFile(new File([], 'test.png'));
        await flush();
        state.next({ status: 'COMPLETED', progress: 100 });
        expect(await promise).toBe('up-1');
        expect(initUploads).toHaveBeenCalled();
    });

    it('should refresh the token and retry a failed upload', async () => {
        (token as jest.Mock).mockImplementation((return_expired) =>
            return_expired === false ? '' : 'expired-token',
        );
        const promise = spectator.service.uploadFile(new File([], 'test.png'));
        await flush();
        state.next({ status: 'FAILED', progress: 10 });
        await flush();
        expect(authorise).toHaveBeenCalled();
        expect(initUploads).toHaveBeenCalledTimes(2);
        expect(mock_upload.resume).toHaveBeenCalled();
        state.next({ status: 'COMPLETED', progress: 100 });
        expect(await promise).toBe('up-1');
    });

    it('should only retry a failed upload once', async () => {
        const promise = spectator.service.uploadFileToCompletion(
            new File([], 'test.png'),
        );
        promise.catch(() => null);
        await flush();
        state.next({ status: 'FAILED', progress: 10 });
        await flush();
        expect(mock_upload.resume).toHaveBeenCalledTimes(1);
        state.next({ status: 'FAILED', progress: 10 });
        await flush();
        await expect(promise).rejects.toMatchObject({ error: 'Error' });
        expect(mock_upload.resume).toHaveBeenCalledTimes(1);
    });
});
