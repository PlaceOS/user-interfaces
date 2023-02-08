import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take, first } from 'rxjs/operators';
import { BuildingLevel } from '@placeos/organisation';
import { ViewerFeature, ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { MapPinComponent } from '@placeos/components';
import { Space } from '@placeos/spaces';
import { AsyncHandler } from '@placeos/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RoomTileComponent } from './room-tile/room-tile.component';
import { RoomConfirmService } from './room-confirm.service';

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
    public level: BuildingLevel;
    public style_map: ViewerStyles = {};
    public item: Locatable;

    private _map_features: BehaviorSubject<ViewerFeature[]> =
        new BehaviorSubject<ViewerFeature[]>([]);
    public map_features$: Observable<ViewerFeature[]> =
        this._map_features.asObservable();

    get map_features() {
        return this._map_features.getValue();
    }

    set map_features(features: ViewerFeature[]) {
        this._map_features.next(features);
    }

    public map_actions$: Observable<ViewAction[]>;

    private _map_loaded: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    readonly map_loaded$: Observable<boolean> = this._map_loaded.asObservable();

    private _features_loaded: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    readonly features_loaded$: Observable<boolean> =
        this._features_loaded.asObservable();

    selected_space$: Observable<Space> =
        this._roomConfirmService.selected_space$;

    //Store of Locatable Spaces
    private _locatable_spaces: BehaviorSubject<Locatable[]> =
        new BehaviorSubject<Locatable[]>([]);

    locatable_spaces$: Observable<Locatable[]> =
        this._locatable_spaces.asObservable();

    set locatable_spaces(space: Locatable[]) {
        this._locatable_spaces.next(space);
    }

    get locatable_spaces() {
        return this._locatable_spaces.getValue();
    }

    //Store of map_id urls & level names for available_spaces
    private _maps_list: BehaviorSubject<MapsList[]> = new BehaviorSubject<any>(
        []
    );

    maps_list$: Observable<any> = this._maps_list.asObservable();

    set maps_list(map: MapsList[]) {
        this._maps_list.next(map);
    }

    get maps_list() {
        return this._maps_list.getValue();
    }

    constructor(
        private _bottomSheet: MatBottomSheet,
        private _roomConfirmService: RoomConfirmService
    ) {
        super();
    }

    async locateSpaces(available_spaces: Observable<Space[]>) {
        await available_spaces?.pipe(take(1)).toPromise();

        available_spaces?.subscribe(
            (spaces) =>
                (this.locatable_spaces = spaces?.map((space) => ({
                    id: space.id,
                    name: space.name,
                    map_id: space.map_id,
                    level: space.level,
                })))
        );
        await this.locatable_spaces$?.pipe(first((_) => !!_)).toPromise();
        await this.loadMap();
        await this.timeout(
            'init',
            () => {
                this.processFeature();
            },
            1000
        );

        await this.processStyles();

        this.map_actions$ = available_spaces?.pipe(
            map((spaces: Space[]) =>
                spaces.map(
                    (space: Space) =>
                        ({
                            id: space.map_id,
                            action: 'click',
                            callback: () => {
                                this.openRoomTile(space);
                            },
                        } as ViewAction)
                )
            )
        );
    }

    async loadMap() {
        this._map_loaded.next(false);
        this.maps_list$ = this.locatable_spaces$?.pipe(
            map((spaces: Locatable[]) =>
                spaces.map((space: Locatable) => ({
                    map_id: space.level.map_id,
                    level: space.level.name,
                }))
            )
        );

        this.maps_list$ = this.maps_list$?.pipe(
            map((mapsList: MapsList[]) => [
                ...new Map(mapsList.map((v) => [v.map_id, v])).values(),
            ])
        );

        this._map_loaded.next(true);
    }

    public processFeature(): void {
        this._features_loaded.next(false);
        let focus: any;
        this.locatable_spaces$.subscribe((spaces) =>
            spaces
                ? (focus = spaces?.map((space) => ({
                      location: space.map_id,
                      content: MapPinComponent,
                      data: { name: space.name },
                      z_index: 99,
                      zoom: 100,
                  })))
                : []
        );
        this.map_features = focus;
        this._features_loaded.next(true);
    }

    public processStyles(): void {
        const styles: ViewerStyles = {};
        styles[`#zones`] = { display: 'none' };
        styles[`#Zones`] = { display: 'none' };
        this.style_map = styles;
    }
    openRoomTile(space: Space) {
        const bottomSheetRef = this._bottomSheet.open(RoomTileComponent, {
            panelClass: 'bottom-sheet-transparent',
            data: space,
        });

        this._roomConfirmService.handleBookEvent(space, true);
    }
}
