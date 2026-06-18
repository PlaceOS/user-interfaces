import { Injectable, inject, signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AsyncHandler, BuildingLevel, Space } from '@placeos/common';
import { MapPinComponent } from '@placeos/components';
import { ViewAction, ViewerFeature, ViewerStyles } from '@placeos/common';
import { RoomConfirmService } from './room-confirm.service';
import { RoomTileComponent } from './room-tile.component';

export interface Locatable {
    id: string;
    name: string;
    map_id: string;
    level: BuildingLevel;
    zones?: string[];
}

export interface MapsList {
    map_id: string;
    level: string;
}

@Injectable({
    providedIn: 'root',
})
export class MapService extends AsyncHandler {
    private _bottomSheet = inject(MatBottomSheet);
    private _roomConfirmService = inject(RoomConfirmService);

    public level: BuildingLevel;
    public style_map: ViewerStyles = {};
    public item: Locatable;

    public readonly map_features = signal<ViewerFeature[]>([]);
    public readonly map_actions = signal<ViewAction[]>([]);
    public readonly map_loaded = signal(false);
    public readonly features_loaded = signal(false);

    public readonly selected_space = this._roomConfirmService.selected_space;

    //Store of Locatable Spaces
    public readonly locatable_spaces = signal<Locatable[]>([]);

    //Store of map_id urls & level names for available_spaces
    public readonly maps_list = signal<MapsList[]>([]);

    async locateSpaces(available_spaces: Space[]) {
        const spaces = available_spaces || [];
        this.locatable_spaces.set(
            spaces.map((space) => ({
                id: space.id,
                name: space.name,
                map_id: space.map_id,
                level: space.level,
            })),
        );
        await this.loadMap();
        this.timeout(
            'init',
            () => {
                this.processFeature();
            },
            1000,
        );
        this.processStyles();
        this.map_actions.set(
            spaces.map(
                (space: Space) =>
                    ({
                        id: space.map_id,
                        action: 'click',
                        callback: () => {
                            this.openRoomTile(space);
                        },
                    }) as ViewAction,
            ),
        );
    }

    async loadMap() {
        this.map_loaded.set(false);
        const maps_list = this.locatable_spaces().map((space: Locatable) => ({
            map_id: space.level.map_id,
            level: space.level.name,
        }));
        this.maps_list.set([
            ...new Map(maps_list.map((v) => [v.map_id, v])).values(),
        ]);
        this.map_loaded.set(true);
    }

    public processFeature(): void {
        this.features_loaded.set(false);
        const focus = this.locatable_spaces().map((space) => ({
            location: space.map_id,
            content: MapPinComponent,
            data: { name: space.name },
            z_index: 99,
            zoom: 100,
        }));
        this.map_features.set(focus);
        this.features_loaded.set(true);
    }

    public processStyles(): void {
        const styles: ViewerStyles = {};
        styles[`#zones`] = { display: 'none' };
        styles[`#Zones`] = { display: 'none' };
        this.style_map = styles;
    }

    openRoomTile(space: Space) {
        this._bottomSheet.open(RoomTileComponent, {
            panelClass: 'bottom-sheet-transparent',
            data: space,
        });

        this._roomConfirmService.handleBookEvent(space, true);
    }
}
