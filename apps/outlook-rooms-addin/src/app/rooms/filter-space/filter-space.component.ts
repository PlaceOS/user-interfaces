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
    selector: 'placeos-filter-space',
    templateUrl: './filter-space.component.html',
    styles: [``],
})
export class FilterSpaceComponent implements OnInit {
    buildings: OrganisationService['building_list'];
    minDate: Date = new Date();
    features$: Observable<Array<{}>>;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _featuresFilterService: FeaturesFilterService,
        private _state: EventFormService
    ) {}

    ngOnInit() {
        this.features$ = this._featuresFilterService.features$;
    }

    public get form() {
        return this._state.form;
    }

    async applyFilters() {
        this._bottomsheetRef.dismiss(this.form);
        this._featuresFilterService.applyFilter();
    }

    closeModal() {
        this._bottomsheetRef.dismiss();
    }
}
