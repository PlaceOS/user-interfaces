import { Clipboard } from '@angular/cdk/clipboard';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    inject,
    Injector,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifyInfo,
    provideValueAccessor,
    randomString,
    unique,
    UploadsService,
} from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageViewerComponent } from 'libs/components/src/lib/image-viewer.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { checkFile } from './file-checks';
import { watchUpload } from './watch-upload';

/** An image upload that has not completed */
export interface PendingImageUpload {
    /** Local key for the upload */
    key: string;
    /** File being uploaded, kept so a failed upload can be retried */
    file: File;
    /** Progress of the upload, 0 to 100 */
    progress: number;
    /** Why the upload failed */
    error?: string;
}

@Component({
    selector: 'image-list-field',
    template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="updateViewSpace()"
        >
            <div
                image
                class="border-base-200 hover:border-base-300 hover:bg-base-200 relative flex h-32 w-36 shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed"
                [class.border-primary]="dragging()"
                [class.bg-base-200]="dragging()"
                [style.transform]="'translate(-' + offset() + '00%)'"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="px-4 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    #file_input
                    type="file"
                    accept="image/*"
                    (dragenter)="dragging.set(true)"
                    (dragleave)="dragging.set(false)"
                    (drop)="dragging.set(false)"
                    multiple
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    [disabled]="disabled()"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list(); track url; let i = $index) {
                <div
                    image
                    class="bg-base-200 relative h-32 w-36 shrink-0 overflow-hidden rounded-sm bg-cover bg-center"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                >
                    <img
                        auth
                        alt=""
                        [source]="url"
                        class="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                    <div overlay class="text-base-100 absolute inset-0 z-20">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute top-0 right-0 left-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button
                                icon
                                (click)="copyLink(url)"
                                [attr.aria-label]="
                                    'COMMON.COPY_LINK' | translate
                                "
                            >
                                <icon>link</icon>
                            </button>
                            <button
                                icon
                                (click)="viewImage(url)"
                                [attr.aria-label]="'COMMON.VIEW' | translate"
                            >
                                <icon>visibility</icon>
                            </button>
                            <button
                                icon
                                type="button"
                                [disabled]="disabled()"
                                (click)="removeImage(url)"
                                [attr.aria-label]="'COMMON.REMOVE' | translate"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads(); track item.key) {
                <div
                    upload
                    class="border-base-content/10 bg-base-200 flex h-32 w-36 shrink-0 items-center justify-center rounded-sm border bg-cover bg-center"
                    [style.transform]="'translate(-' + offset() + '00%)'"
                    [matTooltip]="item.error"
                    (click)="retryUpload(item)"
                >
                    @if (!item.error) {
                        <mat-progress-spinner
                            [value]="item.progress"
                            [diameter]="64"
                            mode="determinate"
                        ></mat-progress-spinner>
                    }
                    @if (item.error) {
                        <icon class="text-error text-6xl">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="text-base-100 hover:bg-base-content/50 absolute inset-0 flex items-center justify-center"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </div>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() === 0"
                    class="bg-base-100 absolute top-1/2 left-0 -translate-y-1/2 transform"
                    (click)="previousOffset()"
                    [attr.aria-label]="'COMMON.PREVIOUS' | translate"
                >
                    <icon>chevron_left</icon>
                </button>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() >= length() - view_space()"
                    class="bg-base-100 absolute top-1/2 right-0 -translate-y-1/2 transform"
                    (click)="nextOffset()"
                    [attr.aria-label]="'COMMON.NEXT' | translate"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid
                #chipList
                [attr.aria-label]="'COMMON.IMAGES' | translate"
                [disabled]="disabled()"
            >
                @for (item of list(); track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="
                                'COMMON.REMOVE_ITEM' | translate: { item }
                            "
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="'COMMON.IMAGE_ADD_URL' | translate"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="addImage($event)"
            />
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            [overlay] {
                transition: background 200ms;
            }

            [image]:hover [actions],
            [image]:focus-within [actions],
            [image]:hover > icon {
                opacity: 1 !important;
            }

            [image]:hover [bg],
            [image]:focus-within [bg] {
                opacity: 0.4 !important;
            }

            [actions],
            [image] > icon {
                transition: opacity 200ms;
            }

            [image] {
                transition: transform 200ms;
            }
        `,
    ],
    providers: [provideValueAccessor(() => ImageListFieldComponent)],
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        AuthenticatedImageDirective,
    ],
})
export class ImageListFieldComponent
    extends AsyncHandler
    implements AfterViewInit
{
    private _clipboard = inject(Clipboard);
    private _uploads = inject(UploadsService);
    private _dialog = inject(MatDialog);
    private _injector = inject(Injector);

    /** List of images */
    public readonly list = signal<string[]>([]);
    /** Uploads that are in progress or failed */
    public readonly uploads = signal<PendingImageUpload[]>([]);
    public readonly offset = signal(0);
    public readonly disabled = signal(false);
    /** Largest file size in bytes. 0 means no limit */
    public readonly max_size = input(0);
    /** Whether a file is being dragged over the field */
    public readonly dragging = signal(false);

    public readonly view_space = signal(0);
    public readonly separators = [COMMA, ENTER];

    public readonly length = computed(
        () => this.list().length + this.uploads().length + 1,
    );

    private readonly _list_el =
        viewChild<ElementRef<HTMLDivElement>>('image_list');
    private readonly _file_input =
        viewChild<ElementRef<HTMLInputElement>>('file_input');

    /** Form control on change handler */
    private _onChange: (_: string[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string[]) => void;

    public ngAfterViewInit() {
        this.updateViewSpace();
    }

    public updateViewSpace() {
        this.timeout(
            'init_view_space',
            () => {
                const box =
                    this._list_el()?.nativeElement?.getBoundingClientRect();
                if (!box) return;
                this.view_space.set(Math.floor(box.width / 152));
            },
            100,
        );
    }

    public copyLink(url: string) {
        this._clipboard.copy(url);
        notifyInfo(i18n('COMMON.LINK_COPIED'));
    }

    public viewImage(url: string) {
        this._dialog.open(ImageViewerComponent, { data: url });
    }

    public removeImage(url: string) {
        this.setValue(this.list().filter((_) => _ !== url));
    }

    public addImage(event: MatChipInputEvent) {
        if (!event.value) return;
        this.setValue(unique([...this.list(), event.value]));
        event.chipInput.inputElement.value = '';
    }

    public addImageUrl(url: string) {
        this.setValue(unique([...this.list(), url]));
    }

    /**
     * Upload a failed file again. The upload service stops tracking an upload
     * after it fails, so this starts a new upload in place of a resume.
     */
    public retryUpload(item: PendingImageUpload) {
        if (this.disabled() || !item.error) return;
        this._removeUpload(item.key);
        this._uploadFile(item.file);
    }

    public previousOffset() {
        this.offset.update((value) => value - 1);
    }

    public nextOffset() {
        this.offset.update((value) => value + 1);
    }

    public uploadImages(event) {
        const element: HTMLInputElement = event.target;
        if (!element?.files?.length) return;
        // Each file uploads on its own, so one failure does not stop the rest
        const limits = { accept: 'image/*', max_size: this.max_size() };
        for (let i = 0; i < element.files.length; i++) {
            if (checkFile(element.files[i], limits))
                this._uploadFile(element.files[i]);
        }
        const input = this._file_input()?.nativeElement;
        if (input) input.value = '';
    }

    public setValue(value: string[]) {
        const list = value || [];
        this.list.set(list);
        if (this._onChange) this._onChange(list);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value?: string[]) {
        this.list.set(value || []);
    }

    public readonly registerOnChange = (fn: (_: string[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    /** Start an upload and show its progress until it completes or fails */
    private _uploadFile(file: File) {
        const key = randomString(8);
        this.uploads.update((list) => [...list, { key, file, progress: 0 }]);
        watchUpload(this._uploads, file, this._injector, (details) => {
            if (details.error) {
                notifyError(
                    i18n('FORM.UPLOAD_FAILED', {
                        name: file.name,
                        error: details.error,
                    }),
                );
            } else if (details.progress >= 100) {
                this._removeUpload(key);
                this.addImageUrl(details.link);
                return;
            }
            this.uploads.update((list) =>
                list.map((item) =>
                    item.key === key
                        ? {
                              ...item,
                              progress: details.progress,
                              error: details.error,
                          }
                        : item,
                ),
            );
        });
    }

    private _removeUpload(key: string) {
        this.uploads.update((list) => list.filter((_) => _.key !== key));
    }
}
