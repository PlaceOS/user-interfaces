import { Injectable } from '@angular/core';
import { SettingsService, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { CateringItem } from '../catering-item.class';
import { cateringItemAvailable, getCateringRulesForZone } from '../utilities';
import { CateringSettings } from '../catering-state.service';
import { Space } from 'libs/spaces/src/lib/space.class';

export interface CateringOrderOptions {
    // Affects backend requests
    zone?: string;
}

export interface CateringOrderFilters {
    // Affects frontend filtering
    date?: number;
    duration?: number;
    zone_id?: string;
    resources?: Space[];
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
        categories: [],
    });
    private _loading = new BehaviorSubject('');

    public readonly loading = this._loading.asObservable();
    public readonly filters = this._filters.asObservable();

    public readonly settings = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((_) =>
            showMetadata(_.id, 'catering-settings').pipe(
                catchError((_) => of({} as PlaceMetadata))
            )
        ),
        map((_) => _.details as CateringSettings),
        tap((_) =>
            this._settings.post('require_catering_notes', !!_?.require_notes)
        ),
        shareReplay(1)
    );

    public readonly charge_codes = this.settings.pipe(
        map((_) => _.charge_codes || [])
    );
    public readonly availability = this.settings.pipe(
        map((_) => _.disabled_rooms || [])
    );

    public readonly available_menu: Observable<CateringItem[]> = combineLatest([
        this._options,
        this._org.active_building,
    ]).pipe(
        filter(([_, bld]) => !!bld),
        switchMap(([{ zone }, bld]) => {
            this._loading.next('[Menu]');
            return showMetadata(zone || bld.id, 'catering').pipe(
                map((d) =>
                    (d.details instanceof Array ? d.details : []).map(
                        (_) => new CateringItem(_)
                    )
                ),
                catchError((_) => [])
            );
        }),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public readonly categories = this.available_menu.pipe(
        map((_) => unique(_.map((i) => i.category)))
    );

    public readonly filtered_menu = combineLatest([
        this._filters,
        this.available_menu,
    ]).pipe(
        switchMap(
            async ([
                {
                    search,
                    tags,
                    categories,
                    zone_id,
                    date,
                    duration,
                    resources,
                },
                l,
            ]) => {
                const rules = await getCateringRulesForZone(
                    zone_id
                ).toPromise();
                search = search.toLowerCase();
                let list = search
                    ? l.filter((_) => _.name.toLowerCase().includes(search))
                    : l;
                list = tags.length
                    ? list.filter((_) => tags.every((t) => _.tags.includes(t)))
                    : list;
                list = categories.length
                    ? list.filter((_) => categories.includes(_.category))
                    : list;
                list = list.filter((_) =>
                    cateringItemAvailable(_, rules, {
                        date,
                        duration,
                        resources,
                    } as any)
                );
                return list;
            }
        ),
        shareReplay(1)
    );

    public get currency_code() {
        return this._org.currency_code;
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public setOptions(opts: Partial<CateringOrderOptions>) {
        this._options.next({ ...this._options.getValue(), ...opts });
    }

    public setFilters(opts: Partial<CateringOrderFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...opts });
    }

    public getFilters() {
        return { ...this._filters.getValue() };
    }
}
