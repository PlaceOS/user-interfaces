import {
    Component,
    computed,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageMediaService } from '../media/signage-media.service';
import { FileDropDirective } from '../shared/file-drop.directive';
import { IntersectDirective } from '../shared/intersect.directive';
import { PlaylistStatusBadgeComponent } from '../shared/playlist-status-badge.component';
import { PlaylistThumbnailComponent } from '../shared/playlist-thumbnail.component';
import { scrollSelectionIntoView } from '../shared/scroll-selection.util';
import { SignageContextService } from '../signage-context.service';
import { playlistStatus } from '../signage-playlist.util';
import { SignagePlaylistService } from './signage-playlist.service';

@Component({
    selector: 'playlist-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div
                class="border-base-300 bg-base-100 sticky top-0 z-10 border-b p-2"
            >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (playlists().length > 0) {
                @for (playlist of playlists(); track playlist.id) {
                    <a
                        #playlist_item
                        matRipple
                        class="border-base-300 relative z-0 flex w-full cursor-pointer items-center gap-3 border-b px-2 py-1 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === playlist.id"
                        [class.bg-warning/10]="
                            !playlist.enabled && selected()?.id !== playlist.id
                        "
                        [class.text-primary-content]="
                            selected()?.id === playlist.id
                        "
                        [class.hover:bg-base-200]="
                            playlist.enabled && selected()?.id !== playlist.id
                        "
                        [class.hover:bg-warning/20]="
                            !playlist.enabled && selected()?.id !== playlist.id
                        "
                        [routerLink]="['/playlists', playlist.id]"
                        queryParamsHandling="merge"
                        (fileDrop)="uploadFiles(playlist, $event)"
                        [fileDropDisabled]="!can_upload()"
                        [attr.data-disabled-playlist]="
                            !playlist.enabled ? true : null
                        "
                        [attr.aria-label]="
                            ('SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                | translate: { name: playlist.name }) +
                            (!playlist.enabled
                                ? ', ' + ('COMMON.DISABLED' | translate)
                                : '')
                        "
                    >
                        <playlist-thumbnail
                            [playlist]="playlist"
                            class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                            [class.grayscale]="!playlist.enabled"
                            [class.opacity-50]="!playlist.enabled"
                        />
                        <div class="min-w-0 flex-1 pr-2">
                            <div
                                class="flex items-center gap-2 truncate font-medium"
                            >
                                {{ playlist.name }}
                            </div>
                            <div
                                class="flex flex-wrap gap-1 text-[0.625rem] font-medium uppercase"
                            >
                                @if (!playlist.enabled) {
                                    <playlist-status-badge status="disabled" />
                                }
                                <playlist-status-badge
                                    [status]="getStatus(playlist)"
                                />
                            </div>
                            @if (playlist.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== playlist.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === playlist.id
                                    "
                                >
                                    {{ playlist.description }}
                                </div>
                            }
                        </div>
                        @if (playlist.distribution) {
                            <icon class="mx-1">p2p</icon>
                        }
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else if (error()) {
                    <load-error (retry)="reload()" />
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else if (loading()) {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ 'COMMON.LOADING' | translate }}</p>
                </div>
            } @else if (error()) {
                <load-error class="flex-1" (retry)="reload()" />
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">playlist_play</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLISTS' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            /* currentColor shows on the selected playlist too */
            .file-drop-over {
                outline: 2px dashed currentColor;
                outline-offset: -4px;
            }
        `,
    ],
    imports: [
        PlaylistStatusBadgeComponent,
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        IntersectDirective,
        PlaylistThumbnailComponent,
        FileDropDirective,
    ],
})
export class PlaylistListComponent {
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _context = inject(SignageContextService);
    private readonly _media_service = inject(SignageMediaService);
    private readonly _playlist_items =
        viewChildren<ElementRef<HTMLAnchorElement>>('playlist_item');

    public readonly search = this._playlist_service.playlist_search_term;
    public readonly playlists = this._playlist_service.filtered_playlists;
    public readonly selected = this._playlist_service.selected_playlist;
    public readonly playlist_approval_status =
        this._playlist_service.playlist_approval_status;
    public readonly playlist_approval_requested_status =
        this._playlist_service.playlist_approval_requested_status;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._playlist_service.playlists_has_more;
    public readonly loading = this._playlist_service.playlists_loading;
    public readonly error = this._playlist_service.playlists_error;
    /** Files dropped on a playlist upload, then join the playlist */
    public readonly can_upload = computed(
        () => this._context.can_create() && this._context.can_update(),
    );

    constructor() {
        scrollSelectionIntoView(
            this.playlists,
            this._playlist_items,
            this.selected,
        );
    }

    public loadMore() {
        this._playlist_service.loadMorePlaylists();
    }

    public reload() {
        this._playlist_service.reloadPlaylists();
    }

    /** Upload files dropped on a playlist, then add them to it */
    public async uploadFiles(playlist: SignagePlaylist, files: File[]) {
        await this._media_service.uploadFilesToPlaylist(playlist.id, files);
    }

    public getStatus(playlist: SignagePlaylist) {
        return playlistStatus(
            playlist,
            this.playlist_approval_status(),
            this.playlist_approval_requested_status(),
        );
    }
}
