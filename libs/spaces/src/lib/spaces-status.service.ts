import { Injectable } from '@angular/core';
import { Booking } from '@placeos/bookings';
import { BaseClass, HashMap } from '@placeos/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, filter, first, map, shareReplay, tap } from 'rxjs/operators';
import { SpacesService } from './spaces.service';

@Injectable({
    providedIn: 'root',
})
export class SpacesStatusService extends BaseClass {
    /** Subject to store statuses of spaces */
    private _list_status = new BehaviorSubject<HashMap>({});
    /** Subject to store bookings of spaces */

    /** Observable of statuses of spaces */
    public readonly list_status: Observable<HashMap> = this._list_status.asObservable();

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
        this.building_spaces,
        this.list_status,
    ]).pipe(
        debounceTime(500),
        map(([list, list_status]) =>
            list.filter((e) => list_status[e.id]?.status === 'free')
        ),
        shareReplay(1)
    );

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService
    ) {
        super();
        this._init();
    }

    private async _init() {

        this.subscription(
            'space_list',
            this.building_spaces.subscribe((l) => {
                const spaces = l.map((_) => _.id);
                this.unsubWith('listen:');
                this.unsubWith('bind:');
                spaces.forEach((id) => {
                    // Status binding
                    this.bindTo(id, 'status');

                    //Bookings binding
                    this.bindTo(id, 'bookings', (v:any[]) => {
                        const addsys =
                        v?.map((e) => {
                            return new Booking({
                                ...e,
                                booking_start: e.event_start,
                                booking_end: e.event_end,
                                extension_data: { system: l },
                                booking_type: 'room',
                            });
                        }) || null;
                        this.updateProperty(id, 'bookings', addsys)
                    })
                });
            })
        );
        this._initialised.next(true);
    }

    /** List to binding */
    private bindTo<T>(
        id: string,
        name: string,
        on_change: (v: T) => void = (v:T) => this.updateProperty(id,name,v),
        mod: string = 'Bookings'
    ) {
        const binding = getModule(id, mod).binding(name);
        this.subscription(
            `listen:${id}-${name}`,
            binding.listen().subscribe(on_change)
        );
        this.subscription(`bind:${name}`, binding.bind());
    }

    /** Update properties of the system data */
    private updateProperty<T>(
        id: string,
        name: string,
        value: T
    ) {
        if (!value) return;
        const lists = { ...this._list_status.getValue() };
        // let item = lists[id] || {};
        // lists[id] = item[name] = value;
        if (!lists[id]) lists[id] = {};
        lists[id][name] = value;
        this._list_status.next(lists);
    }
}
