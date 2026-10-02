import { DatePipe } from '@angular/common';
import {
    Component,
    computed,
    inject,
    linkedSignal,
    resource,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { MediaAnimation, SignagePlaylist } from '@placeos/ts-client';
import { SignageDisplayService } from '../displays/signage-display.service';
import { SignageSharedWithComponent } from '../shared/signage-shared-with.component';
import { SignageContextService } from '../signage-context.service';
import { SignageInventoryService } from '../signage-inventory.service';
import {
    playlistNextPlayLabels,
    playlistScheduleExpiryTooltip,
    playlistScheduleLabel,
} from '../signage-playlist.util';
import { SignageZoneService } from '../zones/signage-zone.service';
import { SignagePlaylistService } from './signage-playlist.service';

const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;

function playlistSchedules(playlist: SignagePlaylist) {
    const legacy_playlist = playlist as SignagePlaylist & {
        play_at?: number;
        play_cron?: string;
        play_period?: number;
        play_takeover?: boolean;
    };
    if (playlist.schedules?.length) return playlist.schedules;
    return [
        {
            play_at: legacy_playlist.play_at,
            play_cron: legacy_playlist.play_cron || '0 0 * * *',
            play_period:
                legacy_playlist.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES,
            play_takeover: !!legacy_playlist.play_takeover,
        },
    ];
}

@Component({
    selector: 'playlist-item-details',
    template: `
        @if (playlist()) {
            <div
                class="border-base-300 flex h-full min-w-60 flex-col overflow-hidden border-l lg:w-84"
            >
                <mat-tab-group
                    class="flex-1 overflow-hidden"
                    [selectedIndex]="active_tab()"
                    (selectedIndexChange)="active_tab.set($event)"
                >
                    <mat-tab [label]="'COMMON.DETAILS' | translate">
                        <div class="h-full overflow-auto">
                            <div class="flex w-full flex-col gap-2 p-4">
                                <div class="w-full">
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="text-sm font-medium">
                                        {{ playlist().name }}
                                    </div>
                                </div>
                                @if (playlist().description) {
                                    <div class="w-full">
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'COMMON.DESCRIPTION' | translate
                                            }}
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
                                        {{ 'COMMON.STATUS' | translate }}
                                    </div>
                                    @if (playlist().enabled) {
                                        <span
                                            class="bg-success text-success-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.ENABLED' | translate }}
                                        </span>
                                    } @else {
                                        <span
                                            class="bg-warning text-warning-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.DISABLED' | translate }}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.PLAYBACK'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{
                                            (playlist().random
                                                ? 'SIGNAGE_MANAGER.SHUFFLE'
                                                : 'SIGNAGE_MANAGER.SEQUENTIAL'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_DURATION'
                                                | translate
                                        }}
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
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ animation_label() | translate }}
                                    </div>
                                </div>
                                @if (playlist().orientation) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.ORIENTATION'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm capitalize">
                                            {{
                                                playlist().orientation ||
                                                    ('COMMON.LOCATION_UNSPECIFIED'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TAB_ITEMS'
                                                | translate
                                        }}
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
                                            {{
                                                'SIGNAGE_MANAGER.VALID_FROM'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_from() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().valid_until) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{ 'FORM.EXPIRES_AT' | translate }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_until() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (!playlist().distribution) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.SCHEDULE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="space-y-1 text-sm">
                                            @for (
                                                schedule of schedule_labels();
                                                track schedule
                                            ) {
                                                <div
                                                    [matTooltip]="
                                                        schedule_expiry_tooltips()[
                                                            $index
                                                        ]
                                                    "
                                                    [matTooltipDisabled]="
                                                        !schedule_expiry_tooltips()[
                                                            $index
                                                        ]
                                                    "
                                                >
                                                    {{ schedule }}
                                                </div>
                                            }
                                        </div>
                                        <div class="mt-2">
                                            <div
                                                class="text-base-content/60 mb-1 text-xs font-medium tracking-wide uppercase"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NEXT_5_PLAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="text-base-content/80 space-y-0.5 font-mono text-xs leading-tight"
                                            >
                                                @for (
                                                    play_time of next_play_sessions();
                                                    track play_time
                                                ) {
                                                    <div class="truncate">
                                                        {{ play_time }}
                                                    </div>
                                                } @empty {
                                                    <div
                                                        class="text-base-content/60"
                                                    >
                                                        {{
                                                            'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                                                | translate
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                @if (playlist().play_count) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.PLAY_COUNT'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().play_count }}
                                        </div>
                                    </div>
                                }
                                <signage-shared-with
                                    class="mt-2"
                                    type="playlists"
                                    [item_id]="playlist().id"
                                    [group_id]="selected_group_id()"
                                    [allow_unshare]="can_update()"
                                    [compact_label]="true"
                                />
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.ZONES_COUNT'
                                    | translate
                                        : { count: playlist_zones().length }
                                        : playlist_zones().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_zones()
                                                          .length,
                                                  }
                                                : playlist_zones().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
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
                                                    'SIGNAGE_MANAGER.OPEN_ZONE'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      zone.display_name ||
                                                                      zone.name,
                                                              }
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
                                                    default
                                                    error
                                                    type="button"
                                                    class="m-1 text-sm"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeZone($event, zone)
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          zone.display_name ||
                                                                          zone.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
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
                                            {{
                                                'SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                    | translate
                                        : { count: playlist_displays().length }
                                        : playlist_displays().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">tv</icon>
                                    {{
                                        'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_displays()
                                                          .length,
                                                  }
                                                : playlist_displays().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
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
                                                    'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      display.display_name ||
                                                                      display.name,
                                                              }
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
                                                    default
                                                    error
                                                    class="m-1 text-sm"
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeDisplay(
                                                            $event,
                                                            display
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          display.display_name ||
                                                                          display.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
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
                                            {{
                                                'SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST'
                                                    | translate
                                            }}
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
                <p>
                    {{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS' | translate }}
                </p>
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
        DatePipe,
        MediaDurationPipe,
        TranslatePipe,
        SignageSharedWithComponent,
    ],
})
export class PlaylistItemDetailsComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _inventory_service = inject(SignageInventoryService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _zone_service = inject(SignageZoneService);

    public readonly playlist = this._playlist_service.selected_playlist;
    public readonly active_tab = linkedSignal<SignagePlaylist | null, number>({
        source: this.playlist,
        computation: (playlist, previous) =>
            previous && playlist?.id === previous.source?.id
                ? previous.value
                : 0,
    });

    private readonly _items = this._playlist_service.playlist_media_items;
    private readonly _displays = this._display_service.displays;
    private readonly _zones = this._zone_service.zones;
    // The loaded pages may not hold every display and zone that uses the
    // playlist, so read them all. Loaded once for each data change, not for
    // each playlist. The loaded pages are shown until this loads.
    private readonly _inventory = resource({
        params: () =>
            this.playlist()?.id
                ? { change: this._context.data_change() }
                : undefined,
        loader: () => this._inventory_service.loadSignageInventory(),
    });

    public readonly item_count = computed(() => this._items().length);
    public readonly can_update = this._context.can_update;
    public readonly selected_group_id = computed(
        () => this._context.selected_group()?.group.id || '',
    );

    public readonly playlist_displays = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        const displays = this._inventory.hasValue()
            ? this._inventory.value().displays
            : this._displays();
        return displays.filter((d) => d.playlists?.includes(pl.id));
    });

    public readonly playlist_zones = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        const zones = this._inventory.hasValue()
            ? this._inventory.value().zones
            : this._zones();
        return zones.filter((z) => z.playlists?.includes(pl.id));
    });

    public readonly animation_label = computed(() => {
        const pl = this.playlist();
        if (!pl) return 'COMMON.DEFAULT';
        switch (pl.default_animation) {
            case MediaAnimation.Cut:
                return 'SIGNAGE_MANAGER.ANIM_CUT';
            case MediaAnimation.CrossFade:
                return 'SIGNAGE_MANAGER.ANIM_CROSS_FADE';
            case MediaAnimation.SlideTop:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_TOP';
            case MediaAnimation.SlideLeft:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT';
            case MediaAnimation.SlideRight:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT';
            case MediaAnimation.SlideBottom:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM';
            default:
                return 'COMMON.DEFAULT';
        }
    });

    public readonly valid_from = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_from) return '';
        return pl.valid_from * 1000;
    });

    public readonly valid_until = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_until) return '';
        return pl.valid_until * 1000;
    });

    public readonly schedule_labels = computed(() => {
        const pl = this.playlist();
        if (!pl || pl.distribution) return [];
        return playlistSchedules(pl).map((schedule) =>
            playlistScheduleLabel(schedule),
        );
    });

    public readonly schedule_expiry_tooltips = computed(() => {
        const pl = this.playlist();
        if (!pl || pl.distribution) return [];
        return playlistSchedules(pl).map((schedule) =>
            playlistScheduleExpiryTooltip(schedule),
        );
    });

    public readonly next_play_sessions = computed(() => {
        const pl = this.playlist();
        if (!pl || pl.distribution) return [];
        return playlistNextPlayLabels(playlistSchedules(pl));
    });

    public addDisplay() {
        const playlist = this.playlist();
        if (playlist) this._display_service.addDisplayToPlaylist(playlist);
    }

    public addZone() {
        const playlist = this.playlist();
        if (playlist) this._zone_service.addZoneToPlaylist(playlist);
    }

    public removeDisplay(event: Event, display: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist)
            this._display_service.removeDisplayFromPlaylist(playlist, display);
    }

    public removeZone(event: Event, zone: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist) this._zone_service.removeZoneFromPlaylist(playlist, zone);
    }
}
