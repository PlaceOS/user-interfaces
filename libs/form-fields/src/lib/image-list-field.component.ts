import { Clipboard } from '@angular/cdk/clipboard';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    AfterViewInit,
    Component,
    ElementRef,
    forwardRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Upload } from '@placeos/cloud-uploads';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    nextValueFrom,
    notifyInfo,
    unique,
    UploadsService,
} from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageViewerComponent } from 'libs/components/src/lib/image-viewer.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

export interface UploadDetails {
    /** Unique ID for the upload */
    id: string;
    /** Name of the file uploaded */
    name: string;
    /** Progress of the file upload */
    progress: number;
    /** Link to the uploaded file */
    link: string;
    /** Formatted file size */
    formatted_size: string;
    /** Size of the file being uploaded */
    size: number;
    /** Error with upload request */
    error?: string;
    /** Upload object associated with the file */
    upload: Upload;
}

@Component({
    selector: 'image-list-field',
    template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="relative flex h-32 w-36 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-base-200 hover:border-base-300 hover:bg-base-200"
                [style.transform]="'translate(-' + offset + '00%)'"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="px-4 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    #file_input
                    type="file"
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list; track url; let i = $index) {
                <div
                    image
                    class="relative h-32 w-36 flex-shrink-0 overflow-hidden rounded bg-base-200 bg-cover bg-center"
                    [style.transform]="'translate(-' + offset + '00%)'"
                >
                    <img
                        auth
                        [source]="url"
                        class="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                    <div overlay class="absolute inset-0 z-20 text-base-100">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute left-0 right-0 top-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button icon (click)="copyLink(url)">
                                <icon>link</icon>
                            </button>
                            <button icon (click)="viewImage(url)">
                                <icon>visibility</icon>
                            </button>
                            <button icon (click)="removeImage(url)">
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads | async; track item; let i = $index) {
                <div
                    upload
                    class="border-base-content/10 /5 flex h-32 w-36 flex-shrink-0 items-center justify-center rounded border bg-base-200 bg-cover bg-center"
                    [style.transform]="'translate(-' + offset + '00%)'"
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
                        <icon class="text-6xl text-error">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="absolute inset-0 flex items-center justify-center text-base-100 hover:bg-base-content hover:bg-opacity-50"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </div>
            }
            @if (length > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset === 0"
                    class="absolute left-0 top-1/2 -translate-y-1/2 transform bg-base-100"
                    (click)="offset = offset - 1"
                >
                    <icon>chevron_left</icon>
                </button>
            }
            @if (length > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset >= length - view_space()"
                    class="absolute right-0 top-1/2 -translate-y-1/2 transform bg-base-100"
                    (click)="offset = offset + 1"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                @for (item of list; track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
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
            [image]:hover > icon {
                opacity: 1 !important;
            }

            [image]:hover [bg] {
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
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageListFieldComponent),
            multi: true,
        },
    ],
    imports: [
        MatFormFieldModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        IconComponent,
        CommonModule,
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

    /** List of images */
    public list: string[] = [];
    /** List of images */
    public upload_map: Record<string, string> = {};
    public upload_ids = new BehaviorSubject<string[]>([]);
    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);
    public readonly upload_list = this._upload_list.asObservable();
    public offset = 0;

    public readonly view_space = signal(0);
    public readonly separators = [COMMA, ENTER];

    public readonly uploads = combineLatest([
        this.upload_list,
        this.upload_ids,
    ]).pipe(map(([list, ids]) => list.filter((i) => ids.includes(i?.id))));

    public get length() {
        return this.list.length + this._upload_list.getValue().length + 1;
    }

    private readonly _list_el =
        viewChild<ElementRef<HTMLDivElement>>('image_list');
    private readonly _file_input =
        viewChild<ElementRef<HTMLInputElement>>('file_input');

    /** Form control on change handler */
    private _onChange: (_: string[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string[]) => void;

    public ngAfterViewInit() {
        this.timeout(
            'init_view_space',
            () => {
                const box =
                    this._list_el().nativeElement.getBoundingClientRect();
                this.view_space.set(Math.floor(box.width / 152));
            },
            100,
        );
        this.subscription(
            'upload_changes',
            this.upload_list.subscribe((list) => {
                const id_list = this.upload_ids.getValue();
                for (const id of id_list) {
                    const item = list.find((_) => _?.id === id);
                    if (item && item.progress >= 100) {
                        this.addImageUrl(item.link);
                        this.upload_ids.next(
                            this.upload_ids.getValue().filter((_) => _ !== id),
                        );
                    }
                }
            }),
        );
    }

    public copyLink(url: string) {
        this._clipboard.copy(url);
        notifyInfo('Copied image URL to clipboard');
    }

    public viewImage(url: string) {
        this._dialog.open(ImageViewerComponent, { data: url });
    }

    public removeImage(url: string) {
        this.setValue(this.list.filter((_) => _ !== url));
    }

    public addImage(event: MatChipInputEvent) {
        if (!event.value) return;
        this.setValue(unique([...this.list, event.value]));
        event.chipInput.inputElement.value = '';
    }

    public addImageUrl(url: string) {
        this.setValue(unique([...this.list, url]));
    }

    public retryUpload(item: UploadDetails) {
        if (item.error) {
            item.error = null;
            item.upload.resume();
        }
    }

    public async uploadImages(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (element?.files) {
            const files: FileList = element.files;
            /* istanbul ignore else */
            if (files.length) {
                this.interval('update_status', () =>
                    this._updateUploadHistory(),
                );
                for (let i = 0; i < files.length; i++) {
                    const id = await this._uploads.uploadFileWithPermissions(
                        files[i],
                    );
                    this.upload_ids.next([...this.upload_ids.getValue(), id]);
                    this._file_input().nativeElement.value = '';
                }
            }
        }
    }

    public setValue(value: string[]) {
        this.list = value;
        if (this._onChange) this._onChange(value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value?: string[]) {
        this.list = value || [];
    }

    public readonly registerOnChange = (fn: (_: string[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string[]) => void) =>
        (this._onTouch = fn);

    private async _updateUploadHistory() {
        const list = this.upload_ids.getValue();
        if (list.length === 0) return;
        const global_list = await nextValueFrom(this._uploads.upload_list);
        const new_list = global_list.filter((_) =>
            list.find((i) => i === _?.id),
        );
        const done_list = new_list.filter((file) => file.progress >= 100);
        this._upload_list.next(new_list);
        done_list.forEach((i) => {
            console.log('ID:', { ...i });
            this.upload_map[i?.id] = i.upload?.id || i?.id;
            delete i.upload;
        });
        if (done_list.length >= list.length)
            this.clearInterval('update_status');
    }
}
