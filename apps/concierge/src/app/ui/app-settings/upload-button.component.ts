import {
    ChangeDetectionStrategy,
    Component,
    effect,
    forwardRef,
    inject,
    Injector,
    input,
    signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { notifyError, UploadsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'upload-button',
    template: `
        <button
            icon
            matRipple
            [disabled]="uploading()"
            class="bg-secondary text-secondary-content h-12 w-12 overflow-hidden rounded-sm"
            [title]="value()"
        >
            @if (!uploading()) {
                <icon>cloud_upload</icon>
            }
            <input
                type="file"
                class="absolute inset-0 cursor-pointer opacity-0"
                (change)="uploadImage($event)"
            />
            @if (uploading()) {
                <mat-spinner
                    [mode]="!progress() ? 'indeterminate' : 'determinate'"
                    diameter="32"
                    [value]="progress()"
                ></mat-spinner>
            }
        </button>
    `,
    imports: [MatProgressSpinnerModule, IconComponent, MatRippleModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadButtonComponent),
            multi: true,
        },
    ],
})
export class UploadButtonComponent {
    private _uploads = inject(UploadsService);
    private _injector = inject(Injector);

    public readonly types = input<string[]>(['image']);
    public uploading = signal(false);
    public progress = signal(0);
    public value = signal('');

    /** Form control on change handler */
    private _onChange: (_: string) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        if (this.value() === new_value) return;
        this.value.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.value.set(value);
    }

    public uploadImage(event: Event) {
        if (this.uploading()) {
            return notifyError('Already uploading a file...');
        }
        const element: HTMLInputElement = event.target as any;
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        const types = this.types();
        if (!types.some((t) => file.type.includes(t))) {
            return notifyError(`File is not an ${types.join(', ')}`);
        }
        this.progress.set(0);
        this.uploading.set(true);
        const upload = this._uploads.uploadFileWithProgress(file);
        const effect_ref = effect(
            () => {
                this._setUploadState(upload(), () => effect_ref.destroy());
            },
            { injector: this._injector },
        );
    }

    private _setUploadState(state, cleanup: () => void) {
        if (!state) return;
        this.progress.set(state.progress);
        if (state.error) {
            notifyError('Failed to upload image. Try again later');
            this.uploading.set(false);
            cleanup();
            return;
        }
        if (state.progress < 100) return;
        const upload_id = state.upload_id || state.upload?.id || state.id;
        if (!upload_id) {
            notifyError('Failed to get uploaded file ID');
            this.uploading.set(false);
            cleanup();
            return;
        }
        this.setValue(
            `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`,
        );
        this.uploading.set(false);
        cleanup();
    }
}
