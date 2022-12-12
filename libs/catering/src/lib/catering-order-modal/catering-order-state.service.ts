import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { CateringItem } from '../catering-item.class';
import { cateringItemAvailable, getCateringRulesForZone } from '../utilities';

export interface CateringOrderOptions { // Affects backend requests
    zone?: string;
}

export interface CateringOrderFilters { // Affects frontend filtering
    date?: number;
    duration?: number;
    zone_id?: string;
    search: string;
    tags: string[];
    categories: string[];
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrderStateService {
    private _options = new BehaviorSubject<CateringOrderOptions>({});
    private _filters = new BehaviorSubject<CateringOrderFilters>({
        search: '',
        tags: [],
        categories: []
    });
    private _loading = new BehaviorSubject('');

    public readonly loading = this._loading.asObservable();
    public readonly filters = this._filters.asObservable();

    public readonly availability: Observable<string[]> = combineLatest([
        this._org.active_building
    ]).pipe(
        switchMap(([bld]) => showMetadata(bld.id, 'disabled-catering-rooms')),
        map((d) => (d.details instanceof Array ? d.details : []) as string[]),
        shareReplay(1)
    );

    public readonly available_menu: Observable<CateringItem[]> = combineLatest([this._options, this._org.initialised]).pipe(
        filter(([_, init]) => init),
        switchMap(([{ zone }]) =>{
            this._loading.next('[Menu]');
            return showMetadata(zone || this._org.building?.id, 'catering').pipe(
                map((d) => d.details.map((_) => new CateringItem(_))),
                catchError((_) => [])
            )}
        ),
        tap(_ => this._loading.next('')),
        shareReplay(1)
    );

    public readonly categories = this.available_menu.pipe(map(_ => unique(_.map(i => i.category))));

    public readonly filtered_menu = combineLatest([
        this._filters,
        this.available_menu,
    ]).pipe(
        switchMap(async ([{ search, tags, categories, zone_id, date, duration }, l]) => {
            const rules = await getCateringRulesForZone(zone_id).toPromise();
            search = search.toLowerCase();
            let list = search ? l.filter(_ => _.name.toLowerCase().includes(search)) : l;
            list = tags.length ? l.filter(_ => tags.every((t) => _.tags.includes(t))) : list;
            list = categories.length ? l.filter(_ => categories.includes(_.category)) : list;
            list = l.filter(_ => cateringItemAvailable(_, rules, { date, duration } as any));
            return list;
        }),
        shareReplay(1)
    );

    public get currency_code() {
        return this._org.currency_code;
    }

    constructor(
        private _org: OrganisationService
    ) {}

    public setOptions(opts: Partial<CateringOrderOptions>) {
        this._options.next({ ...this._options.getValue(), ...opts });
    }

    public setFilters(opts: Partial<CateringOrderFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...opts });
    }
}
