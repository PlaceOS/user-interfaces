import { Clipboard } from '@angular/cdk/clipboard';
import {
    Component,
    ElementRef,
    forwardRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    nextValueFrom,
    notifyInfo,
    UploadsService,
} from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

@Component({
    selector: 'image-field',
    template: `
        <button matRipple class="relative h-48 w-full rounded-xl bg-base-200">
            <input
                #file_input
                type="file"
                class="absolute inset-0 z-10 cursor-pointer opacity-0"
                (change)="uploadImage($event)"
            />
            @if (this.url()) {
                <img
                    auth
                    [source]="this.url()"
                    alt="Image"
                    class="h-full w-full object-contain"
                />
                <button
                    icon
                    matRipple
                    matTooltip="Clear Image"
                    matTooltipPosition="left"
                    class="absolute right-2 top-2 z-20 rounded-full border border-base-300 bg-base-100"
                >
                    <icon>close</icon>
                </button>
                <div
                    class="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-base-300 bg-base-100"
                >
                    <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button>
                    <!-- <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Copy Image URL"
                        matTooltipPosition="right"
                        (click)="copyLink()"
                    >
                        <icon>link</icon>
                    </button> -->
                </div>
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-base-300"
                >
                    <h3 class="mb-2 text-lg font-medium">
                        {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                    </h3>
                    <p class="mb-4 opacity-60">
                        {{ 'COMMON.UPLOAD_IMAGE_INFO' | translate }}
                    </p>
                    <button btn class="inverse bg-base-100">
                        <icon class="mr-2 text-2xl">chevron_right</icon>
                        <div class="pr-2">
                            {{ 'COMMON.UPLOAD_IMAGE' | translate }}
                        </div>
                    </button>
                </div>
            }
        </button>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageFieldComponent),
            multi: true,
        },
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
    ],
})
export class ImageFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    private _uploads = inject(UploadsService);
    private _clipboard = inject(Clipboard);

    public readonly url = signal('');
    public readonly progress = signal(0);
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

    public async uploadImage(event: Event) {
        const element: HTMLInputElement = event.target as any;
        if (!element?.files) return;
        const files: FileList = element.files;
        if (!files.length) return;
        const id = await this._uploads.uploadFileWithPermissions(files[0]);
        this.interval('update_status', () => this._updateUploadHistory(id));
        this._file_input().nativeElement.value = '';
    }

    private async _updateUploadHistory(id: string) {
        const global_list = await nextValueFrom(this._uploads.upload_list);
        const file = global_list.find((_) => _.id === id);
        if (!file) return;
        this.progress.set(file.progress);
        if (file.progress < 100) return;
        this.setValue(
            `/api/engine/v2/uploads/${encodeURIComponent(file.upload_id || file.id)}/url`,
        );
        this.clearInterval('update_status');
    }
}
