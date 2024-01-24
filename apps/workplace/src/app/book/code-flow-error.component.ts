import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';

const VALID_TYPES = ['not_started', 'wrong_resource', 'other'];

@Component({
    selector: 'code-flow-success',
    template: `
        <div class="absolute inset-0 bg-base-100 flex flex-col z-50">
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'WPA.RESOURCE_CHECKED_IN_FAILED' | translate }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-64" />
                </div>
                <p class="text-center max-w-[32rem]" [ngSwitch]="type">
                    <ng-container *ngSwitchCase="'not_started'">
                        Booking has not started yet. Please try again once the
                        booking has commenced.
                    </ng-container>
                    <ng-container *ngSwitchCase="'wrong_resource'">
                        You have booking with a difference resource.
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        You do not have a booking. Would you like to book the
                        set resource?
                    </ng-container>
                </p>
            </main>
            <footer
                class="p-2 w-full border-t border-base-200 mt-4 flex items-center justify-center space-x-2"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/book', 'code']"
                    [queryParams]="{ asset_id: asset_id }"
                    *ngIf="type === 'not_started'"
                >
                    {{ 'WPA.TRY_AGAIN' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/book', 'new-desk']"
                    [queryParams]="{ asset_id: asset_id }"
                    *ngIf="type === 'no_booking'"
                >
                    {{ 'WPA.BOOK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem] inverse"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
})
export class CodeFlowErrorComponent extends AsyncHandler {
    public type = 'other';
    public asset = null;
    public asset_id = '';

    constructor(
        private _route: ActivatedRoute,
        private _state: BookingFormService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.type = params.get('type') as any;
                this.asset_id = params.get('asset_id') as any;
            })
        );
    }
}
