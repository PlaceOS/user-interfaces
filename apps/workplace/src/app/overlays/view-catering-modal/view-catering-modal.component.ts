import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CateringItem } from '@user-interfaces/catering';
import { BaseClass } from '@user-interfaces/common';

@Component({
    selector: 'view-catering-modal',
    templateUrl: './view-catering-modal.component.html',
    styleUrls: ['./view-catering-modal.component.scss']
})
export class ViewCateringModalComponent extends BaseClass implements OnInit {
    public catering: CateringItem[];
    public catering_note: string;
    public catering_items_total = 0;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { catering: CateringItem[]; catering_note: string },
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        const data = this._data;

        if (data) {
            this.catering = this._data.catering;
            this.catering_note = this._data.catering_note;
            this.catering_items_total = this.catering.reduce((total, item) => item.quantity + total, 0);
        }
    }

    /**
     * TODO: this makes no sense. catering is not a route to be accessed like this
     */
    public edit() {
        this._dialog.closeAll();
        this._router.navigate(['/catering/']);
    }
}
