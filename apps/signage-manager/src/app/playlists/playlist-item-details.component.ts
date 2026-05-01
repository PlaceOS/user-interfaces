import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent, MediaDurationPipe } from '@placeos/components';
import { MediaAnimation } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

@Component({
    selector: 'playlist-item-details',
    template: `
        @if (playlist()) {
            <div
                class="border-base-300 flex h-full min-w-60 flex-col overflow-hidden border-l"
            >
                <mat-tab-group
                    class="flex-1 overflow-hidden"
                    [selectedIndex]="active_tab()"
                    (selectedIndexChange)="active_tab.set($event)"
                >
                    <mat-tab label="Details">
                        <div class="h-full overflow-auto">
                            <div class="space-y-4 p-4">
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Name
                                    </div>
                                    <div class="text-sm font-medium">
                                        {{ playlist().name }}
                                    </div>
                                </div>
                                @if (playlist().description) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            Description
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().description }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Status
                                    </div>
                                    @if (playlist().enabled) {
                                        <span
                                            class="bg-success text-success-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            Enabled
                                        </span>
                                    } @else {
                                        <span
                                            class="bg-warning text-warning-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            Disabled
                                        </span>
                                    }
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Playback
                                    </div>
                                    <div class="text-sm">
                                        {{
                                            playlist().random
                                                ? 'Shuffle'
                                                : 'Sequential'
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Default Duration
                                    </div>
                                    <div class="font-mono text-sm">
                                        {{
                                            playlist().default_duration / 1000
                                                | mediaDuration
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Default Animation
                                    </div>
                                    <div class="text-sm">
                                        {{ animation_label() }}
                                    </div>
                                </div>
                                @if (playlist().orientation) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            Orientation
                                        </div>
                                        <div class="text-sm capitalize">
                                            {{
                                                playlist().orientation ||
                                                    'Unspecified'
                                            }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        Items
                                    </div>
                                    <div class="text-sm">
                                        {{ item_count() }}
                                    </div>
                                </div>
                                @if (playlist().valid_from) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            Valid From
                                        </div>
                                        <div class="text-sm">
                                            {{ valid_from() }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().valid_until) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            Valid Until
                                        </div>
                                        <div class="text-sm">
                                            {{ valid_until() }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().play_count) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            Play Count
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().play_count }}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            Displays ({{ playlist_displays().length }})
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">tv</icon>
                                    Displays ({{ playlist_displays().length }})
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                        matTooltip="Add display"
                                        (click)="addDisplay()"
                                        aria-label="Add display to playlist"
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_displays().length > 0) {
                                    @for (
                                        display of playlist_displays();
                                        track display.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/displays',
                                                    display.id,
                                                ]"
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
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                display.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                                                    matTooltip="Remove display"
                                                    (click)="
                                                        removeDisplay(
                                                            $event,
                                                            display
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'Remove display ' +
                                                        (display.display_name ||
                                                            display.name) +
                                                        ' from playlist'
                                                    "
                                                >
                                                    <icon class="text-error">
                                                        close
                                                    </icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl">tv_off</icon>
                                        <p class="text-sm">
                                            No displays use this playlist.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            Zones ({{ playlist_zones().length }})
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    Zones ({{ playlist_zones().length }})
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                        matTooltip="Add zone"
                                        (click)="addZone()"
                                        aria-label="Add zone to playlist"
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_zones().length > 0) {
                                    @for (
                                        zone of playlist_zones();
                                        track zone.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/zones',
                                                    zone.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'Open zone ' +
                                                    (zone.display_name ||
                                                        zone.name)
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >location_on</icon
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
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                zone.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    class="border-base-200 hover:bg-base-200 hover:border-base-300 mr-1 rounded-lg border hover:shadow-md"
                                                    matTooltip="Remove zone"
                                                    (click)="
                                                        removeZone($event, zone)
                                                    "
                                                    [attr.aria-label]="
                                                        'Remove zone ' +
                                                        (zone.display_name ||
                                                            zone.name) +
                                                        ' from playlist'
                                                    "
                                                >
                                                    <icon class="text-error">
                                                        close
                                                    </icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl"
                                            >location_off</icon
                                        >
                                        <p class="text-sm">
                                            No zones use this playlist.
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="border-base-300 text-base-content/70 flex min-w-60 flex-1 flex-col items-center justify-center space-y-2 border-l p-8"
            >
                <icon class="text-6xl">info</icon>
                <p>Select a playlist to view details.</p>
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
        MatTabsModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
        MediaDurationPipe,
    ],
})
export class PlaylistItemDetailsComponent {
    private readonly _service = inject(SignageService);

    public readonly playlist = this._service.selected_playlist;
    public readonly active_tab = signal(0);

    private readonly _items = toSignal(this._service.playlist_media_items$, {
        initialValue: [],
    });
    private readonly _displays = toSignal(this._service.displays, {
        initialValue: [],
    });
    private readonly _zones = toSignal(this._service.zones, {
        initialValue: [],
    });

    public readonly item_count = computed(() => this._items().length);
    public readonly can_update = this._service.can_update;

    public readonly playlist_displays = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        return this._displays().filter((d) => d.playlists?.includes(pl.id));
    });

    public readonly playlist_zones = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        return this._zones().filter((z) => z.playlists?.includes(pl.id));
    });

    public readonly animation_label = computed(() => {
        const pl = this.playlist();
        if (!pl) return 'Default';
        switch (pl.default_animation) {
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

    public readonly valid_from = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_from) return '';
        return new Date(pl.valid_from * 1000).toLocaleDateString();
    });

    public readonly valid_until = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_until) return '';
        return new Date(pl.valid_until * 1000).toLocaleDateString();
    });

    constructor() {
        effect(() => {
            this.playlist();
            this.active_tab.set(0);
        });
    }

    public addDisplay() {
        const playlist = this.playlist();
        if (playlist) this._service.addDisplayToPlaylist(playlist);
    }

    public addZone() {
        const playlist = this.playlist();
        if (playlist) this._service.addZoneToPlaylist(playlist);
    }

    public removeDisplay(event: Event, display: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist)
            this._service.removeDisplayFromPlaylist(playlist, display);
    }

    public removeZone(event: Event, zone: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist) this._service.removeZoneFromPlaylist(playlist, zone);
    }
}
