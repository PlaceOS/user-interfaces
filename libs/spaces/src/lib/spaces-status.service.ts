import { Injectable } from '@angular/core';
import { Booking } from '@placeos/bookings';
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
    /** Subject to store bookings of spaces */
    private _list_bookings = new BehaviorSubject<HashMap>({});

    /** Observable of statuses of spaces */
    public readonly list_status = this._list_status.asObservable();
    /** Observable of bookings of spaces */
    public readonly list_bookings = this._list_bookings.asObservable();

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
        // await this._spaces.initialised.pipe(first()).toPromise();
        // // bind property
        // this._spaces.list.pipe(filter((_) => !!_)).subscribe((list) => {
        //     const list_ids = list.map((_) => _.id);
        //     list.forEach((l) => {
        //         const sysId = l.id;
        //         //Status binding
        //         this.bindTo(sysId, 'status', 'Bookings', (v) =>
        //             this.updateProperty(sysId, 'status', v, this._list_status)
        //         );

        //         //Bookings binding
        //         this.bindTo(sysId, 'bookings', 'Bookings', (v: any[]) => {
        //             const addsys =
        //                 v?.map((e) => {
        //                     return new Booking({
        //                         ...e,
        //                         booking_start: e.event_start,
        //                         booking_end: e.event_end,
        //                         extension_data: { system: l },
        //                         booking_type: 'room',
        //                     });
        //                 }) || null;
        //             this.updateProperty(
        //                 sysId,
        //                 'bookings',
        //                 addsys,
        //                 this._list_bookings
        //             );
        //         });
        //     });
        // });

        this.subscription(
            'space_list',
            this.building_spaces.subscribe((l) => {
                const spaces = l.map((_) => _.id);
                this.unsubWith('listen:');
                this.unsubWith('bind:');
                spaces.forEach((id) => {
                    // Status binding
                    this.bindTo(id, 'status',(v:string) => this.updateProperty(id, 'status',v, this._list_status));

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
                        this.updateProperty(id, 'bookings', addsys, this._list_bookings)
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
        on_change: (v: T) => void,
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
        value: T,
        subject: BehaviorSubject<any>
    ) {
        if (!value) return;
        const lists = { ...subject.getValue() };
        if (!lists[id]) lists[id] = {};
        lists[id][name] = value;
        subject.next(lists);
    }
}
