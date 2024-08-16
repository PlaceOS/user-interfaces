import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifySuccess } from '@placeos/common';
import { SignageMedia, updateSignageMedia } from '@placeos/ts-client';
import { MediaAnimation } from '@placeos/ts-client/dist/esm/signage/media.class';
import { addYears, endOfDay, getUnixTime, startOfDay } from 'date-fns';

@Component({
    selector: 'signage-media-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-base-300"
        >
            <h2 class="p-2 text-xl font-medium">
                {{ item.id ? 'Edit' : 'New' }} Media Item
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="p-4 max-w-[calc(100vw-2rem)] w-[32rem] max-h-[65vh] overflow-auto"
            [formGroup]="form"
            *ngIf="!loading; else load_state"
        >
            <div class="flex flex-col">
                <button
                    matRipple
                    class="relative w-full h-48 mx-auto bg-base-300 rounded-xl overflow-hidden mb-4"
                    (click)="preview()"
                >
                    <img
                        class="h-full w-full object-contain object-center"
                        [src]="url"
                    />
                    <div
                        class="absolute top-2 left-2 px-2 py-1 rounded text-xs bg-base-400 capitalize"
                    >
                        {{ media_type }}
                    </div>
                </button>
                <label for="name">Name</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        formControlName="name"
                        placeholder="Media Name"
                    />
                    <mat-error>A name is required</mat-error>
                </mat-form-field>
                @if (media_type === 'video') {
                    <div class="flex items-center space-x-4">
                        <label for="start-time" class="w-auto min-w-0 m-0"
                            >Start Time</label
                        >
                        <div class="text-xs font-mono">
                            {{
                                form.value.start_time / 1000
                                    | mediaDuration: true
                            }}
                        </div>
                    </div>
                    <mat-slider min="0" max="3600000" step="100">
                        <input
                            name="start-time"
                            matSliderThumb
                            formControlName="start_time"
                        />
                    </mat-slider>
                }
                <div class="flex items-center space-x-4">
                    <label for="play-time" class="w-auto min-w-0 m-0">
                        Play Time</label
                    >
                    <div class="text-xs font-mono">
                        @if (form.value.play_time) {
                            {{
                                form.value.play_time / 1000
                                    | mediaDuration: true
                            }}
                        } @else {
                            <span class="opacity-30">Default</span>
                        }
                    </div>
                </div>
                <mat-slider
                    [min]="form.value.start_time"
                    [max]="item.video_length || 300000"
                    step="100"
                >
                    <input
                        name="play-time"
                        matSliderThumb
                        formControlName="play_time"
                    />
                </mat-slider>
                <label for="animation">Animation</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="animation"
                        formControlName="animation"
                        placeholder="Playlist Default"
                    >
                        <mat-option [value]="null">Playlist Default</mat-option>
                        <mat-option value="cut">Cut</mat-option>
                        <mat-option value="crossfade">Cross Fade</mat-option>
                        <mat-option value="slidetop">Slide Top</mat-option>
                        <mat-option value="slideleft">Slide Left</mat-option>
                        <mat-option value="slideright">Slide Right</mat-option>
                        <mat-option value="slidebottom"
                            >Slide Bottom</mat-option
                        >
                    </mat-select>
                </mat-form-field>
                <label for="description">Description</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        formControlName="description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">Valid From</label>
                        <a-date-field
                            name="valid-from"
                            formControlName="valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">Valid Until</label>
                        <a-date-field
                            name="valid-until"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
                        ></a-date-field>
                    </div>
                </div>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-end p-4 border-t border-base-300"
        >
            <button btn matRipple class="w-32" (click)="saveMedia()">
                Save
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center p-8 max-w-[calc(100vw-2rem)] min-h-64 w-[32rem] space-y-4"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving media item...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class SignageMediaModalComponent {
    public loading = false;
    public readonly item = this._data.media;
    public readonly file = this._data.file;

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        animation: new FormControl<MediaAnimation | null>(null),
        start_time: new FormControl(0),
        play_time: new FormControl(0),
        valid_from: new FormControl(startOfDay(Date.now()).valueOf()),
        valid_until: new FormControl(
            addYears(endOfDay(Date.now()), 10).valueOf(),
        ),
    });

    private _file_url: string;

    public readonly preview = () =>
        this._data.preview({
            media_url: this.url,
            media_type: this.media_type,
            name: this.form.value.name,
        });

    public get media_type() {
        if (!this.file) return this.item.media_type;
        return (
            (this.file.type.includes('video')
                ? 'video'
                : this.file.type.includes('image')
                  ? 'image'
                  : '') || this.item.media_type
        );
    }

    public get url() {
        if (this.item.id) return this.item.media_url;
        if (this._file_url) return this._file_url;
        this._file_url = URL.createObjectURL(this.file);
        return this._file_url;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            media: SignageMedia;
            file?: File;
            file_metadata?: [boolean, number];
            onAdd: (f, m) => Promise<SignageMedia>;
            preview: (url) => void;
        },
        private _dialog_ref: MatDialogRef<SignageMediaModalComponent>,
    ) {
        console.log('File:', this._data.file, this._data.file_metadata);
        this.form.patchValue({
            ...this._data.media,
            valid_from: this._data.media.valid_from * 1000,
            valid_until: this._data.media.valid_until * 1000,
        });
        if (this._data.file) {
            this.form.patchValue({
                name: this._data.file.name,
                play_time: this._data.file_metadata[1] * 1000 || 0,
            });
        }
        if (this._data.file_metadata) {
            (this.item as any).video_length = Math.floor(
                this._data.file_metadata[1] * 1000,
            );
        }
    }

    public ngOnDestroy() {
        if (this._file_url) URL.revokeObjectURL(this._file_url);
    }

    public async saveMedia() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const new_media = {
            ...this.item,
            ...form_value,
            valid_from: getUnixTime(new Date(form_value.valid_from)),
            valid_until: getUnixTime(form_value.valid_until),
        };
        const onError = (e) => {
            this._dialog_ref.disableClose = false;
            this.loading = false;
            throw e;
        };
        if (this.item.id) {
            await updateSignageMedia(this.item.id, new_media)
                .toPromise()
                .catch(onError);
        } else {
            await this._data.onAdd(this.file, new_media).catch(onError);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess('Successfully saved media item.');
    }
}
