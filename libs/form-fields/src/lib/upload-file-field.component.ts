import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { randomInt } from '@placeos/common';
import { Attachment } from '@placeos/users';
import { takeWhile } from 'rxjs/operators';

import * as blobUtil from 'blob-util';
import { uploadFiles } from '@placeos/cloud-uploads';

@Component({
    selector: 'upload-file',
    template: `
        <div
            class="bg-base-200 hover:bg-base-200 cursor-pointer p-2 rounded border border-base-200 w-full relative"
        >
            <input
                type="file"
                class="absolute inset-0 opacity-0 max-w-full z-10"
                (change)="onFileEvent($event)"
            />
            <div
                item
                *ngIf="item; else empty_state"
                class="w-full flex items-center border border-base-200 rounded bg-base-100 hover:bg-base-200 relative z-50"
                [class.!bg-error]="item.progress < 1"
                [class.!bg-opacity-20]="item.progress < 1"
            >
                <div class="flex-1 w-px font-mono truncate px-2 text-sm">
                    {{ item.name }}
                </div>
                <ng-container *ngIf="item.progress >= 0 && item.progress < 100">
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
                    icon
                    matRipple
                    *ngIf="item.progress >= 100"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <app-icon>link</app-icon>
                </a>
                <button icon (click)="writeValue(null)">
                    <app-icon>close</app-icon>
                </button>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="h-full w-full flex flex-col justify-center items-center z-0"
            >
                <p class="opacity-30" i18n>Drop file or click to upload file</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadFileFieldComponent),
            multi: true,
        },
    ],
})
export class UploadFileFieldComponent implements ControlValueAccessor {
    public item: Attachment;
    /** Form control on change handler */
    private _onChange: (_: Attachment) => void;
    /** Form control on touch handler */
    private _onTouch: (_: Attachment) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Attachment): void {
        this.item = new_value;
        if (this._onChange) this._onChange(this.item);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Attachment) {
        this.item = value;
    }

    public onFileEvent(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const on_change = (item) => {
            this.item = item;
            this.setValue(this.item);
        };
        this._uploadFile(files[0], on_change);
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
