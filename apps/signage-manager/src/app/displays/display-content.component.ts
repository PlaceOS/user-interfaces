import { Component, computed, inject, input } from '@angular/core';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { AssignedPlaylistsPanelComponent } from '../shared/assigned-playlists-panel.component';
import { LinkedItemRowComponent } from '../shared/linked-item-row.component';
import { TemplateMappingsComponent } from '../shared/template-mappings.component';
import { SignageContextService } from '../signage-context.service';
import { DisplayScheduleComponent } from './display-schedule.component';
import { SignageDisplayService } from './signage-display.service';

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
                            <assigned-playlists-panel
                                add_label="SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA"
                                remove_label="SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY"
                                empty_label="SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY"
                                [playlists]="display_playlists()"
                                [loading]="
                                    has_assigned_playlists() &&
                                    playlists_loading()
                                "
                                [error]="
                                    has_assigned_playlists() &&
                                    playlists_error()
                                "
                                [can_update]="can_update()"
                                (add)="addPlaylist()"
                                (remove)="removePlaylist($event)"
                                (retry)="reloadPlaylists()"
                            />
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
                                        <linked-item-row
                                            icon="layers"
                                            open_label="SIGNAGE_MANAGER.OPEN_ZONE"
                                            [link]="['/zones', zone.id]"
                                            [name]="
                                                zone.display_name || zone.name
                                            "
                                            [description]="zone.description"
                                        />
                                    }
                                } @else if (display_zones_loading()) {
                                    <div
                                        class="text-base-content/70 p-6 text-center"
                                        role="status"
                                    >
                                        {{ 'COMMON.LOADING' | translate }}
                                    </div>
                                } @else if (display_zones_error()) {
                                    <load-error (retry)="reloadZones()" />
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
        IconComponent,
        LoadErrorComponent,
        AssignedPlaylistsPanelComponent,
        DisplayScheduleComponent,
        LinkedItemRowComponent,
        TemplateMappingsComponent,
        TranslatePipe,
    ],
})
export class DisplayContentComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _playlist_service = inject(SignagePlaylistService);

    public readonly activeTab = input<
        'schedule' | 'templates' | 'playlists' | 'zones'
    >('schedule');
    public readonly selected_display = this._display_service.selected_display;
    public readonly can_update = this._context.can_update;

    public readonly display_playlists = computed(() =>
        this._playlist_service.playlistsById(
            this.selected_display()?.playlists || [],
        ),
    );
    public readonly playlists_loading =
        this._playlist_service.playlists_loading;
    public readonly playlists_error = this._playlist_service.playlists_error;
    // The tab reads the playlist ids of the display and resolves them from the
    // shared playlist list. The list state matters only when there are ids.
    public readonly has_assigned_playlists = computed(
        () => !!this.selected_display()?.playlists?.length,
    );

    public reloadPlaylists() {
        this._playlist_service.reloadPlaylists();
    }

    public readonly display_zones =
        this._display_service.selected_display_zones;
    public readonly display_zones_loading =
        this._display_service.selected_display_zones_loading;
    public readonly display_zones_error =
        this._display_service.selected_display_zones_error;

    public reloadZones() {
        this._display_service.reloadSelectedDisplayZones();
    }

    public addPlaylist() {
        const display = this.selected_display();
        if (display) this._display_service.addPlaylistToDisplay(display);
    }

    public removePlaylist(playlist_id: string) {
        const display = this.selected_display();
        if (display)
            this._display_service.removePlaylistFromDisplay(
                display,
                playlist_id,
            );
    }
}
