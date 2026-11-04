import { effect, Injector, untracked } from '@angular/core';
import { UploadDetails, UploadsService } from '@placeos/common';

/**
 * Upload a file through `UploadsService` and call `on_change` with each
 * update, in place of polling the service. A failed upload has `error` set.
 * Updates stop when the upload completes or fails, or when the injector's
 * owner is destroyed.
 */
export function watchUpload(
    uploads: UploadsService,
    file: File,
    injector: Injector,
    on_change: (details: UploadDetails) => void,
) {
    const upload = uploads.uploadFileWithProgress(file);
    const watcher = effect(
        () => {
            const value = upload() as UploadDetails | Error | null;
            if (!value) return;
            // A failure before the upload starts (such as auth) is an Error
            const details: UploadDetails =
                value instanceof Error
                    ? {
                          id: '',
                          name: file.name,
                          progress: 0,
                          link: '',
                          formatted_size: '',
                          size: file.size,
                          upload: null,
                          error: value.message || 'Upload failed',
                      }
                    : value;
            untracked(() => on_change(details));
            if (details.error || details.progress >= 100) watcher.destroy();
        },
        { injector },
    );
}
