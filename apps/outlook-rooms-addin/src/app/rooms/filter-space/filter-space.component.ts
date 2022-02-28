import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'placeos-filter-space',
    templateUrl: './filter-space.component.html',
    styles: [``],
})
export class FilterSpaceComponent implements OnInit {
    date;
    buildings;
    minDate: Date = new Date();
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _state: EventFormService
    ) {}

    ngOnInit() {
        this.buildings = this.data;
    }

    public get form() {
        return this._state.form;
    }

    applyFilters() {}

    closeModal() {
        this._state.form.patchValue({ date: this.date });
        this._bottomsheetRef.dismiss(this.form);
    }
}
