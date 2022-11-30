import { Injectable } from '@angular/core';
import { BaseClass, HashMap } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, first, map, shareReplay } from 'rxjs/operators';
import { SpacesService } from './spaces.service';

@Injectable({
    providedIn: 'root',
})
export class SpacesStatusService extends BaseClass {
    /** Subject to store statuses of spaces */
    private _list_status = new BehaviorSubject<HashMap>({});
    /** Observable of statuses of spaces */
    public readonly list_status = this._list_status.asObservable();

    public readonly building_spaces = combineLatest([
        this._spaces.list,
        this._org.active_building,
    ]).pipe(
        filter(([_]) => !!_),
        map(([list, bld]) =>
            list.filter((_) => !bld || _.zones.includes(bld.id))
        ),
        shareReplay(1)
    );

    public readonly list_free_spaces = combineLatest([
        this._spaces.list,
        this.list_status,
    ]).pipe(
        map(([list, list_status]) =>
            list.filter((e) => list_status[e.id] === 'free')
        )
    );

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService
    ) {
        super();
        this._init();
    }

    private async _init() {
        await this._spaces.initialised.pipe(first()).toPromise();
        // bind property
        this.subscription(
            'space_list',
            this.building_spaces.subscribe((l) => {
                const spaces = l.map((_) => _.id);
                this.unsubWith('listen:');
                this.unsubWith('bind:');
                spaces.forEach((id) => this.bindTo(id, 'status'));
            })
        );
        this._initialised.next(true);
    }

    /** List to binding */
    private bindTo<T>(
        id: string,
        name: string,
        mod: string = 'Bookings',
        on_change: (v: T) => void = (v) => this.updateProperty(id, name, v)
    ) {
        const binding = getModule(id, mod).binding(name);
        this.subscription(
            `listen:${id}-${name}`,
            binding.listen().subscribe(on_change)
        );
        this.subscription(`bind:${name}`, binding.bind());
    }

    /** Update properties of the system data */
    private updateProperty<T>(id: string, name: string, value: T) {
        if (!value) return;
        const lists = { ...this._list_status.getValue() };
        if (!lists[id]) lists[id] = {};
        lists[id][name] = value;
        this._list_status.next(lists);
    }
}
