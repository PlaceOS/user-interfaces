import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';
import { Building } from 'src/app/organisation/building.class';
import { DialogEvent, Identity, HashMap } from 'src/app/common/types';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { CalendarService } from 'src/app/calendar/calendar.service';
import { Space } from 'src/app/spaces/space.class';
import { StaffService } from 'src/app/users/staff.service';
import { SettingsService } from 'src/app/common/settings.service';

import * as dayjs from 'dayjs';
import { rulesForSpace } from 'src/app/events/event.utilities';
import { notifyError } from 'src/app/common/notifications';
import { filterSpacesRules } from 'src/app/bookings/booking.utilities';

export interface SpaceSelectModalData {
    /** List of currently selected spaces */
    readonly spaces: Space[];
    /** Selected date to check space availability */
    readonly date: number;
    /** Duration of the availability that is desired */
    readonly duration: number;
    all_day?: boolean;
    visitor_type?: string;
}

@Component({
    selector: 'a-space-select-modal',
    templateUrl: './space-select-modal.component.html',
    styleUrls: ['./space-select-modal.component.scss'],
})
export class SpaceSelectModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of selected spaces */
    public spaces: Space[] = [];
    /** List of available spaces */
    public available_spaces: Space[] = [];
    /** List of filtered spaces */
    public filtered_spaces: Space[] = [];
    /** Building to filter available spaces */
    public building: Building;
    /** Whether to show selected spaces */
    public show_selected: boolean;
    /** List of available space types */
    public space_types: Identity[] = [];
    /** ID of the space type to filter available spaces on */
    public type: string;
    /** Whether the available spaces are being loaded */
    public loading: boolean;

    public get buildings(): Building[] {
        return this._org.buildings;
    }

    /** Whether multiple spaces can be selected */
    public get multiple(): boolean {
        return !!this._settings.get('app.booking.multiple_spaces');
    }

    /** Mapping of spaces to whether they are selected */
    public get space_map(): HashMap<boolean> {
        const spaces = {};
        this.spaces.forEach((space) => (spaces[space.id] = true));
        return spaces;
    }

    constructor(
        private _org: OrganisationService,
        private _calendar: CalendarService,
        private _staff: StaffService,
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) private _data: SpaceSelectModalData
    ) {
        super();
    }

    public ngOnInit(): void {
        this.building = this._org.building || this.buildings[0];
        this.spaces = this._data.spaces && this._data.spaces.length ? [...this._data.spaces] : [];
        this.loadAvailableSpaces();
    }

    public async loadAvailableSpaces() {
        this.loading = true;
        const date = dayjs(this._data.date);
        this.available_spaces = await this._calendar
            .availability({
                zone_ids: this.building.id,
                period_start: date.unix(),
                period_end: date.add(this._data.duration, 'm').unix(),
            })
            .catch((err) => {
                notifyError(`Error finding available spaces: ${err.message || err}`);
                return [];
            });
        this.filtered_spaces = this.filterSpaces(this.available_spaces);
        this.loading = false;
    }

    /** Check booking rules and filter spaces */
    public filterSpaces(list: Space[]): Space[] {
        const settings = this._org.building_settings;
        const res = filterSpacesRules(list, settings, this._staff.current, { ...this._data });
        return res;
    }

    public spaceSelected(space: Space) {
        if (this.multiple) {
            if (!this.space_map[space.id]) {
                this.spaces.push(space);
            }
        } else {
            this.spaces = [space];
            this.save();
        }
    }

    public save() {
        this.event.emit({ reason: 'done', metadata: this.spaces });
    }
}
