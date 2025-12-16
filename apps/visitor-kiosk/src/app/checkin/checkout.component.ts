import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { OrganisationService, i18n, notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { first } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'app-checkout',
    template: `
        @if (!loading) {
            <div
                class="bg-base-100 relative flex w-md flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
                </h3>
                <div class="mt-2 mb-4 w-full">
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
                    class="absolute top-2 right-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_LOADING' | translate }}
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    imports: [
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        RouterModule,
    ],
})
export class CheckoutComponent implements OnInit {
    private _state = inject(CheckinStateService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    public loading = false;

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
