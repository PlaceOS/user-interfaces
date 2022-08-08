import { Component, OnInit, Inject } from '@angular/core';

import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { FeaturesFilterService } from '../features-filter.service';
import { OrganisationService } from '@placeos/organisation';
import { Observable } from 'rxjs';

@Component({
    selector: '[filter-space]',
    templateUrl: './filter-space.component.html',
    styles: [``],
})
export class FilterSpaceComponent implements OnInit {
    readonly buildings = this._org.building_list;
    readonly building = this._org.active_building;
    minDate: Date = new Date();
    features$: Observable<Array<{}>>;
    
    public readonly setBuilding = (b) => this._org.building = b;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _featuresFilterService: FeaturesFilterService,
        private _state: EventFormService,
        private _org: OrganisationService
    ) {}

    ngOnInit() {
        this.features$ = this._featuresFilterService.features$;
    }

    public get form() {
        return this._state.form;
    }

    applyFilters() {
        this._bottomsheetRef.dismiss(this.form);
        this._featuresFilterService.applyFilter();
    }

    getSelectedFeatures() {
        this._featuresFilterService.getSelectedFeatures();
    }

    closeModal() {
        this._bottomsheetRef.dismiss();
    }
}
