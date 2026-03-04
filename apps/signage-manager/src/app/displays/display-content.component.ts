import { Component, computed, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { DisplayScheduleComponent } from './display-schedule.component';

type PlaylistStatus = 'expired' | 'pending' | 'awaiting_approval' | null;

@Component({
    selector: 'display-content',
    template: `
        @if (selected_display()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3">
                    @if (activeTab() === 'schedule') {
                        <!-- Schedule panel -->
                        <div
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <display-schedule />
                        </div>
                    }

                    @if (activeTab() === 'playlists') {
                        <!-- Playlists panel -->
                        <div
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase opacity-60"
                                >
                                    <icon class="text-lg">playlist_play</icon>
                                    Playlists ({{ display_playlists().length }})
                                </h5>
                                <button
                                    icon
                                    matRipple
                                    class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                    matTooltip="Add playlist"
                                    (click)="addPlaylist()"
                                >
                                    <icon>add</icon>
                                </button>
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_playlists().length > 0) {
                                    @for (
                                        playlist of display_playlists();
                                        track playlist.id
                                    ) {
                                        <a
                                            matRipple
                                            class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1 no-underline transition-colors"
                                            [routerLink]="[
                                                '/playlists',
                                                playlist.id,
                                            ]"
                                        >
                                            <div
                                                class="border-base-200 relative h-12 w-12 shrink-0 overflow-hidden rounded-md border"
                                            >
                                                @if (
                                                    playlist_thumbnail_media()[
                                                        playlist.id
                                                    ]?.length
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
                                                                (len - 1) *
                                                                    0.125 +
                                                                (len - 1 - i) *
                                                                    0.25 +
                                                                'rem'
                                                            "
                                                            [style.left]="
                                                                0.3 -
                                                                (len - 1) *
                                                                    0.125 +
                                                                (len - 1 - i) *
                                                                    0.25 +
                                                                'rem'
                                                            "
                                                            [style.z-index]="i"
                                                        />
                                                    }
                                                } @else {
                                                    <div
                                                        class="text-base-content/35 flex h-full w-full items-center justify-center"
                                                    >
                                                        <icon class="text-2xl">
                                                            playlist_play
                                                        </icon>
                                                    </div>
                                                }
                                            </div>
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate text-sm font-medium"
                                                >
                                                    {{ playlist.name }}
                                                </div>
                                                <div
                                                    class="mt-1 flex flex-wrap gap-1"
                                                >
                                                    @if (!playlist.enabled) {
                                                        <span
                                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                        >
                                                            Disabled
                                                        </span>
                                                    }
                                                    @switch (
                                                        getStatus(playlist)
                                                    ) {
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
                                                        @case (
                                                            'awaiting_approval'
                                                        ) {
                                                            <span
                                                                class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                Awaiting
                                                                Approval
                                                            </span>
                                                        }
                                                    }
                                                </div>
                                                @if (playlist.description) {
                                                    <div
                                                        class="mt-0.5 truncate text-xs opacity-50"
                                                    >
                                                        {{
                                                            playlist.description
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                                                matTooltip="Remove playlist"
                                                (click)="
                                                    removePlaylist(
                                                        $event,
                                                        playlist.id
                                                    )
                                                "
                                            >
                                                <icon class="text-error"
                                                    >close</icon
                                                >
                                            </button>
                                        </a>
                                    }
                                } @else {
                                    <div
                                        class="flex flex-col items-center justify-center space-y-2 p-6 opacity-30"
                                    >
                                        <icon class="text-4xl"
                                            >playlist_remove</icon
                                        >
                                        <p class="text-sm">
                                            No playlists assigned to this
                                            display.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    @if (activeTab() === 'zones') {
                        <!-- Zones panel -->
                        <div
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase opacity-60"
                                >
                                    <icon class="text-lg">layers</icon>
                                    Zones ({{ display_zones().length }})
                                </h5>
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_zones().length > 0) {
                                    @for (
                                        zone of display_zones();
                                        track zone.id
                                    ) {
                                        <a
                                            matRipple
                                            class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
                                            [routerLink]="['/zones', zone.id]"
                                        >
                                            <icon
                                                class="shrink-0 text-xl opacity-60"
                                                >layers</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate text-sm font-medium"
                                                >
                                                    {{
                                                        zone.display_name ||
                                                            zone.name
                                                    }}
                                                </div>
                                                @if (zone.description) {
                                                    <div
                                                        class="truncate text-xs opacity-50"
                                                    >
                                                        {{ zone.description }}
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    }
                                } @else {
                                    <div
                                        class="flex flex-col items-center justify-center space-y-2 p-6 opacity-30"
                                    >
                                        <icon class="text-4xl"
                                            >layers_clear</icon
                                        >
                                        <p class="text-sm">
                                            This display is not in any zones.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">tv</icon>
                <p>Select a display to view its details.</p>
            </div>
        }
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
        MatTooltipModule,
        RouterLink,
        AuthenticatedImageDirective,
        IconComponent,
        DisplayScheduleComponent,
    ],
})
export class DisplayContentComponent {
    private readonly _service = inject(SignageService);

    public readonly activeTab = input<'schedule' | 'playlists' | 'zones'>(
        'schedule',
    );
    public readonly selected_display = this._service.selected_display;
    public readonly playlist_thumbnail_media =
        this._service.playlist_thumbnail_media;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _zones = toSignal(this._service.zones, {
        initialValue: [],
    });

    public readonly display_playlists = computed(() => {
        const display = this.selected_display();
        if (!display) return [];
        return this._playlists().filter((p) =>
            display.playlists?.includes(p.id),
        );
    });

    public readonly display_zones = computed(() => {
        const display = this.selected_display();
        if (!display) return [];
        return this._zones().filter((z) => display.zones?.includes(z.id));
    });

    constructor() {
        effect(() => {
            this._service.queuePlaylistMeta(this.display_playlists());
        });
    }

    public addPlaylist() {
        const display = this.selected_display();
        if (display) this._service.addPlaylistToDisplay(display);
    }

    public removePlaylist(event: Event, playlist_id: string) {
        event.preventDefault();
        event.stopPropagation();
        const display = this.selected_display();
        if (display)
            this._service.removePlaylistFromDisplay(display, playlist_id);
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
}
