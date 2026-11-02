import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignageDisplayService } from '../displays/signage-display.service';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { AssignedPlaylistsPanelComponent } from '../shared/assigned-playlists-panel.component';
import { LinkedItemRowComponent } from '../shared/linked-item-row.component';
import { TemplateMappingsComponent } from '../shared/template-mappings.component';
import { SignageContextService } from '../signage-context.service';
import { SignageZoneService } from './signage-zone.service';

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
                        <assigned-playlists-panel
                            add_label="SIGNAGE_MANAGER.ADD_PLAYLIST_TO_ZONE_ARIA"
                            remove_label="SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_ZONE"
                            empty_label="SIGNAGE_MANAGER.NO_PLAYLISTS_ZONE"
                            [playlists]="zone_playlists()"
                            [loading]="
                                has_assigned_playlists() && playlists_loading()
                            "
                            [error]="
                                has_assigned_playlists() && playlists_error()
                            "
                            [can_update]="can_update()"
                            (add)="addPlaylist()"
                            (remove)="removePlaylist($event)"
                            (retry)="reloadPlaylists()"
                        />
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
                                    <linked-item-row
                                        icon="tv"
                                        open_label="SIGNAGE_MANAGER.OPEN_DISPLAY"
                                        [link]="['/displays', display.id]"
                                        [name]="
                                            display.display_name || display.name
                                        "
                                        [description]="display.description"
                                    />
                                }
                            } @else if (zone_displays_loading()) {
                                <div
                                    class="text-base-content/70 p-6 text-center"
                                    role="status"
                                >
                                    {{ 'COMMON.LOADING' | translate }}
                                </div>
                            } @else if (zone_displays_error()) {
                                <load-error (retry)="reloadDisplays()" />
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
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        AssignedPlaylistsPanelComponent,
        LinkedItemRowComponent,
        TemplateMappingsComponent,
    ],
})
export class ZoneContentComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _zone_service = inject(SignageZoneService);

    public readonly activeTab = input<'playlists' | 'displays' | 'templates'>(
        'playlists',
    );
    public readonly selected_zone = this._zone_service.selected_zone;
    public readonly can_update = this._context.can_update;

    public readonly zone_playlists = computed(() =>
        this._playlist_service.playlistsById(
            this.selected_zone()?.playlists || [],
        ),
    );
    public readonly playlists_loading =
        this._playlist_service.playlists_loading;
    public readonly playlists_error = this._playlist_service.playlists_error;
    // The tab reads the playlist ids of the zone and resolves them from the
    // shared playlist list. The list state matters only when there are ids.
    public readonly has_assigned_playlists = computed(
        () => !!this.selected_zone()?.playlists?.length,
    );

    public reloadPlaylists() {
        this._playlist_service.reloadPlaylists();
    }

    public readonly zone_displays =
        this._display_service.selected_zone_displays;
    public readonly zone_displays_loading =
        this._display_service.selected_zone_displays_loading;
    public readonly zone_displays_error =
        this._display_service.selected_zone_displays_error;

    public reloadDisplays() {
        this._display_service.reloadSelectedZoneDisplays();
    }

    public addPlaylist() {
        const zone = this.selected_zone();
        if (zone) this._zone_service.addPlaylistToZone(zone);
    }

    public removePlaylist(playlist_id: string) {
        const zone = this.selected_zone();
        if (zone) this._zone_service.removePlaylistFromZone(zone, playlist_id);
    }

    public addDisplay() {
        const zone = this.selected_zone();
        if (zone) this._display_service.addDisplayToZone(zone);
    }
}
