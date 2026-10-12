import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignageMedia, SignagePlaylist } from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { IntersectDirective } from '../shared/intersect.directive';
import { PlaylistThumbnailComponent } from '../shared/playlist-thumbnail.component';
import { SignageContextService } from '../signage-context.service';
import { playlistStatus } from '../signage-playlist.util';

@Component({
    selector: 'playlist-sidebar',
    template: `
        <div
            class="border-base-300 bg-base-100 my-4 mr-4 hidden h-[calc(100%-2rem)] w-72 shrink-0 flex-col rounded-lg border md:flex"
        >
            <div class="border-base-300 border-b p-2">
                <div class="flex justify-between">
                    <div class="px-2">
                        <h4 class="text-lg font-medium">
                            {{ 'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate }}
                        </h4>
                        <p class="mb-2 text-xs opacity-60">
                            {{ 'SIGNAGE_MANAGER.DRAG_MEDIA_HINT' | translate }}
                        </p>
                    </div>
                    @if (can_create()) {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            (click)="addPlaylist()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST'
                                    | translate
                            "
                            [matTooltip]="
                                'SIGNAGE_MANAGER.NEW_PLAYLIST' | translate
                            "
                            matTooltipPosition="right"
                        >
                            <icon>add</icon>
                        </button>
                    }
                </div>
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
            <div class="flex-1 overflow-auto p-2">
                @if (filtered_playlists()?.length) {
                    @for (playlist of filtered_playlists(); track playlist.id) {
                        <a
                            [routerLink]="['/playlists', playlist.id]"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                    | translate: { name: playlist.name }
                            "
                        >
                            <div
                                cdkDropList
                                [id]="'playlist-' + $index"
                                [cdkDropListConnectedTo]="['media-list']"
                                [cdkDropListData]="playlist"
                                (cdkDropListDropped)="onDrop(playlist, $event)"
                                class="border-base-300 mb-2 flex items-center gap-3 rounded-lg border p-0.5 transition-colors"
                                matRipple
                            >
                                <playlist-thumbnail
                                    [playlist]="playlist"
                                    class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                                />
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ playlist.name }}
                                    </div>
                                    <div
                                        class="flex flex-wrap gap-1 text-[0.625rem]"
                                    >
                                        @if (!playlist.enabled) {
                                            <span
                                                class="bg-base-200 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                            >
                                                {{
                                                    'COMMON.DISABLED'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                        @switch (getStatus(playlist)) {
                                            @case ('expired') {
                                                <span
                                                    class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('pending') {
                                                <span
                                                    class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'COMMON.PENDING'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_review') {
                                                <span
                                                    class="bg-base-300 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_approval') {
                                                <span
                                                    class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'COMMON.APPROVAL_REQUIRED'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                        }
                                    </div>
                                    @if (playlist.description) {
                                        <div
                                            class="text-base-content/70 mt-0.5 truncate text-xs"
                                        >
                                            {{ playlist.description }}
                                        </div>
                                    }
                                </div>
                                @if (playlist.distribution) {
                                    <icon class="mx-2">p2p</icon>
                                }
                            </div>
                        </a>
                    }
                    @if (has_more()) {
                        <div
                            class="h-px w-full"
                            intersect
                            (intersect)="loadMore()"
                        ></div>
                    } @else if (error()) {
                        <load-error (retry)="retry()" />
                    } @else {
                        <div
                            class="text-base-content/50 bg-base-content/10 col-span-full rounded-lg p-2 text-center text-xs"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    }
                } @else if (loading()) {
                    <div class="flex items-center justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
                } @else if (error()) {
                    <load-error (retry)="retry()" />
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center p-8"
                    >
                        <icon class="text-4xl">playlist_play</icon>
                        <p class="mt-2 text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: contents;
            }

            .cdk-drop-list-dragging,
            .cdk-drop-list-receiving {
                border-color: var(--color-primary) !important;
                background-color: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    transparent
                ) !important;
            }
        `,
    ],
    imports: [
        DragDropModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        IconComponent,
        RouterLink,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        IntersectDirective,
        LoadErrorComponent,
        PlaylistThumbnailComponent,
    ],
})
export class PlaylistSidebarComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);

    public readonly can_create = this._context.can_create;
    public readonly loading = this._playlist_service.playlists_loading;
    /** Whether the last page of playlists failed to load */
    public readonly error = this._playlist_service.playlists_error;
    public readonly search = this._playlist_service.playlist_search_term;
    public readonly playlist_approval_status =
        this._playlist_service.playlist_approval_status;
    public readonly playlist_approval_requested_status =
        this._playlist_service.playlist_approval_requested_status;
    public readonly filtered_playlists =
        this._playlist_service.filtered_playlists;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._playlist_service.playlists_has_more;
    public loadMore() {
        this._playlist_service.loadMorePlaylists();
    }

    /** Load the playlists again from the first page */
    public retry() {
        this._playlist_service.reloadPlaylists();
    }

    public addPlaylist() {
        this._playlist_service.addPlaylist();
    }

    public async onDrop(
        playlist: SignagePlaylist,
        event: CdkDragDrop<SignagePlaylist, SignageMedia[]>,
    ) {
        const media = event.previousContainer.data[event.previousIndex];
        if (!playlist?.id || !media?.id) return;
        await this._playlist_service.addMediaToPlaylist(
            playlist.id,
            media.id,
            media,
        );
    }

    public getStatus(playlist: SignagePlaylist) {
        return playlistStatus(
            playlist,
            this.playlist_approval_status(),
            this.playlist_approval_requested_status(),
        );
    }
}
