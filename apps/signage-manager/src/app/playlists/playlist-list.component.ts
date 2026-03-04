import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

type PlaylistStatus = 'expired' | 'pending' | 'awaiting_approval' | null;

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
                        placeholder="Search playlists"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                </mat-form-field>
            </div>
            @if (playlists().length > 0) {
                @for (playlist of playlists(); track playlist.id) {
                    <a
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
                    >
                        <div
                            class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                        >
                            @if (
                                playlist_thumbnail_media()[playlist.id]?.length
                            ) {
                                @for (
                                    media of playlist_thumbnail_media()[
                                        playlist.id
                                    ];
                                    track media;
                                    let i = $index;
                                    let len = $count
                                ) {
                                    <img
                                        auth
                                        [source]="media"
                                        class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                                        [style.top]="
                                            0.3 -
                                            (len - 1) * 0.125 +
                                            (len - 1 - i) * 0.25 +
                                            'rem'
                                        "
                                        [style.left]="
                                            0.3 -
                                            (len - 1) * 0.125 +
                                            (len - 1 - i) * 0.25 +
                                            'rem'
                                        "
                                        [style.z-index]="i"
                                    />
                                }
                            } @else {
                                <div
                                    class="text-base-content/35 flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-2xl">playlist_play</icon>
                                </div>
                            }
                        </div>
                        <div class="min-w-0 flex-1 pr-2">
                            <div
                                class="flex items-center gap-2 truncate font-medium"
                            >
                                {{ playlist.name }}
                            </div>
                            <div class="flex flex-wrap gap-1">
                                @if (!playlist.enabled) {
                                    <span
                                        class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                    >
                                        Disabled
                                    </span>
                                }
                                @switch (getStatus(playlist)) {
                                    @case ('expired') {
                                        <span
                                            class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                        >
                                            Expired
                                        </span>
                                    }
                                    @case ('pending') {
                                        <span
                                            class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                        >
                                            Pending
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                        >
                                            Awaiting Approval
                                        </span>
                                    }
                                }
                            </div>
                            @if (playlist.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-50]="
                                        selected()?.id !== playlist.id
                                    "
                                    [class.opacity-70]="
                                        selected()?.id === playlist.id
                                    "
                                >
                                    {{ playlist.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
            } @else {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">playlist_play</icon>
                    <p>No playlists found.</p>
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
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class PlaylistListComponent {
    private readonly _service = inject(SignageService);

    public readonly search = this._service.playlist_search_term;
    public readonly playlists = this._service.filtered_playlists;
    public readonly selected = this._service.selected_playlist;
    public readonly playlist_thumbnail_media =
        this._service.playlist_thumbnail_media;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;

    constructor() {
        effect(() => {
            this._service.queuePlaylistMeta(this.playlists());
        });
    }

    public getStatus(playlist: SignagePlaylist): PlaylistStatus {
        const now_s = Math.floor(Date.now() / 1000);
        if (playlist.valid_until && playlist.valid_until < now_s)
            return 'expired';
        if (playlist.valid_from && playlist.valid_from > now_s)
            return 'pending';
        const approvals = this.playlist_approval_status();
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
