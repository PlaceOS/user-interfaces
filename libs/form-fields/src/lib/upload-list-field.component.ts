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
        <div class="flex items-center space-x-2">
            <div
                class="w-52 h-48 relative border-2 border-dashed border-base-200 flex flex-col items-center justify-center rounded hover:bg-neutral cursor-pointer"
            >
                <app-icon class="text-3xl mb-2">upload_file</app-icon>
                <p class="text-center" i18n>Drop files</p>
                <p class="text-center text-xs my-1" i18n>or</p>
                <button btn matRipple class="w-28" i18n>Browse</button>
                <input
                    multiple="true"
                    type="file"
                    class="absolute inset-0 opacity-0 max-w-full"
                    (change)="onFileEvent($event)"
                />
            </div>
            <div class="w-1/2 h-48 flex-1 flex flex-col items-center">
                <div
                    list
                    class="space-y-2 w-full h-full overflow-auto"
                    *ngIf="list?.length; else empty_state"
                >
                    <div
                        item
                        *ngFor="let item of list"
                        class="w-full flex items-center border border-base-200 rounded bg-base-100 hover:bg-base-200"
                        [class.!bg-error]="item.progress < 1"
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
                            icon
                            matRipple
                            *ngIf="item.progress >= 100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <app-icon>link</app-icon>
                        </a>
                        <button icon (click)="removeFile(item)">
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
                <p class="opacity-30" i18n>No uploaded files</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadListFieldComponent),
            multi: true,
        },
    ],
})
export class UploadListFieldComponent implements ControlValueAccessor {
    public list: Attachment[] = [];
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
        this.list = value.map((_) => ({
            id: `file-${randomInt(999_999_999)}`,
            ..._,
        }));
    }

    public removeFile(item: Attachment) {
        this.list = this.list.filter((_) => _.id !== item.id);
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
