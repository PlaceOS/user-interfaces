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

type PlaylistStatus = 'expired' | 'pending' | 'awaiting_approval' | null;

@Component({
    selector: 'zone-content',
    template: `
        @if (selected_zone()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3 lg:flex-row">
                    <div
                        id="zone-playlists-panel"
                        role="tabpanel"
                        aria-labelledby="zone-playlists-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border lg:min-w-0"
                        [class.tablet-hidden]="activeTab() === 'displays'"
                        [class.tablet-full]="activeTab() === 'playlists'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase text-base-content/80"
                            >
                                <icon class="text-lg">playlist_play</icon>
                                Playlists ({{ zone_playlists().length }})
                            </h5>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                matTooltip="Add playlist"
                                (click)="addPlaylist()"
                                aria-label="Add playlist to zone"
                            >
                                <icon>add</icon>
                            </button>
                        </div>
                        <div class="gap-2 p-2">
                            @if (zone_playlists().length > 0) {
                                @for (
                                    playlist of zone_playlists();
                                    track playlist.id
                                ) {
                                    <a
                                        matRipple
                                        class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1 no-underline transition-colors"
                                        [routerLink]="[
                                            '/playlists',
                                            playlist.id,
                                        ]"
                                        [attr.aria-label]="
                                            'Open playlist ' + playlist.name
                                        "
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
                                                        alt=""
                                                        class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                                                        [style.top]="
                                                            0.3 -
                                                            (len - 1) * 0.125 +
                                                            (len - 1 - i) *
                                                                0.25 +
                                                            'rem'
                                                        "
                                                        [style.left]="
                                                            0.3 -
                                                            (len - 1) * 0.125 +
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
                                                    @case (
                                                        'awaiting_approval'
                                                    ) {
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
                                                    class="mt-0.5 truncate text-xs text-base-content/70"
                                                >
                                                    {{ playlist.description }}
                                                </div>
                                            }
                                        </div>
                                    </a>
                                }
                            } @else {
                                <div
                                    class="flex flex-col items-center justify-center space-y-2 p-6 text-base-content/70"
                                >
                                    <icon class="text-4xl"
                                        >playlist_remove</icon
                                    >
                                    <p class="text-sm">
                                        No playlists assigned to this zone.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        id="zone-displays-panel"
                        role="tabpanel"
                        aria-labelledby="zone-displays-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border lg:min-w-0"
                        [class.tablet-hidden]="activeTab() === 'playlists'"
                        [class.tablet-full]="activeTab() === 'displays'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase text-base-content/80"
                            >
                                <icon class="text-lg">tv</icon>
                                Displays ({{ zone_displays().length }})
                            </h5>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                matTooltip="Add display"
                                (click)="addDisplay()"
                                aria-label="Add display to zone"
                            >
                                <icon>add</icon>
                            </button>
                        </div>
                        <div class="gap-2 p-2">
                            @if (zone_displays().length > 0) {
                                @for (
                                    display of zone_displays();
                                    track display.id
                                ) {
                                    <a
                                        matRipple
                                        class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
                                        [routerLink]="['/displays', display.id]"
                                        [attr.aria-label]="
                                            'Open display ' +
                                            (display.display_name ||
                                                display.name)
                                        "
                                    >
                                        <icon
                                            class="shrink-0 text-xl opacity-60"
                                            >tv</icon
                                        >
                                        <div class="min-w-0 flex-1">
                                            <div
                                                class="truncate text-sm font-medium"
                                            >
                                                {{
                                                    display.display_name ||
                                                        display.name
                                                }}
                                            </div>
                                            @if (display.description) {
                                                <div
                                                    class="truncate text-xs text-base-content/70"
                                                >
                                                    {{ display.description }}
                                                </div>
                                            }
                                        </div>
                                    </a>
                                }
                            } @else {
                                <div
                                    class="flex flex-col items-center justify-center space-y-2 p-6 text-base-content/70"
                                >
                                    <icon class="text-4xl">tv_off</icon>
                                    <p class="text-sm">
                                        No displays in this zone.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        } @else {
            <div class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 text-base-content/70">
                <icon class="text-6xl">layers</icon>
                <p>Select a zone to view its details.</p>
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

            .tablet-hidden {
                @media (max-width: 1023px) {
                    display: none !important;
                }
            }

            .tablet-full {
                @media (max-width: 1023px) {
                    flex: 1;
                    min-width: 0;
                }
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class ZoneContentComponent {
    private readonly _service = inject(SignageService);

    public readonly activeTab = input<'playlists' | 'displays'>('playlists');
    public readonly selected_zone = this._service.selected_zone;
    public readonly playlist_thumbnail_media =
        this._service.playlist_thumbnail_media;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _displays = toSignal(this._service.displays, {
        initialValue: [],
    });

    public readonly zone_playlists = computed(() => {
        const zone = this.selected_zone();
        if (!zone) return [];
        return this._playlists().filter((p) => zone.playlists?.includes(p.id));
    });

    public readonly zone_displays = computed(() => {
        const zone = this.selected_zone();
        if (!zone) return [];
        return this._displays().filter((d) => d.zones?.includes(zone.id));
    });

    constructor() {
        effect(() => {
            this._service.queuePlaylistMeta(this.zone_playlists());
        });
    }

    public addPlaylist() {
        const zone = this.selected_zone();
        if (zone) this._service.addPlaylistToZone(zone);
    }

    public addDisplay() {
        const zone = this.selected_zone();
        if (zone) this._service.addDisplayToZone(zone);
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
