import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { FeaturesFilterService } from '../features-filter.service';
import { Space } from '@placeos/spaces';
import { Observable, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'placeos-filter-space',
    templateUrl: './filter-space.component.html',
    styles: [``],
})
export class FilterSpaceComponent implements OnInit {
    buildings;
    minDate: Date = new Date();

    features$: Observable<Array<{}>>;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _featuresFilterService: FeaturesFilterService,
        private _state: EventFormService
    ) {}

    ngOnInit() {
        this.buildings = this.data;
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

    searchFeature() {
        console.log('search feature');
    }
}
