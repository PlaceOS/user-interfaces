import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { randomInt } from '@placeos/common';
import { Attachment } from '@placeos/users';
import { takeWhile } from 'rxjs/operators';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { uploadFiles } from '@placeos/cloud-uploads';
import * as blobUtil from 'blob-util';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'upload-list',
    template: `
        <div class="flex items-center space-x-2">
            <div
                class="relative flex h-48 w-52 cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-base-200 hover:bg-neutral"
            >
                <icon class="mb-2 text-3xl">upload_file</icon>
                <p class="text-center">Drop files</p>
                <p class="my-1 text-center text-xs">or</p>
                <button btn matRipple class="w-28">Browse</button>
                <input
                    multiple="true"
                    type="file"
                    class="absolute inset-0 max-w-full opacity-0"
                    (change)="onFileEvent($event)"
                />
            </div>
            <div class="flex h-48 w-1/2 flex-1 flex-col items-center">
                @if (list?.length) {
                    <div list class="h-full w-full space-y-2 overflow-auto">
                        @for (item of list; track item) {
                            <div
                                item
                                class="flex w-full items-center rounded border border-base-200 bg-base-100 hover:bg-base-200"
                                [class.!bg-error]="item.progress < 1"
                                [class.!bg-opacity-20]="item.progress < 1"
                            >
                                <div
                                    class="w-px flex-1 truncate px-2 font-mono text-sm"
                                >
                                    {{ item.name }}
                                </div>
                                @if (
                                    item.progress >= 0 && item.progress < 100
                                ) {
                                    <div class="relative mx-1">
                                        <mat-progress-spinner
                                            [diameter]="32"
                                            mode="determinate"
                                            [value]="item.progress"
                                        ></mat-progress-spinner>
                                        <div
                                            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
                                        >
                                            {{ item.progress }}
                                        </div>
                                    </div>
                                }
                                @if (item.progress >= 100) {
                                    <a
                                        [href]="item.url"
                                        icon
                                        matRipple
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <icon>link</icon>
                                    </a>
                                }
                                <button icon (click)="removeFile(item)">
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center"
                    >
                        <p class="opacity-30">No uploaded files</p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadListFieldComponent),
            multi: true,
        },
    ],
    imports: [MatProgressSpinnerModule, IconComponent, MatRippleModule],
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
