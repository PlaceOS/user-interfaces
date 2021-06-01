import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Identity } from '@placeos/common';

@Component({
    selector: 'filter-list',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
    /** Type of item being filtered */
    public name: string;
    /** List of available filter options */
    public filters: Identity[] = [];

    constructor(private _dialog_ref: MatDialogRef<FiltersComponent>) { }

    public applyChanges() {
        this._dialog_ref.close();
    }
}
