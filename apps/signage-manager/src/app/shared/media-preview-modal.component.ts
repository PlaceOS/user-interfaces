import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltip } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
    PluginConfigPayload,
    PluginEmbedComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    MediaAnimation,
    showSignageMedia,
    SignageMedia,
    SignagePlaylist,
    SignagePlugin,
} from '@placeos/ts-client';
import {
    playlistMediaThumbnailUrl,
    playlistMediaUrl,
} from '../signage-playlist.util';
import { SignageService } from '../signage.service';
import { SignageSharedWithComponent } from './signage-shared-with.component';

interface MediaPreviewModalData {
    media: SignageMedia;
    plugin?: SignagePlugin;
    group_id?: string;
}

@Component({
    selector: 'media-preview-modal',
    template: `
        <div
            class="bg-base-100 flex h-full flex-col items-center overflow-auto"
        >
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="truncate text-xl font-medium">{{ item.name }}</h2>
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CLOSE_MEDIA_PREVIEW' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="bg-base-100 z-0 mx-2 mb-2 flex w-[calc(100%-1rem)] flex-1 gap-2 overflow-hidden rounded-sm max-md:flex-col"
            >
                <section
                    class="bg-base-200 border-base-300 relative flex flex-1 items-center justify-center overflow-hidden rounded-lg border"
                >
                    @if (thumbnail_url && (media_loading() || media_error())) {
                        <img
                            auth
                            [source]="thumbnail_url"
                            [alt]="item.name + ' thumbnail'"
                            class="absolute inset-0 h-full w-full object-contain"
                        />
                    }
                    @if (media_error()) {
                        <div
                            class="bg-base-200/80 absolute inset-0 z-10 flex flex-col items-center justify-center space-y-2 p-4 text-center"
                            aria-live="assertive"
                        >
                            <icon class="text-error text-6xl">error</icon>
                            <p class="text-base font-medium">
                                Failed to load media preview.
                            </p>
                            <p class="text-base-content/70 max-w-sm text-sm">
                                {{
                                    'SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE'
                                        | translate
                                }}
                            </p>
                        </div>
                    } @else if (media_loading()) {
                        <div
                            class="bg-base-200/60 absolute inset-0 z-10 flex items-center justify-center"
                            aria-live="polite"
                        >
                            <mat-spinner [diameter]="48"></mat-spinner>
                            <span class="sr-only">{{
                                'COMMON.LOADING' | translate
                            }}</span>
                        </div>
                    }
                    @if (item.media_type === 'image') {
                        <img
                            auth
                            [source]="media_url"
                            [alt]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                            [class.opacity-0]="media_loading() || media_error()"
                            (load)="handleMediaLoaded()"
                            (error)="handleMediaLoadError()"
                        />
                    } @else if (item.media_type === 'video') {
                        <video
                            auth
                            [source]="media_url"
                            controls
                            [attr.aria-label]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                            [class.opacity-0]="media_loading() || media_error()"
                            (loadeddata)="handleMediaLoaded()"
                            (error)="handleMediaLoadError()"
                        ></video>
                    } @else if (item.media_type === 'webpage') {
                        <iframe
                            [src]="safe_url()"
                            [title]="item.name"
                            class="h-full w-full border-0 bg-white"
                            [class.opacity-0]="media_loading()"
                            (load)="handleMediaLoaded()"
                        ></iframe>
                    } @else if (item.media_type === 'plugin' && plugin) {
                        <plugin-embed
                            class="h-full w-full"
                            [plugin]="plugin"
                            [config]="plugin_preview_config()"
                            [auto_play]="true"
                        ></plugin-embed>
                    } @else {
                        <div
                            class="text-base-content/70 flex flex-col items-center justify-center space-y-2"
                        >
                            <icon class="text-8xl">hide_image</icon>
                            <p>
                                {{
                                    'SIGNAGE_MANAGER.PREVIEW_UNAVAILABLE'
                                        | translate
                                }}
                            </p>
                        </div>
                    }
                </section>
                <aside
                    class="border-base-300 bg-base-100 w-72 shrink-0 overflow-y-auto rounded-lg border max-md:w-full"
                >
                    <div class="relative space-y-5 p-5">
                        <button
                            icon
                            default
                            class="absolute top-2 right-2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.MEDIA_EDIT' | translate
                            "
                            matTooltipPosition="left"
                            (click)="edit()"
                        >
                            <icon>edit</icon>
                        </button>
                        @if (item.description) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'COMMON.DESCRIPTION' | translate }}
                                </div>
                                <div class="text-sm">
                                    {{ item.description }}
                                </div>
                            </div>
                        }
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'COMMON.TYPE' | translate }}
                            </div>
                            <span
                                class="rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="item.media_type === 'video'"
                                [class.text-info-content]="
                                    item.media_type === 'video'
                                "
                                [class.bg-warning]="item.media_type === 'image'"
                                [class.text-warning-content]="
                                    item.media_type === 'image'
                                "
                                [class.bg-success]="
                                    item.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    item.media_type === 'webpage'
                                "
                                [class.bg-error]="item.media_type === 'plugin'"
                                [class.text-error-content]="
                                    item.media_type === 'plugin'
                                "
                            >
                                {{ type_label() | translate }}
                            </span>
                        </div>
                        @if (item.play_time) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'FORM.DURATION' | translate }}
                                </div>
                                <div class="font-mono text-sm">
                                    {{ item.play_time / 1000 | mediaDuration }}
                                </div>
                            </div>
                        }
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.ANIMATION' | translate }}
                            </div>
                            <div class="text-sm">
                                {{ animation_label() | translate }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.ORIENTATION' | translate }}
                            </div>
                            <div class="text-sm capitalize">
                                {{
                                    item.orientation ||
                                        ('COMMON.LOCATION_UNSPECIFIED'
                                            | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                {{
                                    'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate
                                }}
                            </div>
                            @if (loading_playlists()) {
                                <div class="text-base-content/70 text-sm">
                                    {{ 'COMMON.LOADING' | translate }}
                                </div>
                            } @else if (containing_playlists().length > 0) {
                                <div class="space-y-1">
                                    @for (
                                        playlist of containing_playlists();
                                        track playlist.id
                                    ) {
                                        <a
                                            matRipple
                                            mat-dialog-close
                                            class="hover:bg-base-200 flex items-center space-x-2 rounded px-2 py-1 no-underline"
                                            [routerLink]="[
                                                '/playlists',
                                                playlist.id,
                                            ]"
                                            [queryParams]="{
                                                tab: 'items',
                                                item: item.id,
                                            }"
                                        >
                                            <icon
                                                class="text-base-content/60 text-xl"
                                                >playlist_play</icon
                                            >
                                            <span class="text-sm">{{
                                                playlist.name
                                            }}</span>
                                        </a>
                                    }
                                </div>
                            } @else {
                                <div class="text-base-content/70 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.NOT_IN_PLAYLISTS'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                        @if (item.play_count) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.PLAY_COUNT' | translate
                                    }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{ item.play_count || '0' }}
                                </div>
                            </div>
                        }
                        @if (item.valid_from) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.VALID_FROM' | translate
                                    }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{
                                        item.valid_from * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        }
                        @if (item.valid_until) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    {{ 'FORM.EXPIRES_AT' | translate }}
                                </div>
                                <div class="text-sm capitalize">
                                    {{
                                        item.valid_until * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        }
                        <signage-shared-with
                            type="media"
                            [item_id]="item.id"
                            [group_id]="group_id"
                            [compact_label]="true"
                        ></signage-shared-with>
                    </div>
                </aside>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        RouterLink,
        IconComponent,
        AuthenticatedImageDirective,
        DatePipe,
        MediaDurationPipe,
        PluginEmbedComponent,
        TranslatePipe,
        MatTooltip,
        SignageSharedWithComponent,
    ],
})
export class MediaPreviewModalComponent implements OnInit {
    private readonly _data: MediaPreviewModalData = inject(MAT_DIALOG_DATA);
    private readonly _service = inject(SignageService);
    private readonly _sanitizer = inject(DomSanitizer);

    public readonly item = this._data.media;
    public readonly group_id = this._data.group_id || '';
    public readonly plugin = this._data.plugin;
    public readonly media_url = playlistMediaUrl(this.item);
    public readonly thumbnail_url = playlistMediaThumbnailUrl(this.item);
    public readonly media_loading = signal(this._hasLoadableMedia());
    public readonly media_error = signal(false);

    public readonly containing_playlists = signal<SignagePlaylist[]>([]);
    public readonly loading_playlists = signal(true);
    public readonly edit = () => this._service.editMedia(this.item);

    public readonly safe_url = computed(() => {
        if (this.item.media_type === 'webpage') {
            return this._sanitizer.bypassSecurityTrustResourceUrl(
                this.media_url,
            );
        }
        return null;
    });

    public readonly plugin_config = computed(() => ({
        ...(this.plugin?.defaults || {}),
        ...(this.item.plugin_params || {}),
    }));

    public readonly plugin_preview_config = computed<PluginConfigPayload>(
        () => ({
            instance_id: this.item.id || 'signage-manager-preview',
            config: this.plugin_config(),
            timing: { scheduled_duration_ms: 15000 },
        }),
    );

    public readonly type_label = computed(() => {
        switch (this.item.media_type) {
            case 'video':
                return 'COMMON.VIDEO';
            case 'image':
                return 'COMMON.IMAGE';
            case 'webpage':
                return 'COMMON.WEBPAGE';
            case 'plugin':
                return 'SIGNAGE_MANAGER.TYPE_PLUGIN';
            default:
                return this.item.media_type;
        }
    });

    public readonly animation_label = computed(() => {
        switch (this.item.animation) {
            case MediaAnimation.Cut:
                return 'SIGNAGE_MANAGER.ANIM_CUT';
            case MediaAnimation.CrossFade:
                return 'SIGNAGE_MANAGER.ANIM_CROSS_FADE';
            case MediaAnimation.SlideTop:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_TOP';
            case MediaAnimation.SlideLeft:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT';
            case MediaAnimation.SlideRight:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT';
            case MediaAnimation.SlideBottom:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM';
            default:
                return 'COMMON.DEFAULT';
        }
    });

    public async ngOnInit() {
        try {
            const media = await showSignageMedia(
                this.item.id,
                this.group_id ? { group_id: this.group_id } : {},
            );
            this.containing_playlists.set(media.playlists);
        } catch {
            this.containing_playlists.set([]);
        } finally {
            this.loading_playlists.set(false);
        }
    }

    public handleMediaLoaded() {
        this.media_loading.set(false);
        this.media_error.set(false);
    }

    public handleMediaLoadError() {
        this.media_loading.set(false);
        this.media_error.set(true);
    }

    private _hasLoadableMedia() {
        return (
            !!this.media_url &&
            ['image', 'video', 'webpage'].includes(this.item.media_type)
        );
    }
}
