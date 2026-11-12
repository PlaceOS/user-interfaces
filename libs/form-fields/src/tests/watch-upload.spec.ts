import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { Mock } from 'vitest';

import { UploadDetails, UploadsService } from '@placeos/common';
import { watchUpload } from '../lib/watch-upload';

/** Upload state as `UploadsService.uploadFileWithProgress` reports it */
const details = (overrides: Partial<UploadDetails>): UploadDetails => ({
    id: 'upload-1',
    name: 'a.png',
    progress: 0,
    link: '',
    formatted_size: '',
    size: 0,
    upload: null,
    ...overrides,
});

describe('watchUpload', () => {
    const file = new File([new Uint8Array(4)], 'a.png');
    let upload: WritableSignal<UploadDetails | Error | null>;
    let on_change: Mock<(_: UploadDetails) => void>;

    beforeEach(() => {
        upload = signal<UploadDetails | Error | null>(null);
        on_change = vi.fn<(_: UploadDetails) => void>();
        const uploads = {
            uploadFileWithProgress: () => upload,
        } as unknown as UploadsService;
        watchUpload(uploads, file, TestBed.inject(Injector), on_change);
        TestBed.tick();
    });

    it('should report each update and stop once the upload completes', () => {
        expect(on_change).not.toHaveBeenCalled();
        upload.set(details({ progress: 50 }));
        TestBed.tick();
        upload.set(details({ progress: 100, link: 'https://x/a.png' }));
        TestBed.tick();
        upload.set(details({ progress: 100, link: 'https://x/b.png' }));
        TestBed.tick();

        expect(on_change.mock.calls.map(([_]) => _.progress)).toEqual([
            50, 100,
        ]);
    });

    it('should report a failure before the upload starts as an error and stop', () => {
        upload.set(new Error(''));
        TestBed.tick();
        upload.set(details({ progress: 50 }));
        TestBed.tick();

        expect(on_change).toHaveBeenCalledTimes(1);
        expect(on_change).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'a.png',
                size: 4,
                error: 'Upload failed',
            }),
        );
    });
});
