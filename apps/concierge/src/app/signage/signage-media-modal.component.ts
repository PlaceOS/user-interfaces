import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    MediaAnimation,
    SignageMedia,
    updateSignageMedia,
} from '@placeos/ts-client';
import { addYears, endOfDay, getUnixTime, startOfDay } from 'date-fns';

@Component({
    selector: 'signage-media-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_MEDIA_NEW'
                ) | translate
            "
            (confirm)="saveMedia()"
            [loading]="
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_MEDIA_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <button
                        matRipple
                        class="relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl bg-base-300"
                        (click)="preview()"
                    >
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="thumbnail || url"
                        />
                        <div
                            class="absolute left-2 top-2 rounded bg-base-400 px-2 py-1 text-xs capitalize"
                        >
                            {{ media_type }}
                        </div>
                    </button>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'video') {
                        <div class="flex items-center space-x-4">
                            <label
                                for="start-time"
                                class="m-0 w-auto min-w-0"
                                >{{ 'FORM.TIME_START' | translate }}</label
                            >
                            <div class="font-mono text-xs">
                                {{
                                    form.value.start_time / 1000
                                        | mediaDuration: true
                                }}
                            </div>
                        </div>
                        <mat-slider
                            min="0"
                            [max]="(item.video_length || 300000) - 1000"
                            step="100"
                        >
                            <input
                                name="start-time"
                                matSliderThumb
                                formControlName="start_time"
                            />
                        </mat-slider>
                    }
                    <div class="flex items-center space-x-4">
                        <label for="play-time" class="m-0 w-auto min-w-0">
                            {{
                                'APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME'
                                    | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (form.value.play_time) {
                                {{
                                    form.value.play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else {
                                <span class="opacity-30">
                                    {{ 'COMMON.DEFAULT' | translate }} ({{
                                        item.video_length
                                            ? (item.video_length / 1000
                                              | mediaDuration)
                                            : ''
                                    }})
                                </span>
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
                    <label for="animation">{{
                        'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="animation"
                            formControlName="animation"
                            placeholder="Playlist Default"
                        >
                            <mat-option [value]="0">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="1">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="2">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="3">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="4">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="5">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="6">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                formControlName="valid_from"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'APP.CONCIERGE.VALID_UNTIL' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
                                [from]="form.value.valid_from"
                                formControlName="valid_until"
                            ></a-date-field>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class SignageMediaModalComponent implements OnDestroy {
    public loading = false;
    public readonly item = this._data.media;
    public readonly file = this._data.file;
    public readonly thumbnail =
        this._data.file_thumbnail || this._data.media.thumbnail_url;

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        animation: new FormControl<MediaAnimation>(MediaAnimation.Default),
        start_time: new FormControl(0),
        play_time: new FormControl<number | null>(null),
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
            file_thumbnail?: string;
            onAdd: (f, m) => Promise<SignageMedia>;
            preview: (url) => void;
        },
        private _dialog_ref: MatDialogRef<SignageMediaModalComponent>,
    ) {
        this.form.patchValue({
            ...this._data.media,
            valid_from: this._data.media.valid_from * 1000,
            valid_until: this._data.media.valid_until * 1000,
        });
        if (this._data.file) {
            this.form.patchValue({
                name: this._data.file.name,
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
            notifyError(
                i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_ERROR', { error: e }),
            );
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
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS'));
    }
}
