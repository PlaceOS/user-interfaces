import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { Space, SpacesService } from '@placeos/spaces';
import { OrganisationService } from '@placeos/organisation';
import { HashMap } from '@placeos/common';
import { Observable, combineLatest } from 'rxjs';
import { first, take, filter, map } from 'rxjs/operators';
import { RoomConfirmComponent } from '../room-confirm/room-confirm.component';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
    styles: [``],
})
export class FindSpaceComponent implements OnInit {
    unixTime;
    startTime;
    durationMinutes;
    endTime;

    public book_space: HashMap<boolean> = {};
    public space_list: Space[] = [];

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly levels = combineLatest([
        this.building,
        this._state.options,
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: 'All Levels',
            },
            ...this._org.levelsForBuilding(bld),
        ])
    );

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;

    public readonly spaces$: Observable<Space[]> = this._state.available_spaces;

    public async setBuilding(bld) {
        const opts = await this.options.pipe(take(1)).toPromise();
        if (bld) this._org.building = bld;
        const levels = this._org.levelsForBuilding(this._org.building);
        const lvl = levels.find((_) => opts.zone_ids?.includes(_.id));
        if (!lvl && levels.length) {
            this.setOptions({ zone_ids: [levels[0].id] });
        }
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheet: MatBottomSheet,
        private _bottomSheetRef: MatBottomSheetRef<any>,
        private _org: OrganisationService,
        private _state: EventFormService,
        private _spaces: SpacesService
    ) {}

    public async ngOnInit() {
        this.unixTime = this.data?.controls?.date?.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString();
        const durationMinutes: number = this.data?.controls?.duration?.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString();

        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();

        this.setBuilding(this._org.building);
        this.book_space = {};
        const resources = this._state.form?.get('resources')?.value || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    closeModal() {
        this._bottomSheetRef.dismiss();
    }

    confirm() {
        this._bottomSheet.open(RoomConfirmComponent, {
            data: this.form,
        });
    }

    public get form() {
        return this._state.form;
    }
}
