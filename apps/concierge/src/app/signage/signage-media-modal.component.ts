import { Component, inject, OnDestroy, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
    i18n,
    notifyError,
    notifySuccess,
    UPLOAD_PERMISSIONS_MODAL,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    FullscreenModalShellComponent,
    MediaDurationPipe,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import {
    MediaAnimation,
    SignageMedia,
    updateSignageMedia,
} from '@placeos/ts-client';
import { addYears, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { UploadPermissionsModalComponent } from 'libs/components/src/lib/upload-permissions-modal.component';

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
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_MEDIA_SAVING' | translate)
                    : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <button
                        matRipple
                        class="bg-base-300 border-base-300 pointer-events-none relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                    >
                        @if (media_type === 'webpage') {
                            <iframe
                                class="h-screen w-full object-contain object-center"
                                [src]="url | safe: 'resource'"
                            ></iframe>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail || url"
                            />
                        }
                        <div
                            class="bg-info text-info-content absolute top-2 left-2 rounded-sm px-2 py-1 text-xs capitalize shadow"
                        >
                            {{ media_type }}
                        </div>
                    </button>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
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
                                    model().start_time / 1000
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
                                matSliderThumb
                                [formField]="form.start_time"
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
                            @if (model().play_time) {
                                {{
                                    model().play_time / 1000
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
                        [min]="model().start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input matSliderThumb [formField]="form.play_time" />
                    </mat-slider>
                    <label for="animation">{{
                        'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.animation"
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
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'COMMON.VALID_UNTIL' | translate
                            }}</label>
                            <a-date-field
                                [from]="model().valid_from"
                                [formField]="form.valid_until"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    providers: [
        {
            provide: UPLOAD_PERMISSIONS_MODAL,
            useValue: UploadPermissionsModalComponent,
        },
    ],
    imports: [
        FullscreenModalShellComponent,
        FormField,
        DateFieldComponent,
        TranslatePipe,
        SafePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        AuthenticatedImageDirective,
        MediaDurationPipe,
    ],
})
export class SignageMediaModalComponent implements OnDestroy {
    private _data = inject<{
        media: SignageMedia;
        file?: File;
        file_metadata?: [boolean, number];
        file_thumbnail?: string;
        onAdd: (f, m) => Promise<SignageMedia>;
        preview: (url) => void;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<SignageMediaModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly item = this._data.media;
    public readonly file = this._data.file;
    public readonly thumbnail =
        this._data.file_thumbnail || this._data.media.thumbnail_url;

    public readonly model = signal({
        name: '',
        description: '',
        animation: MediaAnimation.Default as MediaAnimation,
        start_time: 0,
        play_time: null as number | null,
        valid_from: startOfDay(Date.now()).valueOf(),
        valid_until: addYears(endOfDay(Date.now()), 10).valueOf(),
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
    });

    private _file_url: string;

    public readonly preview = () =>
        this._data.preview({
            media_url: this.url,
            media_type: this.media_type,
            name: this.model().name,
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

    constructor() {
        const media = this._data.media as any;
        this.model.update((m) => ({
            ...m,
            name: media.name ?? m.name,
            description: media.description ?? m.description,
            animation: media.animation ?? m.animation,
            start_time: media.start_time ?? m.start_time,
            play_time: media.play_time ?? m.play_time,
            valid_from: (media.valid_from || 0) * 1000,
            valid_until: (media.valid_until || 0) * 1000,
        }));
        if (this._data.file) {
            this.model.update((m) => ({ ...m, name: this._data.file.name }));
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
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value: any = { ...this.model() };
        const new_media = {
            ...this.item,
            ...form_value,
        };
        if (form_value.valid_from) {
            new_media.valid_from = getUnixTime(
                startOfDay(form_value.valid_from),
            );
        } else delete new_media.valid_from;
        if (form_value.valid_until) {
            new_media.valid_until = getUnixTime(
                endOfDay(form_value.valid_until),
            );
        } else delete new_media.valid_until;
        const onError = (e) => {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            notifyError(
                i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_ERROR', { error: e }),
            );
            throw e;
        };
        if (this.item.id) {
            await updateSignageMedia(this.item.id, new_media).catch(onError);
        } else {
            await this._data.onAdd(this.file, new_media).catch(onError);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS'));
    }
}
