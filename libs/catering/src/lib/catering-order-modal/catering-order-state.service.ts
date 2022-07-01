import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CateringItem } from '../catering-item.class';

export interface CateringOrderOptions {
    zone?: string;
}

export interface CateringOrderFilters {
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

    public readonly available_menu: Observable<CateringItem[]> = of([]);

    public readonly filtered_menu = combineLatest([
        this._filters,
        this.available_menu,
    ]).pipe(
        map(([{ search, tags }, l]) => {
            search = search.toLowerCase();
            return l.filter((_) => {
                _.name.toLowerCase().includes(search) &&
                    (!tags?.length || tags.every((t) => _.tags.includes(t)));
            });
        }),
        shareReplay(1)
    );

    public setOptions(opts: Partial<CateringOrderOptions>) {
        this._options.next({ ...this._options.getValue(), ...opts });
    }

    public setFilters(opts: Partial<CateringOrderFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...opts });
    }
}
