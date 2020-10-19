import { Component, OnInit, Inject } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass } from '@user-interfaces/common';

export interface EmbeddedControlModalData {
    control_url: string;
}

@Component({
    selector: 'embedded-control-modal',
    templateUrl: './embedded-control-modal.component.html',
    styleUrls: ['./embedded-control-modal.component.scss'],
    animations: [
        trigger('show', [
            transition(':enter', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
            transition(':leave', [style({ opacity: 1 }), animate(1000, style({ opacity: 0 }))]),
        ]),
    ],
})
export class EmbeddedControlModalComponent extends BaseClass implements OnInit {
    /** Control URL to embed into the modal */
    public readonly control_url: string = this._data.control_url;
    /** Display value for the time remain until the modal automatically closes */
    public countdown: number;

    constructor(
        private _dialog_ref: MatDialogRef<EmbeddedControlModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: EmbeddedControlModalData
    ) {
        super();
        this.countdown = 30;
    }

    public ngOnInit(): void {
        this.countdown = 30;
        this.interval('countdown', () => this.tick(), 1000);
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog_ref.close();
        this.countdown = 30;
    }

    /**
     * User confirmation of the content of the modal
     */
    public reset() {
        this.countdown = 30;
        this.interval('countdown', () => this.tick(), 1000);
    }

    /**
     * Decrement countdown and close if 0
     */
    public tick() {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    }
}
