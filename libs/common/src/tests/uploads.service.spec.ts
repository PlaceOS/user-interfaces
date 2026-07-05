import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { BehaviorSubject } from 'rxjs';

import * as cloud_uploads from '@placeos/cloud-uploads';
import * as ts_client from '@placeos/ts-client';

import { UploadsService } from '../lib/uploads.service';

// Only the external cloud-uploads and ts-client API layers are stubbed; the
// service's own upload orchestration runs for real.
vi.mock('@placeos/cloud-uploads', { spy: true });
vi.mock('@placeos/ts-client', { spy: true });

describe('UploadsService', () => {
    let spectator: SpectatorService<UploadsService>;
    const createService = createServiceFactory({
        service: UploadsService,
        mocks: [MatDialog],
    });

    let state: BehaviorSubject<any>;
    let mock_upload: any;

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createService();
        state = new BehaviorSubject({ status: 'UPLOADING', progress: 0 });
        mock_upload = { id: 'up-1', state, resume: vi.fn() };
        vi.mocked(cloud_uploads.initUploads).mockReturnValue(undefined as any);
        vi.mocked(cloud_uploads.humanReadableByteCount).mockReturnValue('1 KB');
        vi.mocked(cloud_uploads.uploadFile).mockResolvedValue(mock_upload);
        vi.mocked(ts_client.token).mockReturnValue('valid-token');
        vi.mocked(ts_client.authorise).mockResolvedValue('new-token' as any);
    });

    const flush = () => new Promise((resolve) => setTimeout(resolve));

    it('should upload files', async () => {
        const promise = spectator.service.uploadFile(new File([], 'test.png'));
        await flush();
        state.next({ status: 'COMPLETED', progress: 100 });
        expect(await promise).toBe('up-1');
        expect(cloud_uploads.initUploads).toHaveBeenCalled();
    });

    it('should refresh the token and retry a failed upload', async () => {
        vi.mocked(ts_client.token).mockImplementation((return_expired) =>
            return_expired === false ? '' : 'expired-token',
        );
        const promise = spectator.service.uploadFile(new File([], 'test.png'));
        await flush();
        state.next({ status: 'FAILED', progress: 10 });
        await flush();
        expect(ts_client.authorise).toHaveBeenCalled();
        expect(cloud_uploads.initUploads).toHaveBeenCalledTimes(2);
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
