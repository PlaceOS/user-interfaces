import { Injectable } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import {
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

export interface LockerBank {
    id: string;
    map_id: string;
    level_id: string;
    name: string;
    height: number;
    lockers: Locker[];
}

export interface Locker {
    id: string;
    name: string;
    accessible: boolean;
    bookable: boolean;
    position: [number, number];
    size: [number, number];
}

@Injectable({
    providedIn: 'root',
})
export class LockersService {
    private _level = new BehaviorSubject('');
    private _change = new BehaviorSubject(0);
    public readonly lockers$ = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        switchMap(([bld]) =>
            showMetadata(bld.id, 'lockers').pipe(
                catchError(() => of(new PlaceMetadata()))
            )
        ),
        map((_) => _.details || []),
        shareReplay(1)
    );

    public readonly filtered_lockers$ = combineLatest([
        this._level,
        this.lockers$,
    ]).pipe(
        map(([level, lockers]) =>
            lockers.filter(
                (_) => (!level || _.level_id === level) && _.bookable
            )
        )
    );

    public setLevel(level: string) {
        this._level.next(level);
    }

    constructor(private _org: OrganisationService) {}

    public async saveLockers(lockers: LockerBank[]) {
        await updateMetadata(this._org.building.id, {
            name: 'lockers',
            description: '',
            details: lockers,
        });
        this._change.next(Date.now());
    }
}
