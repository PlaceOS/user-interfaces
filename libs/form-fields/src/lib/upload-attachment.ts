import { uploadFiles } from '@placeos/cloud-uploads';
import { Attachment, randomInt } from '@placeos/common';
import { takeWhile } from 'rxjs/operators';

/**
 * Upload a file for an attachment field. `on_change` receives the attachment
 * details at the start and on each progress update. A failed upload has a
 * progress of -1.
 */
export function uploadAttachment(
    file: File,
    on_change: (item: Attachment) => void,
) {
    const upload = uploadFiles([file], { file_name: file.name })[0];
    const upload_details: Attachment = {
        id: `${randomInt(9999_9999_9999)}`,
        name: file.name,
        progress: 0,
        size: file.size,
        created_at: Date.now(),
        url: '',
    };
    upload.status
        .pipe(takeWhile((_) => _.status !== 'complete', true))
        .subscribe((state) => {
            if (upload.access_url) upload_details.url = upload.access_url;
            upload_details.progress = state.progress;
            if (state.status === 'error') upload_details.progress = -1;
            on_change(upload_details);
        });
    on_change(upload_details);
}
