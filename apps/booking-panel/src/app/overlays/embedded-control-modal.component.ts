import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AsyncHandler } from '@placeos/common';

export interface EmbeddedControlModalData {
    control_url: string;
}

@Component({
    selector: 'embedded-control-modal',
    template: `
        <div class="absolute inset-0 bg-base-100"></div>
        <div
            class="absolute w-screen overflow-hidden bg-secondary"
            modal
            [@show]
            (window:click)="reset()"
        >
            <div class="h-full w-full border-none">
                <iframe
                    class="h-full w-full border-none"
                    [src]="control_url | safe: 'resource'"
                ></iframe>
            </div>
        </div>
        <div class="absolute left-0 top-0 flex h-12 items-center">
            <div countdown class="mx-2 text-2xl">{{ countdown }}</div>
            <button
                icon
                matRipple
                class="close"
                (click)="close()"
                (contextmenu)="$event.preventDefault()"
            >
                <app-icon class="mx-2 text-2xl">close</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            [modal] {
                height: calc(100vh - 3em);
                box-sizing: content-box;
                border: 2px solid #fff;
                border-top: 1px solid #ccc;
                transform: translate(-50%, calc(-50% + 1.75em));
            }

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                align-items: center;
                height: 3em;
            }
        `,
    ],
    animations: [
        trigger('show', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate(1000, style({ opacity: 0 })),
            ]),
        ]),
    ],
    standalone: false,
})
export class EmbeddedControlModalComponent
    extends AsyncHandler
    implements OnInit
{
    /** Control URL to embed into the modal */
    public readonly control_url: string = this._data.control_url;
    /** Display value for the time remain until the modal automatically closes */
    public countdown: number;

    constructor(
        private _dialog_ref: MatDialogRef<EmbeddedControlModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: EmbeddedControlModalData,
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
