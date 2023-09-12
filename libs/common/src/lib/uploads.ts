import {
    uploadFiles,
    Upload,
    humanReadableByteCount,
} from '@placeos/cloud-uploads';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { randomInt } from './general';

import * as blobUtil from 'blob-util';

export interface UploadDetails {
    /** Unique ID for the upload */
    id: number;
    /** Name of the file uploaded */
    name: string;
    /** Progress of the file upload */
    progress: number;
    /** Link to the uploaded file */
    link: string;
    /** Formatted file size */
    formatted_size: string;
    /** Size of the file being uploaded */
    size: number;
    /** Error with upload request */
    error?: string;
    /** Upload object associated with the file */
    upload: Upload;
}

export type UploadPermissions = 'none' | 'support' | 'admin';

/**
 * Upload the given file to the cloud
 * @param file File to upload
 */
export function uploadFile(
    file: File,
    pub: boolean = true,
    permissions: UploadPermissions = 'none'
): Observable<UploadDetails> {
    return new Observable((observer) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const arrayBuffer = e.target.result;
            const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
            const upload_list = uploadFiles([blob], {
                file_name: file.name,
                permissions,
                public: pub,
            } as any);
            const upload = upload_list[0];
            const upload_details: UploadDetails = {
                id: randomInt(9999_9999_9999),
                name: file.name,
                progress: 0,
                link: '',
                formatted_size: humanReadableByteCount(file.size),
                size: file.size,
                upload,
            };
            upload.status
                .pipe(takeWhile((_) => _.status !== 'complete', true))
                .subscribe((state) => {
                    if (upload.access_url) {
                        upload_details.link = !pub
                            ? `${
                                  location.origin
                              }/api/engine/v2/uploads/${encodeURIComponent(
                                  upload.id
                              )}/url`
                            : upload.access_url;
                    }
                    upload_details.progress = state.progress;
                    observer.next(upload_details);
                    if (state.status === 'error')
                        observer.error({
                            ...upload_details,
                            error: state.error,
                        });
                    if (state.status === 'complete') observer.complete();
                });
            observer.next(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    });
}
