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
import { FindSpaceItemComponent } from '../find-space-item/find-space-item.component';
import { FilterSpaceComponent } from '../filter-space/filter-space.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormDataService } from '../form-data.service';

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
    public quick_capacities = [
        { name: 'Any Capacity', value: 0 },
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

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

    public readonly spaces$ = this._state.available_spaces;
    public readonly features = this._spaces.features;

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
        private _bottomSheet: MatBottomSheet,
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _state: EventFormService,
        private router: Router,
        private location: Location,
        private _formDataService: FormDataService
    ) {}

    public async ngOnInit() {
        this._state.setView('find');
        this.unixTime = this._formDataService.form?.controls?.date?.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString();
        const durationMinutes: number =
            this._formDataService.form?.controls?.duration?.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString();

        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();

        console.log(this._org.buildings, 'buildings');

        this._org.active_building.subscribe((i) =>
            console.log(i, 'active building')
        );

        console.log(this._spaces.space_list, 'space list');

        await this._state.available_spaces.pipe(take(1)).toPromise();

        this.setBuilding(this._org.building);
        this.book_space = {};
        const resources = this._state.form?.get('resources')?.value || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    public handleBookEvent(space: Space, book: boolean = true) {
        this.book_space = {};
        this.book_space[space.id] = book;
        this.confirm();

        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    public get form() {
        return this._formDataService.form;
    }

    openFilter() {
        const bottomSheetRef = this._bottomSheet.open(FilterSpaceComponent, {
            data: this.buildings,
        });

        bottomSheetRef.afterDismissed().subscribe((childOutput) => {
            console.log(childOutput, 'child component output');
        });
    }

    confirm() {
        const spaces = this._spaces.filter((s) => this.book_space[s.id]);
        this._state.form.patchValue({ resources: spaces, system: spaces[0] });
        this._bottomSheet.open(RoomConfirmComponent, {
            data: this.form,
        });
    }

    closeModal() {
        // this.router.navigate(['book']);
        this.location.back();
    }
}
