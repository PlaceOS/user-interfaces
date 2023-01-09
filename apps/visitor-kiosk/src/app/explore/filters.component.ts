import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Identity } from '@placeos/common';

@Component({
    selector: 'filter-list',
    template: `
        <header>{{ name }} Filters</header>
        <mat-checkbox
            *ngFor="let item of filters"
            [checked]="item.active"
            (change)="item.active = $event.checked"
        >
            {{ item.name }}
        </mat-checkbox>
        <button btn matRipple (click)="applyChanges()">Apply</button>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 1em;
                min-width: 24em;
            }

            mat-checkbox {
                width: 100%;
                font-size: 1.25em;
            }

            button {
                min-width: 8em;
                margin-top: 1em;
            }

            header {
                font-size: 1.5em;
                margin-bottom: 0.5em;
                padding: 0.5em;
                text-align: center;
                width: 100%;
                color: #fff;
                background-color: var(--primary);
                border-radius: 4px;
                font-family: var(--heading-font);
            }
        `,
    ],
})
export class FiltersComponent {
    /** Type of item being filtered */
    public name: string;
    /** List of available filter options */
    public filters: Identity[] = [];

    constructor(private _dialog_ref: MatDialogRef<FiltersComponent>) {}

    public applyChanges() {
        this._dialog_ref.close();
    }
}
