import { Component, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { playlistStatus } from '../signage-playlist.util';
import { PlaylistStatusBadgeComponent } from './playlist-status-badge.component';
import { PlaylistThumbnailComponent } from './playlist-thumbnail.component';

/**
 * Playlists assigned to a display or a zone, with their status, a link to
 * each playlist, and add and remove buttons for users who can update.
 */
@Component({
    selector: 'assigned-playlists-panel',
    template: `
        <div class="border-base-300 flex items-center gap-2 border-b px-4 py-3">
            <h5
                class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
            >
                <icon class="text-lg">playlist_play</icon>
                {{
                    'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                        | translate
                            : { count: playlists().length }
                            : playlists().length
                }}
            </h5>
            @if (can_update()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP' | translate
                    "
                    (click)="add.emit()"
                    [attr.aria-label]="add_label() | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
        <div class="gap-2 p-2">
            @if (playlists().length > 0) {
                @for (playlist of playlists(); track playlist.id) {
                    <div
                        class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pr-2 pl-1"
                    >
                        <a
                            matRipple
                            class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                            [routerLink]="['/playlists', playlist.id]"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                    | translate: { name: playlist.name }
                            "
                        >
                            <playlist-thumbnail
                                [playlist]="playlist"
                                class="border-base-200 relative h-12 w-12 shrink-0 overflow-hidden rounded-md border"
                            />
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ playlist.name }}
                                </div>
                                <div class="mt-1 flex flex-wrap gap-1">
                                    @if (!playlist.enabled) {
                                        <playlist-status-badge
                                            status="disabled"
                                        />
                                    }
                                    <playlist-status-badge
                                        [status]="getStatus(playlist)"
                                    />
                                </div>
                                @if (playlist.description) {
                                    <div
                                        class="text-base-content/70 mt-0.5 truncate text-xs"
                                    >
                                        {{ playlist.description }}
                                    </div>
                                }
                            </div>
                        </a>
                        @if (can_update()) {
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP'
                                        | translate
                                "
                                (click)="remove.emit(playlist.id)"
                                [attr.aria-label]="
                                    remove_label()
                                        | translate: { name: playlist.name }
                                "
                            >
                                <icon>close</icon>
                            </button>
                        }
                    </div>
                }
            } @else if (loading()) {
                <div class="text-base-content/70 p-6 text-center" role="status">
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (error()) {
                <load-error (retry)="retry.emit()" />
            } @else {
                <div
                    class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                >
                    <icon class="text-4xl">playlist_remove</icon>
                    <p class="text-sm">
                        {{ empty_label() | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    host: { class: 'block' },
    imports: [
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        PlaylistStatusBadgeComponent,
        PlaylistThumbnailComponent,
    ],
})
export class AssignedPlaylistsPanelComponent {
    private readonly _playlist_service = inject(SignagePlaylistService);

    public readonly playlists = input.required<readonly SignagePlaylist[]>();
    /** Shows the loading state in place of the empty state */
    public readonly loading = input(false);
    /** Shows a retry in place of the empty state */
    public readonly error = input(false);
    public readonly can_update = input(false);
    /** Translation key of the add button's accessible name */
    public readonly add_label = input.required<string>();
    /** Translation key of each remove button's accessible name, given `name` */
    public readonly remove_label = input.required<string>();
    /** Translation key of the text with no playlists */
    public readonly empty_label = input.required<string>();

    public readonly add = output();
    /** Emits the id of the playlist to remove */
    public readonly remove = output<string>();
    public readonly retry = output();

    public getStatus(playlist: SignagePlaylist) {
        return playlistStatus(
            playlist,
            this._playlist_service.playlist_approval_status(),
            this._playlist_service.playlist_approval_requested_status(),
        );
    }
}
