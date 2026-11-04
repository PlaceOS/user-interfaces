import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Attachment, provideValueAccessor, randomInt } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { checkFile } from './file-checks';
import { uploadAttachment } from './upload-attachment';

@Component({
    selector: 'upload-list',
    template: `
        <div class="flex items-center space-x-2">
            <div
                class="border-base-200 hover:bg-neutral relative flex h-48 w-52 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed"
                [class.border-primary]="dragging()"
                [class.bg-neutral]="dragging()"
            >
                <icon class="mb-2 text-3xl">upload_file</icon>
                <p class="text-center">
                    {{ 'FORM.UPLOAD_DROP_FILES' | translate }}
                </p>
                <p class="my-1 text-center text-xs">
                    {{ 'FORM.UPLOAD_OR' | translate }}
                </p>
                <button btn matRipple type="button" class="w-28">
                    {{ 'FORM.UPLOAD_BROWSE' | translate }}
                </button>
                <input
                    multiple="true"
                    type="file"
                    class="absolute inset-0 max-w-full opacity-0"
                    [attr.accept]="accept() || null"
                    [disabled]="disabled()"
                    (change)="onFileEvent($event)"
                    (dragenter)="dragging.set(true)"
                    (dragleave)="dragging.set(false)"
                    (drop)="dragging.set(false)"
                />
            </div>
            <div class="flex h-48 w-1/2 flex-1 flex-col items-center">
                @if (list().length) {
                    <div list class="h-full w-full space-y-2 overflow-auto">
                        @for (item of list(); track item) {
                            <div
                                item
                                class="border-base-200 bg-base-100 hover:bg-base-200 flex w-full items-center rounded-sm border"
                                [class]="
                                    item.progress < 0 ? 'bg-error/20!' : ''
                                "
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
                                    type="button"
                                    [disabled]="disabled()"
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
                        <p empty class="opacity-30">
                            {{ 'FORM.UPLOAD_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    providers: [provideValueAccessor(() => UploadListFieldComponent)],
    imports: [
        MatProgressSpinnerModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class UploadListFieldComponent implements ControlValueAccessor {
    /** Files shown in the field, including uploads in progress and failed uploads */
    public readonly list = signal<Attachment[]>([]);
    public readonly disabled = signal(false);
    /** Allowed file types, in the format of the input `accept` attribute */
    public readonly accept = input('');
    /** Largest file size in bytes. 0 means no limit */
    public readonly max_size = input(0);
    /** Whether files are being dragged over the drop area */
    public readonly dragging = signal(false);
    /** IDs of files the user removed. Later progress updates for them are ignored */
    private _removed_ids = new Set<string>();
    /** Form control on change handler */
    private _onChange: (_: Attachment[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: Attachment[]) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    /**
     * Update the files shown in the field. The form value only gets the
     * files that completed and have a URL.
     * @param new_value New list of files for the field
     */
    public setValue(new_value: Attachment[]): void {
        const list = new_value || [];
        this.list.set(list);
        if (this._onChange) {
            this._onChange(list.filter((_) => _.url && _.progress >= 100));
        }
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
        this._removed_ids.add(item.id);
        this.setValue(this.list().filter((_) => _.id !== item.id));
    }

    public onFileEvent(event) {
        const element: HTMLInputElement = event.target;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const files = Array.from(element.files);
        // Clear the input so picking the same files again still sends a change
        element.value = '';
        const limits = { accept: this.accept(), max_size: this.max_size() };
        for (const file of files) {
            if (!checkFile(file, limits)) continue;
            uploadAttachment(file, (item) => this.updateUpload(item));
        }
    }

    /** Add or update a file from an upload progress report */
    public updateUpload(item: Attachment) {
        if (this._removed_ids.has(item.id)) return;
        const list = [
            ...this.list().filter((_) => _.id !== item.id),
            item,
        ].sort((a, b) => a.created_at - b.created_at);
        this.setValue(list);
    }
}
