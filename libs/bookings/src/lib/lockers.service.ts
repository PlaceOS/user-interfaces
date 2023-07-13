import { Injectable } from '@angular/core';
import { flatten } from '@placeos/common';
import {
    PlaceMetadata,
    PlaceZone,
    PlaceZoneMetadata,
    listChildMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

export interface LockerBank {
    id: string;
    map_id: string;
    level_id: string;
    name: string;
    height: number;
    lockers: Locker[];
    zone?: PlaceZone;
}

export interface Locker {
    id: string;
    bank_id: string;
    level_id?: string;
    map_id?: string;
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
    public readonly lockers_banks$: Observable<LockerBank[]> = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld]) =>
            listChildMetadata(bld.id, { name: 'lockers' }).pipe(
                catchError(() => of(new PlaceMetadata()))
            )
        ),
        map((_: PlaceZoneMetadata[]) =>
            flatten(
                _.map((_) =>
                    _.metadata.lockers?.details instanceof Array
                        ? _.metadata.lockers?.details.map((bank) => ({
                              ...bank,
                              zone: _.zone,
                          }))
                        : []
                )
            )
        ),
        shareReplay(1)
    );

    public readonly lockers$ = this.lockers_banks$.pipe(
        map((bank_list) => {
            const lockers: Locker[] = [];
            for (const bank of bank_list) {
                lockers.push(
                    ...bank.lockers.map(
                        (_) =>
                            ({
                                ..._,
                                bank_id: bank.id,
                                map_id: bank.map_id,
                                level_id: bank.zone.id,
                            } as Locker)
                    )
                );
            }
            return lockers;
        })
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
