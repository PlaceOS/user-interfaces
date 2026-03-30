import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
} from '@placeos/components';
import {
    listSignagePlaylistMedia,
    MediaAnimation,
    SignageMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';

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
                    aria-label="Close media preview"
                >
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="bg-base-100 z-0 mx-2 mb-2 flex w-[calc(100%-1rem)] flex-1 gap-2 overflow-hidden rounded-sm max-md:flex-col"
            >
                <section
                    class="bg-base-200 border-base-300 flex flex-1 items-center justify-center overflow-hidden rounded-lg border"
                >
                    @if (item.media_type === 'image') {
                        <img
                            auth
                            [source]="media_url"
                            [alt]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                        />
                    } @else if (item.media_type === 'video') {
                        <video
                            auth
                            [source]="media_url"
                            controls
                            [attr.aria-label]="item.name"
                            class="h-full max-h-full w-full max-w-full object-contain"
                        ></video>
                    } @else if (
                        item.media_type === 'webpage' ||
                        item.media_type === 'plugin'
                    ) {
                        <iframe
                            [src]="safe_url()"
                            [title]="item.name"
                            class="h-full w-full border-0 bg-white"
                        ></iframe>
                    } @else {
                        <div
                            class="text-base-content/70 flex flex-col items-center justify-center space-y-2"
                        >
                            <icon class="text-8xl">hide_image</icon>
                            <p>Preview not available</p>
                        </div>
                    }
                </section>
                <aside
                    class="border-base-300 bg-base-100 border-base-200 w-96 shrink-0 overflow-y-auto rounded-lg border max-md:w-full"
                >
                    <div class="space-y-5 p-5">
                        @if (item.description) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    Description
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
                                Type
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
                                {{ type_label() }}
                            </span>
                        </div>
                        @if (item.play_time) {
                            <div>
                                <div
                                    class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                >
                                    Duration
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
                                Animation
                            </div>
                            <div class="text-sm">
                                {{ animation_label() }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                Orientation
                            </div>
                            <div class="text-sm capitalize">
                                {{ item.orientation || 'Unspecified' }}
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                            >
                                Playlists
                            </div>
                            @if (loading_playlists()) {
                                <div class="text-base-content/70 text-sm">
                                    Loading...
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
                                    Not in any playlists
                                </div>
                            }
                        </div>
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
        CommonModule,
        MatRippleModule,
        MatDialogModule,
        RouterLink,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
    ],
})
export class MediaPreviewModalComponent implements OnInit {
    private readonly _data: SignageMedia = inject(MAT_DIALOG_DATA);
    private readonly _service = inject(SignageService);
    private readonly _sanitizer = inject(DomSanitizer);

    public readonly item = this._data;
    public readonly media_url = this.item.media_url || this.item.media_uri;

    public readonly containing_playlists = signal<SignagePlaylist[]>([]);
    public readonly loading_playlists = signal(true);

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });

    public readonly safe_url = computed(() => {
        if (
            this.item.media_type === 'webpage' ||
            this.item.media_type === 'plugin'
        ) {
            return this._sanitizer.bypassSecurityTrustResourceUrl(
                this.item.media_uri,
            );
        }
        return null;
    });

    public readonly type_label = computed(() => {
        switch (this.item.media_type) {
            case 'video':
                return 'Video';
            case 'image':
                return 'Image';
            case 'webpage':
                return 'Webpage';
            case 'plugin':
                return 'Plugin';
            default:
                return this.item.media_type;
        }
    });

    public readonly animation_label = computed(() => {
        switch (this.item.animation) {
            case MediaAnimation.Cut:
                return 'Cut';
            case MediaAnimation.CrossFade:
                return 'Cross Fade';
            case MediaAnimation.SlideTop:
                return 'Slide Top';
            case MediaAnimation.SlideLeft:
                return 'Slide Left';
            case MediaAnimation.SlideRight:
                return 'Slide Right';
            case MediaAnimation.SlideBottom:
                return 'Slide Bottom';
            default:
                return 'Default';
        }
    });

    public async ngOnInit() {
        const all_playlists = await firstValueFrom(this._service.playlists);
        const matching: SignagePlaylist[] = [];
        for (const playlist of all_playlists) {
            try {
                const media_list = await lastValueFrom(
                    listSignagePlaylistMedia(playlist.id),
                );
                if (media_list.items?.includes(this.item.id)) {
                    matching.push(playlist);
                }
            } catch {
                // Skip playlists that fail to load
            }
        }
        this.containing_playlists.set(matching);
        this.loading_playlists.set(false);
    }
}
