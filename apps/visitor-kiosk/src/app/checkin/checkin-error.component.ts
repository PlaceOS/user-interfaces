import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-error',
    template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 mx-auto p-4"
        >
            <h3 class="text-xl mb-4">Please see reception.</h3>
            <p class="mb-2" *ngIf="error | async">{{ error | async }}</p>
            <p class="mb-4">Our staff at reception will assist you.</p>
            <a button mat-button [routerLink]="['/welcome']">Back</a>
        </div>
    `,
    styles: [
        `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            :host > div {
                width: 28rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class CheckinErrorComponent {
    public readonly error = this._checkin.error;

    constructor(private _checkin: CheckinStateService) {}
}
