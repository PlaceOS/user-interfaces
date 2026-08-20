import {
    Component,
    computed,
    DestroyRef,
    effect,
    inject,
    OnDestroy,
    signal,
    viewChild,
    ViewChild,
} from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
    HotkeysService,
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
import {
    DateFieldComponent,
    ItemListFieldComponent,
} from '@placeos/form-fields';
import {
    MediaAnimation,
    SignageMedia,
    SignagePlugin,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { UploadPermissionsModalComponent } from 'libs/components/src/lib/upload-permissions-modal.component';
import {
    getVideoContainer,
    isSupportedImageFile,
    SignageMediaMetadata,
} from '../signage-media-upload.util';
import { playlistMediaThumbnailUrl } from '../signage-playlist.util';
import {
    objectHasKeys,
    pluginSchema,
    schemaDefaults,
} from '../signage-plugin.util';

export interface MediaEditModalData {
    media: SignageMedia;
    file?: File;
    file_metadata?: SignageMediaMetadata;
    file_thumbnail?: string;
    playlist_id?: string;
    plugin?: SignagePlugin;
    /** Existing media tags to suggest while the user types */
    tag_options?: string[];
    loadPlugin?: () => Promise<SignagePlugin | undefined>;
    generateThumbnail?: (file: File) => Promise<string>;
    onAdd: (
        f: File,
        m: SignageMedia,
        file_metadata?: SignageMediaMetadata,
        thumbnail?: string,
    ) => Promise<SignageMedia>;
    onEdit: (id: string, data: any) => Promise<void>;
    preview: (item: any) => void;
}

interface MediaEditFormModel {
    name: string;
    media_uri: string;
    description: string;
    animation: MediaAnimation;
    start_time: number;
    play_time: number;
    tags: string[];
    plugin_params: Record<string, unknown>;
    valid_from: number | null;
    valid_until: number | null;
}

function mediaSaveErrorMessage(error: unknown) {
    if (error === undefined || error === null) {
        return i18n('SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_CANCELLED');
    }
    if (error instanceof Error && error.message) return error.message;
    if (typeof error === 'string') return error;
    if (typeof error === 'number' || typeof error === 'boolean') {
        return `${error}`;
    }
    if (typeof error === 'object') {
        const details = error as Record<string, unknown>;
        const value =
            details.error ||
            details.message ||
            details.statusText ||
            details.name;
        if (value) return mediaSaveErrorMessage(value);
    }
    return i18n('SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_FAILED');
}

@Component({
    selector: 'media-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'SIGNAGE_MANAGER.MEDIA_EDIT'
                    : 'SIGNAGE_MANAGER.MEDIA_NEW'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveMedia()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.MEDIA_SAVING' | translate) : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <button
                        type="button"
                        matRipple
                        class="bg-base-300 border-base-300 relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PREVIEW_MEDIA_ARIA' | translate
                        "
                    >
                        @if (media_type === 'plugin' && plugin_loading()) {
                            <div
                                class="text-base-content/70 flex h-full w-full flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="32" />
                                <p class="text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.LOADING_PLUGIN_PREVIEW'
                                            | translate
                                    }}
                                </p>
                            </div>
                        } @else if (media_type === 'plugin' && plugin()) {
                            <plugin-embed
                                class="h-full w-full"
                                [plugin]="plugin()"
                                [config]="plugin_preview_config()"
                                [auto_play]="true"
                                [(schema)]="plugin_embed_schema"
                            ></plugin-embed>
                        } @else if (media_type === 'webpage') {
                            <iframe
                                [title]="
                                    'SIGNAGE_MANAGER.MEDIA_PREVIEW' | translate
                                "
                                class="h-screen w-full object-contain object-center"
                                [src]="preview_url() | safe: 'resource'"
                            ></iframe>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail || url"
                                [alt]="
                                    model().name ||
                                    ('SIGNAGE_MANAGER.MEDIA_PREVIEW'
                                        | translate)
                                "
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
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.MEDIA_NAME_ARIA' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'webpage') {
                        <label for="media-uri">{{
                            'COMMON.URL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="url"
                                [formField]="form.media_uri"
                                placeholder="https://example.com"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.WEBPAGE_URL_ARIA'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'SIGNAGE_MANAGER.URL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    }
                    @if (can_set_thumbnail) {
                        <label for="thumbnail">{{
                            'SIGNAGE_MANAGER.THUMBNAIL' | translate
                        }}</label>
                        <div class="mb-4 flex items-center gap-4">
                            <div
                                class="bg-base-300 border-base-300 h-20 w-32 shrink-0 overflow-hidden rounded-lg border"
                            >
                                @if (custom_thumbnail()) {
                                    <img
                                        class="h-full w-full object-contain"
                                        [src]="custom_thumbnail()"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else if (item.thumbnail_id) {
                                    <img
                                        class="h-full w-full object-contain"
                                        auth
                                        [source]="thumbnail"
                                        [alt]="
                                            'SIGNAGE_MANAGER.THUMBNAIL'
                                                | translate
                                        "
                                    />
                                } @else {
                                    <div
                                        class="text-base-content/50 flex h-full w-full items-center justify-center px-2 text-center text-xs"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.THUMBNAIL_NONE'
                                                | translate
                                        }}
                                    </div>
                                }
                            </div>
                            <button
                                btn
                                type="button"
                                class="inverse bg-base-100"
                                [disabled]="thumbnail_loading()"
                                (click)="thumbnail_input.click()"
                            >
                                {{
                                    (thumbnail_loading()
                                        ? 'SIGNAGE_MANAGER.THUMBNAIL_LOADING'
                                        : 'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                    ) | translate
                                }}
                            </button>
                            @if (custom_thumbnail()) {
                                <button
                                    btn
                                    type="button"
                                    class="clear"
                                    (click)="custom_thumbnail.set('')"
                                >
                                    {{ 'COMMON.CLEAR' | translate }}
                                </button>
                            }
                            <input
                                #thumbnail_input
                                type="file"
                                class="sr-only"
                                accept="image/*"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.THUMBNAIL_CHOOSE'
                                        | translate
                                "
                                (change)="setThumbnail($event)"
                            />
                        </div>
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
                    <div class="flex items-center gap-4">
                        <label for="play-time" class="m-0 w-auto min-w-0">
                            {{
                                'SIGNAGE_MANAGER.MEDIA_PLAY_TIME' | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (model().play_time) {
                                {{
                                    model().play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else {
                                <span class="text-base-content/70">
                                    {{ 'COMMON.DEFAULT' | translate }}({{
                                        (item.video_length
                                            ? item.video_length / 1000
                                            : 5
                                        ) | mediaDuration
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
                        'SIGNAGE_MANAGER.ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.animation"
                            [placeholder]="'COMMON.DEFAULT' | translate"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.ANIMATION' | translate
                            "
                        >
                            <mat-option [value]="0">{{
                                'COMMON.DEFAULT' | translate
                            }}</mat-option>
                            <mat-option [value]="1">{{
                                'SIGNAGE_MANAGER.ANIM_CUT' | translate
                            }}</mat-option>
                            <mat-option [value]="2">{{
                                'SIGNAGE_MANAGER.ANIM_CROSS_FADE' | translate
                            }}</mat-option>
                            <mat-option [value]="3">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_TOP' | translate
                            }}</mat-option>
                            <mat-option [value]="4">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT' | translate
                            }}</mat-option>
                            <mat-option [value]="5">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT' | translate
                            }}</mat-option>
                            <mat-option [value]="6">{{
                                'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM' | translate
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
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.MEDIA_DESCRIPTION_ARIA'
                                    | translate
                            "
                        ></textarea>
                    </mat-form-field>
                    <label for="tags">{{ 'COMMON.TAGS' | translate }}</label>
                    <item-list-field
                        name="tags"
                        [formField]="form.tags"
                        [options]="tag_options"
                        [placeholder]="'COMMON.TAGS' | translate"
                    ></item-list-field>
                    @if (media_type === 'plugin' && plugin_loading()) {
                        <div
                            class="bg-base-200/60 mb-2 flex items-center gap-3 rounded-lg p-4"
                        >
                            <mat-spinner diameter="24" />
                            <p class="m-0 text-sm opacity-70">
                                {{
                                    'SIGNAGE_MANAGER.LOADING_PLUGIN_DETAILS'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else if (active_plugin_schema()) {
                        <label>{{
                            'SIGNAGE_MANAGER.PLUGIN_PARAMETERS' | translate
                        }}</label>
                        <div class="bg-base-200/60 mb-2 rounded-lg p-4">
                            <schema-form
                                [schema]="active_plugin_schema()"
                                [formField]="form.plugin_params"
                            ></schema-form>
                        </div>
                    }
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'SIGNAGE_MANAGER.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'FORM.EXPIRES_AT' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
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
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSliderModule,
        AuthenticatedImageDirective,
        MediaDurationPipe,
        SchemaFormComponent,
        PluginEmbedComponent,
        ItemListFieldComponent,
    ],
})
export class MediaEditModalComponent implements OnDestroy {
    private _data = inject<MediaEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<MediaEditModalComponent>>(MatDialogRef);

    @ViewChild(SchemaFormComponent) public schema_form: SchemaFormComponent;

    public readonly loading = signal(false);
    public readonly item = this._data.media;
    public readonly tag_options = this._data.tag_options || [];
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
        this._data.file_thumbnail ||
        playlistMediaThumbnailUrl(this._data.media);
    public readonly plugin_embed_schema = signal<Record<
        string,
        unknown
    > | null>(null);
    public readonly active_plugin_schema = computed(() =>
        this._resolvePluginSchema(),
    );
    public readonly preview_url = signal('');
    /** Thumbnail image picked by the user, as a data URL */
    public readonly custom_thumbnail = signal('');
    public readonly thumbnail_loading = signal(false);
    private readonly _plugin_embed = viewChild(PluginEmbedComponent);
    public readonly model = signal<MediaEditFormModel>({
        name: this._data.file?.name || this._data.media.name || '',
        media_uri: this._data.media.media_uri || '',
        description: this._data.media.description || '',
        animation: this._data.media.animation ?? MediaAnimation.Default,
        start_time: this._data.media.start_time || 0,
        play_time: this._data.media.play_time || 0,
        tags: this._data.media.tags || [],
        plugin_params: this._data.media.plugin_params || {},
        valid_from: this._data.media.valid_from
            ? this._data.media.valid_from * 1000
            : null,
        valid_until: this._data.media.valid_until
            ? this._data.media.valid_until * 1000
            : null,
    });
    public readonly form = form(this.model, (path) => {
        required(path.name);
        required(path.media_uri, {
            when: () => this.media_type === 'webpage',
        });
    });

    private _file_url: string;
    private _preview_url_timeout?: ReturnType<typeof setTimeout>;

    public readonly preview = () =>
        this._data.preview({
            media_uri: this.url,
            media_type: this.media_type,
            name: this.model().name,
            plugin_id: this.item.plugin_id || this.plugin()?.id,
            plugin_params: this.plugin_config(),
        });

    public readonly plugin_config = computed(() => ({
        ...(this.plugin()?.defaults || {}),
        ...schemaDefaults(this.active_plugin_schema()),
        ...(this.model().plugin_params || {}),
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

    /**
     * Webpages and plugins have no file to capture a frame from, and a cross
     * origin page cannot be rendered to a canvas, so their thumbnail has to be
     * supplied by hand.
     */
    public get can_set_thumbnail() {
        return (
            !!this._data.generateThumbnail &&
            (this.media_type === 'webpage' || this.media_type === 'plugin')
        );
    }

    public get url() {
        if (this.media_type === 'webpage') {
            return this.model().media_uri || this.item.media_uri;
        }
        if (this.item.id) return this.item.media_url;
        if (this.item.media_uri) return this.item.media_uri;
        if (this._file_url) return this._file_url;
        this._file_url = URL.createObjectURL(this.file);
        return this._file_url;
    }

    constructor() {
        const save_hotkey = inject(HotkeysService).listen(['KeyS'], () =>
            this.saveMedia(),
        );
        inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
        if (this.media_type === 'webpage') {
            this.preview_url.set(this.item.media_uri || this.item.media_url);
            effect((onCleanup) => {
                const url = this.model().media_uri;
                clearTimeout(this._preview_url_timeout);
                this._preview_url_timeout = setTimeout(
                    () => this.preview_url.set(url || ''),
                    1500,
                );
                onCleanup(() => clearTimeout(this._preview_url_timeout));
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
        // Plugin and embed schema resolve asynchronously, so seed the form
        // with their default values whenever they change
        effect(() => {
            const defaults = {
                ...(this.plugin()?.defaults || {}),
                ...schemaDefaults(this.active_plugin_schema()),
            };
            if (!objectHasKeys(defaults)) return;
            this.model.update((model) => ({
                ...model,
                plugin_params: {
                    ...defaults,
                    ...(model.plugin_params || {}),
                },
            }));
        });
    }

    private _resolvePluginSchema(): Record<string, unknown> | null {
        return (
            pluginSchema(this.plugin_embed_schema()) ||
            pluginSchema(this.plugin()?.params)
        );
    }

    private async _loadPluginDetails() {
        const plugin = await this._data.loadPlugin?.().catch(() => undefined);
        if (plugin) this.plugin.set(plugin);
        this.plugin_loading.set(false);
    }

    public ngOnDestroy() {
        if (this._file_url) URL.revokeObjectURL(this._file_url);
        clearTimeout(this._preview_url_timeout);
    }

    public async setThumbnail(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        // Clear the input so picking the same file again still fires `change`
        input.value = '';
        if (!file) return;
        this.thumbnail_loading.set(true);
        const image = await this._data
            .generateThumbnail(file)
            .catch(() => '')
            .finally(() => this.thumbnail_loading.set(false));
        if (image) this.custom_thumbnail.set(image);
    }

    /**
     * Ask the embedded plugin to render its own thumbnail. Captured from the
     * live preview so it reflects the config the user just set. Plugins that
     * predate the capability return nothing and are saved exactly as before.
     */
    private async _capturePluginThumbnail() {
        if (this.media_type !== 'plugin') return '';
        const embed = this._plugin_embed();
        if (!embed?.canProvideThumbnail()) return '';
        return embed.requestThumbnail(1280, 720).catch(() => '');
    }

    public async saveMedia() {
        await submit(this.form, async () => {
            if (this.schema_form && !this.schema_form.isValid()) return;
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            const form_value = this.model();
            const new_media: any = {
                ...this.item,
                ...form_value,
            };
            if (this.plugin()) {
                new_media.plugin_id = this.item.plugin_id || this.plugin().id;
            }
            if (this.media_type === 'plugin') {
                const plugin_config = this.plugin_config();
                if (objectHasKeys(plugin_config)) {
                    new_media.plugin_params = plugin_config;
                } else {
                    delete new_media.plugin_params;
                }
            } else if (form_value.plugin_params) {
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
            try {
                if (this.item.id) {
                    if (this.custom_thumbnail()) {
                        new_media.thumbnail_image = this.custom_thumbnail();
                    }
                    await this._data.onEdit(this.item.id, new_media);
                } else {
                    const thumbnail =
                        this.custom_thumbnail() ||
                        (await this._capturePluginThumbnail());
                    await this._data.onAdd(
                        this.file,
                        new SignageMedia(new_media),
                        this._data.file_metadata,
                        thumbnail,
                    );
                }
            } catch (error) {
                notifyError(
                    i18n('SIGNAGE_MANAGER.MEDIA_SAVE_ERROR', {
                        error: mediaSaveErrorMessage(error),
                    }),
                );
                return;
            } finally {
                this._dialog_ref.disableClose = false;
                this.loading.set(false);
            }
            this._dialog_ref.close();
            notifySuccess(i18n('SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS'));
        });
    }
}
