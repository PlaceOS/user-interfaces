import { Subject } from 'rxjs';

import { Attachment } from '@placeos/common';
import { uploadAttachment } from '../lib/upload-attachment';

// Only the external cloud-uploads layer is stubbed; the attachment progress
// mapping runs for real.
vi.mock('@placeos/cloud-uploads', { spy: true });

import * as cloud_uploads from '@placeos/cloud-uploads';

describe('uploadAttachment', () => {
    let status: Subject<{ status: string; progress: number }>;
    let upload: { status: Subject<unknown>; access_url: string };
    const file = new File([new Uint8Array(42)], 'report.pdf');

    beforeEach(() => {
        status = new Subject();
        upload = { status, access_url: '' };
        vi.mocked(cloud_uploads.uploadFiles).mockReturnValue([upload] as any);
    });

    it('should report progress, then the url on completion, and stop after it', () => {
        const changes: Attachment[] = [];
        uploadAttachment(file, (item) => changes.push(item));

        expect(cloud_uploads.uploadFiles).toHaveBeenCalledWith([file], {
            file_name: 'report.pdf',
        });
        expect(changes[0]).toMatchObject({
            name: 'report.pdf',
            size: 42,
            progress: 0,
            url: '',
        });

        status.next({ status: 'uploading', progress: 50 });
        upload.access_url = 'https://cdn/report.pdf';
        status.next({ status: 'complete', progress: 100 });
        status.next({ status: 'complete', progress: 100 });

        expect(changes.map((_) => _.progress)).toEqual([0, 50, 100]);
        expect(changes[2].url).toBe('https://cdn/report.pdf');
        // A new object on each change, with the same id
        expect(new Set(changes).size).toBe(3);
        expect(new Set(changes.map((_) => _.id)).size).toBe(1);
    });

    it('should set the progress to -1 when the upload fails', () => {
        const changes: Attachment[] = [];
        uploadAttachment(file, (item) => changes.push(item));

        status.next({ status: 'error', progress: 30 });

        expect(changes.at(-1).progress).toBe(-1);
    });
});
