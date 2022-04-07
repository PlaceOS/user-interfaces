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
import { Observable, combineLatest, of, from } from 'rxjs';
import { first, take, filter, map } from 'rxjs/operators';
import { RoomConfirmComponent } from '../room-confirm/room-confirm.component';
import { FindSpaceItemComponent } from '../find-space-item/find-space-item.component';
import { FilterSpaceComponent } from '../filter-space/filter-space.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormDataService } from '../form-data.service';
import { FeaturesFilterService } from '../features-filter.service';
import { T } from '@angular/cdk/keycodes';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
    styles: [``],
})
export class FindSpaceComponent implements OnInit {
    startTime$: Observable<any>;
    durationMinutes: number;
    endTime$: Observable<any>;
    selected_features$: Observable<any>;
    filtered_spaces: Space[] = [];
    showConfirm$: Observable<boolean> = of(false);
    selectedSpace: Space;

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

    public spaces$ = this._state.available_spaces;
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
        private _formDataService: FormDataService,
        private _featuresFilterService: FeaturesFilterService
    ) {}

    public async ngOnInit() {
        this.selected_features$ =
            this._featuresFilterService.selected_features$;
        this._state.setView('find');

        this.setTimeChips();

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
        this.showConfirm$ = of(true);
        this.selectedSpace = space;

        console.log(this._state.form, 'form in state');
    }

    public get form() {
        return this._formDataService.form;
    }

    openFilter() {
        const bottomSheetRef = this._bottomSheet.open(FilterSpaceComponent, {
            data: this.buildings,
        });

        bottomSheetRef.afterDismissed().subscribe(() => {
            this.setTimeChips();
            this.updateSpaces();
        });
    }

    confirm() {
        console.log(this.selectedSpace, 'selected space');
        const spaces = this._spaces.filter((s) => this.book_space[s.id]);

        this._state.form.patchValue({ resources: spaces, system: spaces[0] });
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
        const confirmRef = this._bottomSheet.open(RoomConfirmComponent, {
            data: this.selectedSpace,
        });

        console.log(this.form.controls.title.value, 'title value in this form');
        confirmRef.afterDismissed().subscribe(() => {
            console.log('confirm closed');

            this.postForm();
        });
    }

    setTimeChips() {
        this.startTime$ = of(
            new Date(this.form?.controls?.date?.value).toLocaleTimeString()
        );
        this.durationMinutes = this.form?.controls?.duration?.value;

        const end =
            this.form?.controls?.date?.value + this.durationMinutes * 60 * 1000;
        this.endTime$ = of(new Date(end).toLocaleTimeString());
    }

    async updateSpaces() {
        this.spaces$ = await this._featuresFilterService.applyFilter();

        this.spaces$?.subscribe((i) => console.log(i, 'spaces'));
    }

    async postForm() {
        this.form.controls.host.setErrors(null);
        this.form.controls.host.clearValidators();
        this.form.controls.creator.setErrors(null);
        this.form.controls.creator.clearValidators();
        console.log(this._state.form, 'form to be posted');

        await this._state.postForm().catch((err) => console.log(err));
        console.log(
            this._state.form.controls?.title?.value,
            'title value posted'
        );
        console.log('form posted');
    }
    closeModal() {
        this.location.back();
    }
}
