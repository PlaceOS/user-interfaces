import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { PlaylistThumbnailComponent } from '../shared/playlist-thumbnail.component';
import { TemplateMappingsComponent } from '../shared/template-mappings.component';
import { SignageService } from '../signage.service';

type PlaylistStatus = 'expired' | 'pending' | 'awaiting_approval' | null;

@Component({
    selector: 'zone-content',
    template: `
        @if (selected_zone()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3">
                    <div
                        id="zone-playlists-panel"
                        role="tabpanel"
                        aria-labelledby="zone-playlists-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        [class.hidden]="activeTab() !== 'playlists'"
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
                                            : { count: zone_playlists().length }
                                            : zone_playlists().length
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
                                        'SIGNAGE_MANAGER.ADD_PLAYLIST_TO_ZONE_ARIA'
                                            | translate
                                    "
                                >
                                    <icon>add</icon>
                                </button>
                            }
                        </div>
                        <div class="gap-2 p-2">
                            @if (zone_playlists().length > 0) {
                                @for (
                                    playlist of zone_playlists();
                                    track playlist.id
                                ) {
                                    <div
                                        class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pr-2 pl-1"
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
                                                    @if (!playlist.enabled) {
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
                                                    'SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_ZONE'
                                                        | translate
                                                            : {
                                                                  name: playlist.name,
                                                              }
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
                                    class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                >
                                    <icon class="text-4xl"
                                        >playlist_remove</icon
                                    >
                                    <p class="text-sm">
                                        {{
                                            'SIGNAGE_MANAGER.NO_PLAYLISTS_ZONE'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        id="zone-displays-panel"
                        role="tabpanel"
                        aria-labelledby="zone-displays-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        [class.hidden]="activeTab() !== 'displays'"
                    >
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
                                            : { count: zone_displays().length }
                                            : zone_displays().length
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
                                        'SIGNAGE_MANAGER.ADD_DISPLAY_TO_ZONE_ARIA'
                                            | translate
                                    "
                                >
                                    <icon>add</icon>
                                </button>
                            }
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
                                                    {{ display.description }}
                                                </div>
                                            }
                                        </div>
                                    </a>
                                }
                            } @else {
                                <div
                                    class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                >
                                    <icon class="text-4xl">tv_off</icon>
                                    <p class="text-sm">
                                        {{
                                            'SIGNAGE_MANAGER.NO_DISPLAYS_ZONE'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    @if (activeTab() === 'templates') {
                        <div
                            id="zone-templates-panel"
                            role="tabpanel"
                            aria-labelledby="zone-templates-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <template-mappings
                                target_type="zone"
                                [target_id]="selected_zone().id"
                            />
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">layers</icon>
                <p>{{ 'SIGNAGE_MANAGER.ZONE_SELECT_DETAILS' | translate }}</p>
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
        TranslatePipe,
        PlaylistThumbnailComponent,
        TemplateMappingsComponent,
    ],
})
export class ZoneContentComponent {
    private readonly _service = inject(SignageService);

    public readonly activeTab = input<'playlists' | 'displays' | 'templates'>(
        'playlists',
    );
    public readonly selected_zone = this._service.selected_zone;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;
    public readonly can_update = this._service.can_update;

    private readonly _playlists = this._service.playlists;
    private readonly _displays = this._service.displays;

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

    public addPlaylist() {
        const zone = this.selected_zone();
        if (zone) this._service.addPlaylistToZone(zone);
    }

    public removePlaylist(event: Event, playlist_id: string) {
        event.preventDefault();
        event.stopPropagation();
        const zone = this.selected_zone();
        if (zone) this._service.removePlaylistFromZone(zone, playlist_id);
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
