import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { SignageService } from '../signage.service';

@Component({
    selector: 'zone-content',
    template: `
        @if (selected_zone()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3 lg:flex-row">
                    <div
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border lg:min-w-0"
                        [class.tablet-hidden]="activeTab() === 'displays'"
                        [class.tablet-full]="activeTab() === 'playlists'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase opacity-60"
                            >
                                <icon class="text-lg">playlist_play</icon>
                                Playlists ({{ zone_playlists().length }})
                            </h5>
                            <button
                                icon
                                matRipple
                                matTooltip="Add playlist"
                                (click)="addPlaylist()"
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
                                        class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
                                        [routerLink]="[
                                            '/playlists',
                                            playlist.id,
                                        ]"
                                    >
                                        <icon
                                            class="shrink-0 text-xl opacity-60"
                                            >playlist_play</icon
                                        >
                                        <div class="min-w-0 flex-1">
                                            <div
                                                class="truncate text-sm font-medium"
                                            >
                                                {{ playlist.name }}
                                            </div>
                                            @if (playlist.description) {
                                                <div
                                                    class="truncate text-xs opacity-50"
                                                >
                                                    {{ playlist.description }}
                                                </div>
                                            }
                                        </div>
                                        @if (!playlist.enabled) {
                                            <span
                                                class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                            >
                                                Disabled
                                            </span>
                                        }
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
                                        No playlists assigned to this zone.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border lg:min-w-0"
                        [class.tablet-hidden]="activeTab() === 'playlists'"
                        [class.tablet-full]="activeTab() === 'displays'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="flex flex-1 items-center gap-2 font-medium tracking-wider uppercase opacity-60"
                            >
                                <icon class="text-lg">tv</icon>
                                Displays ({{ zone_displays().length }})
                            </h5>
                            <button
                                icon
                                matRipple
                                matTooltip="Add display"
                                (click)="addDisplay()"
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
                                    <div
                                        class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
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
                                                    class="truncate text-xs opacity-50"
                                                >
                                                    {{ display.description }}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            } @else {
                                <div
                                    class="flex flex-col items-center justify-center space-y-2 p-6 opacity-30"
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
            <div
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
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
    imports: [MatRippleModule, MatTooltipModule, RouterLink, IconComponent],
})
export class ZoneContentComponent {
    private readonly _service = inject(SignageService);

    public readonly activeTab = input<'playlists' | 'displays'>('playlists');
    public readonly selected_zone = this._service.selected_zone;

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

    public addPlaylist() {
        const zone = this.selected_zone();
        if (zone) this._service.addPlaylistToZone(zone);
    }

    public addDisplay() {
        const zone = this.selected_zone();
        if (zone) this._service.addDisplayToZone(zone);
    }
}
