import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BuildingLevel } from '@placeos/organisation';
import { ViewerFeature, ViewerStyles } from '@placeos/svg-viewer';
import { MapPinComponent } from '@placeos/components';
import { Space } from '@placeos/spaces';

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
    public features: ViewerFeature[];
    // public locatable_spaces: Locatable[] = [];
    public maps_arr: any[] = [];

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

    constructor() {}

    //filter available_spaces into Locatable_spaces

    async locateSpaces(available_spaces: Observable<Space[]>) {
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

        this.maps_list$ = this.locatable_spaces$.pipe(
            map((spaces) =>
                spaces.map((space) => ({
                    map_id: space.map_id,
                    level: space.level.name,
                }))
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
        //filter maps_list to remove same maps
        this.maps_list$ = this.maps_list$.pipe(
            map((mapsList: Locatable[]) => [
                ...new Map(mapsList.map((v) => [v.map_id, v])).values(),
            ])
        );

        this.maps_list$.subscribe((i) => console.log(i, 'maps list'));
    }
}
