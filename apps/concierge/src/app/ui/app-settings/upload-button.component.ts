import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { notifyError, uploadFile } from '@placeos/common';

@Component({
    selector: 'upload-button',
    template: `
        <button
            icon
            matRipple
            [disabled]="uploading"
            class="h-12 w-12 rounded bg-secondary text-secondary-content"
            [title]="value"
        >
            @if (!uploading) {
                <icon>cloud_upload</icon>
            }
            <input
                type="file"
                class="absolute inset-0 opacity-0"
                (change)="uploadImage($event)"
            />
            @if (uploading) {
                <mat-spinner
                    [mode]="!progress ? 'indeterminate' : 'determinate'"
                    diameter="32"
                    [value]="progress"
                ></mat-spinner>
            }
        </button>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploadButtonComponent),
            multi: true,
        },
    ],
    standalone: false,
})
export class UploadButtonComponent {
    public readonly type = input<string>('image');
    public uploading = false;
    public progress = 0;
    public value = '';

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
        if (this.value === new_value) return;
        console.error('Set Value:', this.value, new_value);
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.value = value;
    }

    public uploadImage(event: Event) {
        if (this.uploading) {
            return notifyError('Already uploading a file...');
        }
        const element: HTMLInputElement = event.target as any;
        if (!element?.files?.length) return;
        const files: FileList = element.files;
        const file = files[0];
        console.log(`File: ${file.name}`);
        const type = this.type();
        if (!file.type.includes(type)) {
            return notifyError(`File is not an ${type}`);
        }
        console.log(`Uploading file...`);
        this.progress = 0;
        this.uploading = true;
        let status = null;
        uploadFile(file).subscribe(
            (s) => {
                console.log(`Progress:`, s);
                this.progress = s.progress;
                status = s;
            },
            () => {
                notifyError('Failed to upload image. Try again later');
                this.uploading = false;
            },
            () => {
                const id = (status as any).upload._request.upload_id;
                this.setValue(
                    `/api/engine/v2/uploads/${encodeURIComponent(id)}/url`,
                );
                this.uploading = false;
            },
        );
    }
}
