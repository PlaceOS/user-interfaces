import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { FormDataService } from '../form-data.service';

@Component({
    selector: 'placeos-filter-space',
    templateUrl: './filter-space.component.html',
    styles: [``],
})
export class FilterSpaceComponent implements OnInit {
    buildings;
    minDate: Date = new Date();

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: { data },
        private _bottomsheetRef: MatBottomSheetRef<any>,
        private _formDataService: FormDataService
    ) {}

    ngOnInit() {
        this.buildings = this.data;
    }

    public get form() {
        return this._formDataService.form;
    }

    applyFilters() {
        this._formDataService.form = this.form;
        this._bottomsheetRef.dismiss(this.form);
    }

    closeModal() {
        this._bottomsheetRef.dismiss();
    }
}
