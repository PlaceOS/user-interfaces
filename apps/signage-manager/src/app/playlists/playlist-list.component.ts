import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import {
    listSignagePlaylistMedia,
    SignagePlaylist,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';

type PlaylistStatus = 'expired' | 'pending' | 'awaiting_approval' | null;

@Component({
    selector: 'playlist-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r"
        >
            <div class="border-base-300 border-b p-2">
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
                        class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === playlist.id"
                        [class.text-primary-content]="
                            selected()?.id === playlist.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== playlist.id
                        "
                        [routerLink]="['/playlists', playlist.id]"
                    >
                        <icon class="shrink-0 text-2xl">playlist_play</icon>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2">
                                <div class="truncate font-medium">
                                    {{ playlist.name }}
                                </div>
                            </div>
                            <div class="mt-1 flex flex-wrap gap-1">
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
        IconComponent,
    ],
})
export class PlaylistListComponent {
    private readonly _service = inject(SignageService);

    public readonly search = this._service.playlist_search_term;
    public readonly playlists = this._service.filtered_playlists;
    public readonly selected = this._service.selected_playlist;

    private readonly _approval_status = signal<Record<string, boolean>>({});

    constructor() {
        effect(() => {
            const list = this.playlists();
            this._loadApprovalStatus(list);
        });
    }

    public getStatus(playlist: SignagePlaylist): PlaylistStatus {
        const now_s = Math.floor(Date.now() / 1000);
        if (playlist.valid_until && playlist.valid_until < now_s)
            return 'expired';
        if (playlist.valid_from && playlist.valid_from > now_s)
            return 'pending';
        const approvals = this._approval_status();
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

    private async _loadApprovalStatus(playlists: SignagePlaylist[]) {
        const status: Record<string, boolean> = {};
        for (const playlist of playlists) {
            try {
                const media = await lastValueFrom(
                    listSignagePlaylistMedia(playlist.id),
                );
                status[playlist.id] = media.approved;
            } catch {
                // Skip playlists that fail to load
            }
        }
        this._approval_status.set(status);
    }
}
