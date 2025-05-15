import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { i18n, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'app-checkout',
    template: `
        <div
            class="relative flex w-[28rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            *ngIf="!loading; else load_state"
        >
            <h3 class="mb-2 w-full text-xl">
                {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
            </h3>
            <div class="mb-4 mt-2 w-full">
                {{ 'APP.VISITOR_KIOSK.CHECKOUT_MSG' | translate }}
            </div>
            <div class="flex w-full items-center justify-end">
                <button btn matRipple class="w-32" (click)="checkout()">
                    {{ 'COMMON.CHECK_OUT' | translate }}
                </button>
            </div>
            <a
                icon
                matRipple
                class="absolute right-2 top-2"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <ng-template #load_state>
            <div
                class="relative flex h-[20rem] w-[28rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 p-8 shadow"
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
    standalone: false,
})
export class CheckoutComponent implements OnInit {
    public loading = false;

    constructor(
        private _state: CheckinStateService,
        private _router: Router,
        private _org: OrganisationService,
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const event = await this._state.event.pipe(first()).toPromise();
        if (!event) this._router.navigate(['/checkin']);
    }

    public async checkout() {
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
