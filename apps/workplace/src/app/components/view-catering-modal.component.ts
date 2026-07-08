import { Component, OnInit, inject, signal } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AsyncHandler, CateringItem } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'view-catering-modal',
    template: `
        <header>
            <icon>room_service</icon>
            <h1>Catering</h1>
        </header>
        <div class="body">
            <strong>Item</strong>
            <strong class="qty">Quantity</strong>
            @for (item of catering(); track item) {
                <label>
                    {{ item.name }}
                </label>
                <label class="qty">
                    {{ item.quantity }}
                </label>
            }
            <strong class="total">Total Items</strong>
            <strong class="qty">{{ catering_items_total() }}</strong>
            <strong class="note-label"> Note: </strong>
            <div class="note-box">
                {{ catering_note() }}
            </div>
        </div>
        <footer>
            <button mat-dialog-close>Close</button>
            <button class="black" (click)="edit()">Edit</button>
        </footer>
    `,
    styles: [
        `
            .body {
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 0.5em;

                .note-box,
                .note-label {
                    grid-column: 1/-1;
                }

                .note-label {
                    margin-top: 0.5em;
                }

                .qty,
                .total {
                    text-align: right;
                }
            }
        `,
    ],
    imports: [MatDialogModule, IconComponent],
})
export class ViewCateringModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        catering: CateringItem[];
        catering_note: string;
    }>(MAT_DIALOG_DATA);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);

    public catering = signal<CateringItem[]>([]);
    public catering_note = signal('');
    public catering_items_total = signal(0);

    public ngOnInit() {
        const data = this._data;

        if (data) {
            this.catering.set(this._data.catering);
            this.catering_note.set(this._data.catering_note);
            this.catering_items_total.set(
                this.catering().reduce(
                    (total, item) => item.quantity + total,
                    0,
                ),
            );
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
