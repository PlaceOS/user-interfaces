import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@placeos/components';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-error',
    template: `
        <div
            class="bg-base-100 relative m-4 flex flex-col items-center space-y-4 overflow-hidden rounded-sm px-16 py-4 text-center shadow-sm"
        >
            <h3 class="pb-2 text-2xl">Please see reception.</h3>
            @if (error | async) {
                <p>{{ error | async }}</p>
            }
            <p>Our staff at reception will assist you.</p>
            <a btn matRipple class="w-32" [routerLink]="['/welcome']">
                {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
            </a>
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
    imports: [CommonModule, TranslatePipe, MatRippleModule, RouterModule],
})
export class CheckinErrorComponent {
    private _checkin = inject(CheckinStateService);

    public readonly error = this._checkin.error;
}
