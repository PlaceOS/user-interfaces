import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import {
    map,
    take,
    switchMap,
    debounceTime,
    mergeMap,
    first,
} from 'rxjs/operators';
import { BuildingLevel } from '@placeos/organisation';
import { ViewerFeature, ViewerStyles, ViewAction } from '@placeos/svg-viewer';
import { MapPinComponent } from '@placeos/components';
import { Space } from '@placeos/spaces';
import { BaseClass } from '@placeos/common';
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
export class MapService extends BaseClass {
    public level: BuildingLevel;
    public style_map: ViewerStyles = {};
    public item: Locatable;
    private _ping = new BehaviorSubject(null);

    private _mapFeatures: BehaviorSubject<ViewerFeature[]> =
        new BehaviorSubject<ViewerFeature[]>([]);
    public mapFeatures$: Observable<ViewerFeature[]> =
        this._mapFeatures.asObservable();

    get mapFeatures() {
        return this._mapFeatures.getValue();
    }

    set mapFeatures(features) {
        this._mapFeatures.next(features);
    }
    // public mapFeatures$: Observable<ViewerFeature[]>;

    public maps_arr: any[] = [];
    public mapActions$: Observable<ViewAction[]>;

    private _mapLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    readonly mapLoaded$: Observable<boolean> = this._mapLoaded.asObservable();

    private _featuresLoaded: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    readonly featuresLoaded$: Observable<boolean> =
        this._featuresLoaded.asObservable();

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
    ) {
        super();
        this._featuresLoaded.next(false);
        this.timeout(
            'init',
            () => {
                this.processFeature();
            },
            1000
        );
    }

    async locateSpaces(available_spaces: Observable<Space[]>) {
        this._mapLoaded.next(false);

        await available_spaces.pipe(take(1)).toPromise();

        available_spaces.subscribe(
            (spaces) =>
                (this.locatable_spaces = spaces?.map((space) => ({
                    id: space.id,
                    name: space.name,
                    map_id: space.level.map_id,
                    level: space.level,
                })))
        );

        await this.loadMap();

        await this.locatable_spaces$.pipe(first((_) => !!_)).toPromise();

        this.mapFeatures$.subscribe((i) =>
            console.log(i, 'map feats in service')
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
    }

    async loadMap() {
        this.maps_list$ = this.locatable_spaces$.pipe(
            map((spaces) =>
                spaces.map((space) => ({
                    map_id: space.level.map_id,
                    level: space.level.name,
                }))
            )
        );

        this.maps_list$ = this.maps_list$.pipe(
            map((mapsList: Locatable[]) => [
                ...new Map(mapsList.map((v) => [v.map_id, v])).values(),
            ])
        );

        this.maps_list$.subscribe((i) => console.log(i, 'maps list'));

        this._mapLoaded.next(true);
    }

    public processFeature(): void {
        let focus;
        this.locatable_spaces$.subscribe((spaces) =>
            spaces
                ? (focus = spaces?.map((space) => ({
                      location: space.map_id,
                      track_id: 'focus_item',
                      content: MapPinComponent,
                      data: { name: space.name },
                      z_index: 99,
                      zoom: 100,
                  })))
                : []
        );

        console.log('feature:', focus);
        this.mapFeatures = focus;
        this._featuresLoaded.next(true);
    }

    openRoomTile(space: Space) {
        const bottomSheetRef = this._bottomSheet.open(RoomTileComponent, {
            panelClass: 'bottom-sheet-transparent',
            data: space,
        });

        this._roomConfirmService.handleBookEvent(space, true);
    }
}
