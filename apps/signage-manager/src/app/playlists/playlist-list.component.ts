import {
    afterRenderEffect,
    Component,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { IntersectDirective } from '../shared/intersect.directive';
import { PlaylistThumbnailComponent } from '../shared/playlist-thumbnail.component';
import { SignageService } from '../signage.service';

type PlaylistStatus =
    | 'expired'
    | 'pending'
    | 'awaiting_approval'
    | 'awaiting_review'
    | null;

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
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
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
                        [class.text-primary-content]="
                            selected()?.id === playlist.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== playlist.id
                        "
                        [routerLink]="['/playlists', playlist.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                | translate: { name: playlist.name }
                        "
                    >
                        <playlist-thumbnail
                            [playlist]="playlist"
                            class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
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
                                    <span
                                        class="bg-base-200 shrink-0 rounded px-1.5 py-0.5"
                                    >
                                        {{ 'COMMON.DISABLED' | translate }}
                                    </span>
                                }
                                @switch (getStatus(playlist)) {
                                    @case ('expired') {
                                        <span
                                            class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('pending') {
                                        <span
                                            class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{ 'COMMON.PENDING' | translate }}
                                        </span>
                                    }
                                    @case ('awaiting_review') {
                                        <span
                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-base-300 shrink-0 rounded px-1.5 py-0.5"
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
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
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
        `,
    ],
    imports: [
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
        PlaylistThumbnailComponent,
    ],
})
export class PlaylistListComponent {
    private readonly _service = inject(SignageService);
    private readonly _playlist_items =
        viewChildren<ElementRef<HTMLAnchorElement>>('playlist_item');

    public readonly search = this._service.playlist_search_term;
    public readonly playlists = this._service.filtered_playlists;
    public readonly selected = this._service.selected_playlist;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;
    public readonly playlist_approval_requested_status =
        this._service.playlist_approval_requested_status;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._service.playlists_has_more;

    constructor() {
        afterRenderEffect({
            earlyRead: () => {
                const selected_id = this.selected()?.id;
                if (!selected_id) return;
                const playlist_index = this.playlists().findIndex(
                    ({ id }) => id === selected_id,
                );
                return this._playlist_items()[playlist_index]?.nativeElement;
            },
            write: (selected_item) => {
                selected_item()?.scrollIntoView?.({
                    behavior: 'instant',
                    block: 'nearest',
                    inline: 'nearest',
                });
            },
        });
    }

    public loadMore() {
        this._service.loadMorePlaylists();
    }

    public getStatus(playlist: SignagePlaylist): PlaylistStatus {
        const now_s = Math.floor(Date.now() / 1000);
        if (playlist.valid_until && playlist.valid_until < now_s)
            return 'expired';
        if (playlist.valid_from && playlist.valid_from > now_s)
            return 'pending';
        const approvals = this.playlist_approval_status();
        const approval_requests = this.playlist_approval_requested_status();
        if (
            playlist.id in approvals &&
            !approvals[playlist.id] &&
            approval_requests[playlist.id]
        )
            return 'awaiting_review';
        if (playlist.id in approvals && !approvals[playlist.id])
            return 'awaiting_approval';
        return null;
    }

    public editPlaylist(playlist: SignagePlaylist) {
        this._service.editPlaylist(playlist);
    }

    public removePlaylist(playlist: SignagePlaylist) {
        this._service.removePlaylist(playlist);
    }
}
