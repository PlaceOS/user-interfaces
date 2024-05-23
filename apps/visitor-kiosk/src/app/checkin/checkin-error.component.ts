import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-error',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center m-4 py-4 px-16 text-center space-y-4"
        >
            <h3 class="text-2xl pb-2">Please see reception.</h3>
            <p *ngIf="error | async">{{ error | async }}</p>
            <p>Our staff at reception will assist you.</p>
            <a btn matRipple class="w-32" [routerLink]="['/welcome']"> Back </a>
        </div>
    `,
    styles: [
        `
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
