import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Clipboard } from '@angular/cdk/clipboard';
import { Upload } from '@placeos/cloud-uploads';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
    AsyncHandler,
    notifyInfo,
    unique,
    UploadsService,
} from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerComponent } from 'libs/components/src/lib/image-viewer.component';

export interface UploadDetails {
    /** Unique ID for the upload */
    id: number;
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
            class="space-x-2 py-2 overflow-hidden mb-2 w-full flex items-center relative"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="relative rounded border-2 border-base-200  border-dashed flex-shrink-0 flex flex-col items-center justify-center h-32 w-36 hover:bg-base-content/10 :bg-base-100/10 cursor-pointer"
                [style.transform]="'translate(-' + offset + '00%)'"
            >
                <app-icon class="text-4xl opacity-60">add</app-icon>
                <p class="opacity-60" i18n>Upload Image(s)</p>
                <input
                    #file_input
                    type="file"
                    class="absolute inset-0 opacity-0 h-32 w-32 cursor-pointer"
                    (change)="uploadImages($event)"
                />
            </div>
            <div
                image
                *ngFor="let url of list; let i = index"
                class="bg-center bg-cover h-32 w-36 relative rounded overflow-hidden flex-shrink-0 bg-base-200"
                [style.transform]="'translate(-' + offset + '00%)'"
            >
                <img
                    auth
                    [source]="url"
                    class="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                />
                <div overlay class="absolute inset-0 text-base-100 z-20">
                    <div bg class="absolute inset-0 opacity-0 bg-black"></div>
                    <div
                        actions
                        class="absolute top-0 left-0 right-0 flex items-center justify-center space-x-2 opacity-0"
                    >
                        <button icon (click)="copyLink(url)">
                            <app-icon>link</app-icon>
                        </button>
                        <button icon (click)="viewImage(url)">
                            <app-icon>visibility</app-icon>
                        </button>
                        <button icon (click)="removeImage(url)">
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                image
                *ngFor="let item of uploads | async; let i = index"
                class="bg-center bg-cover h-32 w-36 rounded border border-base-content/10 /5 bg-base-200  flex items-center justify-center flex-shrink-0"
                [style.transform]="'translate(-' + offset + '00%)'"
                [matTooltip]="item.error"
                (click)="retryUpload(item)"
            >
                <mat-progress-spinner
                    *ngIf="!item.error"
                    [value]="item.progress"
                    [diameter]="64"
                    mode="determinate"
                ></mat-progress-spinner>
                <app-icon *ngIf="item.error" class="text-error text-6xl"
                    >warning</app-icon
                >
                <div
                    overlay
                    *ngIf="item.error"
                    class="absolute inset-0 hover:bg-base-content hover:bg-opacity-50 text-base-100 flex items-center justify-center"
                >
                    <app-icon class="text-3xl opacity-0">refresh</app-icon>
                </div>
            </div>
            <button
                icon
                matRipple
                *ngIf="length > view_space"
                [disabled]="offset === 0"
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-base-100"
                (click)="offset = offset - 1"
            >
                <app-icon>chevron_left</app-icon>
            </button>
            <button
                icon
                matRipple
                *ngIf="length > view_space"
                [disabled]="offset >= length - view_space"
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-base-100"
                (click)="offset = offset + 1"
            >
                <app-icon>chevron_right</app-icon>
            </button>
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                <mat-chip-row
                    *ngFor="let item of list"
                    (removed)="removeImage(item)"
                >
                    <div class="truncate max-w-md">{{ item }}</div>
                    <button matChipRemove [attr.aria-label]="'Remove ' + item">
                        <app-icon>cancel</app-icon>
                    </button>
                </mat-chip-row>
            </mat-chip-grid>
            <input
                placeholder="Add image via URL"
                i18n-placeholder
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
            [image]:hover > app-icon {
                opacity: 1 !important;
            }

            [image]:hover [bg] {
                opacity: 0.4 !important;
            }

            [actions],
            [image] > app-icon {
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
})
export class ImageListFieldComponent extends AsyncHandler {
    /** List of images */
    public list: string[] = [];
    /** List of images */
    public upload_ids = new BehaviorSubject<number[]>([]);
    private _upload_list = new BehaviorSubject<UploadDetails[]>([]);
    public readonly upload_list = this._upload_list.asObservable();
    public offset: number = 0;

    public view_space: number = 0;

    public readonly separators = [COMMA, ENTER];

    public readonly uploads = combineLatest([
        this.upload_list,
        this.upload_ids,
    ]).pipe(map(([list, ids]) => list.filter((i) => ids.includes(i.id))));

    public get length() {
        return this.list.length + this._upload_list.getValue().length + 1;
    }

    @ViewChild('image_list') private _list_el: ElementRef<HTMLDivElement>;
    @ViewChild('file_input') private _file_input: ElementRef<HTMLInputElement>;

    constructor(
        private _clipboard: Clipboard,
        private _uploads: UploadsService,
        private _dialog: MatDialog
    ) {
        super();
    }

    /** Form control on change handler */
    private _onChange: (_: string[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string[]) => void;

    public ngAfterViewInit() {
        this.timeout(
            'init_view_space',
            () => {
                const box = this._list_el.nativeElement.getBoundingClientRect();
                this.view_space = Math.floor(box.width / 152);
            },
            100
        );
        this.subscription(
            'upload_changes',
            this.upload_list.subscribe((list) => {
                const id_list = this.upload_ids.getValue();
                for (const id of id_list) {
                    const item = list.find((_) => _.id === id);
                    if (item && item.progress >= 100) {
                        this.addImageUrl(item.link);
                        this.upload_ids.next(
                            this.upload_ids.getValue().filter((_) => _ !== id)
                        );
                    }
                }
            })
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
                    this._updateUploadHistory()
                );
                for (let i = 0; i < files.length; i++) {
                    const id = await this._uploads.uploadFileWithPermissions(
                        files[i]
                    );
                    this.upload_ids.next([...this.upload_ids.getValue(), id]);
                    this._file_input.nativeElement.value = '';
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
    public writeValue(value: string[]) {
        this.list = value;
    }

    public readonly registerOnChange = (fn: (_: string[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string[]) => void) =>
        (this._onTouch = fn);

    private async _updateUploadHistory() {
        const list = this.upload_ids.getValue();
        if (list.length === 0) return;
        const global_list = await this._uploads.upload_list
            .pipe(take(1))
            .toPromise();
        const new_list = global_list.filter((_) =>
            list.find((i) => i === _.id)
        );
        const done_list = new_list.filter((file) => file.progress >= 100);
        this._upload_list.next(new_list);
        done_list.forEach((i) => delete i.upload);
        if (done_list.length >= list.length)
            this.clearInterval('update_status');
    }
}
