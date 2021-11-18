import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { randomInt } from '@placeos/common';
import { Attachment } from '@placeos/users';
import { takeWhile } from 'rxjs/operators';

import * as blobUtil from 'blob-util';
import { uploadFiles } from '@placeos/cloud-uploads';

@Component({
    selector: 'upload-list',
    template: `
        <div
            class="flex items-center mb-4 border border-gray-200 rounded bg-gray-50"
        >
            <div class="w-48 h-48 relative">
                <div
                    class="absolute inset-2 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center rounded"
                >
                    <app-icon class="text-2xl">upload</app-icon>
                    <p class="text-center">Upload files</p>
                </div>
                <input
                    multiple="true"
                    type="file"
                    class="absolute inset-0 opacity-0 max-w-full"
                    (change)="onFileEvent($event)"
                />
            </div>
            <div class="w-1/2 h-48 flex-1 flex flex-col items-center mr-2 py-2">
                <div
                    list
                    class="space-y-2 w-full h-full overflow-auto"
                    *ngIf="list?.length; else empty_state"
                >
                    <div
                        item
                        *ngFor="let item of list"
                        class="w-full flex items-center border border-gray-200 rounded bg-white hover:bg-gray-100"
                        [class.!bg-red-600]="item.progress < 1"
                        [class.!bg-opacity-20]="item.progress < 1"
                    >
                        <div
                            class="flex-1 w-px font-mono truncate px-2 text-sm"
                        >
                            {{ item.name }}
                        </div>
                        <ng-container
                            *ngIf="item.progress >= 0 && item.progress < 100"
                        >
                            <div class="relative mx-1">
                                <mat-progress-spinner
                                    [diameter]="32"
                                    mode="determinate"
                                    [value]="item.progress"
                                ></mat-progress-spinner>

                                <div
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
                                >
                                    {{ item.progress }}
                                </div>
                            </div>
                        </ng-container>
                        <a
                            [href]="item.url"
                            mat-icon-button
                            *ngIf="item.progress >= 100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <app-icon>link</app-icon>
                        </a>
                        <button mat-icon-button>
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="h-full w-full flex flex-col justify-center items-center"
            >
                <p class="opacity-30">No uploaded files</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadListComponent),
            multi: true,
        },
    ],
})
export class UploadListComponent implements ControlValueAccessor {
    public list: Attachment[] = [
        { name: 'test-file-1.jpg', progress: 80, url: '1' },
        { name: 'test-file-2.jpg', progress: -1, url: '1' },
        { name: 'test-file-3.jpg', progress: 100, url: '1' },
        { name: 'test-file-4.jpg', progress: 80, url: '1' },
        { name: 'test-file-5.jpg', progress: 80, url: '1' },
    ];
    /** Form control on change handler */
    private _onChange: (_: Attachment[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: Attachment[]) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Attachment[]): void {
        this.list = new_value.filter((_) => _.url && _.progress >= 100);
        if (this._onChange) this._onChange(this.list);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Attachment[]) {
        // this.list = value;
    }

    public onFileEvent(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const on_change = (item) => {
            this.list = [
                ...(this.list || []).filter((_) => _.id !== item.id),
            ].sort((a, b) => a.created_at - b.created_at);
            this.setValue(this.list);
        };
        for (let i = 0; i < files.length; i++) {
            this._uploadFile(files[i], on_change);
        }
    }

    private _uploadFile(file: File, on_change: (item: Attachment) => void) {
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const arrayBuffer = e.target.result;
            const blob = blobUtil.arrayBufferToBlob(arrayBuffer, file.type);
            const upload_list = uploadFiles([blob], { file_name: file.name });
            const upload = upload_list[0];
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
                    if (upload.access_url)
                        upload_details.url = upload.access_url;
                    upload_details.progress = state.progress;
                    if (state.status === 'error') upload_details.progress = -1;
                    on_change(upload_details);
                });
            on_change(upload_details);
        });
        fileReader.readAsArrayBuffer(file);
    }
}
