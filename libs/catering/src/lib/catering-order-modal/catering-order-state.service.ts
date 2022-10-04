import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { CateringItem } from '../catering-item.class';

export interface CateringOrderOptions { // Affects backend requests
    zone?: string;
}

export interface CateringOrderFilters { // Affects frontend filtering
    search: string;
    tags: string[];
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrderStateService {
    private _options = new BehaviorSubject<CateringOrderOptions>({});
    private _filters = new BehaviorSubject<CateringOrderFilters>({
        search: '',
        tags: [],
    });
    private _loading = new BehaviorSubject('');

    public readonly loading = this._loading.asObservable();
    public readonly filters = this._filters.asObservable();

    public readonly available_menu: Observable<CateringItem[]> = this._options.pipe(
        switchMap(({ zone }) =>{
            this._loading.next('[Menu]');
            return showMetadata(zone || this._org.building?.id, 'catering').pipe(
                map((d) => d.details.map((_) => new CateringItem(_))),
                catchError((_) => [])
            )}
        ),
        tap(_ => this._loading.next('')),
        shareReplay(1)
    );

    public readonly filtered_menu = combineLatest([
        this._filters,
        this.available_menu,
    ]).pipe(
        map(([{ search, tags }, l]) => {
            search = search.toLowerCase();
            const ol = l.filter((_) => {
                return _.name.toLowerCase().includes(search) &&
                    (!tags?.length || tags.every((t) => _.tags.includes(t)));
            });
            return ol;
        }),
        shareReplay(1)
    );

    public get currency_code() {
        return this._org.currency_code;
    }

    constructor(
        private _dialog: MatDialog,
        private _org: OrganisationService
    ) {}

    public setOptions(opts: Partial<CateringOrderOptions>) {
        this._options.next({ ...this._options.getValue(), ...opts });
    }

    public setFilters(opts: Partial<CateringOrderFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...opts });
    }
}
