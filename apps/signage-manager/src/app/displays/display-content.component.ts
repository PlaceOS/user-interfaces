import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { PlaylistThumbnailComponent } from '../shared/playlist-thumbnail.component';
import { TemplateMappingsComponent } from '../shared/template-mappings.component';
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
                            id="display-schedule-panel"
                            role="tabpanel"
                            aria-labelledby="display-schedule-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <display-schedule />
                        </div>
                    }

                    @if (activeTab() === 'templates') {
                        <div
                            id="display-templates-panel"
                            role="tabpanel"
                            aria-labelledby="display-templates-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <template-mappings
                                target_type="display"
                                [target_id]="selected_display().id"
                            />
                        </div>
                    }

                    @if (activeTab() === 'playlists') {
                        <!-- Playlists panel -->
                        <div
                            id="display-playlists-panel"
                            role="tabpanel"
                            aria-labelledby="display-playlists-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">playlist_play</icon>
                                    {{
                                        'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                            | translate
                                                : {
                                                      count: display_playlists()
                                                          .length,
                                                  }
                                                : display_playlists().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addPlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_playlists().length > 0) {
                                    @for (
                                        playlist of display_playlists();
                                        track playlist.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/playlists',
                                                    playlist.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                                        | translate
                                                            : {
                                                                  name: playlist.name,
                                                              }
                                                "
                                            >
                                                <playlist-thumbnail
                                                    [playlist]="playlist"
                                                    class="border-base-200 relative h-12 w-12 shrink-0 overflow-hidden rounded-md border"
                                                />
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{ playlist.name }}
                                                    </div>
                                                    <div
                                                        class="mt-1 flex flex-wrap gap-1"
                                                    >
                                                        @if (
                                                            !playlist.enabled
                                                        ) {
                                                            <span
                                                                class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'COMMON.DISABLED'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                        @switch (
                                                            getStatus(playlist)
                                                        ) {
                                                            @case ('expired') {
                                                                <span
                                                                    class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                                            | translate
                                                                    }}
                                                                </span>
                                                            }
                                                            @case ('pending') {
                                                                <span
                                                                    class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'COMMON.PENDING'
                                                                            | translate
                                                                    }}
                                                                </span>
                                                            }
                                                            @case ('awaiting_approval') {
                                                                <span
                                                                    class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                                >
                                                                    {{
                                                                        'SIGNAGE_MANAGER.STATUS_AWAITING_APPROVAL'
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
                                                            {{
                                                                playlist.description
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
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removePlaylist(
                                                            $event,
                                                            playlist.id
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY'
                                                            | translate
                                                                : {
                                                                      name: playlist.name,
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
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                    >
                                        <icon class="text-4xl"
                                            >playlist_remove</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    @if (activeTab() === 'zones') {
                        <!-- Zones panel -->
                        <div
                            id="display-zones-panel"
                            role="tabpanel"
                            aria-labelledby="display-zones-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
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
                                                      count: display_zones()
                                                          .length,
                                                  }
                                                : display_zones().length
                                    }}
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
                                                        class="text-base-content/70 truncate text-xs"
                                                    >
                                                        {{ zone.description }}
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                    >
                                        <icon class="text-4xl"
                                            >layers_clear</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.DISPLAY_NO_ZONES'
                                                    | translate
                                            }}
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
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">tv</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.DISPLAY_SELECT_DETAILS' | translate }}
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
        MatTooltipModule,
        RouterLink,
        IconComponent,
        DisplayScheduleComponent,
        TemplateMappingsComponent,
        TranslatePipe,
        PlaylistThumbnailComponent,
    ],
})
export class DisplayContentComponent {
    private readonly _service = inject(SignageService);

    public readonly activeTab = input<
        'schedule' | 'templates' | 'playlists' | 'zones'
    >('schedule');
    public readonly selected_display = this._service.selected_display;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;
    public readonly can_update = this._service.can_update;

    private readonly _playlists = this._service.playlists;
    private readonly _zones = this._service.all_zones;

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
