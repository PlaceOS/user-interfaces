import { Clipboard } from '@angular/cdk/clipboard';
import {
    Component,
    ElementRef,
    inject,
    Injector,
    signal,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    notifyError,
    notifyInfo,
    provideValueAccessor,
    UploadsService,
} from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { watchUpload } from './watch-upload';

@Component({
    selector: 'image-field',
    template: `
        <!--
            The file input on top is the control. It is not inside a button,
            so the clear and copy buttons are not nested in another button
        -->
        <div
            matRipple
            class="bg-base-200 relative h-48 w-full rounded-xl has-[>input:focus-visible]:ring-2"
        >
            <input
                #file_input
                type="file"
                accept="image/*"
                class="absolute inset-0 z-10 cursor-pointer opacity-0"
                [attr.aria-label]="'COMMON.UPLOAD_IMAGE' | translate"
                [disabled]="disabled() || uploading()"
                (change)="uploadImage($event)"
            />
            @if (uploading()) {
                <div
                    class="bg-base-100/60 absolute inset-0 z-30 flex items-center justify-center rounded-xl"
                >
                    <mat-progress-spinner
                        mode="determinate"
                        [diameter]="48"
                        [value]="progress()"
                    ></mat-progress-spinner>
                </div>
            }
            @if (this.url()) {
                <img
                    auth
                    [source]="this.url()"
                    alt="Image"
                    class="h-full w-full object-contain"
                />
                <button
                    icon
                    type="button"
                    matRipple
                    matTooltip="Clear Image"
                    aria-label="Clear Image"
                    matTooltipPosition="left"
                    class="border-base-300 bg-base-100 absolute top-2 right-2 z-20 rounded-full border"
                    [disabled]="disabled()"
                    (click)="clearImage($event)"
                >
                    <icon>close</icon>
                </button>
                <div
                    class="border-base-300 bg-base-100 absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border"
                >
                    <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        aria-label="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button>
                </div>
            } @else {
                <div
                    class="border-base-300 flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed"
                >
                    <h3 class="mb-2 text-lg font-medium">
                        {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                    </h3>
                    <p class="mb-4 opacity-60">
                        {{ 'COMMON.UPLOAD_IMAGE_INFO' | translate }}
                    </p>
                    <!-- Looks like a button. Clicks reach the file input above it -->
                    <button
                        btn
                        type="button"
                        tabindex="-1"
                        aria-hidden="true"
                        class="inverse bg-base-100"
                    >
                        <icon class="mr-2 text-2xl">chevron_right</icon>
                        <div class="pr-2">
                            {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                        </div>
                    </button>
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [provideValueAccessor(() => ImageFieldComponent)],
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
    ],
})
export class ImageFieldComponent implements ControlValueAccessor {
    private _uploads = inject(UploadsService);
    private _clipboard = inject(Clipboard);
    private _injector = inject(Injector);

    public readonly url = signal('');
    public readonly progress = signal(0);
    /** Whether an upload is running */
    public readonly uploading = signal(false);
    public readonly disabled = signal(false);

    public readonly registerOnChange = (fn: (_: string) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    private readonly _file_input =
        viewChild<ElementRef<HTMLInputElement>>('file_input');

    public readonly copyLink = () => {
        this._clipboard.copy(this.url());
        notifyInfo('Link copied to clipboard');
    };

    public clearImage(event?: Event) {
        event?.preventDefault();
        event?.stopPropagation();
        this.setValue('');
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public async setValue(new_url: string) {
        this.url.set(new_url);
        if (this._onChange) this._onChange(this.url());
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.url.set(value);
    }

    private _onChange: (_: string) => void;
    private _onTouch: (_: string) => void;

    public uploadImage(event: Event) {
        const element = event.target as HTMLInputElement;
        const file = element?.files?.[0];
        if (!file) return;
        this.progress.set(0);
        this.uploading.set(true);
        watchUpload(this._uploads, file, this._injector, (details) => {
            if (details.error) {
                this.progress.set(0);
                this.uploading.set(false);
                notifyError(`Failed to upload ${file.name}: ${details.error}`);
                return;
            }
            this.progress.set(details.progress);
            if (details.progress < 100) return;
            this.setValue(
                `/api/engine/v2/uploads/${encodeURIComponent(details.upload_id || details.id)}/url`,
            );
            this.uploading.set(false);
        });
        const input = this._file_input()?.nativeElement;
        if (input) input.value = '';
    }
}
