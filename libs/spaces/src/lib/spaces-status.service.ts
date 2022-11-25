import { Injectable } from '@angular/core';
import { BaseClass, HashMap } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { SpacesService } from './spaces.service';

export interface SpaceStates {
    status: string;
}

@Injectable({
    providedIn: 'root',
})
export class SpacesStatusService extends BaseClass {
    /** Subject to store statuses of spaces */
    private _list_status = new BehaviorSubject<HashMap>({});
    /** Observable of statuses of spaces */
    public readonly list_status = this._list_status.asObservable();

    public readonly list_free_spaces = combineLatest([
        this._spaces.list,
        this.list_status,
    ]).pipe(
        map(([list, list_status]) =>
            list.filter((e) => list_status[e.id] === 'free')
        )
    );

    constructor(private _spaces: SpacesService) {
        super();
        this._init();
    }

    private async _init() {
        await this._spaces.initialised.pipe(first()).toPromise();
        // bind property
        this._spaces.list.pipe(filter((_) => !!_)).subscribe((list) => {
            const list_ids = list.map((_) => _.id);
            list_ids.forEach((e) => this.bindTo(e, 'status'));
        });
        this._initialised.next(true);
    }

    /** List to binding */
    private bindTo<K extends keyof SpaceStates>(
        id: string,
        name: string,
        mod: string = 'Bookings',
        on_change: (v: SpaceStates[K]) => void = (v) =>
            this.updateProperty(id, name, v)
    ) {
        const binding = getModule(id, mod).binding(name);
        this.subscription(
            `listen:${id}-${name}`,
            binding.listen().subscribe(on_change)
        );
        this.subscription(`bind:${name}`, binding.bind());
    }

    /** Update properties of the system data */
    private updateProperty<K extends keyof SpaceStates>(
        id: string,
        name: string,
        value: SpaceStates[K]
    ) {
        if (!value) return;
        const lists = { ...this._list_status.getValue() };
        let item = lists[id] || {};
        lists[id] = item[name] = value;
        this._list_status.next(lists);
    }
}
