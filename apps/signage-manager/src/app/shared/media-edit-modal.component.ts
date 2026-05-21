import {
    Component,
    computed,
    inject,
    OnDestroy,
    signal,
    ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    PluginConfigPayload,
    PluginEmbedComponent,
    SafePipe,
    SchemaFormComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import {
    MediaAnimation,
    SignageMedia,
    SignagePlugin,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { UploadPermissionsModalComponent } from 'libs/components/src/lib/upload-permissions-modal.component';
import { debounceTime, Subscription } from 'rxjs';
import {
    getVideoContainer,
    isSupportedImageFile,
    SignageMediaMetadata,
} from '../signage-media-upload.util';

export interface MediaEditModalData {
    media: SignageMedia;
    file?: File;
    file_metadata?: SignageMediaMetadata;
    file_thumbnail?: string;
    playlist_id?: string;
    plugin?: SignagePlugin;
    loadPlugin?: () => Promise<SignagePlugin | undefined>;
    onAdd: (
        f: File,
        m: SignageMedia,
        file_metadata?: SignageMediaMetadata,
    ) => Promise<SignageMedia>;
    onEdit: (id: string, data: any) => Promise<void>;
    preview: (item: any) => void;
}

@Component({
    selector: 'media-edit-modal',
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
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <button
                        type="button"
                        matRipple
                        class="bg-base-300 border-base-300 relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                        aria-label="Preview media"
                    >
                        @if (media_type === 'plugin' && plugin_loading()) {
                            <div
                                class="text-base-content/70 flex h-full w-full flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="32" />
                                <p class="text-sm">Loading plugin preview...</p>
                            </div>
                        } @else if (media_type === 'plugin' && plugin()) {
                            <plugin-embed
                                class="h-full w-full"
                                [plugin]="plugin()"
                                [config]="plugin_preview_config()"
                                [auto_play]="true"
                            ></plugin-embed>
                        } @else if (media_type === 'webpage') {
                            <iframe
                                title="Media preview"
                                class="h-screen w-full object-contain object-center"
                                [src]="preview_url() | safe: 'resource'"
                            ></iframe>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail || url"
                                [alt]="form.value.name || 'Media preview'"
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
                            name="name"
                            formControlName="name"
                            [placeholder]="'FORM.NAME' | translate"
                            aria-label="Media name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'webpage') {
                        <label for="media-uri">URL</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="media-uri"
                                type="url"
                                formControlName="media_uri"
                                placeholder="https://example.com"
                                aria-label="Webpage URL"
                            />
                            <mat-error>URL is required</mat-error>
                        </mat-form-field>
                    }
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
                                <span class="text-base-content/70">
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
                            aria-label="Animation"
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
                            aria-label="Media description"
                        ></textarea>
                    </mat-form-field>
                    @if (media_type === 'plugin' && plugin_loading()) {
                        <div
                            class="bg-base-200/60 mb-2 flex items-center gap-3 rounded-lg p-4"
                        >
                            <mat-spinner diameter="24" />
                            <p class="m-0 text-sm opacity-70">
                                Loading plugin details...
                            </p>
                        </div>
                    } @else if (plugin_schema()) {
                        <label>Plugin Parameters</label>
                        <div class="bg-base-200/60 mb-2 rounded-lg p-4">
                            <schema-form
                                [schema]="plugin_schema()"
                                [formControlName]="'plugin_params'"
                            ></schema-form>
                        </div>
                    }
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                formControlName="valid_from"
                                [clear]="true"
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
        ReactiveFormsModule,
        DateFieldComponent,
        TranslatePipe,
        SafePipe,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSliderModule,
        AuthenticatedImageDirective,
        MediaDurationPipe,
        SchemaFormComponent,
        PluginEmbedComponent,
    ],
})
export class MediaEditModalComponent implements OnDestroy {
    private _data = inject<MediaEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<MediaEditModalComponent>>(MatDialogRef);

    @ViewChild(SchemaFormComponent) public schema_form: SchemaFormComponent;

    public readonly loading = signal(false);
    public readonly item = this._data.media;
    public readonly file = this._data.file;
    public readonly plugin = signal<SignagePlugin | undefined>(
        this._data.plugin,
    );
    public readonly plugin_loading = signal(
        this.media_type === 'plugin' &&
            !!this._data.loadPlugin &&
            !this._data.plugin,
    );
    public readonly thumbnail =
        this._data.file_thumbnail || this._data.media.thumbnail_url;
    public readonly plugin_schema = computed(() => this._resolvePluginSchema());
    public readonly preview_url = signal('');

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        media_uri: new FormControl(''),
        description: new FormControl(''),
        animation: new FormControl<MediaAnimation>(MediaAnimation.Default),
        start_time: new FormControl(0),
        play_time: new FormControl<number | null>(null),
        plugin_params: new FormControl<Record<string, unknown> | null>(null),
        valid_from: new FormControl<number | null>(null),
        valid_until: new FormControl<number | null>(null),
    });
    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.getRawValue(),
    });

    private _file_url: string;
    private _media_uri_subscription: Subscription;

    public readonly preview = () =>
        this._data.preview({
            media_uri: this.url,
            media_type: this.media_type,
            name: this.form.value.name,
            plugin_id: this.item.plugin_id || this.plugin()?.id,
            plugin_params: this.plugin_config(),
        });

    public readonly plugin_config = computed(() => ({
        ...(this.plugin()?.defaults || {}),
        ...(this.form_value()?.plugin_params || {}),
    }));

    public readonly plugin_preview_config = computed<PluginConfigPayload>(
        () => ({
            instance_id: this.item.id || 'signage-manager-preview',
            config: this.plugin_config(),
            timing: { scheduled_duration_ms: 15000 },
        }),
    );

    public get media_type() {
        if (!this.file) return this.item.media_type;
        return (
            (getVideoContainer(this.file)
                ? 'video'
                : isSupportedImageFile(this.file)
                  ? 'image'
                  : '') || this.item.media_type
        );
    }

    public get url() {
        if (this.media_type === 'webpage') {
            return this.form.value.media_uri || this.item.media_uri;
        }
        if (this.item.id) return this.item.media_url;
        if (this.item.media_uri) return this.item.media_uri;
        if (this._file_url) return this._file_url;
        this._file_url = URL.createObjectURL(this.file);
        return this._file_url;
    }

    constructor() {
        if (this.media_type === 'webpage') {
            this.form.controls.media_uri.addValidators(Validators.required);
            this.preview_url.set(this.item.media_uri || this.item.media_url);
            this._media_uri_subscription =
                this.form.controls.media_uri.valueChanges
                .pipe(debounceTime(1500))
                .subscribe((url) => this.preview_url.set(url || ''));
        }
        this.form.patchValue({
            ...this._data.media,
            plugin_params: this._data.media.plugin_params || null,
            valid_from: this._data.media.valid_from
                ? this._data.media.valid_from * 1000
                : null,
            valid_until: this._data.media.valid_until
                ? this._data.media.valid_until * 1000
                : null,
        });
        if (this._data.file) {
            this.form.patchValue({
                name: this._data.file.name,
            });
        }
        if (this._data.file_metadata) {
            (this.item as any).video_length = Math.floor(
                this._data.file_metadata.duration * 1000,
            );
        }
        if (this.plugin_loading()) {
            this._loadPluginDetails();
        }
    }

    private _resolvePluginSchema(): Record<string, unknown> | null {
        const plugin = this.plugin();
        if (!plugin?.params || !Object.keys(plugin.params).length) return null;
        return plugin.params;
    }

    private async _loadPluginDetails() {
        const plugin = await this._data.loadPlugin?.().catch(() => undefined);
        if (plugin) this.plugin.set(plugin);
        this.plugin_loading.set(false);
    }

    public ngOnDestroy() {
        if (this._file_url) URL.revokeObjectURL(this._file_url);
        this._media_uri_subscription?.unsubscribe();
    }

    public async saveMedia() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        if (this.schema_form && !this.schema_form.isValid()) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const new_media: any = {
            ...this.item,
            ...form_value,
        };
        if (this.plugin()) {
            new_media.plugin_id = this.item.plugin_id || this.plugin().id;
        }
        if (form_value.plugin_params) {
            new_media.plugin_params = form_value.plugin_params;
        } else {
            delete new_media.plugin_params;
        }
        if (form_value.valid_from) {
            new_media.valid_from = getUnixTime(
                startOfDay(form_value.valid_from),
            );
        } else {
            new_media.valid_from = null;
        }
        if (form_value.valid_until) {
            new_media.valid_until = getUnixTime(
                endOfDay(form_value.valid_until),
            );
        } else {
            new_media.valid_until = null;
        }
        const onError = (e) => {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            notifyError(
                i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_ERROR', { error: e }),
            );
            throw e;
        };
        if (this.item.id) {
            await this._data.onEdit(this.item.id, new_media).catch(onError);
        } else {
            await this._data
                .onAdd(
                    this.file,
                    new SignageMedia(new_media),
                    this._data.file_metadata,
                )
                .catch(onError);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS'));
    }
}
