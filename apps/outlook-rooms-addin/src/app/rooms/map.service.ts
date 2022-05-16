import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BuildingLevel } from '@placeos/organisation';
import { ViewerFeature, ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { MapPinComponent } from '@placeos/components';
import { Space } from '@placeos/spaces';
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

@Injectable({
    providedIn: 'root',
})
export class MapService {
    public level: BuildingLevel;
    public style_map: ViewerStyles = {};
    public item: Locatable;
    public mapFeatures$: Observable<ViewerFeature[]>;
    public maps_arr: any[] = [];
    public mapActions$: Observable<ViewAction[]>;
    protected mapLoaded$: Observable<boolean> = of(false);

    selectedSpace$: Observable<Space> = this._roomConfirmService.selectedSpace$;

    //Store of Locatable Spaces
    private _locatable_spaces: BehaviorSubject<Locatable[]> =
        new BehaviorSubject<Locatable[]>([]);

    locatable_spaces$: Observable<Locatable[]> =
        this._locatable_spaces.asObservable();

    set locatable_spaces(space) {
        this._locatable_spaces.next(space);
    }

    get locatable_spaces() {
        return this._locatable_spaces.getValue();
    }

    //Store of map_id urls & level names for available_spaces
    private _maps_list: BehaviorSubject<[]> = new BehaviorSubject<any>([]);

    maps_list$: Observable<any> = this._maps_list.asObservable();

    set maps_list(map) {
        this._maps_list.next(map);
    }

    get maps_list() {
        return this._maps_list.getValue();
    }

    constructor(
        private _bottomSheet: MatBottomSheet,
        private _roomConfirmService: RoomConfirmService
    ) {}

    async locateSpaces(available_spaces: Observable<Space[]>) {
        this.mapLoaded$ = of(false);
        await this.loadMap();

        await available_spaces.pipe(take(1)).toPromise();
        await available_spaces.subscribe(
            (spaces) =>
                (this.locatable_spaces = spaces?.map((space) => ({
                    id: space.id,
                    name: space.name,
                    map_id: space.level.map_id,
                    level: space.level,
                })))
        );

        this.mapFeatures$ = available_spaces.pipe(
            map((spaces) =>
                spaces.map((space) => ({
                    content: MapPinComponent,
                    location: space.map_id,
                    z_index: 20,
                }))
            )
        );

        this.mapActions$ = available_spaces.pipe(
            map((spaces) =>
                spaces.map(
                    (space) =>
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

        //testing multiple maps
        // available_spaces.subscribe((i) => console.log(i, 'list'));
        // this.maps_list$ = available_spaces.pipe(
        //     map((spaces) =>
        //         spaces.map((_) => ({
        //             map_id: _.level.map_id,
        //             level: _.level.name,
        //         }))
        //     )
        // );

        await this.maps_list$.pipe(take(1)).toPromise();
        this.maps_list$ = this.locatable_spaces$.pipe(
            map((mapsList: Locatable[]) => [
                ...new Map(mapsList.map((v) => [v.map_id, v])).values(),
            ])
        );
    }

    loadMap() {
        //
        this.mapLoaded$ = of(true);
    }

    openRoomTile(space: Space) {
        const bottomSheetRef = this._bottomSheet.open(RoomTileComponent, {
            panelClass: 'bottom-sheet-transparent',
            data: space,
        });

        this._roomConfirmService.handleBookEvent(space, true);
    }
}
