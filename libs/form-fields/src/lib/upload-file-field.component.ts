import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    Attachment,
    randomInt,
    UPLOAD_PERMISSIONS_MODAL,
} from '@placeos/common';
import { takeWhile } from 'rxjs/operators';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { uploadFiles } from '@placeos/cloud-uploads';
import * as blobUtil from 'blob-util';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UploadPermissionsModalComponent } from 'libs/components/src/lib/upload-permissions-modal.component';

@Component({
    selector: 'upload-file',
    template: `
        <div
            class="border-base-200 bg-base-200 hover:bg-base-200 relative w-full cursor-pointer rounded-sm border p-2"
        >
            <input
                type="file"
                class="absolute inset-0 z-10 max-w-full opacity-0"
                (change)="onFileEvent($event)"
            />
            @if (item()) {
                <div
                    item
                    class="border-base-200 bg-base-100 hover:bg-base-200 relative z-50 flex w-full items-center rounded-sm border"
                    [class.bg-error!]="item().progress < 1"
                    [class.!bg-opacity-20]="item().progress < 1"
                >
                    <div class="w-px flex-1 truncate px-2 font-mono text-sm">
                        {{ item().name }}
                    </div>
                    @if (item().progress >= 0 && item().progress < 100) {
                        <div class="relative mx-1">
                            <mat-progress-spinner
                                [diameter]="32"
                                mode="determinate"
                                [value]="item().progress"
                            ></mat-progress-spinner>
                            <div
                                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
                            >
                                {{ item().progress }}
                            </div>
                        </div>
                    }
                    @if (item().progress >= 100) {
                        <a
                            [href]="item().url"
                            icon
                            matRipple
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icon>link</icon>
                        </a>
                    }
                    <button icon (click)="setValue(null)">
                        <icon>close</icon>
                    </button>
                </div>
            } @else {
                <div
                    class="z-0 flex h-full w-full flex-col items-center justify-center"
                >
                    <p class="opacity-30">Drop file or click to upload file</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadFileFieldComponent),
            multi: true,
        },
        {
            provide: UPLOAD_PERMISSIONS_MODAL,
            useValue: UploadPermissionsModalComponent,
        },
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatProgressSpinnerModule, IconComponent],
})
export class UploadFileFieldComponent implements ControlValueAccessor {
    public readonly item = signal<Attachment | null>(null);
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
        this.item.set(new_value);
        if (this._onChange) this._onChange(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Attachment) {
        this.item.set(value);
    }

    public onFileEvent(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        this._uploadFile(files[0], (item) => this.setValue(item));
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
