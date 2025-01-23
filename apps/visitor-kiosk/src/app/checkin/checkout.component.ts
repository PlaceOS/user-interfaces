import { Component } from '@angular/core';
import { CheckinStateService } from './checkin-state.service';
import { i18n, notifySuccess } from '@placeos/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
            *ngIf="!loading; else load_state"
        >
            <h3 class="text-xl mb-2 w-full">
                {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
            </h3>
            <div class="w-full">
                {{ 'APP.VISITOR_KIOSK.CHECKOUT_MSG' | translate }}
            </div>
            <div class="flex items-center justify-end w-full">
                <button btn matRipple class="w-32" (click)="checkout()">
                    {{
                        (beverage
                            ? 'APP.VISITOR_KIOSK.SAVE'
                            : 'APP.VISITOR_KIOSK.CONTINUE'
                        ) | translate
                    }}
                </button>
            </div>
            <a
                icon
                matRipple
                class="absolute top-2 right-2"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
        <ng-template #load_state>
            <div
                class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center justify-center w-[28rem] h-[20rem] p-8 space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_LOADING' | translate }}
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class CheckoutComponent {
    public loading = false;

    constructor(
        private _state: CheckinStateService,
        private _router: Router,
    ) {}

    public async updateGuest() {
        this.loading = true;
        const result = await this._state
            .checkinGuest(false)
            .then(() => true)
            .catch(() => false);
        this.loading = false;
        if (!result) return;
        this._router.navigate(['/welcome']);
        notifySuccess(i18n('APP.VISITOR_KIOSK.CHECKOUT_SUCCESS'));
    }
}
