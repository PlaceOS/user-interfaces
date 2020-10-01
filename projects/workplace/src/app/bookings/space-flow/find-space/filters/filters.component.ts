import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { Building } from 'src/app/organisation/building.class';
import { RoomConfiguration } from 'src/app/common/room-configuration.interface';
import { Identity } from 'src/app/common/types';
import { BookingFilters, BookingFilterKey, BookingFilterValue } from './booking-filters.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'booking-space-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class BookingSpaceFiltersComponent extends BaseClass implements OnInit {
    /** Date selected for the booking */
    @Input() public date: FormControl;
    @Input() public bookingFilters: BookingFilters = new BookingFilters();

    /** Emitter for changes to filters */
    @Output() public bookingFiltersChange = new EventEmitter<BookingFilters>();

    /** List of available buildings */
    public building_list: Building[] = [];

    public building_room_configs: RoomConfiguration[] = [];

    public building_room_features: Identity[] = [];

    public capacity_filters: Identity[] = [];

    public get configurations_list(): RoomConfiguration[] {
        return (this.bookingFilters.configurations || []).map((id) =>
            this.building_room_configs.find((cfg) => cfg.id === id)
        );
    }

    public get features_list(): Identity[] {
        return (this.bookingFilters.features || []).map((id) =>
            this.building_room_features.find((feat) => feat.id === id)
        );
    }

    public get selected_capacity(): Identity | null {
        if (!this.bookingFilters.capacity) {
            return null;
        }
        return this.capacity_filters.find((f) => f.value === this.bookingFilters.capacity);
    }

    /** List of filtered location */
    public get location_list(): Building[] {
        return (this.bookingFilters.locations || []).map((id) =>
            this.building_list.find((bld) => bld.id === id)
        );
    }

    constructor(private _org: OrganisationService, private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._org.initialised.pipe(first((_) => _)).subscribe(() => {
            this.building_list = this._org.buildings;
            this.building_room_configs = this.building_list
                .map((m) => m.room_configurations)
                .reduce((prev, curr) => prev.concat(curr))
                .filter((el, idx, arr) => arr.findIndex((f) => f.id === el.id) === idx);
            this.building_room_features = this.building_list
                .map((m) => m.extras)
                .reduce((prev, curr) => prev.concat(curr))
                .filter((el, idx, arr) => arr.findIndex((f) => f.id === el.id) === idx);
            this.capacity_filters = this._settings.get('app.booking.capacity_filters') || [];
            console.log(this.capacity_filters);
        });
    }

    public get hasFilters(): boolean {
        return this.bookingFilters.any;
    }

    public setBookingFilter(key: BookingFilterKey, val: BookingFilterValue) {
        this.bookingFilters = this.bookingFilters.setItem(key, val);
        this.bookingFiltersChange.emit(this.bookingFilters);
    }

    public removeBookingFilter(key: BookingFilterKey, val: BookingFilterValue) {
        this.bookingFilters = this.bookingFilters.removeItem(key, val);
        this.bookingFiltersChange.emit(this.bookingFilters);
    }
}
