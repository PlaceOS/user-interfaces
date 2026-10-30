import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Attachment, randomInt } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { uploadAttachment } from './upload-attachment';

@Component({
    selector: 'upload-list',
    template: `
        <div class="flex items-center space-x-2">
            <div
                class="border-base-200 hover:bg-neutral relative flex h-48 w-52 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed"
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
                @if (list().length) {
                    <div list class="h-full w-full space-y-2 overflow-auto">
                        @for (item of list(); track item) {
                            <div
                                item
                                class="border-base-200 bg-base-100 hover:bg-base-200 flex w-full items-center rounded-sm border"
                                [class.bg-error!]="item.progress < 1"
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
                                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
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
                                        [attr.aria-label]="
                                            'COMMON.OPEN_FILE' | translate
                                        "
                                    >
                                        <icon>link</icon>
                                    </a>
                                }
                                <button
                                    icon
                                    (click)="removeFile(item)"
                                    [attr.aria-label]="
                                        'COMMON.REMOVE' | translate
                                    "
                                >
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
    imports: [
        MatProgressSpinnerModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class UploadListFieldComponent implements ControlValueAccessor {
    public readonly list = signal<Attachment[]>([]);
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
        const list = (new_value || []).filter(
            (_) => _.url && _.progress >= 100,
        );
        this.list.set(list);
        if (this._onChange) this._onChange(list);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Attachment[]) {
        this.list.set(
            (value || []).map((_) => ({
                id: `file-${randomInt(999_999_999)}`,
                ..._,
            })),
        );
    }

    public removeFile(item: Attachment) {
        this.setValue(this.list().filter((_) => _.id !== item.id));
    }

    public onFileEvent(event) {
        const element: HTMLInputElement = event.target;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const on_change = (item) => {
            const list = [
                ...this.list().filter((_) => _.id !== item.id),
                item,
            ].sort((a, b) => a.created_at - b.created_at);
            this.list.set(list);
            this.setValue(list);
        };
        for (let i = 0; i < files.length; i++) {
            uploadAttachment(files[i], on_change);
        }
    }
}
