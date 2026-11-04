import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Attachment, provideValueAccessor } from '@placeos/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { checkFile } from './file-checks';
import { uploadAttachment } from './upload-attachment';

@Component({
    selector: 'upload-file',
    template: `
        <div
            class="border-base-200 bg-base-200 hover:bg-base-200 relative w-full cursor-pointer rounded-sm border p-2"
            [class.ring-2]="dragging()"
            [class.ring-primary]="dragging()"
        >
            <input
                type="file"
                class="absolute inset-0 z-10 max-w-full opacity-0"
                [attr.accept]="accept() || null"
                [disabled]="disabled()"
                (change)="onFileEvent($event)"
                (dragenter)="dragging.set(true)"
                (dragleave)="dragging.set(false)"
                (drop)="dragging.set(false)"
            />
            @if (item()) {
                <div
                    item
                    class="border-base-200 bg-base-100 hover:bg-base-200 relative z-50 flex w-full items-center rounded-sm border"
                    [class]="item().progress < 0 ? 'bg-error/20!' : ''"
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
                            [attr.aria-label]="'COMMON.OPEN_FILE' | translate"
                        >
                            <icon>link</icon>
                        </a>
                    }
                    <button
                        icon
                        type="button"
                        [disabled]="disabled()"
                        (click)="setValue(null)"
                        [attr.aria-label]="'COMMON.REMOVE' | translate"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            } @else {
                <div
                    class="z-0 flex h-full w-full flex-col items-center justify-center"
                >
                    <p prompt class="opacity-30">
                        {{ 'FORM.UPLOAD_FILE_PROMPT' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [provideValueAccessor(() => UploadFileFieldComponent)],
    imports: [MatProgressSpinnerModule, IconComponent, TranslatePipe],
})
export class UploadFileFieldComponent implements ControlValueAccessor {
    public readonly item = signal<Attachment | null>(null);
    public readonly disabled = signal(false);
    /** Allowed file types, in the format of the input `accept` attribute */
    public readonly accept = input('');
    /** Largest file size in bytes. 0 means no limit */
    public readonly max_size = input(0);
    /** Whether a file is being dragged over the field */
    public readonly dragging = signal(false);
    /** Form control on change handler */
    private _onChange: (_: Attachment) => void;
    /** Form control on touch handler */
    private _onTouch: (_: Attachment) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

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
        const element: HTMLInputElement = event.target;
        /* istanbul ignore else */
        if (!element?.files?.length) return;
        const file = element.files[0];
        // Clear the input so picking the same file again still sends a change
        element.value = '';
        if (
            !checkFile(file, {
                accept: this.accept(),
                max_size: this.max_size(),
            })
        )
            return;
        uploadAttachment(file, (item) => this.setValue(item));
    }
}
